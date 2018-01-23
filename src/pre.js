var _ = require('lodash')
var auto = require('run-auto')
var semver = require('semver')
const debug = require('debug')('semantic-action')

var getCommits = require('./lib/commits')
var getType = require('./lib/type')

debug('getCommits', getCommits)
debug('getType =', getType)

module.exports = function (config, cb) {
  debug('pre config', config)
  var plugins = config.plugins
  debug('plugins', plugins)

  auto(
    {
      lastRelease: plugins.getLastRelease.bind(null, config),
      commits: [
        'lastRelease',
        function (results, cb) {
          debug('lastRelease results')
          debug(results)
          getCommits(
            _.assign(
              {
                lastRelease: results.lastRelease
              },
              config
            ),
            cb
          )
        }
      ],
      type: [
        'commits',
        'lastRelease',
        function (results, cb) {
          debug('for getType, results are')
          debug(results)
          getType(
            _.assign(
              {
                commits: results.commits,
                lastRelease: results.lastRelease
              },
              config
            ),
            cb
          )
        }
      ]
    },
    function (err, results) {
      if (err) {
        debug('error', err)
        return cb(err)
      }

      debug('results', results)

      var nextRelease = {
        type: results.type,
        version:
          results.type === 'initial'
            ? '1.0.0'
            : semver.inc(results.lastRelease.version, results.type)
      }

      const options = _.assign(
        {
          commits: results.commits,
          lastRelease: results.lastRelease,
          nextRelease: nextRelease
        },
        config
      )
      debug('verifyRelease important options')
      debug(_.pick(options, ['commits', 'lastRelease', 'nextRelease']))

      plugins.verifyRelease(options, function (err) {
        if (err) return cb(err)
        cb(null, nextRelease)
      })
    }
  )
}
