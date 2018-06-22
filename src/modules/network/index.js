import { normalize } from 'normalizr'
import schema from './schema'

const rawData = {
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

export default {
    state: normalize(rawData, { account: schema.account }),
    getters: {
    },
    actions: {
    },
    mutations: {
    }
}