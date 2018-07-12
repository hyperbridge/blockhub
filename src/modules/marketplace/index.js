import { normalize } from 'normalizr'
import schema from './schema'
import MarketplaceProtocol from 'marketplace-protocol'
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

const updateState = () => {
    rawData = {
        ...rawData,
        products: db.marketplace ? db.marketplace.products.data : [],
        upcomingProducts: db.marketplace ? db.marketplace.products.find({ 'systemTags': { '$contains': ['upcoming'] } }).data : [],
        newTrendingProducts: db.marketplace ? db.marketplace.products.find({ 'systemTags': { '$contains': ['newTrending'] } }).data : [],
        topSellingProducts: db.marketplace ? db.marketplace.products.find({ 'systemTags': { '$contains': ['topSellers'] } }).data : [],
        specialProducts: db.marketplace ? db.marketplace.products.find({ 'systemTags': { '$contains': ['specials'] } }).data : []
    }

    const normalizedData = normalize(rawData, {
        products: [schema.product],
        upcomingProducts: [schema.product],
        newTrendingProducts: [schema.product],
        topSellingProducts: [schema.product],
        specialProducts: [schema.product]
    })

    state = { ...rawData, ...normalizedData.entities }
}

updateState()

export const getters = {
}

export const actions = {
    init(store, payload) {
        console.log("[BlockHub][Marketplace] Initializing...")

        updateState()

        store.commit('updateState', state)

        //console.log(db.toObject(), JSON.stringify(db.toObject()))
    },
    updateState(store, payload) {
        console.log("[BlockHub][Marketplace] Updating store...")

        updateState()

        store.commit('updateState', state)
    },
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

        MarketplaceProtocol.Ethereum.Models.Marketplace.submitAppForReview(payload).then((res) => {
            const product = db.marketplace.products.findOne({ 'name': product.name })
            product.id = res[0]
            // TODO: assign rest of props

            store.commit('submitProductForReviewResponse', product)
        })
    }
}

export const mutations = {
    updateState(s, payload) {
        for (let x in payload) {
            s[x] = payload[x]
        }
    },
    updateProduct(state, payload) {
        const product = db.marketplace.products.findOne({ 'id': payload.id })

        product.name = payload.name
        state.products[payload.id].name = payload.name

        db.save()
    },
    submitProductForReviewResponse(state, product) {
        db.marketplace.products.update(product)
    }
}

