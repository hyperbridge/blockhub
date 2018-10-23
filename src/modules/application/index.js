import Vue from 'vue'
import { normalize } from 'normalizr'
import * as DB from '@/db'
import * as Bridge from '@/framework/desktop-bridge'
import schema from './schema'

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
    let developerIdentity = DB.application.config.data[0].account && DB.application.config.data[0].account.identities.find(identity => identity.developer_id !== undefined)

    rawData = {
        ...rawData,
        ...savedData,
        status: {
            code: null,
            message: null
        },
        operating_system: getOS(),
        account: DB.application.config.data[0].account,
        darklaunch_flags: DB.application.config.data[0].darklaunch_flags,
        developer_mode: savedData.developer_mode !== null ? savedData.developer_mode : !!developerIdentity,
        environment_mode: savedData.environment_mode !== null ? savedData.environment_mode : BlockHub.GetMode(),
        ...updatedState
    }
    
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
    }
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
    },
    unlockAccount(state, payload) {
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
    deployContract(store, { protocolName, contractName }) {
        return new Promise((resolve, reject) => {
            Bridge
                .deployContract({ protocolName, contractName })
                .then((contract) => {
                    state.ethereum[state.current_ethereum_network].packages[protocolName].contracts[contractName] = contract
                    store.dispatch('updateState')

                    resolve(contract)
                })
        })
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
    activateModal(state, payload) {
        state.active_modal = payload
    },
    UPDATE_CLIENT_SETTINGS (state, property) {
        Vue.set(state.account.settings.client, property, !state.account.settings.client[property])
    }
}
