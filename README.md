<div align="center">
  <br>

  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="400" alt="logo"></a>

  <br>

  [![Gitter chat](https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg)](https://gitter.im/Hyperbridge/Lobby) [![license](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/hyperbridge/blockhub-web-client/blob/master/LICENSE.md)

  <h1><code>Web Client</code> for BlockHub</h1>
</div>

<br>

This is the main web client for BlockHub, built primarily with Web3.js and Vue.js.

## Quick Links

- 🌐 [Site - Production](https://blockhub.gg/)
- 📺 [Site - Preview](https://preview.blockhub.gg/)
- 📺 [Site - Beta](https://beta.blockhub.gg/)
- 📺 [Site - Staging](https://staging.blockhub.gg/)
- 📖 [Docs](http://docs.hyperbridge.org/blockhub)
- 📓 [EIPs](https://github.com/hyperbridge/EIPs)
- 💻 [Web Client](https://github.com/hyperbridge/blockhub-web-client)
- 💻 [Desktop Client](https://github.com/hyperbridge/blockhub-desktop-client)
- 🛡 [Node Operator](https://github.com/hyperbridge/blockhub-node-operator)
- 🔗 [Protocol](https://github.com/hyperbridge/protocol)

## Install

Install Node Package Manager (NVM): 

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Install Node 8.11.1: 

```bash
nvm install 8.11.1
```

If you get `nvm: command not found`, simply close your current terminal, open a new terminal, and try again. Please see the [NVM readme](https://github.com/creationix/nvm) if you have any issues.


```bash
# Clone this repository
git clone https://github.com/hyperbridge/blockhub-desktop-client
# Go into the main repo
cd blockhub-web-client
# Install deps
npm install
# Run the local web server
npm start
# Build the static files
npm run build
```

It should open `http://localhost:8000/` with the web app

If you encounter an issue with `node-sass`, run this command: `npm rebuild node-sass`. Also try deleting your `node_modules` folder, and running `npm install` again. This usually occurs when you've installed with a different version of NPM, so be careful!

Make sure you're running Node 8.11.1 and you have Python installed. `node-gyp` can't use Python3.5.x, so please use another version.

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

## Problems?

Discuss Web Client on our Gitter:
https://gitter.im/Hyperbridge/Lobby

Please post any bugs as Github issues.
