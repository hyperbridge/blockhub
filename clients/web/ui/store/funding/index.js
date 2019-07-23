import Vue from 'vue'
import * as DB from '../../db'


let localState = {
    currentEthereumNetwork: 'local',
    ethereum: {
        local: {
            contracts: {}
        }
    },
    defaultProject: {},
    projects: [],
    trendingProjects: [],
    topGameIdeas: [],
    topContentIdeas: [],
    topItemIdeas: [],
    mostPopularGames: []
}

export const state = () => localState

const updateState = (savedData, updatedState = {}) => {
    localState = {
        ...localState,
        ...savedData,
        ...updatedState
    }
}


export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Funding] Initializing...')

        updateState(DB.store.data[0].funding, store.state)

        store.commit('updateState', localState)
    },
    updateState(store, payload) {
        console.log('[BlockHub][Funding] Updating store...')

        updateState()

        store.commit('updateState', localState)
    },
    initEthereum(store, payload) {
        // Bridge
        //     .initProtocol({ protocolName: 'funding' })
        //     .then((config) => {
        //         store.state.ethereum[store.state.currentEthereumNetwork] = config
        //         store.dispatch('updateState')
        //     })
    }
}

export const mutations = {
    updateState(s, payload) {
        for (const x in payload) {
            Vue.set(s, x, payload[x])
        }
    }
}
