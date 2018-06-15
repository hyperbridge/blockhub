import * as ChaosMonkey from '../chaos-monkey'
import * as Ethereum from '../ethereum'

declare let require: any
declare let window: any

const Peer = require('peerjs')
const LifeRaft = require('liferaft')
const md5 = require('js-md5')

const config = {
    RAFT_ENABLED: true,
    ETHEREUM_ENABLED: true,
    DATA_RELAYER_ENABLED: true,
    CHAOS_MONKEY_ENABLED: true,
    CHAOS_MONKEY_STRENGTH: null,
    DARKLAUNCH: {
        NODE_OPERATORS: false
    }
}

const local = {
    raft: null,
    peer: null,
    connectedPeers: {},
    connectingPeers: {},
    peerId: null,
    requests: {},
    pendingData: '',
    peerHost: 'localhost',//'blockhub-peer-server.herokuapp.com',//'0.peerjs.com',
    peerPort: 9000,//80,//9000,
    peerKey: 'nodeOperator',
}


export const ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const getPeer = async (peerId) => {
    const peer = local.connectedPeers[peerId]

    if (!peer.open) {
        await peerConnect(peerId)

        return new Promise((resolve) => {
            resolve(peer)
        })
    }

    Promise.resolve(peer)
}

export const sendCommand = async (key: String, data: any = {}, peer: any = null, responseId: String = null, cb: Function = null) => {
    const cmd = {
        key: key,
        responseId: responseId,
        requestId: ID(),
        data: data
    }

    console.log('[PeerService] Sending command', cmd)

    if (cb) {
        local.requests[cmd.requestId] = cb
    }

    if (!peer) {
        const peers = Object.keys(local.connectedPeers)
        
        peer = await getPeer(peers[0])
    }

    if (!peer) {
        console.warn('[PeerService] Not connected to peer. This shouldnt happen.')
    }

    peer.send(JSON.stringify(cmd))
}

export const pageContentValidationRequest = async (path, content, peer) => {
    const hashedContent = md5(content)

    const data = {
        path: path
    }

    await sendCommand('pageContentValidationRequest', data, peer, null, (data) => {
        console.log('Page content validation response', data.hash)

        if (data.hash === hashedContent) {
            console.log('Successful validation')
        } else {
            console.log('Failed validation')
        }
    })

    if (config.RAFT_ENABLED) {
        const packet = local.raft.packet('vote', data)

        local.raft.message(LifeRaft.FOLLOWER, packet, () => {
            console.log('[PeerService] Vote request sent', data)
        })
    }
}

export const pageContentDataRequest = async (path, params) => {
    const data = {
        path: path
    }

    const peers = Object.keys(local.connectedPeers)
    const peer = local.connectedPeers[peers[0]]

    await sendCommand('pageContentDataRequest', data, null, null, (data) => {
        console.log('Page content data response', data.content)

        const peers = Object.keys(local.connectedPeers)
        const dataRelayer = local.connectedPeers[peers[0]]

        pageContentValidationRequest('/', data.content, dataRelayer)
    })
}

export const addressBalanceRequest = async (address): Promise<any> => {
    if (config.ETHEREUM_ENABLED && config.DATA_RELAYER_ENABLED && Ethereum.isConnected()) {
        const balance = await Ethereum.getUserBalance()

        const data = {
            balance
        }

        return Promise.resolve(data)
    } else {
        return new Promise(async (resolve) => {
            const data = {
                address
            }

            await sendCommand('addressBalanceRequest', data, null, null, (data) => {
                resolve(data)
            })
        })
    }
}

export const runCommand = async (cmd, meta = null) => {
    console.log('[PeerService] Running command', cmd.key)

    if (cmd.responseId) {
        if (local.requests[cmd.responseId]) {
            console.log('[PeerService] Running response callback', cmd.responseId)

            local.requests[cmd.responseId](cmd.data)

            delete local.requests[cmd.responseId]
        }

        return
    }

    if (cmd.key === 'pageContentValidationRequest') {
        const data = {
            hash: md5(document.getElementById('main_navbar').innerHTML)
        }

        if (config.CHAOS_MONKEY_ENABLED && ChaosMonkey.random()) {
            data.hash = 'chaos'
        }

        await sendCommand('pageContentValidationResponse', data, meta.client, cmd.requestId)
    } else if (cmd.key === 'pageContentDataRequest') {
        const data = {
            content: document.getElementById('main_navbar').innerHTML
        }

        await sendCommand('pageContentDataResponse', data, meta.client, cmd.requestId)
    } else if (cmd.key === 'raft') {
        local.raft.emit('data', cmd.data, async (data) => {
            console.log('[PeerService] Packet reply from ' + local.raft.address, data);

            await sendCommand('raft', data, meta.client, cmd.requestId)
        })
    } else if (cmd.key === 'addressBalanceRequest') {
        const data = await addressBalanceRequest(cmd.address)

        await sendCommand('addressBalanceResponse', data, meta.client, cmd.requestId)
    }
}

export const initClient = (client) => {
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

        delete local.connectedPeers[client.peer]

        local.raft.leave(client.peer)
    })

    client.on('error', function (err) {
        console.log('[PeerService] Error', err)
    })
}

export const peerConnect = async (peerId) => {
    console.log('[PeerService] Connecting to', peerId)

    local.connectingPeers[peerId] = true

    return new Promise((resolve) => {
        const client = local.peer.connect(peerId, {
            label: 'chat',
            serialization: 'none',
            metadata: { message: 'Lets connect' }
        })

        client.on('open', () => {
            console.log('[PeerService] Connected to', peerId)

            client.open = true

            delete local.connectingPeers[peerId]

            local.connectedPeers[peerId] = client

            if (config.RAFT_ENABLED) {
                local.raft.join(peerId, async (cmd, cb) => {
                    if (!cmd.key) // If no key, then this is a native raft command, so lets wrap it
                        cmd = { key: 'raft', data: cmd }

                    await sendCommand(cmd.key, cmd.data, client, null, cb)
                })
            }

            resolve(client)
        })

        initClient(client)
    })
}

export const fetchPeers = async () => {
    return new Promise((resolve) => {
        const req = new XMLHttpRequest()

        req.open('GET', 'http://' + local.peerHost + ':' + local.peerPort + '/' + local.peerKey + '/peers')

        req.onload = () => {
            const result = JSON.parse(req.response)

            console.log('[PeerService] Peers found', result)

            resolve(result)
        }

        req.send()
    })
}

export const monitorPeers = () => {
    const check = async () => {
        const peers = await fetchPeers()

        for (let i in peers) {
            const peerId = peers[i]

            if (peerId == local.peerId) continue
            if (local.connectedPeers[peerId]) continue
            if (local.connectingPeers[peerId]) continue
            
            await peerConnect(peerId)
        }

        setTimeout(check, 2000)
    }

    check()
}

export const init = () => {
    console.log('[PeerService] Initializing')

    ChaosMonkey.init(config.CHAOS_MONKEY_STRENGTH)

    if (ChaosMonkey.random()) {
        config.DATA_RELAYER_ENABLED = false
    }

    local.peer = new Peer({
        host: local.peerHost,
        port: local.peerPort,
        secure: false,
        key: local.peerKey,
        debug: 3,
        allow_discovery: true,
        logFunction: function () {
            var copy = Array.prototype.slice.call(arguments).join(' ')
            console.log(copy)

            if (copy == 'ERROR Error: Lost connection to server.') {
                local.peer.disconnect()
                setTimeout(() => local.peer.reconnect(), 200)
            }
        }
    })

    local.peer.on('open', (id) => {
        console.log('[PeerService] Connected', id)

        local.peerId = id

        local.raft = new LifeRaft(local.peerId, {
            'election min': 2000,
            'election max': 4000,
            'heartbeat min': 1000,
            'heartbeat max': 2000,
            'socket': null
        })

        monitorPeers()
    })

    local.peer.on('call', (call) => {
        console.log('[PeerService] Received call', call)
    })

    local.peer.on('data', (data) => {
        console.log('[PeerService] Received data', data)

        if (data[data.length - 1] === '}') {
            const cmd = JSON.parse(local.pendingData + data)

            local.pendingData = ''

            runCommand(cmd)
        } else {
            local.pendingData += data
        }
    })

    local.peer.on('connection', (client) => {
        console.log('[PeerService] New connection', client)

        local.connectedPeers[client.peer] = client

        initClient(client)
    })

    local.peer.on('error', (err) => {
        console.log('[PeerService] Error', err)
    })

    window.config = config
    window.peerConnect = peerConnect
    window.pageContentDataRequest = pageContentDataRequest
    window.addressBalanceRequest = addressBalanceRequest

    // Make sure things clean up properly.
    window.onunload = window.onbeforeunload = function (e) {
        if (!!local.peer && !local.peer.destroyed) {
            local.peer.destroy()
        }
    }

    console.log('[PeerService] Configuration set', config)

}
