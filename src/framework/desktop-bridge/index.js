import * as DB from '@/db'

export let config = {
}

const local = {
    requests: {},
    store: null,
    unlockResolve: null
}

export const isConnected = () => {
    return window.isElectron
}

export const ID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const createAccountRequest = async (data) => {
    return await sendCommand('createAccountRequest', data)
}

export const resolvePromptPasswordRequest = async (password) => {
    return new Promise(async (resolve) => {
        const res = {
            password
        }

        local.unlockResolve(res)
    })
}

export const handlePromptPasswordRequest = async (data) => {
    return new Promise(async (resolve) => {
        local.store.commit('network/activateModal', 'unlock')

        local.unlockResolve = resolve
    })
}

export const handleSetAccountRequest = async (data) => {
    return new Promise(async (resolve) => {
        DB.network.config.data[0].account = {
            ...DB.network.config.data[0].account,
            ...data.account
        }

        DB.save()

        local.store.commit('network/activateModal', null)
    })
}

export const sendCommand = async (key, data = {}, peer = null, responseId = null) => {
    const cmd = {
        key: key,
        responseId: responseId,
        requestId: ID(),
        data: data
    }

    console.log('[DesktopBridge] Sending command', cmd)

    if (!local.bridge) {
        console.warn('[DesktopBridge] Not connected to bridge. This shouldnt happen.')
    }

    let _resolve, _reject
    let promise = new Promise((resolve, reject) => {
        _resolve = resolve
        _reject = reject
    })
    promise.resolve = _resolve
    promise.reject = _reject

    local.requests[cmd.requestId] = promise

    local.bridge.send('command', JSON.stringify(cmd))

    return promise
}

export const initHeartbeat = () => {
    local.bridge.on('heartbeat', (event, msg) => {
        console.log('[DesktopBridge] Heartbeat')

        local.bridge.send('heartbeat', 1)
    })
}


export const runCommand = async (cmd, meta = {}) => {
    console.log('[DesktopBridge] Running command', cmd.key)

    return new Promise(async (resolve, reject) => {
        if (cmd.responseId) {
            if (local.requests[cmd.responseId]) {
                console.log('[DesktopBridge] Running response callback', cmd.responseId)

                local.requests[cmd.responseId].resolve(cmd.data)

                delete local.requests[cmd.responseId]
            }

            return resolve()
        }

        if (cmd.key === 'promptPasswordRequest') {
            const res = await handlePromptPasswordRequest(cmd.data)

            return resolve(await sendCommand('promptPasswordResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'setAccountRequest') {
            const res = await handleSetAccountRequest(cmd.data)

            return resolve(res)
        } else {
            console.log('[DesktopBridge] Unhandled command:', cmd)
        }

    })
}

export const initCommandMonitor = () => {
    local.bridge.on('command', (event, msg) => {
        console.log('[DesktopBridge] Received command from desktop', msg)

        const cmd = JSON.parse(msg)

        runCommand(cmd)
    })
}

export const init = (store) => {
    if (!isConnected()) {
        console.log('[DesktopBridge] Not initializing. Reason: not connected to desktop app')

        return false
    }

    console.log('[DesktopBridge] Initializing')

    local.store = store
    local.bridge = window.desktopBridge

    sendCommand('init')

    initCommandMonitor()
}
