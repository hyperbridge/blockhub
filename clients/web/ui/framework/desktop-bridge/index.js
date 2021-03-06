import * as DB from '../../db'
import blockhub from '../../plugins/blockhub'

export const config = {
}

const local = {
    requests: {},
    store: null,
    redirect: null,
    unlockResolve: null,
    events: {}
}

export const on = (event, listener) => {
    if (!Array.isArray(local.events[event])) {
        local.events[event] = []
    }
    local.events[event].push(listener)
    return () => removeListener(event, listener)
}

export const removeListener = (event, listener) => {
    if (Array.isArray(local.events[event])) {
        const idx = local.events[event].indexOf(listener)
        if (idx > -1) {
            local.events[event].splice(idx, 1)
        }
    }
}

export const emit = (event, ...args) => {
    if (Array.isArray(local.events[event])) {
        local.events[event].forEach(listener => listener.apply(this, args))
    }
}

export const once = (event, listener) => {
    const remove = on(event, (...args) => {
        remove()
        listener.apply(this, args)
    })
}


export const isConnected = () => process.client && window.isElectron

export const ID = () =>
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    `_${Math.random().toString(36).substr(2, 9)}`


export const createTransactionRequest = async data => await sendCommand('createTransactionRequest', data)

export const sendTransactionRequest = async data => await sendCommand('sendTransactionRequest', data)

export const getPassphraseRequest = async data => await sendCommand('getPassphraseRequest', data)

export const createAccountRequest = async data => await sendCommand('createAccountRequest', data)

export const updateAccountRequest = async data => await sendCommand('updateAccountRequest', data)

export const initProtocol = async data => await sendCommand('initProtocol', data)

export const createFundingProject = async data => await sendCommand('createFundingProject', data)

export const updateFundingProject = async data => await sendCommand('updateFundingProject', data)

export const deployContract = async data => await sendCommand('deployContract', data)

export const resolvePromptPasswordRequest = async password => new Promise(async resolve => {
    const res = {
        password
    }

    local.unlockResolve(res)
})

export const updateState = async data => await sendCommand('updateState', data)

export const promptPasswordRequest = async data => new Promise(async resolve => {
    if (data.error) {

    }

    local.store.commit('application/updateState', {
        locked: true,
        signedIn: false
    })

    local.redirect('/unlock')

    // local.store.commit('application/activeModal', 'unlock')

    local.unlockResolve = resolve
})

export const setAccountRequest = async data => new Promise(async resolve => {
    if (data.account.address) {
        // local.store.commit('application/activeModal', null)

        // We were locked
        if (local.store.state.application.locked) {
            local.redirect('/')
        }

        local.store.commit('application/updateState', {
            locked: false
        })
    } else {
        // local.store.commit('application/activeModal', null)

        local.redirect('/welcome')

        local.store.commit('application/updateState', {
            locked: true
        })
    }

    // DB.application.config.data[0].account = {
    //     ...DB.application.config.data[0].account,
    //     ...data.account
    // }

    // DB.application.config.data[0].activeProfile = data.account.profiles.find(i => i.id === data.activeProfile.id)

    // DB.application.config.data[0].developerMode = DB.application.config.data[0].activeProfile.role === 'developer'

    // DB.save()

    resolve()
})

export const sendCommand = async (key, data = {}, peer = null, responseId = null) => {
    if (!isConnected()) {
        console.info('[BlockHub] Cant send command. Reason: not connected to desktop app', key)

        // Ignore startup commands
        if (key !== 'initProtocol' && key !== 'error' && key !== 'updateState') {
            local.store.commit('application/activeModal', 'welcome')
        }

        return false
    }

    const cmd = {
        key,
        responseId,
        requestId: ID(),
        data
    }

    console.info('[BlockHub] Sending command', cmd)

    if (!local.bridge) {
        console.warn('[BlockHub] Not connected to bridge. This shouldnt happen.')
    }

    let _resolve; let _reject
    const promise = new Promise((resolve, reject) => {
        _resolve = resolve
        _reject = reject
    })
    promise.resolve = _resolve
    promise.reject = _reject

    local.requests[cmd.requestId] = promise

    local.bridge.send('command', JSON.stringify(cmd))

    return promise
}

export const runCommand = async (cmd, meta = {}) => {
    console.log('[BlockHub] Running command', cmd.key)

    return new Promise(async (resolve, reject) => {
        emit(cmd.key, cmd.data ? cmd.data : undefined)

        let res = null

        if (cmd.responseId) {
            if (local.requests[cmd.responseId]) {
                console.log('[BlockHub] Running response callback', cmd.responseId)

                local.requests[cmd.responseId].resolve(cmd.data)

                delete local.requests[cmd.responseId]
            }

            return resolve()
        }

        if (cmd.key === 'heartbeat') {
            console.log('[BlockHub] Heartbeat')

            setTimeout(() => {
                sendCommand('heartbeat', 1)
            }, 1000)
        } else if (cmd.key === 'promptPasswordRequest') {
            res = await promptPasswordRequest(cmd.data)

            // sendCommand('promptPasswordResponse', res, meta.client, cmd.requestId)

            // return resolve()
        } else if (cmd.key === 'setProtocolConfig') {
            const { currentNetwork, protocolName, config } = cmd.data

            local.store.state.application.ethereum[currentNetwork].packages[protocolName] = config
            local.store.dispatch('application/updateState')
        } else if (cmd.key === 'setAccountRequest') {
            res = await setAccountRequest(cmd.data)

            // sendCommand('setAccountRequestResponse', res, meta.client, cmd.requestId)

            // return resolve()
        }
        else if (cmd.key === 'setMode') {
            local.store.state.application.mode = cmd.data
            local.store.state.application.desktopMode = true

            // Import seed data for now
            if (local.store.state.application.mode === 'production') {
                //this.$blockhub.importSeedData()

                // local.store.state.application.desktopMode = true
                // local.store.state.application.signedIn = true
            }
            // store.state.application.locked = true
            // store.state.application.signedIn = false
        }
        else if (cmd.key === 'updateReady') {
            console.log(cmd.data)

            await sendCommand('quitAndInstall')
        } else if (cmd.key === 'updateState') {
            local.store.commit(`${cmd.data.module}/updateState`, cmd.data.state)
        } else if (cmd.key === 'systemError') {
            console.warn('[BlockHub] Received system error from desktop', cmd.data)

            this.$blockhub.Notification.error(cmd.data, 'System Error', {
                timeout: 0,
                pauseOnHover: true
            })

            // Don't let promise callbacks get stuck
            for (const i in local.requests) {
                local.requests[i].reject()

                delete local.requests[i]
            }
        } else if (cmd.key === 'navigate') {
            local.redirect(cmd.data)
        } else {
            console.warn('[BlockHub] Unhandled command:', cmd)
        }

        sendCommand('response', res, meta.client, cmd.requestId)

        resolve()
    })
}

export const initCommandMonitor = () => {
    local.bridge.on('command', (event, msg) => {
        console.log('[BlockHub] Received command from desktop', msg)

        const cmd = JSON.parse(msg)

        runCommand(cmd)
    })
}

export const initResizeMonitor = () => {
    window.addEventListener('resize', () => {
        sendCommand('resize', {
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, true)
}

export const initContextMenuHandler = () => {
    document.body.addEventListener('contextmenu', e => {
        e.preventDefault()
        e.stopPropagation()

        const node = e.target

        sendCommand('showContextMenuRequest', {
            x: e.clientX,
            y: e.clientY,
            nodeName: node.nodeName
        })

        // while (node) {
        //     if (node.nodeName.match(/^(input|textarea|p)$/i) || node.isContentEditable) {
        //         sendCommand('showContextMenuRequest', {
        //             x: e.clientX,
        //             y: e.clientY,
        //             nodeName: node.nodeName
        //         })
        //         break
        //     }
        //     node = node.parentNode
        // }
    })
}

export const init = (store, redirect) => {
    local.store = store
    local.redirect = redirect
    local.bridge = process.client ? window.ipcRenderer : { send: () => {} }

    if (!isConnected()) {
        console.log('[BlockHub] Bridge not initializing. Reason: not connected to desktop app')

        return false
    }

    console.log('[BlockHub] Initializing bridge')

    on('promptPasswordRequest', data => {
        local.store.state.application.account.secretQuestion1 = data.secretQuestion1
    })

    sendCommand('init', 1)

    initCommandMonitor()
    initResizeMonitor()
    initContextMenuHandler()
}
