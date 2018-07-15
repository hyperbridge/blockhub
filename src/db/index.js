import Loki from 'lokijs'

const data = require('./data')

let loki = null
let initCallback = null

export let account = null

export let marketplace = {
    config: null,
    products: null,
    assets: null
}

export let funding = {
    projects: null
}

export let setInitCallback = (cb) => {
    initCallback = cb
}

export const init = () => {

    const databaseInitialize = () => {
        console.log('[BlockHub] Database loaded from IndexedDB')

        if (loki.getCollection('account')) {
            account = loki.getCollection('account')
            marketplace.config = loki.getCollection('marketplaceConfig')
            marketplace.products = loki.getCollection('marketplaceProducts')
            marketplace.assets = loki.getCollection('marketplaceAssets')
            funding.projects = loki.getCollection('fundingProjects')
        } else {
            let accountData = account.data
            let marketplaceConfigData = marketplace.config.data
            let marketplaceProductsData = marketplace.products.data
            let marketplaceAssetsData = marketplace.assets.data
            let fundingProjectsData = funding.projects.data

            account = loki.addCollection('account')
            marketplace.config = loki.addCollection('marketplaceConfig')
            marketplace.products = loki.addCollection('marketplaceProducts')
            marketplace.assets = loki.addCollection('marketplaceAssets')
            funding.projects = loki.addCollection('fundingProjects')

            account.data = accountData
            marketplace.products.data = marketplaceProductsData
            marketplace.assets.data = marketplaceAssetsData
            funding.projects.data = fundingProjectsData
            marketplace.config.data = marketplaceConfigData

            account.ensureId()
            account.ensureAllIndexes(true)

            marketplace.config.ensureId()
            marketplace.config.ensureAllIndexes(true)
        }

        initCallback()
    }

    const idbAdapter = (new Loki()).getIndexedAdapter()

    loki = new Loki('main.db', {
        adapter: new idbAdapter('main.db'),
        autoload: true,
        autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 4000
    })

    account = loki.addCollection('accountDefault')
    marketplace.config = loki.addCollection('marketplaceConfigDefault')
    marketplace.products = loki.addCollection('marketplaceProductsDefault')
    marketplace.assets = loki.addCollection('marketplaceAssetsDefault')
    funding.projects = loki.addCollection('fundingProjectsDefault')

    data.marketplace.id = '1'

    try {
        updateCollection(marketplace.config, data.marketplace)
        updateCollection(marketplace.products, data.marketplace.products)
        updateCollection(marketplace.assets, data.marketplace.assets)
        updateCollection(funding.projects, data.funding.projects)
    }
    catch (e) {
        console.warn(e)
    }
}

export const instance = () => {
    return loki
}

export const save = () => {
    loki.saveDatabase(function (err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("[BlockHub] Database saved.")
        }
    })
}

export const clean = () => {
    // loki.getCollection('marketplaceConfig') && loki.getCollection('marketplaceConfig').chain().remove()
    // loki.getCollection('marketplaceProducts') && loki.getCollection('marketplaceProducts').chain().remove()
    // loki.getCollection('marketplaceAssets') && loki.getCollection('marketplaceAssets').chain().remove()
    // loki.getCollection('fundingProjects') && loki.getCollection('fundingProjects').chain().remove()

    // account = loki.getCollection('account') ? loki.getCollection('account') : loki.addCollection('account')

    // marketplace = {
    //     config: loki.getCollection('marketplaceConfig') ? loki.getCollection('marketplaceConfig') : loki.addCollection('marketplaceConfig'),
    //     products: loki.getCollection('marketplaceProducts') ? loki.getCollection('marketplaceProducts') : loki.addCollection('marketplaceProducts'),
    //     assets: loki.getCollection('marketplaceAssets') ? loki.getCollection('marketplaceAssets') : loki.addCollection('marketplaceAssets')
    // }

    // funding = {
    //     projects: loki.getCollection('fundingProjects') ? loki.getCollection('fundingProjects') : loki.addCollection('fundingProjects')
    // }
}

const updateCollection = (collection, data) => {
    let obj = collection.findObject({ 'id': data.id })

    if (obj) {
        collection.update(data)
    } else {
        collection.insert(data)
    }
}

export const reload = () => {
    //clean()

}

export const toObject = () => {
    return {
        account: account.data,
        marketplace: {
            products: marketplace.products.data,
            assets: marketplace.assets.data
        }
    }
}

init()