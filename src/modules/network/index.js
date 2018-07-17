import { normalize } from 'normalizr'
import schema from './schema'
import * as Ethereum from '../../framework/ethereum'
import * as PeerService from '../../framework/peer-service'
import * as db from '@/db'

let rawData = {}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData,
        ...db.network.config.data[0]
    }

    const normalizedData = normalize(rawData, {
        account: schema.account,
        wallets: [schema.wallet],
        identities: [schema.identity]
    })

    state = { ...rawData, ...normalizedData.entities }
}

updateState()

export const getters = {}

export const actions = {
    connect(store, payload) {
        console.log('[BlockHub] Network connecting...')

        store.dispatch('checkInternetConnection')
        store.dispatch('checkEthereumConnection')

        setInterval(() => {
            store.dispatch('checkEthereumConnection')
        }, 5000)
    },
    checkEthereumConnection(store, payload) {
        const success = () => {
            store.state.connection.ethereum = true
            store.state.connection.datasource = true

            store.state.connection.status.code = null
            store.state.connection.status.message = null
        }

        const failure = (err) => {
            store.state.connection.ethereum = false
            store.state.connection.datasource = false

            store.state.connection.status.code = 344
            store.state.connection.status.message = err

            // TODO: fallback to peer datasource
        }

        Ethereum.init().then(success, failure)
    },
    checkInternetConnection(store, payload) {
        console.log('[BlockHub] Connection status: ', store.state.connection)
        
        if (!navigator.onLine) {
            store.state.connection.internet = false
            store.state.connection_message = "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection."
            return
        }

        const xhr = new XMLHttpRequest()
        const file = "/static/img/blank.png"
        const randomNum = Math.round(Math.random() * 10000)

        xhr.open('HEAD', file + "?rand=" + randomNum, true)
        xhr.send()

        function processRequest(e) {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 304) {
                    store.state.connection.internet = true
                    store.state.connection_message = "Connected."
                } else {
                    store.state.connection.internet = false
                    store.state.connection_message = "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection."
                }
            }
        }

        xhr.addEventListener("readystatechange", processRequest, false)
    }
}

export const mutations = {}