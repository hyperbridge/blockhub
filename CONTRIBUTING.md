# Contributing
_(feel free to ask questions if you struggle anything trying this)_


## Choosing a Branch

Typically you want to send your PRs against `master` branch. Other branches such `v3`, `v4`, etc. are used for tracking previous major versions  and typically shouldn't be touched.

## Installation / Preparation

Please see [README](README.md)

## Development

Project structure:

* `src/` ES6 source code
* `src/contracts/` Solidity (Ethereum) contract code
* `src/db/` Data initially available to client
* `src/framework/` Framework code
* `src/modules/` Vue.js module code
* `src/router/` Vue.js router code
* `src/store/` Vue.js store code
* `src/ui/` Vue.js UI layouts, screens and component
* `src/util/` Util - basically helper code
* `build` Build configuration files
* `dist/` ES5 generated code, shouldn't be touched directly
* `static/` Static assets


Before submitting a PR you have to run `npm run build` to transpile scripts from `src/` to `dist/`. Also make sure to run `npm test` before you perform any changes, to not break other things.

If you are adding a new feature, make sure to write tests for it

## Thank you!