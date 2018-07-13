import { normalize } from 'normalizr'
import schema from './schema'
import MarketplaceProtocol from 'marketplace-protocol'
import * as ethereum from '@/framework/ethereum'
import * as db from '@/db'

let rawData = {
    contractMeta: null,
    contractAddress: null,
    selectedProduct: null,
    assets: [],
    products: [],
    frontpage_product: {},
    upcoming_products: [],
    trending_products: [],
    top_selling_products: [],
    special_products: []
}

export let state = null

const updateState = () => {
    rawData = {
        ...rawData,
        assets: db.marketplace ? db.marketplace.assets.data : [],
        products: db.marketplace ? db.marketplace.products.data : [],
        frontpage_product: db.marketplace ? db.marketplace.products.findOne({ 'system_tags': { '$contains': ['frontpage'] } }) : {},
        featured_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['featured'] } }).data : [],
        upcoming_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['upcoming'] } }).data : [],
        trending_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['trending'] } }).data : [],
        top_selling_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['top_seller'] } }).data : [],
        special_products: db.marketplace ? db.marketplace.products.find({ 'system_tags': { '$contains': ['specials'] } }).data : []
    }

    const normalizedData = normalize(rawData, {
        assets: [schema.asset],
        products: [schema.product],
        frontpage_product: schema.product,
        upcoming_products: [schema.product],
        trending_products: [schema.product],
        top_selling_products: [schema.product],
        special_products: [schema.product]
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

