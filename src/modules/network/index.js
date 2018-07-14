import { normalize } from 'normalizr'
import schema from './schema'
import * as Ethereum from '../../framework/ethereum'
import * as PeerService from '../../framework/peer-service'

let rawData = {
    connection: {
        internet: false,
        datasource: false,
        operator: false,
        ethereum: false,
        status: {
            code: null,
            message: "Establishing connection..."
        }
    },
    user_submitted_connection_messages: [
        {
            id: '1',
            message: 'wubba lubba dub dubbbb',
            user: {
                id: '0x0',
                name: 'fr0stbyte'
            }
        },
        {
            id: '2',
            message: 'LOADING SIMULATION',
            user: {
                id: '0x0',
                name: 'GymTim'
            }
        }
    ],
    account: {
        wallets: [
            {
                id: '1',
                name: 'Bitcoin',
                icon: '',
                short_name: 'BTC',
                count: '0.00827',
                history: [
                    {
                        time: '14:00',
                        percent: '0.93',
                        direction: 'up'
                    },
                    {
                        time: '14:30',
                        percent: '0.53',
                        direction: 'down'
                    },
                    {
                        time: '15:00',
                        percent: '0.67',
                        direction: 'up'
                    }
                ],
                wallet_number: 'QMdp32odsoN45insPS91ninZPEld9',
                preferred_switcher: true
            },
            {
                id: '2',
                name: 'Ethereum',
                icon: '',
                short_name: 'ETH',
                count: '0.00015',
                history: [
                    {
                        time: '11:00',
                        percent: '0.03',
                        direction: 'up'
                    },
                    {
                        time: '12:30',
                        percent: '0.027',
                        direction: 'down'
                    },
                    {
                        time: '13:00',
                        percent: '0.031',
                        direction: 'up'
                    }
                ],
                wallet_number: 'kKJV798BIUFvu6ibkvVV7',
                preferred_switcher: false
            },
            {
                id: '3',
                name: 'Viacoin',
                icon: '',
                short_name: 'VIA',
                count: '0.00045',
                history: [
                    {
                        time: '11:00',
                        percent: '0.03',
                        direction: 'up'
                    },
                    {
                        time: '12:30',
                        percent: '0.027',
                        direction: 'down'
                    },
                    {
                        time: '13:00',
                        percent: '0.031',
                        direction: 'up'
                    }
                ],
                wallet_number: 'kKJV798BIUFvu6ibkvVV7',
                preferred_switcher: false
            },
            {
                id: '4',
                name: 'Monero',
                icon: '',
                short_name: 'XMR',
                count: '0.00045',
                history: [
                    {
                        time: '11:00',
                        percent: '0.03',
                        direction: 'up'
                    },
                    {
                        time: '12:30',
                        percent: '0.027',
                        direction: 'down'
                    },
                    {
                        time: '13:00',
                        percent: '0.031',
                        direction: 'up'
                    }
                ],
                wallet_number: 'kKJV798BIUFvu6ibkvVV7',
                preferred_switcher: true
            }
        ],
        identities: [
            {
                id: '1',
                name: 'aaa'
            }
        ]
    }
}


export let state = null

const updateState = () => {
    rawData = {
        ...rawData,
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