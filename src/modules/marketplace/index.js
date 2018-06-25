import { normalize } from 'normalizr'
import schema from './schema'
import BlockHub from 'blockhub-protocol'
import * as ethereum from '@/framework/ethereum'
import db from '@/db'

const rawData = {
    contractMeta: null,
    contractAddress: null,
    selectedApp: null,
    products: db.marketplace.products.data,
    upcomingProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['upcoming'] } }).data,
    newTrendingProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['newTrending'] } }).data,
    topSellingProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['topSellers'] } }).data,
    specialProducts: db.marketplace.products.find({ 'systemTags': { '$contains': ['specials'] } }).data
}

ethereum.init()

export default {
    state: normalize(rawData, {
        products: [schema.product],
        upcomingProducts: [schema.product],
        newTrendingProducts: [schema.product],
        topSellingProducts: [schema.product],
        specialProducts: [schema.product]
    }),
    getters: {
        getProduct(state) {
            return state.entities.products['5']
        }
    },
    actions: {
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
    },
    mutations: {
        updateProductTitle(state, { id, name }) {
            const product = db.marketplace.products.findOne({ 'name': state.entities.products[id].name })

            product.name = name
            state.entities.products[id].name = name
        },
        submitProductForReviewResponse(state, product) {
            db.marketplace.products.update(product)
        }
    }
}