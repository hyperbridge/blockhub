import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { Wallet, CryptoJS } from 'blockhub-node-sdk'

const config = require('../config')

const local = {
    provider: null,
    requests: {},
    account: {
        wallet: null
    },
    passphrase: null,
    password: null,
    events: {},
}

export const on = (event, listener) => {
    if (typeof local.events[event] !== 'object') {
        local.events[event] = []
    }
    local.events[event].push(listener)
    return () => removeListener(event, listener)
}

export const removeListener = (event, listener) => {
    if (typeof local.events[event] === 'object') {
        const idx = local.events[event].indexOf(listener)
        if (idx > -1) {
            local.events[event].splice(idx, 1)
        }
    }
}

export const emit = (event, ...args) => {
    if (typeof local.events[event] === 'object') {
        local.events[event].forEach(listener => listener.apply(this, args))
    }
}

export const once = (event, listener) => {
    const remove = on(event, (...args) => {
        remove()
        listener.apply(this, args)
    })
}

export const decrypt = (data, key) => {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
}

export const encrypt = (data, key) => {
    return CryptoJS.AES.encrypt(data, key).toString()
}


export const runCommand = async (cmd, meta = {}) => {
    console.log('[Bridge] Running command: ', cmd.key, cmd)

    return new Promise(async (resolve, reject) => {
        if (cmd.responseId) {
            if (local.requests[cmd.responseId]) {
                console.log('[Bridge] Running response callback', cmd.responseId)

                local.requests[cmd.responseId].resolve(cmd.data)

                delete local.requests[cmd.responseId]
            }

            return resolve()
        }

        let resultKey = 'genericResponse'
        let resultData = null
        let responseId = cmd.requestId

        if (cmd.key === 'init') {
            console.log('[BlockHub] Web initialized', cmd.data) // msg from web page

        } else if (cmd.key === 'ping') {
            console.log('[BlockHub] Ping from web', cmd.data)

        } else if (cmd.key === 'resize') {
            //Windows.main.window.webContents.setZoomFactor(cmd.data.width / 1980)
            //Windows.main.window.setSize(cmd.data.width, cmd.data.height)
            //Windows.main.window.center()
        } else if (cmd.key === 'generateAddress') {
            resultData = await generateAddress(cmd.data)
            resultKey = 'generateAddressResponse'
        } else if (cmd.key === 'resolveCallback') {
            local.requests[cmd.responseId].resolve(cmd.data)
        } else {
            console.log('[Bridge] Unhandled command:', cmd)

            return reject()
        }

        emit(cmd.key, cmd.data ? cmd.data : undefined)

        return resolve(await sendCommand(resultKey, resultData, meta.client, responseId))
    })
}

export const init = async (bridge) => {
    console.log('[Bridge] Initializing')

    local.bridge = bridge
}
