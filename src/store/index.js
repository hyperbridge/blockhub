import Vue from 'vue'
import Vuex from 'vuex'

import funding from '../modules/funding'
import news from '../modules/news'
import * as marketplace from '../modules/marketplace'
import * as network from '../modules/network'
import * as database from '../modules/database'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        marketplace: {
            namespaced: true,
            state: marketplace.state,
            getters: marketplace.getters,
            actions: marketplace.actions,
            mutations: marketplace.mutations
        },
        database: {
            namespaced: true,
            state: database.state,
            getters: database.getters,
            actions: database.actions,
            mutations: database.mutations
        },
        funding: {
            namespaced: true,
            state: funding.state,
            getters: funding.getters,
            actions: funding.actions,
            mutations: funding.mutations
        },
        news: {
            namespaced: true,
            state: news.state,
            getters: news.getters,
            actions: news.actions,
            mutations: news.mutations
        },
        network: {
            namespaced: true,
            state: network.state,
            getters: network.getters,
            actions: network.actions,
            mutations: network.mutations
        }
    }
})


marketplace.init(() => {
    console.log('[BlockHub] Marketplace initialized. Updating store state.')

    store.state.marketplace = marketplace.state
})


export default store