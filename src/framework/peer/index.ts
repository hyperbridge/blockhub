import * as ChaosMonkey from '../chaos-monkey'

declare let require: any
declare let window: any

const Peer = require('peerjs')
const LifeRaft = require('liferaft')
const md5 = require('js-md5')

const config = {
    RAFT_ENABLED: true,
    ETHEREUM_ENABLED: false,
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
    peerId: null,
    requests: {},
    pendingData: '',
}


export const ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const sendCommand = (peer, key, data, responseId = null, cb = null) => {
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

    peer.send(JSON.stringify(cmd))
}

export const pageContentValidationRequest = (path, content, peer) => {
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
        const packet = local.raft.packet('vote', data)

        local.raft.message(LifeRaft.FOLLOWER, packet, () => {
            console.log('[Raft] Vote request sent', data)
        })
    }
}

export const pageContentDataRequest = (path, params) => {
    const data = {
        path: path
    }

    const peers = Object.keys(local.connectedPeers)
    const peer = local.connectedPeers[peers[0]]

    sendCommand(peer, 'pageContentDataRequest', data, null, (data) => {
        console.log('Page content data response', data.content)

        const peers = Object.keys(local.connectedPeers)
        const dataRelayer = local.connectedPeers[peers[0]]

        pageContentValidationRequest('/', data.content, dataRelayer)
    })
}

export const runCommand = (cmd, meta = null) => {
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

        sendCommand(meta.client, 'pageContentValidationResponse', data, cmd.requestId)
    } else if (cmd.key === 'pageContentDataRequest') {
        const data = {
            content: document.getElementById('main_navbar').innerHTML
        }

        sendCommand(meta.client, 'pageContentDataResponse', data, cmd.requestId)
    } else if (cmd.key === 'raft') {
        local.raft.emit('data', cmd.data, (data) => {
            console.log('[Raft] Packet reply from ' + local.raft.address, data);

            sendCommand(meta.client, 'raft', data, cmd.requestId)
        });
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

export const peerConnect = (peerId) => {
    var client = local.peer.connect(peerId, {
        label: 'chat',
        serialization: 'none',
        metadata: { message: 'Lets connect' }
    })

    client.on('open', () => {
        console.log('[PeerService] Connected to', peerId)

        client.open = true

        local.connectedPeers[peerId] = client

        if (config.RAFT_ENABLED) {
            local.raft.join(peerId, (cmd, cb) => {
                if (!cmd.key) // If no key, then this is a native raft command, so lets wrap it
                    cmd = { key: 'raft', data: cmd }

                sendCommand(client, cmd.key, cmd.data, null, cb)
            })
        }
    })

    initClient(client)
}


export const init = () => {
    console.log('[BlockHub] Configuration set', config)

    ChaosMonkey.init(config.CHAOS_MONKEY_STRENGTH)

    local.peer = new Peer({
        host: 'blockhub-peer-server.herokuapp.com',//'0.peerjs.com',
        port: 80,//9000,
        secure: false,
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

        local.raft = new LifeRaft(id, {
            'election min': 2000,
            'election max': 4000,
            'heartbeat min': 1000,
            'heartbeat max': 2000,
            'socket': null
        })
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

    window.peerConnect = peerConnect
    window.pageContentDataRequest = pageContentDataRequest

    // Make sure things clean up properly.
    window.onunload = window.onbeforeunload = function (e) {
        if (!!local.peer && !local.peer.destroyed) {
            local.peer.destroy()
        }
    }
}
