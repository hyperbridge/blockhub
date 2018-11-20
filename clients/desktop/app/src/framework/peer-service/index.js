import * as ChaosMonkey from '../chaos-monkey'
import * as Ethereum from '../ethereum'

import * as Util from '../util'


// declare let require: any
// declare let Promise: any
// declare let window: any
// declare let window: {
//     web3: any;
//     peer: any;
//     pageContentHashRequest: any;
//     addressBalanceRequest: any;
//     peerConnect: any;
//     onunload: any;
//     config: any;
//     onbeforeunload: any;
// }


// declare global {
//     interface Window {
//         web3: any;
//         peer: any;
//         pageContentHashRequest: any;
//         addressBalanceRequest: any;
//         peerConnect: any;
//     }
// }


const NodeClient = {} //require('peerjs-nodejs')
const LifeRaft = {} //require('liferaft/index')
const md5 = {} //require('js-md5')

export let config = {
    RELAY: true,
    RAFT_ENABLED: true,
    ETHEREUM_ENABLED: true,
    DATA_RELAYER_ENABLED: true,
    ENABLED: true,
    STRENGTH: null,
    DARKLAUNCH: {
        NODE_OPERATORS: false
    }
}

const local = {
    raft: null,
    peer: null,
    resolver: () => { { } },
    connectedPeers: {},
    connectingPeers: {},
    peerId: null,
    requests: {},
    pendingData: '',
    peerHost: 'localhost', //'node.blockhub.gg', //'localhost',
    peerPort: 9000, //80, // 9000,
    peerKey: 'nodeOperator',
}

export const setResolver = (resolver) => {
    local.resolver = resolver
}

export const ID = () => {
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

    return peer
}

export const sendCommand = async (key, data = {}, peer = null, responseId = null) => {
    const cmd = {
        key: key,
        responseId: responseId,
        requestId: ID(),
        data: data
    }

    console.log('[PeerService] Sending command', cmd)

    if (!peer) {
        const peers = Object.keys(local.connectedPeers)

        if (!peers.length) {
            return
        }

        peer = await getPeer(peers[0])
    }

    if (!peer) {
        console.warn('[PeerService] Not connected to peer. This shouldnt happen.')
    }

    let _resolve, _reject
    let promise = new Promise((resolve, reject) => {
        _resolve = resolve
        _reject = reject
    })
    promise.resolve = _resolve
    promise.reject = _reject

    local.requests[cmd.requestId] = promise

    peer.send(JSON.stringify(cmd))

    return promise
}

export const pageContentDataRequest = async (path, confirmedHash, peer) => {
    return new Promise(async (resolve, reject) => {
        let req = {
            path: path
        }

        const data = await sendCommand('pageContentDataRequest', req, peer)

        const peerHash = md5(data.content)
        console.log('Page content data response', data, confirmedHash, peerHash)

        if (confirmedHash === peerHash) {
            console.log('Successful validation')

            resolve(data)
        } else {
            console.warn('Failed validation')

            reject("Failed validation")
        }

        // if (config.RAFT_ENABLED) {
        //     const packet = local.raft.packet('vote', data)

        //     local.raft.message(LifeRaft.FOLLOWER, packet, () => {
        //         console.log('[PeerService] Vote request sent', data)
        //     })
        // }
    })
}

export const getPathState = async (path, params) => {
    return new Promise(async (resolve) => {
        const req = {
            path: path
        }

        const results = []

        for (let i in local.connectedPeers) {
            const peer = local.connectedPeers[i]

            let data = await sendCommand('pageContentHashRequest', req, peer)

            console.log('Page content hash response', data.hash)

            results.push({
                peer,
                data
            })
        }

        // TODO: less stupid
        if (results.length) {
            console.log('Chosen peer', results[0])
            let data = await pageContentDataRequest(results[0].data.path, results[0].data.hash, results[0].peer)

            console.log('Content data', data.content)

            resolve(JSON.parse(data.content))
        } else {
            resolve()
        }

    })
}

export const addressBalanceRequest = async (address) => {
    if (config.ETHEREUM_ENABLED && config.DATA_RELAYER_ENABLED && Ethereum.isConnected()) {
        const balance = await Ethereum.getUserBalance()

        const data = {
            balance
        }

        return data
    } else {
        return new Promise(async (resolve) => {
            const req = {
                address
            }

            resolve(await sendCommand('addressBalanceRequest', req))
        })
    }
}

export const runCommand = async (cmd, meta = null) => {
    console.log('[PeerService] Running command', cmd.key)

    return new Promise(async (resolve, reject) => {
        if (cmd.responseId) {
            if (local.requests[cmd.responseId]) {
                console.log('[PeerService] Running response callback', cmd.responseId)

                local.requests[cmd.responseId].resolve(cmd.data)

                delete local.requests[cmd.responseId]
            }

            return resolve()
        }

        if (cmd.key === 'pageContentHashRequest') {
            if (!config.RELAY) return Promise.resolve()

            console.log(local, 'bbb');
            const state = local.resolver(cmd)
            const req = {
                path: cmd.data.path,
                hash: md5(JSON.stringify(state) + '')
            }

            // if (config.ENABLED && ChaosMonkey.random()) {
            //     req.hash = 'chaos'
            // }

            return resolve(await sendCommand('pageContentHashResponse', req, meta.client, cmd.requestId))
        } else if (cmd.key === 'pageContentDataRequest') {
            if (!config.RELAY) return Promise.resolve()

            const state = local.resolver(cmd)
            const req = {
                content: JSON.stringify(state)
            }

            return resolve(await sendCommand('pageContentDataResponse', req, meta.client, cmd.requestId))
        } else if (cmd.key === 'raft') {
            if (!config.RELAY) return Promise.resolve()

            local.raft.emit('data', cmd.data, async (data) => {
                console.log('[PeerService] Packet reply from ' + local.raft.address, data);

                return resolve(sendCommand('raft', data, meta.client, cmd.requestId))
            })

            return
        } else if (cmd.key === 'addressBalanceRequest') {
            if (!config.RELAY) return Promise.resolve()

            const req = await addressBalanceRequest(cmd.address)

            return resolve(await sendCommand('addressBalanceResponse', req, meta.client, cmd.requestId))
        }
    })
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

                    await sendCommand(cmd.key, cmd.data, client)

                    cb()
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
            console.log('[PeerService] Peers connected', local.connectedPeers)

            resolve(result)
        }

        req.send()
    })
}

export const monitorPeers = () => {
    const check = async () => {
        if (local.peerId) {
            console.log('[PeerService] Checking peers')

            const peers = await fetchPeers()

            for (let i in peers) {
                const peerId = peers[i]

                if (peerId == local.peerId) continue
                if (local.connectedPeers[peerId]) continue
                if (local.connectingPeers[peerId]) continue

                peerConnect(peerId).then(() => { })
            }
        } else {
            console.log('[PeerService] Cant check peers. Reason: not connected')
        }

        setTimeout(check, 2000)
    }

    check()
}

export const init = () => {
    return;
    console.log('[PeerService] Initializing')

    ChaosMonkey.init(config.STRENGTH)

    if (ChaosMonkey.random()) {
        config.DATA_RELAYER_ENABLED = false
    }

    local.peer = new NodeClient({
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
                Util.throttle(() => {
                    local.peer.disconnect()
                    setTimeout(() => local.peer.reconnect(), 200)
                }, 1000)
            }
        }
    })

    local.peer.on('open', (id) => {
        console.log('[PeerService] Connected as ', id)

        local.peerId = id

        local.raft = new LifeRaft(local.peerId, {
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
        local.peerId = null

        console.warn('[PeerService] Error', err)
    })

    window.config = config
    window.peerConnect = peerConnect
    window.getPathState = getPathState
    window.addressBalanceRequest = addressBalanceRequest

    // Make sure things clean up properly.
    window.onunload = window.onbeforeunload = function (e) {
        if (!!local.peer && !local.peer.destroyed) {
            local.peer.destroy()
        }
    }

    monitorPeers()

    console.log('[PeerService] Configuration set', config)

}
