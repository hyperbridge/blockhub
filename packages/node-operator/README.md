<div align="center">
  <br>

  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="400" alt="logo"></a>

  <br>

  [![Gitter chat](https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg)](https://gitter.im/Hyperbridge/Lobby) [![license](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/hyperbridge/blockhub-web-client/blob/master/LICENSE.md)

  <h1><code>Node Operator</code> for BlockHub</h1>
</div>

<br>

BlockHub Node Operator assists BlockHub clients with the following:

* Brokering p2p connections between clients. Data is not proxied/passed through the operator.
* Distributing IPFS downloads.
* Serving data for clients to hydrate screen information (such as a product page).

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

### Run Server

Install the library:

```bash
$> yarn add blockhub-node-operator
```

Run the server:

```bash
$> blockhub-node-operator --port 9000 --key nodeOperator
```

Or, create a custom server:

```js
let BlockHubServer = require('blockhub-node-operator').BlockHubServer
let server = BlockHubServer({ port: 9000, path: '/myapp' })
```

Connecting to the server from frontend:

```html
<script>
    let peer = new Peer('someid', { host: 'localhost', port: 9000, path: '/myapp' })
</script>
```

Using HTTPS: Simply pass in PEM-encoded certificate and key.

```js
let fs = require('fs')
let BlockHubServer = require('peer').BlockHubServer

let server = BlockHubServer({
  port: 9000,
  ssl: {
    key: fs.readFileSync('/path/to/your/ssl/key/here.key'),
    cert: fs.readFileSync('/path/to/your/ssl/certificate/here.crt')
  }
})
```

#### Running BlockHubServer behind a reverse proxy

Make sure to set the `proxied` option, otherwise IP based limiting will fail.
The option is passed verbatim to the
[expressjs `trust proxy` setting](http://expressjs.com/4x/api.html#app-settings)
if it is truthy.

```js
let BlockHubServer = require('blockhub-node-operator').BlockHubServer
let server = BlockHubServer({ port: 9000, path: '/myapp', proxied: true })
```

### Combining with existing express app

```js
let express = require('express')
let app = express()
let ExpressServer = require('blockhub-node-operator').ExpressServer

app.get('/', function(req, res, next) { res.send('Hello world!') })

// =======

let server = app.listen(9000)

let options = {
    debug: true
}

let expressServer = ExpressServer(server, options)

app.use('/api', expressServer)

// == OR ==

let server = require('http').createServer(app)
let expressServer = ExpressServer(server, options)

app.use('/nodeOperator', expressServer)

server.listen(9000)

// ========
```

### Events

The `'connection'` event is emitted when a peer connects to the server.

```js
expressServer.on('connection', function(id) { ... })
```

The `'disconnect'` event is emitted when a peer disconnects from the server or
when the peer can no longer be reached.

```js
expressServer.on('disconnect', function(id) { ... })
```

## Problems?

Discuss Node Operator on our Gitter:
https://gitter.im/Hyperbridge/Lobby

Please post any bugs as a Github issue.
