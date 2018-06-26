import { normalize } from 'normalizr'
import schema from './schema'
import BlockHub from 'blockhub-protocol'
import * as ethereum from '@/framework/ethereum'
import * as db from '@/db'

let rawData = {
    contractMeta: null,
    contractAddress: null,
    selectedApp: null,
    products: [],
    upcomingProducts: [],
    newTrendingProducts: [],
    topSellingProducts: [],
    specialProducts: []
}

export let state = null

export const updateRawData = () => {
    rawData = {
        contractMeta: null,
        contractAddress: null,
        selectedApp: null,
        products: db.marketplace.products.data,
        upcomingProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['upcoming'] } }).data,
        newTrendingProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['newTrending'] } }).data,
        topSellingProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['topSellers'] } }).data,
        specialProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['specials'] } }).data
    }
}

export const updateState = () => {
    state = normalize(rawData, {
        products: [schema.product],
        upcomingProducts: [schema.product],
        newTrendingProducts: [schema.product],
        topSellingProducts: [schema.product],
        specialProducts: [schema.product]
    })
}

updateState()

export const getters = {
}

export const actions = {
    viewProduct(id) {
        console.log('viewProduct', id)
    },
    updateProduct(store, payload) {
        ethereum.getUserBalance().then((balance) => {
            payload.name = payload.name + ' ' + balance // Test

            store.commit('updateProduct', payload)
        })

        store.commit('updateProduct', payload)
    },
    submitProductForReviewRequest(store, payload) {
        // payload = name, version, category, files, checksum, permissions

        BlockHub.Ethereum.Models.Marketplace.submitAppForReview(payload).then((res) => {
            const product = db.marketplace.products.findOne({ 'name': product.name })
            product.id = res[0]
            // TODO: assign rest of props

            store.commit('submitProductForReviewResponse', product)
        })
    }
}

export const mutations = {
    updateProduct(state, payload) {
        const product = db.marketplace.products.findOne({ 'id': payload.id })

        product.name = payload.name
        state.entities.products[payload.id].name = payload.name

        db.save()
    },
    submitProductForReviewResponse(state, product) {
        db.marketplace.products.update(product)
    }
}

export const init = (cb) => {
    db.init(() => {
        console.log('[BlockHub] Database initialized')

        updateRawData()
        updateState()

        console.log(db.toObject(), JSON.stringify(db.toObject()))

        cb && cb()
    })
}
