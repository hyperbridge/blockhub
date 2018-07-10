import { normalize } from 'normalizr'
import schema from './schema'
import * as Ethereum from '../../framework/ethereum'
import * as PeerService from '../../framework/peer-service'

const rawData = {
    connection: {
        internet: false,
        ethereum: false
    },
    connectionMessage: "Establishing connection...",
    account: {
        wallets: [
            {
                id: '1',
                name: 'Bitcoin',
                token: '',
                amount: '1'
            },
            {
                id: '2',
                name: 'Ethereum',
                token: '',
                amount: '21'
            },
            {
                id: '3',
                name: 'Hyperbridge',
                token: '',
                amount: '34'
            },
            {
                id: '4',
                name: 'Civic',
                token: '',
                amount: '10'
            },
        ],
        identities: [
            {
                id: '1',
                name: 'aaa'
            }
        ]
    }
}

export let state = normalize(rawData, {
    account: schema.account,
    wallets: [schema.wallet],
    identities: [schema.identity]
})

state = {...state, ...state.result}

export const getters = {}

export const actions = {
    connect(store, payload) {
        console.log('[BlockHub] Network connecting...')

        store.dispatch('checkInternetConnection')
        store.dispatch('checkEthereumConnection')
    },
    checkEthereumConnection(store, payload) {
        const success = () => {
            store.state.connection.ethereum = true
        }

        const failure = () => {
            store.state.connection.ethereum = false
        }

        Ethereum.init().then(success, failure)
    },
    checkInternetConnection(store, payload) {
        console.log('[BlockHub] Connection status: ', store.state.connection)
        
        if (!navigator.onLine) {
            store.state.connection.internet = false
            store.state.connectionMessage = "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection."
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
                    store.state.connectionMessage = "Connected."
                } else {
                    store.state.connection.internet = false
                    store.state.connectionMessage = "Could not connect to the internet. Some features may not be available. Please check your firewall or internet connection."
                }
            }
        }

        xhr.addEventListener("readystatechange", processRequest, false)
    }
}

export const mutations = {}