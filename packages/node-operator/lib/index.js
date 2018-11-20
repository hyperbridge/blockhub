var express = require('express')
var proto = require('./server')
var util = require('./util')
var http = require('http')
var https = require('https')

function ExpressServer(server, options) {
  var app = express()

  util.extend(app, proto)

  options = app._options = util.extend({}, {
    debug: false,
    timeout: 5000,
    key: 'nodeOperator',
    ip_limit: 5000,
    concurrent_limit: 5000,
    allow_discovery: true,
    proxied: false
  }, options)

  // Connected clients
  app._clients = {}

  // Messages waiting for another peer.
  app._outstanding = {}

  // Mark concurrent users per ip
  app._ips = {}

  if (options.proxied) {
    app.set('trust proxy', options.proxied)
  }

  app.on('mount', function() {
    if (!server) {
      throw new Error('Server is not passed to constructor - '+
        'can\'t start BlockHubServer')
    }

    // Initialize HTTP routes. This is only used for the first few milliseconds
    // before a socket is opened for a Peer.
    app._initializeHTTP()
    app._setCleanupIntervals()
    app._initializeWSS(server)
  })

  return app
}

function BlockHubServer(options, callback) {
  var app = express()

  options = options || {}
  var path = options.path || '/'
  var port = options.port || 80

  delete options.path

  if (path[0] !== '/') {
    path = '/' + path
  }

  if (path[path.length - 1] !== '/') {
    path += '/'
  }

  var server
  if (options.ssl) {
    if (options.ssl.certificate) {
      // Preserve compatibility with 0.2.7 API
      options.ssl.cert = options.ssl.certificate
      delete options.ssl.certificate
    }

    server = https.createServer(options.ssl, app)
    delete options.ssl
  } else {
    server = http.createServer(app)
  }

  var nodeOperator = ExpressServer(server, options)
  app.use(path, nodeOperator)

  if (callback) {
    server.listen(port, function() {
      callback(server)
    })
  } else {
    server.listen(port)
  }

  return nodeOperator
}

exports = module.exports = {
  ExpressServer: ExpressServer,
  BlockHubServer: BlockHubServer
}
