import Vue from 'vue'
import { normalize } from 'normalizr'
import schema from './schema'
import * as DB from '@/db'
import * as DesktopBridge from '@/framework/desktop-bridge'

let rawData = {};

export let state = {};

const updateState = (savedData, updatedState = {}) => {
    rawData = {
        ...rawData,
        ...savedData,
        assets: DB.marketplace ? DB.marketplace.assets.data : [],
        products: DB.marketplace ? DB.marketplace.products.data : [],
        posts: DB.marketplace ? DB.marketplace.posts.data : [],
        collections: DB.marketplace.config.data[0].collections
            .reduce((collections, collection) => ({ ...collections, [collection.id]: collection }) ,{}),
        realms: DB.marketplace.config.data[0].realms,
        curator_reviews: DB.marketplace.config.data[0].curator_reviews,
        posts: DB.marketplace.config.data[0].posts,
        game_series: DB.marketplace.config.data[0].game_series,
        frontpage_product: DB.marketplace ? DB.marketplace.products.findOne({ 'system_tags': { '$contains': ['frontpage'] } }) : {},
        new_products: DB.marketplace ? DB.marketplace.products.find({ 'system_tags': { '$contains': ['new'] } }) : [],
        featured_products: DB.marketplace ? DB.marketplace.products.find({ 'system_tags': { '$contains': ['featured'] } }) : [],
        upcoming_products: DB.marketplace ? DB.marketplace.products.find({ 'system_tags': { '$contains': ['upcoming'] } }) : [],
        trending_products: DB.marketplace ? DB.marketplace.products.find({ 'system_tags': { '$contains': ['trending'] } }) : [],
        top_selling_products: DB.marketplace ? DB.marketplace.products.find({ 'system_tags': { '$contains': ['top_seller'] } }) : [],
        special_products: DB.marketplace ? DB.marketplace.products.find({ 'system_tags': { '$contains': ['specials'] } }) : [],
        product_news: DB.marketplace ? DB.marketplace.posts.find({ 'target': { '$eq': ['product'] }, 'system_tags': { '$contains': ['news'] } }) : [],
        top_free: DB.marketplace ? DB.marketplace.products.find({ 'price': { '$eq': 0 } }) : [],
        top_5: DB.marketplace ? DB.marketplace.products.find({ 'rating.overall': { '$gte': 5 } }) : [],
        ...updatedState,
    }

    const normalizedData = normalize(rawData, {
        assets: [schema.asset],
        products: [schema.product],
        frontpage_product: schema.product,
        new_products: [schema.product],
        sale_products: [schema.product],
        upcoming_products: [schema.product],
        trending_products: [schema.product],
        top_selling_products: [schema.product],
        special_products: [schema.product]
    })

    state = { ...rawData, ...normalizedData.entities } // ...normalizedData.result,
}

const sortDir = (dir, asc) => asc ? dir : dir * -1;

export const getters = {
    assetsArray: state => Array.isArray(state.assets) ? state.assets : Object.values(state.assets),
    productsArray: state => Array.isArray(state.products) ? state.products : Object.values(state.products),
    getProductsQuery: state => query => DB.marketplace.products.find(query),
    productsTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.developer_tags
                .filter(tag =>
                    !tags.includes(tag)
                )
        ], []).sort()
    ,
    systemTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.system_tags
                .filter(tag =>
                    !tags.includes(tag)
                )
        ], []).sort()
    ,
    productsLanguages: (state, getters) => getters.productsArray
        .reduce((languages, product) => [
            ...languages,
            ...product.language_support
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
            ? product.developer_tags.some(genre => this.selectedGenres.includes(genre))
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
        products.includes(asset.product_name)
            ? products
            : [ ...products, asset.product_name ]
        , []).sort()
};

export const actions = {
    init(store, payload) {
        console.log("[BlockHub][Marketplace] Initializing...")

        updateState(DB.marketplace.config.data[0], store.state)

        store.commit('updateState', state)
    },
    initEthereum(store, payload) {
        // DesktopBridge.initProtocol({ protocolName: 'marketplace' }).then((config) => {
        //     store.state.ethereum[store.state.current_ethereum_network] = config
        //     store.dispatch('updateState')
        // })
    },
    updateState(store, payload) {
        //console.log("[BlockHub][Marketplace] Updating store...")

        updateState(store.state)

        store.commit('updateState', state)
    },
    deployContract(store, payload) {
        return new Promise((resolve, reject) => {
            DesktopBridge
                .deployContract({ protocolName: 'marketplace', contractName: payload.contractName })
                .then((contract) => {
                    state.ethereum[state.current_ethereum_network].contracts[payload.contractName] = contract
                    store.dispatch('updateState')

                    resolve(contract)
                })
        })
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
    },
    updateProduct(state, payload) {
        Vue.set(state.products, payload.id, payload.data)
    },
    createProduct(state, payload) {
        const success = (id) => {
            const product = DB.marketplace.products.insert({ id, ...payload })

            Object.assign(product, payload)

            DB.marketplace.products.update(product)
            DB.save()

            Vue.set(state.products, id, product)
        }

        MarketplaceProtocol.ethereum.modules.marketplace.createProduct({
            name: payload.name,
            version: '1',
            category: '1',
            files: '1',
            checksum: '1',
            permissions: '1'
        }).then((res) => {
            success(res[0])
        })
    },
    submitProductForReviewResponse(state, product) {
        DB.marketplace.products.update(product)
    }
}

