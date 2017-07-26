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

## Examples

* [deploying static site](https://github.com/bahmutov/test-semantic-deploy)

[semantic-release]: https://github.com/semantic-release/semantic-release

[npm-icon]: https://nodei.co/npm/semantic-action.svg?downloads=true
[npm-url]: https://npmjs.org/package/semantic-action
[nut-badge]: https://img.shields.io/badge/next--update--travis-ok-green.svg
[nut-readme]: https://github.com/bahmutov/next-update-travis#readme
