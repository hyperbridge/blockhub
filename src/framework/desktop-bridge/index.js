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

export const updateAccountRequest = async (data) => {
    return await sendCommand('updateAccountRequest', data)
}

export const initProtocol = async (data) => {
    return await sendCommand('initProtocol', data)
}

export const createFundingProject = async (data) => {
    return await sendCommand('createFundingProject', data)
}

export const updateFundingProject = async (data) => {
    return await sendCommand('updateFundingProject', data)
}

export const deployContract = async (data) => {
    return await sendCommand('deployContract', data)
}

export const resolvePromptPasswordRequest = async (password) => {
    return new Promise(async (resolve) => {
        const res = {
            password
        }

        local.unlockResolve(res)
    })
}

export const promptPasswordRequest = async (data) => {
    return new Promise(async (resolve) => {
        if (data.error) {

        }

        local.store.commit('application/activateModal', 'unlock')

        local.unlockResolve = resolve
    })
}

export const setAccountRequest = async (data) => {
    return new Promise(async (resolve) => {
        DB.application.config.data[0].account = {
            ...DB.application.config.data[0].account,
            ...data.account
        }

        DB.save()

        local.store.commit('application/updateState', {
            locked: false,
            signed_in: true
        })
        local.store.commit('application/activateModal', null)
    })
}

export const sendCommand = async (key, data = {}, peer = null, responseId = null) => {
    if (!isConnected()) {
        console.log('[DesktopBridge] Cant send command. Reason: not connected to desktop app')

        return false
    }

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
            const res = await promptPasswordRequest(cmd.data)

            return resolve(await sendCommand('promptPasswordResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'setAccountRequest') {
            const res = await setAccountRequest(cmd.data)

            return resolve(res)
        } else if (cmd.key === 'systemError') {
            console.warn('[DesktopBridge] Received system error from desktop', cmd.message)
        } else {
            console.warn('[DesktopBridge] Unhandled command:', cmd)
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

    // store.state.application.locked = true
    // store.state.application.signed_in = false

    local.store = store
    local.bridge = window.desktopBridge

    sendCommand('init')

    initCommandMonitor()
}
