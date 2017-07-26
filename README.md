# semantic-action

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
