import { normalize } from 'normalizr'
import schema from './schema'
import BlockHub from 'blockhub-protocol'
import * as ethereum from '@/framework/ethereum'
import * as db from '@/db'

const data = require('json-loader!yaml-loader!../../db/data.yaml')

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
    getProduct(state) {
        return state.entities.products['5']
    }
}

export const actions = {
    viewProduct(id) {
        console.log('viewProduct', id)
    },
    updateProductTitle(store, payload) {
        ethereum.getUserBalance().then((balance) => {
            store.commit('updateProductTitle', { id: '5', name: balance })
        })

        store.commit('updateProductTitle', payload)
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
    updateProductTitle(state, { id, name }) {
        const product = db.marketplace.products.findOne({ 'name': state.entities.products[id].name })

        product.name = name
        state.entities.products[id].name = name

        db.save()
    },
    submitProductForReviewResponse(state, product) {
        db.marketplace.products.update(product)
    }
}

export const init = (cb) => {
    ethereum.init()

    db.init(() => {
        console.log('[BlockHub] Database initialized')

        // updateRawData()
        //console.log(db.marketplace.products.data)
        //state.products = normalize(db.marketplace.products.data, [schema.product])

        updateRawData()
        updateState()

        console.log(JSON.stringify(db.toObject()))

        //console.log(state.products)
        // , {
        //     products: [schema.product],
        //     upcomingProducts: [schema.product],
        //     newTrendingProducts: [schema.product],
        //     topSellingProducts: [schema.product],
        //     specialProducts: [schema.product]
        // })
        cb && cb()
    })
}
