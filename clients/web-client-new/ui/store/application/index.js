import Vue from 'vue'
import { normalize } from 'normalizr'
import axios from 'axios'
import FormData from 'form-data'
import * as DB from '../../db'
import * as Bridge from '../../framework/desktop-bridge'
import schema from './schema'
// import { extract, getId } from '../../util/store'

let rawData = {}

let localState = null

export const state = () => localState

const getOS = () => {
    if (!process.client) {
        return 'node'
    }

    const { userAgent } = window.navigator
    const { platform } = window.navigator
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
    const iosPlatforms = ['iPhone', 'iPad', 'iPod']
    const os = null

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
    }
    return 'unknown'
}

const updateState = (savedData, updatedState = {}) => {
    rawData = {
        ...rawData,
        ...savedData,
        status: {
            code: null,
            message: null
        },
        shortcuts: savedData.shortcuts != null ? savedData.shortcuts : [],
        operatingSystem: savedData.operatingSystem != null ? savedData.operatingSystem : getOS(),
        // initialized: window.BlockHub.initialized,
        account: DB.application.config.data[0].account || {},
        activeProfile: DB.application.config.data[0].activeProfile || {},
        darklaunchFlags: DB.application.config.data[0].darklaunchFlags || [],
        developerMode: savedData.developerMode != null ? savedData.developerMode : DB.application.config.data[0].account && DB.application.config.data[0].activeProfile && DB.application.config.data[0].activeProfile.role === 'developer',
        environmentMode: savedData.environmentMode != null ? savedData.environmentMode : process.client ? window.BlockHub.getMode() : 'local',
        externalState: savedData.externalState != null ? savedData.externalState : {},
        ...updatedState
    }

    rawData.connection.internet = true

    if (updatedState.locked !== undefined) {
        rawData.locked = updatedState.locked
    }

    if (rawData.desktopMode === null) { rawData.desktopMode = process.client && window.isElectron }

    const normalizedData = normalize(rawData, {
    })

    localState = { ...rawData, ...normalizedData.entities }
}

export const getters = {
    privileges(state) {
        const result = []

        if (state.desktopMode) {
            result.push('desktopMode')
        }

        if (state.signedIn) {
            result.push('signedIn')
        }

        if (state.developerMode) {
            result.push('developerMode')
        }

        if (state.verifiedAccount) {
            result.push('verifiedAccount')
        }

        if (state.hyperbridgeAccount) {
            result.push('hyperbridgeAccount')
        }

        return result
    }
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Application] Initializing...')

        updateState(DB.application.config.data[0], store.state)

        localState.connection.status.code = null
        localState.connection.status.message = 'Establishing connection...'

        store.commit('updateState', localState)

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

        store.commit('updateState', localState)
    },
    activateModal(store, payload) {
        if (payload) {
            if (process.client) {
                window.ga('send', 'event', 'Modal', 'Show Modal', 'Show Modal', payload, { 'NonInteraction': 1 })
            }
        }

        if (store.state.desktopMode) {
            if (store.state.signedIn) {
                store.commit('activateModal', payload)
            } else {
                store.commit('activateModal', 'login')
            }
        } else {
            store.commit('activateModal', 'welcome')
        }
    },
    async login(store, payload) {
        await store.dispatch('auth/authenticate', { strategy: 'local', email: payload.email, password: payload.password }, { root: true })

        await store.dispatch('authenticate')
    },
    async authenticate(store, payload) {
        await store.dispatch('profiles/find', {
            query: {
                accountId: store.rootState.accounts.currentId,
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        }, { root: true })

        store.state.activeProfile = store.rootState.profiles.keyedById[store.state.activeProfile && store.state.activeProfile.id || 1]
        store.state.developerMode = store.state.activeProfile && store.state.activeProfile.role === 'developer'
        store.state.editorMode = 'viewing'
        store.state.signedIn = true
    },
    setEditorMode(store, payload) {
        store.commit('setEditorMode', payload)

        // if (!store.state.settings.client.hideEditorWelcomeModal) {
        //     store.commit('activateModal', 'editor-welcome')
        // }
    },
    // unlockAccount(store, payload) {
    //     Bridge.resolvePromptPasswordRequest(payload.password.value)

    //     // Bridge.sendCommand('getAccountRequest', data).then((res) => {
    //     //     store.state.account.address = res.account.address

    //     //     store.state.password_required = true
    //     //     //store.state.signedIn = true
    //     // })
    // },
    initEthereum(store, payload) {
        // Bridge.initProtocol({ protocolName: 'application' }).then((config) => {
        //     store.state.ethereum[store.state.currentEthereumNetwork] = config
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

        const failure = err => {
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
        return // stop DDOSing
        // console.log('[BlockHub] Connection status: ' + JSON.stringify(store.state.connection))

        if (!navigator.onLine) {
            store.commit('setInternetConnection', { connected: false, message: 'Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection.' })
        }

        const xhr = new XMLHttpRequest()
        const file = 'https://blockhub.gg/static/img/blank.png'
        const randomNum = Math.round(Math.random() * 10000)

        xhr.open('HEAD', `${file}?rand=${randomNum}`, true)
        xhr.send()

        function processRequest(e) {
            if (xhr.readyState == 4) {
                try {
                    if (xhr.status >= 200 && xhr.status < 304) {
                        store.commit('setInternetConnection', { connected: true, message: 'Connected.' })
                        store.state.connection.datasource = true // TEMP
                    } else {
                        store.commit('setInternetConnection', { connected: false, message: 'Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection.' })
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
        store.dispatch('updateState')
    },
    disableDarklaunch(store, payload) {
        store.commit('disableDarklaunch', payload)
        store.dispatch('updateState')
    },
    deployContract(store, { protocolName, contractName, oldContractAddress }) {
        return new Promise((resolve, reject) => {
            Bridge
                .deployContract({ protocolName, contractName, oldContractAddress })
                .then(contract => {
                    localState.ethereum[localState.currentEthereumNetwork].packages[protocolName].contracts[contractName] = contract
                    store.dispatch('updateState')

                    resolve(contract)
                })
        })
    },
    sendCommand(store, { key, data }) {
        Bridge.sendCommand(key, data).then(() => {})
    },
    createTradeUrl({ commit, state }) {
        // async call => delete previous trade url
        // state.account.tradeURLId
        commit('createTradeUrl', getId())
    }
}

export const mutations = {
    updateState(state, payload) {
        for (const x in payload) {
            Vue.set(state, x, payload[x])
        }

        DB.application.config.update(state)
        DB.save()
    },
    updateAccount({ account }, { prop, data, key }) {
        if (Array.isArray(account[prop])) {
            account[prop][key] = data
        } else if (typeof account[prop] === 'object') {
            account[prop] = { ...account[prop], [id]: data }
        } else {
            account[prop] = data
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
        state.activeNotification = notification
        state.activeModal = 'notification'
    },
    updateFavorites2({ account }, { prop = 'productWishlist', id }) {
        const foundKey = account[prop].findIndex(savedId => savedId === id)
        foundKey
            ? account[prop].push(id)
            : account[prop].splice(foundKey, 0)
        return Boolean(foundKey)
    },
    updateFavorites({ account }, { prop = 'productWishlist', id }) {
        // Optional -> object
        if (account[prop][id]) {
            const { [id]: deleted, ...rest } = account[prop]
            delete rest[id]
            account[prop] = rest
        } else {
            account[prop] = { ...account[prop], [id]: true }
        }
    },
    updateEnvironmentMode(state, payload) {
        state.environmentMode = payload

        Bridge.sendCommand('setEnvironmentMode', payload).then(data => {

        })
    },
    createTradeUrl(state, id) {
        state.account.tradeURLId = id
    },
    signIn(state, payload) {
        state.signedIn = true

        DB.application.config.update(state)
        DB.save()
    },
    signOut(state, payload) {
        state.signedIn = false

        DB.application.config.update(state)
        DB.save()
    },
    setEditorMode(state, payload) {
        state.editorMode = payload
    },
    setInternetConnection(state, payload) {
        state.connection.internet = payload.connected
        state.connection.status.message = payload.message
    },
    setSimulatorMode(state, payload) {
        state.simulatorMode = payload
    },
    showProfileChooser(state, payload) {
        state.profileChooser = payload
    },
    enableDarklaunch(state, payload) {
        const darklaunch = state.account.darklaunchFlags.find(darklaunch => darklaunch.code === payload)

        if (darklaunch) {
            darklaunch.enabled = true
        } else {
            state.account.darklaunchFlags.push({
                code: payload,
                enabled: true
            })
        }
    },
    disableDarklaunch(state, payload) {
        const darklaunch = state.account.darklaunchFlags.find(darklaunch => darklaunch.code === payload)

        if (darklaunch) {
            darklaunch.enabled = false
        } else {
            state.account.darklaunchFlags.push({
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
        const success = id => {
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
            .then(res => {
                // cb && cb()
            })
            .catch(err => {
                console.log('An error occurred. Please check your input or try again later.')
            })
    },
    activateModal(state, payload) {
        state.activeModal = payload
    },
    convertCurator(state, payload) {
        Bridge.sendCommand('createCuratorRequest', payload.profile).then(data => {
            payload.profile.role = 'curator'
            state.curatorMode = true

            // TODO: just redirect here?
        })
    },
    updateClientSettings(state, { key, value }) {
        value = value || !state.settings.client[key]

        Vue.set(state.settings.client, key, value)

        state.settings.client[key] = value

        DB.application.config.update(state)
        DB.save()
    },
    activeModalData(state, payload) {
        state.activeModalData = payload
    }
}
