import { normalize } from 'normalizr'
import schema from './schema'
import * as Ethereum from '../../framework/ethereum'
import * as PeerService from '../../framework/peer-service'
import * as db from '@/db'
import Token from 'hyperbridge-token'

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

export const getters = {
    privileges() {
        return [
            'edit'
        ]
    }
}

export const actions = {
    connect(store, payload) {
        console.log('[BlockHub] Network connecting...')

        store.dispatch('checkInternetConnection')
        store.dispatch('checkEthereumConnection')

        setInterval(() => {
            store.dispatch('checkEthereumConnection')
        }, 5000)
    },
    updateState(store, payload) {
        console.log('[BlockHub][Marketplace] Updating store...')

        updateState()

        store.commit('updateState', state)
    },
    initEthereum(store, payload) {
        if (store.state.ethereum[store.state.current_ethereum_network].contracts.Token
            && store.state.ethereum[store.state.current_ethereum_network].contracts.Token.address) {
            Token.Ethereum.Models.Token.init(
                Token.Ethereum.Contracts.Token,
                store.state.ethereum[store.state.current_ethereum_network].contracts.Token.address,
                store.state.ethereum[store.state.current_ethereum_network].user_from_address,
                store.state.ethereum[store.state.current_ethereum_network].user_to_address
            )
        }
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

            store.state.connection.status.code = 344
            store.state.connection.status.message = err

            // TODO: fallback to peer datasource
        }

        Ethereum.init().then(success, failure)
    },
    checkInternetConnection(store, payload) {
        console.log('[BlockHub] Connection status: ' + JSON.stringify(store.state.connection))
        
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

        xhr.addEventListener('readystatechange', processRequest, false)
    },
    signIn(store, payload) {
        store.commit('signIn', payload)
    },
    signOut(store, payload) {
        store.commit('signOut', payload)
    }
}

export const mutations = {
    updateState(s, payload) {
        for (let x in payload) {
            s[x] = payload[x]
        }
    },
    signIn(state, payload) {
        state.signed_in = true

        db.network.config.update(state)
        db.save()
    },
    signOut(state, payload) {
        state.signed_in = false

        db.network.config.update(state)
        db.save()
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
    async deployContract(state, payload) {
        if (!state.ethereum[state.current_ethereum_network].contracts[payload.contractName]) {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName] = {
                created_at: null,
                address: null
            }
        }

        const meta = Token.Ethereum.Contracts[payload.contractName]
        const contract = new window.web3.eth.Contract(meta.abi)

        contract.deploy({
            data: meta.bytecode
        }).send({
            from: state.ethereum[state.current_ethereum_network].user_from_address,
            gas: 4500000
        }).then((res) => {
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].created_at = Date.now()
            state.ethereum[state.current_ethereum_network].contracts[payload.contractName].address = res._address

            db.network.config.update(state)
            db.save()
        })
    }
}