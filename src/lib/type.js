var SemanticReleaseError = require('@semantic-release/error')
const debug = require('debug')('semantic-action')

module.exports = function (config, cb) {
  var plugins = config.plugins
  var lastRelease = config.lastRelease

  debug('analyze commits since last release', lastRelease)
  debug('config', config)

  plugins.analyzeCommits(config, function (err, type) {
    if (err) {
      debug('analyze commits error', err.message)
      return cb(err)
    }

    if (!type) {
      debug('could not determine release type since', lastRelease)
      return cb(new SemanticReleaseError(
        'There are no relevant changes, so no new version is released.',
        'ENOCHANGE'
      ))
    }

    debug('last release was', lastRelease.version)
    debug('from lastRelease object', lastRelease)
    debug('analyzeCommits recommends version bump "%s"', type)

    if (!lastRelease.version) return cb(null, 'initial')

    cb(null, type)
  })
}
