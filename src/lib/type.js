var SemanticReleaseError = require('@semantic-release/error')
const debug = require('debug')('semantic-action')

module.exports = function (config, cb) {
  var plugins = config.plugins
  var lastRelease = config.lastRelease

  plugins.analyzeCommits(config, function (err, type) {
    if (err) return cb(err)

    if (!type) {
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
