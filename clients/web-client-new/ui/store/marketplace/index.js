import Vue from 'vue'
import { normalize } from 'normalizr'
import schema from './schema'
import * as DB from '../../db'
import * as Bridge from '../../framework/desktop-bridge'

let rawData = {}

let localState = null

export const state = () => localState

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
        ideas: DB.marketplace.config.data[0].ideas,
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
        ...updatedState
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

    localState = { ...rawData, ...normalizedData.entities }
}

const sortDir = (dir, asc) => asc ? dir : dir * -1

export const getters = {
    assetsArray: state => Array.isArray(state.assets) ? state.assets : Object.values({}),
    productsArray: state => Array.isArray(state.products) ? state.products : Object.values({}),
    getProductsQuery: state => query => DB.marketplace.products.find(query),
    productsTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.developerTags
                .filter(tag =>
                    !tags.includes(tag))
        ], []).sort(),
    systemTags: (state, getters) => getters.productsArray
        .reduce((tags, product) => [
            ...tags,
            ...product.systemTags
                .filter(tag =>
                    !tags.includes(tag))
        ], []).sort(),
    productsLanguages: (state, getters) => getters.productsArray
        .reduce((languages, product) => [
            ...languages,
            ...product.languageSupport
                .filter(lang =>
                    !languages.includes(lang.name))
                .map(lang => lang.name)
        ], []).sort(),
    getProductsByName: (state, getters) => name => getters.productsArray.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())),
    getProductsFiltered: (state, getters) => ({ name, tags, sortBy }) => getters.productsArray
        .filter(product => name && name.length
            ? product.name.toLowerCase().includes(name.toLowerCase())
            : true)
        .filter(product => tags && tags.length
            ? product.developerTags.some(genre => this.selectedGenres.includes(genre))
            : true)
        .sort((a, b) => sortBy
            ? a[sortBy.property] > b[sortBy.property]
                ? sortDir(1, sortBy.asc)
                : a[sortBy.property] < b[sortBy.property] ? sortDir(-1, sortBy.asc) : 0
            : 0),
    assetsProducts: (state, getters) => getters.assetsArray.reduce((products, asset) =>
        products.includes(asset.productName)
            ? products
            : [...products, asset.productName]
    , []).sort()
}

export const actions = {
    init(store, payload) {
        console.log('[BlockHub][Marketplace] Initializing...')

        updateState(DB.marketplace.config.data[0], store.state)

        store.commit('updateState', localState)
    },
    initEthereum(store, payload) {
        // Bridge.initProtocol({ protocolName: 'marketplace' }).then((config) => {
        //     store.state.ethereum[store.state.currentEthereumNetwork] = config
        //     store.dispatch('updateState')
        // })
    },
    updateState(store, payload) {
        // console.log("[BlockHub][Marketplace] Updating store...")

        updateState(store.state, payload)

        store.commit('updateState', localState)
    },
    viewProduct(id) {
        console.log('viewProduct', id)
    },
    // updateProduct(store, payload) {
    //     const success = () => {
    //         const product = DB.marketplace.products.findOne({ 'id': id })

    //         Object.assign(product, payload)

    //         DB.marketplace.products.update(product)
    //         DB.save()

    //         store.commit('updateProduct', { id, data: product })
    //     }

    //     MarketplaceProtocol.Ethereum.Models.Marketplace.updateProduct({
    //         id: payload.id,
    //         name: payload.name,
    //         version: '2',
    //         category: '1',
    //         files: '1',
    //         checksum: '1',
    //         permissions: '1'
    //     }).then((res) => {
    //         success()
    //     })
    // },
    submitProductForReviewRequest(store, payload) {
        // payload = name, version, category, files, checksum, permissions

        MarketplaceProtocol.Ethereum.Models.Marketplace.submitAppForReview(payload).then(res => {
            const product = DB.marketplace.products.findOne({ 'name': product.name })
            product.id = res[0]
            // TODO: assign rest of props

            store.commit('submitProductForReviewResponse', product)
        })
    },
    addToCollection({ commit }, payload) {
        commit('activeCollectionModal', payload)
        commit('application/activateModal', 'collection-add', { root: true })
    }
}

export const mutations = {
    activeCollectionModal(state, payload) {
        state.activeCollectionModal = payload
    },
    updateState(state, payload) {
        for (const x in payload) {
            Vue.set(state, x, payload[x])
        }

        for (const product of Object.values(state.products)) {
            DB.updateCollection(DB.marketplace.products, product)
        }

        DB.marketplace.config.update(state)
        DB.save()
    },
    update(state, { prop = 'products', id, data }) {
        state[prop][id] = { ...state[prop][id], ...data }
    },
    syncProductBlockchain(store, payload) {
        if (payload.meta.blockchainId) {
            const run = function(
                local,
                DB,
                Bridge,
                FundingAPI,
                MarketplaceAPI,
                TokenAPI,
                ReserveAPI,
                BABEL_PROMISE,
                BABEL_GENERATOR,
                BABEL_REGENERATOR,
                params
            ) {
                const { product, profile } = params

                return new Promise(async (resolve, reject) => {
                    const productRegistrationContract = MarketplaceAPI.api.ethereum.state.contracts.ProductRegistration.deployed

                    await productRegistrationContract.editProductInfo(
                        product.id,
                        product.name,
                        product.type,
                        product.content,
                        { from: profile.address }
                    )

                    resolve(product)
                })
            }

            const cmd = {
                code: run.toString(),
                params: {
                    profile: BlockHub.store.state.application.activeProfile,
                    product: this.product
                }
            }

            this.$desktop.sendCommand('eval', cmd).then(productResult => {
                if (productResult.id) {
                    // this.successfulCreationMessage = "Product has been saved"
                }
            })
        } else {
            const run = function(
                local,
                DB,
                Bridge,
                FundingAPI,
                MarketplaceAPI,
                TokenAPI,
                ReserveAPI,
                BABEL_PROMISE,
                BABEL_GENERATOR,
                BABEL_REGENERATOR,
                params
            ) {
                const { product, profile } = params

                return new Promise(async (resolve, reject) => {
                    const productRegistrationContract = MarketplaceAPI.api.ethereum.state.contracts.ProductRegistration.deployed

                    if (!productRegistrationContract) { return reject('Contract not setup') }

                    let created = false

                    const watcher = productRegistrationContract.ProductCreated().watch((err, res) => {
                        if (created) return

                        created = true

                        if (err) {
                            console.warn('[BlockHub][Marketplace] Error', err)

                            return reject(err)
                        }

                        product.$loki = undefined
                        product.id = res.args.productId.toNumber()

                        try {
                            DB.marketplace.products.insert(product)
                            console.log('after', product.id)
                        } catch (e) {
                            try {
                                DB.marketplace.products.update(product)
                            } catch (e) {
                                reject(e)
                            }
                        }

                        DB.save()

                        Bridge.sendCommand('updateState', {
                            module: 'marketplace',
                            state: {
                                products: DB.marketplace.products.data
                            }
                        })

                        console.log('Product created')

                        resolve(product)
                    })

                    await productRegistrationContract.createProduct(
                        product.name,
                        product.type,
                        product.content,
                        { from: profile.address }
                    )

                    watcher.stopWatching(() => {
                        // Must be async or tries to launch nasty process
                    })
                })
            }

            const cmd = {
                code: run.toString(),
                params: {
                    profile: BlockHub.store.state.application.activeProfile,
                    product: payload
                }
            }

            this.$desktop.sendCommand('eval', cmd).then(productResult => {
                if (productResult.id) {
                    // payload.meta.blockchainId = productResult.id
                    // this.successfulCreationMessage = "Congratulations, your product has been synced!"

                    // store.state.products[this.product.id] = payload
                    BlockHub.store.state.products.keyedById[payload.id].meta.blockchainId = productResult.id

                    // BlockHub.router.push('/business/product/' + this.product.id)
                }
            })
        }
    }
}
