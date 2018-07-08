# blockhub-web-client

> BlockHub Web Client

## Build Setup

Clone these repos:

`https://github.com/hyperbridge/blockhub-web-client`

`https://github.com/hyperbridge/marketplace-protocol`


Install NVM: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
Install Node 8.11.1: `nvm install 8.11.1`

Make sure you're running Node 8.11.1

In `blockhub-web-client`, run `npm install` then `npm link ../marketplace-protocol` then npm start

It should open `http://localhost:8000` with the web app


```bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm start

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## All Commands

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