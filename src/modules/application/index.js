import Vue from 'vue'
import { normalize } from 'normalizr'
import * as DB from '@/db'
import * as Bridge from '@/framework/desktop-bridge'
import schema from './schema'
import axios from 'axios'
import FormData from 'form-data'
import { extract, getId } from '@/store/utils'

let rawData = {}

export let state = null

const getOS = () => {
    let userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null

    if (macosPlatforms.indexOf(platform) !== -1) {
        return 'mac'
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        return 'ios'
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return 'windows'
    } else if (/Android/.test(userAgent)) {
        return 'android'
    } else if (!os && /Linux/.test(platform)) {
        return 'linux'
    } else {
        return 'unknown'
    }
}

const updateState = (savedData, updatedState = {}) => {
    //let developerIdentity = DB.application.config.data[0].account && DB.application.config.data[0].account.identities.find(identity => identity.developer_id !== undefined)

    rawData = {
        ...rawData,
        ...savedData,
        status: {
            code: null,
            message: null
        },
        shortcuts: savedData.shortcuts != null ? savedData.shortcuts : [],
        operating_system: savedData.operating_system != null ? savedData.operating_system : getOS(),
        initialized: savedData.initialized != null ? savedData.initialized : BlockHub.initialized,
        account: DB.application.config.data[0].account || {},
        darklaunch_flags: DB.application.config.data[0].darklaunch_flags || [],
        developer_mode: savedData.developer_mode != null ? savedData.developer_mode : DB.application.config.data[0].account && !!DB.application.config.data[0].account.current_identity.developer_id,
        environment_mode: savedData.environment_mode != null ? savedData.environment_mode : BlockHub.GetMode(),
        externalState: savedData.externalState != null ? savedData.externalState : {},
        ...updatedState
    }

    rawData.connection.internet = true

    if (updatedState.locked !== undefined) {
        rawData.locked = updatedState.locked
    }

    if (rawData.desktop_mode == null)
        rawData.desktop_mode = window.isElectron

    const normalizedData = normalize(rawData, {
    })

    state = { ...rawData, ...normalizedData.entities }
}

export const getters = {
    privileges(state) {
        const result = []

        if (state.desktop_mode) {
            result.push('desktop_mode')
        }

        if (state.signed_in) {
            result.push('signed_in')
        }

        if (state.developer_mode) {
            result.push('developer_mode')
        }

        if (state.verified_account) {
            result.push('verified_account')
        }

        if (state.hyperbridge_account) {
            result.push('hyperbridge_account')
        }

        return result
    },
    account: ({ account }, getters, { community: { identities }}) => ({
        ...account,
        active_identity: identities[account.active_identity],
        identities: account.idts.map(id => identities[id])
    }),
    identity: (state, { account }) => account.active_identity
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Application] Initializing...')

        updateState(DB.application.config.data[0], store.state)

        state.connection.status.code = null
        state.connection.status.message = "Establishing connection..."

        store.commit('updateState', state)

        store.dispatch('checkInternetConnection')
        store.dispatch('checkEthereumConnection')

        setInterval(() => {
            if (store.state.connection.auto) {
                store.dispatch('checkEthereumConnection')
            }
        }, 5000)
    },
    updateState(store, payload) {
        console.log('[BlockHub][Application] Updating store...')

        updateState(store.state, payload)

        store.commit('updateState', state)
    },
    activateModal(store, payload) {
        if (payload) {
            window.ga('send', 'event', 'Modal', 'Show Modal', 'Show Modal', payload, { 'NonInteraction': 1 })
        }

        if (store.state.desktop_mode) {
            if (store.state.signed_in) {
                store.commit('activateModal', payload)
            } else {
                store.commit('activateModal', 'login')
            }
        } else {
            store.commit('activateModal', 'welcome')
        }
    },
    setEditorMode(store, payload) {
        store.commit('setEditorMode', payload)

        if (!store.state.account.settings.client.hide_editor_welcome_modal) {
            store.commit('activateModal', 'editor-welcome')
        }
    },
    unlockAccount(store, payload) {
        Bridge.resolvePromptPasswordRequest(payload.password.value)

        // Bridge.sendCommand('getAccountRequest', data).then((res) => {
        //     store.state.account.public_address = res.account.public_address

        //     store.state.password_required = true
        //     //store.state.signed_in = true
        // })
    },
    initEthereum(store, payload) {
        // Bridge.initProtocol({ protocolName: 'application' }).then((config) => {
        //     store.state.ethereum[store.state.current_ethereum_network] = config
        //     store.dispatch('updateState')
        // })
    },
    checkEthereumConnection(store, payload) {
        const success = () => {
            store.state.connection.ethereum = true
            store.state.connection.datasource = true

            store.state.connection.status.code = null
            store.state.connection.status.message = null
        }

        const failure = (err) => {
            store.state.connection.ethereum = true
            store.state.connection.datasource = true

            // store.state.connection.status.code = 344
            // store.state.connection.status.message = err

            // TODO: fallback to peer datasource
        }

        // TODO
        // Ethereum.init().then(success, failure).catch(failure)
    },
    checkInternetConnection(store, payload) {
        //console.log('[BlockHub] Connection status: ' + JSON.stringify(store.state.connection))

        if (!navigator.onLine) {
            store.commit('setInternetConnection', { connected: false, message: "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection." })
            return
        }

        const xhr = new XMLHttpRequest()
        const file = "/static/img/blank.png"
        const randomNum = Math.round(Math.random() * 10000)

        xhr.open('HEAD', file + "?rand=" + randomNum, true)
        xhr.send()

        function processRequest(e) {
            if (xhr.readyState == 4) {
                try {
                    if (xhr.status >= 200 && xhr.status < 304) {
                        store.commit('setInternetConnection', { connected: true, message: "Connected." })
                        store.state.connection.datasource = true // TEMP
                    } else {
                        store.commit('setInternetConnection', { connected: false, message: "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection." })
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }

        xhr.addEventListener('readystatechange', processRequest, false)
    },
    signIn(store, payload) {
        store.commit('signIn', payload)
    },
    signOut(store, payload) {
        store.commit('signOut', payload)
    },
    enableDarklaunch(store, payload) {
        store.commit('enableDarklaunch', payload)
    },
    disableDarklaunch(store, payload) {
        store.commit('disableDarklaunch', payload)
    },
    deployContract(store, { protocolName, contractName, oldContractAddress }) {
        return new Promise((resolve, reject) => {
            Bridge
                .deployContract({ protocolName, contractName, oldContractAddress })
                .then((contract) => {
                    state.ethereum[state.current_ethereum_network].packages[protocolName].contracts[contractName] = contract
                    store.dispatch('updateState')

                    resolve(contract)
                })
        })
    },
    sendCommand(store, { key, data }) {
        Bridge.sendCommand(key, data).then(() => {})
    },
    createTradeURL({ commit, state }) {
        // async call => delete previous trade url
        // state.account.tradeURLId
        commit('createTradeURL', getId());
    }
}

export const mutations = {
    updateState(state, payload) {
        for (let x in payload) {
            Vue.set(state, x, payload[x])
        }

        DB.application.config.update(state)
        DB.save()
    },
    updateAccount({ account }, { prop, data, key }) {
        if (Array.isArray(account[prop])) {
            account[prop][key] = data;
        } else if (typeof account[prop] === 'object') {
            account[prop] = { ...account[prop], [id]: data };
        } else {
            account[prop] = data;
        }
    },
    addShortcut(state, shortcut) {
        state.shortcuts.push(shortcut)

        DB.application.config.update(state)
        DB.save()
    },
    removeShortcut(state, index) {
        state.shortcuts.splice(index, 1)

        DB.application.config.update(state)
        DB.save()
    },
    updateShortcut(state, shortcut) {
        if (state.shortcuts.find(s => s.id == shortcut.id)) {
            state.shortcuts.splice(state.shortcuts.findIndex(s => s.id == shortcut.id), 1)
        } else {
            state.shortcuts.push(shortcut)
        }

        DB.application.config.update(state)
        DB.save()
    },
    showNotification(state, notification) {
        state.active_notification = notification
        state.active_modal = 'notification'
    },
    updateFavorites2({ account }, { prop = 'product_wishlist', id }) {
        const foundKey = account[prop].findIndex(savedId => savedId === id);
        foundKey
        ? account[prop].push(id)
        : account[prop].splice(foundKey, 0);
        return !!foundKey;
    },
    updateFavorites({ account }, { prop = 'product_wishlist', id }) {
        // Optional -> object
        if (account[prop][id]) {
            const { [id]: deleted, ...rest } = account[prop];
            delete(rest[id])
            account[prop] = rest;
        } else {
            account[prop] = { ...account[prop], [id]: true };
        }
    },
    updateEnvironmentMode(state, payload) {
        state.environment_mode = payload

        Bridge.sendCommand('setEnvironmentMode', payload).then((data) => {

        })
    },
    createTradeURL(state, id) {
        state.account.tradeURLId = id;
    },
    signIn(state, payload) {
        state.signed_in = true

        DB.application.config.update(state)
        DB.save()
    },
    signOut(state, payload) {
        state.signed_in = false

        DB.application.config.update(state)
        DB.save()
    },
    setEditorMode(state, payload) {
        state.editor_mode = payload
    },
    setInternetConnection(state, payload) {
        state.connection.internet = payload.connected
        state.connection.status.message = payload.message
    },
    setSimulatorMode(state, payload) {
        state.simulator_mode = payload
    },
    showProfileChooser(state, payload) {
        state.profile_chooser = payload
    },
    enableDarklaunch(state, payload) {
        const darklaunch = state.account.darklaunch_flags.find(darklaunch => darklaunch.code === payload)

        if (darklaunch) {
            darklaunch.enabled = true
        } else {
            state.account.darklaunch_flags.push({
                code: payload,
                enabled: true
            })
        }
    },
    disableDarklaunch(state, payload) {
        const darklaunch = state.account.darklaunch_flags.find(darklaunch => darklaunch.code === payload)

        if (darklaunch) {
            darklaunch.enabled = false
        } else {
            state.account.darklaunch_flags.push({
                code: payload,
                enabled: false
            })
        }
    },
    beforeLoadRoute(state, payload) {
        state.loading = true
    },
    afterLoadRoute(state, payload) {
        state.loading = false
    },
    submitTransaction(state, payload) {
        const success = (id) => {
        }
    },
    entry(state, payload) {
        // send .key and .value to sheet
        const bodyFormData = new FormData()

        bodyFormData.set('entry.524169597', payload.key)
        bodyFormData.set('entry.399172045', payload.value)
        bodyFormData.set('entry.832916558', payload.user || '')

        axios({
            method: 'post',
            url: 'https://docs.google.com/forms/d/1W1_7UuaDjjCKp08vSllvyKZTQRCSej9kd743Z2N1NvY/formResponse',
            data: bodyFormData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((res) => {
                //cb && cb()
            })
            .catch((err) => {
                console.log('An error occurred. Please check your input or try again later.')
            })

    },
    activateModal(state, payload) {
        state.active_modal = payload
    },
    convertCurator(state, payload) {
        Bridge.sendCommand('createCuratorRequest', payload.identity).then((data) => {
            payload.identity.curator_id = data
            state.curator_mode = true

            // TODO: just redirect here?
        })
    },
    UPDATE_CLIENT_SETTINGS (state, property, value) {
        value = value || !state.account.settings.client[property]

        Vue.set(state.account.settings.client, property, value)

        state.account.settings.client[property] = value

        DB.application.config.update(state)
        DB.save()
    }
}
