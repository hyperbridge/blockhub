import { Injectable } from '@angular/core'

const Peer = require('peerjs')
const Web3 = require('web3')
const LifeRaft = require('liferaft')
const md5 = require('js-md5')

declare let require: any
declare let window: any

const config = {
  RAFT_ENABLED: false
}

const ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

let tokenAbi = require('./contracts/tokenContract.json')

let raft = null
let peer = null

// PEER JS

class PeerService {
  peer = null
  connectedPeers = {}
  peerId = null
  peerCallbacks = {}
  requests = {}
  pendingData = ''

  constructor() {

    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    let peer = this.peer = new Peer({
      host: 'blockhub-peer-server.herokuapp.com',//'0.peerjs.com',
      port: 80,//9000,
      // Set API key for cloud server (you don't need this if you're running your
      // own.
      secure: false,
      // Set highest debug level (log everything!).
      debug: 3,
      allow_discovery: true,
      // Set a logging function:
      logFunction: function () {
        var copy = Array.prototype.slice.call(arguments).join(' ')
        console.log(copy)

        if (copy == 'ERROR Error: Lost connection to server.') {
          peer.disconnect()
          peer.reconnect()
        }
      }
    })

    // Show this peer's ID.
    this.peer.on('open', (id) => {
      console.log('[PeerService] Connected', id)

      raft = new LifeRaft(id, {
        'election min': '50 millisecond',
        'election max': '1 second',
        'socket': null
      })

      //window.$('#pid').text(id)
      // this.peer.listAllPeers((peers) => {
      //   console.log(peers)
      // })
      //this.peerId = id

      //this.peer.send('hi all')
      // listAllPeers
    })

    const sendCommand = (peer, cmd, cb = null) => {
      console.log('[PeerService] Sending response', cmd)


      if (cb) {
        this.requests[cmd.requestId] = cb
      }

      peer.send(JSON.stringify(cmd))
    }

    const pageContentValidationRequest = (path, content, peer) => {
      const hashedContent = md5(content)

      const cmd = {
        key: 'pageContentValidationRequest',
        requestId: ID(),
        path: path
      }

      sendCommand(peer, cmd, (data) => {
        console.log('Page content validation response', data.hash)

        if (data.hash === hashedContent) {
          console.log('Successful validation')
        } else {
          console.log('Failed validation')
        }
      })
      // const packet = raft.packet('vote', cmd)

      // raft.message(LifeRaft.FOLLOWER, packet, () => {
      //   console.log('[Raft] Vote request sent', cmd)
      // })
    }

    const pageContentDataRequest = (path, peer) => {
      const cmd = {
        key: 'pageContentDataRequest',
        requestId: ID(),
        path: path
      }

      sendCommand(peer, cmd, (data) => {
        console.log('Page content data response', data.content)

        const peers = Object.keys(this.connectedPeers)
        const dataRelayer = this.connectedPeers[peers[0]]

        pageContentValidationRequest('/', data.content, dataRelayer)
      })
    }

    const runCommand = (cmd, meta = null) => {
      console.log('[PeerService] Running command', cmd.key)

      if (cmd.responseId) {
        if (this.requests[cmd.responseId]) {
          console.log('[PeerService] Running response callback', cmd.responseId)

          this.requests[cmd.responseId](cmd.data)

          delete this.requests[cmd.responseId]
        }

        return
      }

      if (cmd.key === 'pageContentValidationRequest') {
        const cmdRes = {
          key: 'pageContentValidationResponse',
          responseId: cmd.requestId,
          data: {
            hash: md5(document.getElementById('main_navbar').innerHTML)
          }
        }

        sendCommand(meta.client, cmdRes)
      } else if (cmd.key === 'pageContentDataRequest') {
        const cmdRes = {
          key: 'pageContentDataResponse',
          responseId: cmd.requestId,
          data: {
            content: document.getElementById('main_navbar').innerHTML
          }
        }

        sendCommand(meta.client, cmdRes)
      } else if (cmd.key === 'raft') {
        raft.emit('data', cmd.data, (data) => {
          console.log('[Raft] Packet reply from ' + raft.address, data);

          const cmdRes = {
            key: 'raft',
            responseId: cmd.requestId,
            data: data
          }

          sendCommand(meta.client, cmdRes)
        });
      }
    }

    this.peer.on('call', (call) => {
      console.log('[PeerService] Received call', call)
    })

    this.peer.on('data', (data) => {
      console.log('[PeerService] Received data', data)

      if (data[data.length-1] === '}') {
        const cmd = JSON.parse(this.pendingData + data)

        this.pendingData = ''

        runCommand(cmd)
      } else {
        this.pendingData += data
      }
    })



    // Await connections from others
    this.peer.on('connection', (c) => {
      console.log('[PeerService] New connection', c)

      this.connectedPeers[c.peer] = c

      var riftCallback = null

      let pendingData = ''

      c.on('call', function (call) {
        console.log('[PeerService] Received call', call)
        // Answer the call, providing our mediaStream
        //call.answer('sssss')
      })

      c.on('data', function (data) {
        console.log('[PeerService] Received data from', c.peer, data)

        if (data[data.length - 1] === '}') {
          const cmd = JSON.parse(pendingData + data)

          pendingData = ''

          runCommand(cmd, { client: c })
        } else {
          pendingData += data
        }
      })

      c.on('close', function () {
        alert(c.peer + ' has left the chat.')

        delete this.connectedPeers[c.peer]

        raft.leave(c.peer)
      })


      c.on('error', function (err) { alert(err) })
    })

    this.peer.on('error', (err) => {
      console.log('[PeerService] Error', err)
    })

    const peerConnect = (peerId) => {
      var pp = this.peer.connect(peerId, {
        label: 'chat',
        serialization: 'none',
        metadata: { message: 'Lets connect' }
      })

      let pendingData = ''

      pp.on('open', () => {
        console.log('[PeerService] Connected to', peerId)

        pp.open = true

        this.connectedPeers[peerId] = pp

        if (config.RAFT_ENABLED) {
          raft.join(peerId, (cmd, cb) => {
            if (!cmd.key) // If no key, then this is a native raft command, so lets wrap it
              cmd = { key: 'raft', requestId: ID(), data: cmd }

            console.log('[Rift] Sending command to peer', peerId, cmd)

            this.requests[cmd.requestId] = (data) => {
              console.log('[Raft] Request callback', data)

              cb(data)
            }

            sendCommand(pp, cmd)
          })
        }
      })

      pp.on('data', function (data) {
        console.log('[PeerService] Received data from', pp.peer, data)

        if (data[data.length - 1] === '}') {
          const cmd = JSON.parse(pendingData + data)

          pendingData = ''

          runCommand(cmd)
        } else {
          pendingData += data
        }
      })
    }

    window.peerConnect = peerConnect

    const getPageData = (pagePath, params) => {
      const peers = Object.keys(this.connectedPeers)
      const dataRelayer = this.connectedPeers[peers[0]]

      pageContentDataRequest('/', dataRelayer)
    }

    window.getPageData = getPageData




    // window.$(document).ready(function () {
    //   // Connect to a peer
    //   window.$('#connect').click(function () {
    //     var requestedPeer = window.$('#rid').val()
    //     if (!this.connectedPeers[requestedPeer]) {
    //       // Create 2 connections, one labelled chat and another labelled file.
    //       var c = this.peer.connect(requestedPeer, {
    //         label: 'chat',
    //         serialization: 'none',
    //         metadata: { message: 'hi i want to chat with you!' }
    //       })

    //       c.on('open', function () {
    //         connect(c)
    //       })

    //       c.on('error', function (err) { alert(err) })

    //       var f = this.peer.connect(requestedPeer, { label: 'file', reliable: true })

    //       f.on('open', function () {
    //         connect(f)
    //       })

    //       f.on('error', function (err) { alert(err) })
    //     }

    //     this.connectedPeers[requestedPeer] = 1
    //   })

    //   // Close a connection.
    //   window.$('#close').click(function () {
    //     eachActiveConnection(function (c) {
    //       c.close()
    //     })
    //   })

    //   // Send a chat message to all active connections.
    //   window.$('#send').submit(function (e) {
    //     e.preventDefault()

    //     // For each active connection, send the message.
    //     var msg = window.$('#text').val()

    //     eachActiveConnection(function (c, $c) {
    //       if (c.label === 'chat') {
    //         c.send(msg)
    //         $c.find('.messages').append('<div><span className="you">You: </span>' + msg + '</div>')
    //       }
    //     })

    //     window.$('#text').val('')
    //     window.$('#text').focus()
    //   })

      // // Goes through each active peer and calls FN on its connections.
      // function eachActiveConnection(fn) {
      //   var actives = window.$('.active')
      //   var checkedIds = {}
      //   actives.each(function () {
      //     var peerId = window.$(this).attr('id')
      //     if (!checkedIds[peerId]) {
      //       var conns = this.peer.connections[peerId]
      //       for (var i = 0, ii = conns.length i < ii i += 1) {
      //         var conn = conns[i]
      //         fn(conn, window.$(this))
      //       }
      //     }
      //     checkedIds[peerId] = 1
      //   })
      // }

      // // Show browser version
      // //window.$('#browsers').text(navigator.userAgent)
    //})

    // Make sure things clean up properly.
    window.onunload = window.onbeforeunload = function (e) {
      if (!!this.peer && !this.peer.destroyed) {
        this.peer.destroy()
      }
    }
  }

  async sendRequest(method, args, cb) {
    //console.log('[Raft] Sending request', method, args)


    // raft.quorum(5) // true
    // raft.quorum(2) // false

    // const dosomething = (fn) => {

    // }

    // raft.indefinitely((next) => {
    //   dosomething((err, res) => {
        
    //     return next(err, res)
    //   })
    // }, cb, 1000)
    // const cmd = { name: 'Jimi', surname: 'Hendrix' }
    // // const entry = await raft.log.saveCommand(cmd, raft.term)
    // // const appendPacket = await raft.appendPacket(entry)
    // raft.message(LifeRaft.FOLLOWER, cmd)

    // raft.on('commit', function (command) {
    //   console.log(command.name, command.surname)
    // })
  }

}

const peerService = new PeerService()

window.peerService = peerService

//////// LIFERAFT



///////

@Injectable()
export class ContractsService {
  private _account: string = null
  private _web3: any

  private _tokenContract: any
  private _tokenContractAddress: string = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      const provider = new window.web3.providers.HttpProvider("http://localhost:8545")
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(provider) //window.web3.currentProvider)

      // if (this._web3.version !== "1.0.0-beta.34") {
      //   alert('Please connect to the Rinkeby network')
      // }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      )
    }

    this._tokenContract = new this._web3.eth.Contract(tokenAbi.abi, this._tokenContractAddress) //this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress)
  }
  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.')
            return
          }

          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            )
            return
          }
          resolve(accs[0])
        })
      }) as string

      this._web3.eth.defaultAccount = this._account
    }

    return Promise.resolve(this._account)
  }

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount()

    return new Promise((resolve, reject) => {
      let _web3 = this._web3
      this._tokenContract.methods.balanceOf(account).call({ gas: 3000000 }, (err, result) => {
        if (err != null) {
          reject(err)
        }

        resolve(this._web3.utils.fromWei(result))
      })
    }) as Promise<number>
  }
}