import Vue from 'vue'
import Vuex from 'vuex'

import * as ChaosMonkey from '../framework/chaos-monkey'
import funding from '../modules/funding'
import news from '../modules/news'
import * as marketplace from '../modules/marketplace'
import * as network from '../modules/network'
import * as database from '../modules/database'

Vue.use(Vuex)


let initializer = (store) => {
    store.dispatch('database/init')
    store.dispatch('marketplace/init')

    store.subscribe((mutation, state) => {
        if (mutation.type === 'database/initialized') {
            if (ChaosMonkey.random()) {
                // Hey devs, lets have some fun
                // Bye bye data
                // Things still workie?
                store.dispatch('database/clean')
            }
        } else if (mutation.type === 'database/updateState') {
            store.dispatch('marketplace/updateState')
        }
    });
};

const store = new Vuex.Store({
    plugins: [initializer],
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


// marketplace.init(() => {
//     console.log('[BlockHub] Marketplace initialized. Updating store state.')

//     store.state.marketplace = marketplace.state
// })


export default store