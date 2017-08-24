# semantic-action

[![NPM][npm-icon]][npm-url]

[![Build Status](https://travis-ci.org/bahmutov/semantic-action.svg?branch=master)](https://travis-ci.org/bahmutov/semantic-action)
[![next-update-travis badge][nut-badge]][nut-readme]

This is a fork of [semantic-release][semantic-release] that allows you to

> run any action (not just `npm publish`) based on commits after *any event*.

You could do site deploy, DB migration, GitHub tagging - whatever you want
by specifying how to find out what was the previous version, how to find
commits, how to analyze them, and how to perform an action if there is
a semantic change.

I really appreciate the work `semantic-release` team has put into their tool,
and love their plugin model. This fork will extend the system, but will not
be merged.

## Options

Change tag prefix from default 'v' to something else, like `release-`

```json
{
  "release": {
    "tagPrefix": "release-"
  }
}
```

## Debug

Run semantic action with environment variable `DEBUG=semantic-action ...`

## Plugins

I am trying to keep this tool compatible with `semantic-release` plugins.
Additional useful plugins are

* [url-to-sha](https://github.com/bahmutov/url-to-sha)

## Examples

* [deploying static site](https://github.com/bahmutov/test-semantic-deploy)
* [deploying to Zeit.co Now](https://github.com/bahmutov/test-semantic-deploy-with-now)

[semantic-release]: https://github.com/semantic-release/semantic-release

[npm-icon]: https://nodei.co/npm/semantic-action.svg?downloads=true
[npm-url]: https://npmjs.org/package/semantic-action
[nut-badge]: https://img.shields.io/badge/next--update--travis-weekly-green.svg
[nut-readme]: https://github.com/bahmutov/next-update-travis#readme
