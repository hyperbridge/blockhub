<div align="center">
  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="220" alt="logo"></a>

  <h1><code>blockhub-web-client</code> for BlockHub</h1>
</div>
<br>

This is the main web client for BlockHub, built primarily with Web3.js and Vue.js.

## Install

Install Node Package Manager (NVM): 

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Install Node 8.11.1: 

```bash
$ nvm install 8.11.1
```

Then, clone these repos:

```bash
$ git clone https://github.com/hyperbridge/blockhub-web-client
$ git clone https://github.com/hyperbridge/marketplace-protocol
```


## Setup

Make sure you're running Node 8.11.1

In `blockhub-web-client`, run `npm install` then `npm link ../marketplace-protocol` then `npm start`

It should open `http://localhost:8000/` with the web app


```bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm start

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Building

Use `npm run build` to build production. Currently it uses `/docs` directory, as that makes Github-served pages easier (`beta.blockhub.gg` points to `/docs`)

## Testing modes

Check [PR #4](https://github.com/hyperbridge/blockhub-web-client/pull/4) for instructions on using different testing modes and how data-driven p2p views work.

## Articles

* [TBD](docs/tbd.md)

## Contribution

See [CONTRIBUTING](CONTRIBUTING.md)

## License

[Apache License 2.0](LICENSE.md)