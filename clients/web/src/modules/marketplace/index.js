import Vue from 'vue'
import { normalize } from 'normalizr'
import schema from './schema'
import * as DB from '@/db'
import * as Bridge from '@/framework/desktop-bridge'

let rawData = {}

export let state = {}

const updateState = (savedData, updatedState = {}) => {
    rawData = {
        ...rawData,
        ...savedData,
        assets: DB.marketplace ? DB.marketplace.assets.data : [],
        products: DB.marketplace ? DB.marketplace.products.data : [],
        posts: DB.marketplace ? DB.marketplace.posts.data : [],
        collections: DB.marketplace.config.data[0].collections,
        realms: DB.marketplace.config.data[0].realms,
        curatorReviews: DB.marketplace.config.data[0].curatorReviews,
        posts: DB.marketplace.config.data[0].posts,
        gameSeries: DB.marketplace.config.data[0].gameSeries,
        frontpageProduct: DB.marketplace ? DB.marketplace.products.findOne({ 'systemTags': { '$contains': ['frontpage'] } }) : {},
        newProducts: DB.marketplace ? DB.marketplace.products.find({ 'systemTags': { '$contains': ['new'] } }) : [],
        featuredProducts: DB.marketplace ? DB.marketplace.products.find({ 'systemTags': { '$contains': ['featured'] } }) : [],
        upcomingProducts: DB.marketplace ? DB.marketplace.products.find({ 'systemTags': { '$contains': ['upcoming'] } }) : [],
        trendingProducts: DB.marketplace ? DB.marketplace.products.find({ 'systemTags': { '$contains': ['trending'] } }) : [],
        topSellingProducts: DB.marketplace ? DB.marketplace.products.find({ 'systemTags': { '$contains': ['topSeller'] } }) : [],
        specialProducts: DB.marketplace ? DB.marketplace.products.find({ 'systemTags': { '$contains': ['specials'] } }) : [],
        productNews: DB.marketplace ? DB.marketplace.posts.find({ 'target': { '$eq': ['product'] }, 'systemTags': { '$contains': ['news'] } }) : [],
        topFree: DB.marketplace ? DB.marketplace.products.find({ 'price': { '$eq': 0 } }) : [],
        top5: DB.marketplace ? DB.marketplace.products.find({ 'rating.overall': { '$gte': 5 } }) : [],
        ...updatedState,
    }

    const normalizedData = normalize(rawData, {
        assets: [schema.asset],
        products: [schema.product],
        frontpageProduct: schema.product,
        newProducts: [schema.product],
        saleProducts: [schema.product],
        upcomingProducts: [schema.product],
        trendingProducts: [schema.product],
        topSellingProducts: [schema.product],
        specialProducts: [schema.product]
    })

    state = { ...rawData, ...normalizedData.entities }
}

const sortDir = (dir, asc) => asc ? dir : dir * -1

export const getters = {
    assetsArray: state => Array.isArray(state.assets) ? state.assets : Object.values(state.assets),
    productsArray: state => Array.isArray(state.products) ? state.products : Object.values(state.products),
    getProductsQuery: state => query => DB.marketplace.products.find(query),
    productsTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.developerTags
                .filter(tag =>
                    !tags.includes(tag)
                )
        ], []).sort()
    ,
    systemTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.systemTags
                .filter(tag =>
                    !tags.includes(tag)
                )
        ], []).sort()
    ,
    productsLanguages: (state, getters) => getters.productsArray
        .reduce((languages, product) => [
            ...languages,
            ...product.languageSupport
                .filter(lang =>
                    !languages.includes(lang.name)
                )
                .map(lang => lang.name)
        ], []).sort()
    ,
    getProductsByName: (state, getters) => name => getters.productsArray.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
    ),
    getProductsFiltered: (state, getters) => ({ name, tags, sortBy }) => getters.productsArray
        .filter(product => name && name.length
            ? product.name.toLowerCase().includes(name.toLowerCase())
            : true
        )
        .filter(product => tags && tags.length
            ? product.developerTags.some(genre => this.selectedGenres.includes(genre))
            : true
        )
        .sort((a, b) => sortBy
            ? a[sortBy.property] > b[sortBy.property]
                ? sortDir(1, sortBy.asc)
                : a[sortBy.property] < b[sortBy.property] ? sortDir(-1, sortBy.asc) : 0
            : 0
        )
    ,
    assetsProducts: (state, getters) => getters.assetsArray.reduce((products, asset) =>
        products.includes(asset.productName)
            ? products
            : [ ...products, asset.productName ]
        , []).sort()
}

export const actions = {
    init(store, payload) {
        console.log("[BlockHub][Marketplace] Initializing...")

        updateState(DB.marketplace.config.data[0], store.state)

        store.commit('updateState', state)
    },
    initEthereum(store, payload) {
        // Bridge.initProtocol({ protocolName: 'marketplace' }).then((config) => {
        //     store.state.ethereum[store.state.currentEthereumNetwork] = config
        //     store.dispatch('updateState')
        // })
    },
    updateState(store, payload) {
        //console.log("[BlockHub][Marketplace] Updating store...")

        updateState(store.state, payload)

        store.commit('updateState', state)
    },
    viewProduct(id) {
        console.log('viewProduct', id)
    },
    updateProduct(store, payload) {
        const success = () => {
            const product = DB.marketplace.products.findOne({ 'id': id })

            Object.assign(product, payload)

            DB.marketplace.products.update(product)
            DB.save()

            store.commit('updateProduct', { id, data: product })
        }

        MarketplaceProtocol.Ethereum.Models.Marketplace.updateProduct({
            id: payload.id,
            name: payload.name,
            version: '2',
            category: '1',
            files: '1',
            checksum: '1',
            permissions: '1'
        }).then((res) => {
            success()
        })
    },
    submitProductForReviewRequest(store, payload) {
        // payload = name, version, category, files, checksum, permissions

        MarketplaceProtocol.Ethereum.Models.Marketplace.submitAppForReview(payload).then((res) => {
            const product = DB.marketplace.products.findOne({ 'name': product.name })
            product.id = res[0]
            // TODO: assign rest of props

            store.commit('submitProductForReviewResponse', product)
        })
    }
}

export const mutations = {
    updateState(state, payload) {
        for (let x in payload) {
            Vue.set(state, x, payload[x])
        }

        for (let product of state.products) {
            DB.updateCollection(DB.marketplace.products, product)
        }
        
        DB.marketplace.config.update(state)
        DB.save()
    },
    update(state, { prop = 'products', id, data }) {
        state[prop][id] = { ...state[prop][id], ...data }
    }
}

