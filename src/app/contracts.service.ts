import { Injectable } from '@angular/core'

const Peer = require('peerjs')
const Web3 = require('web3')
const LifeRaft = require('liferaft')
const md5 = require('js-md5')

declare let require: any
declare let window: any

const config = {
  RAFT_ENABLED: true,
  ETHEREUM_ENABLED: false,
  CHAOS_MONKEY_ENABLED: true,
  CHAOS_MONKEY_STRENGTH: null,
  DARKLAUNCH: {
    NODE_OPERATORS: false
  }
}

const ID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

const InitChaosMonkey = function() {
  if (!config.CHAOS_MONKEY_STRENGTH) {
    config.CHAOS_MONKEY_STRENGTH = Math.floor(Math.random() * 10)
  }

}

const Chaosify = function() {
  const spec = {
    0: (10 - config.CHAOS_MONKEY_STRENGTH) / 100,
    1: config.CHAOS_MONKEY_STRENGTH / 100
  }

  let i, sum = 0, r = Math.random()
  for (i in spec) {
    sum += spec[i];
    if (r <= sum) return i ? true : false
  }
}

InitChaosMonkey()

console.log('[BlockHub] Configuration set', config)


let tokenAbi = require('./contracts/tokenContract.json')

let raft = null
let peer = null

class PeerService {
  peer = null
  connectedPeers = {}
  peerId = null
  requests = {}
  pendingData = ''

  constructor() {
    let peer = this.peer = new Peer({
      host: 'blockhub-peer-server.herokuapp.com',//'0.peerjs.com',
      port: 80,//9000,
      secure: false,
      debug: 3,
      allow_discovery: true,
      logFunction: function () {
        var copy = Array.prototype.slice.call(arguments).join(' ')
        console.log(copy)

        if (copy == 'ERROR Error: Lost connection to server.') {
          peer.disconnect()
          setTimeout(() => peer.reconnect(), 200)
        }
      }
    })

    this.peer.on('open', (id) => {
      console.log('[PeerService] Connected', id)

      raft = new LifeRaft(id, {
        'election min': 2000,
        'election max': 4000,
        'heartbeat min': 1000,
        'heartbeat max': 2000,
        'socket': null
      })
    })

    const sendCommand = (peer, key, data, responseId = null, cb = null) => {
      const cmd = {
        key: key,
        responseId: responseId,
        requestId: ID(),
        data: data
      }

      console.log('[PeerService] Sending command', cmd)

      if (cb) {
        this.requests[cmd.requestId] = cb
      }

      peer.send(JSON.stringify(cmd))
    }

    const pageContentValidationRequest = (path, content, peer) => {
      const hashedContent = md5(content)

      const data = {
        path: path
      }

      sendCommand(peer, 'pageContentValidationRequest', data, null, (data) => {
        console.log('Page content validation response', data.hash)

        if (data.hash === hashedContent) {
          console.log('Successful validation')
        } else {
          console.log('Failed validation')
        }
      })

      if (config.RAFT_ENABLED) {
        const packet = raft.packet('vote', data)

        raft.message(LifeRaft.FOLLOWER, packet, () => {
          console.log('[Raft] Vote request sent', data)
        })
      }
    }

    const pageContentDataRequest = (path, params) => {
      const data = {
        path: path
      }

      const peers = Object.keys(this.connectedPeers)
      const peer = this.connectedPeers[peers[0]]

      sendCommand(peer, 'pageContentDataRequest', data, null, (data) => {
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
        const data = {
          hash: md5(document.getElementById('main_navbar').innerHTML)
        }

        if (config.CHAOS_MONKEY_ENABLED && Chaosify()) {
          data.hash = 'chaos'
        }

        sendCommand(meta.client, 'pageContentValidationResponse', data, cmd.requestId)
      } else if (cmd.key === 'pageContentDataRequest') {
        const data = {
          content: document.getElementById('main_navbar').innerHTML
        }

        sendCommand(meta.client, 'pageContentDataResponse', data, cmd.requestId)
      } else if (cmd.key === 'raft') {
        raft.emit('data', cmd.data, (data) => {
          console.log('[Raft] Packet reply from ' + raft.address, data);

          sendCommand(meta.client, 'raft', data, cmd.requestId)
        });
      }
    }
    
    const initClient = (client) => {
      let pendingData = ''

      client.on('call', function (call) {
        console.log('[PeerService] Received call', call)
      })

      client.on('data', function (data) {
        console.log('[PeerService] Received data from', client.peer, data)

        if (data[data.length - 1] === '}') {
          const cmd = JSON.parse(pendingData + data)

          pendingData = ''

          runCommand(cmd, { client })
        } else {
          pendingData += data
        }
      })

      client.on('close', function () {
        console.log('[PeerService] Peer has left', client.peer)

        delete this.connectedPeers[client.peer]

        raft.leave(client.peer)
      })

      client.on('error', function (err) {
        console.log('[PeerService] Error', err)
      })
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

    this.peer.on('connection', (client) => {
      console.log('[PeerService] New connection', client)

      this.connectedPeers[client.peer] = client

      initClient(client)
    })

    this.peer.on('error', (err) => {
      console.log('[PeerService] Error', err)
    })

    const peerConnect = (peerId) => {
      var client = this.peer.connect(peerId, {
        label: 'chat',
        serialization: 'none',
        metadata: { message: 'Lets connect' }
      })

      client.on('open', () => {
        console.log('[PeerService] Connected to', peerId)

        client.open = true

        this.connectedPeers[peerId] = client

        if (config.RAFT_ENABLED) {
          raft.join(peerId, (cmd, cb) => {
            if (!cmd.key) // If no key, then this is a native raft command, so lets wrap it
              cmd = { key: 'raft', data: cmd }

            sendCommand(client, cmd.key, cmd.data, null, cb)
          })
        }
      })

      initClient(client)
    }

    window.peerConnect = peerConnect

    window.pageContentDataRequest = pageContentDataRequest

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