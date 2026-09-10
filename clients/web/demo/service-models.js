const keyed = records => Object.fromEntries(records.map(record => [record.id, record]))

export function serviceModels(name, config, world) {
    if (name !== 'assets') return config
    const assets = keyed(world.assets)
    const offers = world.offers.map(offer => ({ ...offer, asset: assets[offer.asset], seller: world.profiles.find(profile => profile.id === offer.seller), bids: [{ value: offer.marketValue, user: world.profiles[0] }] }))
    const transactions = keyed(world.transactions)
    return {
        ...config,
        state: {
            ...config.state, assets, filters: [], transactions: world.transactions, trxs: transactions,
            navigator: { 1: { id: 1, assetId: 1, isRoot: true, evolvesTo: [2] }, 2: { id: 2, assetId: 2, isRoot: false, evolvesTo: [] } }
        },
        getters: {
            ...config.getters,
            assets: () => assets,
            assetsArray: () => world.assets,
            inventoryAssets: () => world.assets,
            selectedAssets: () => world.assets.filter(asset => asset.selected),
            assetsByName: () => name => world.assets.filter(asset => asset.name.toLowerCase().includes(String(name).toLowerCase())),
            filters: state => state.filters,
            offers: () => keyed(offers),
            offersMap: () => Object.entries(keyed(offers)),
            prospectors: () => keyed(world.prospectors),
            prospectorsMap: () => Object.entries(keyed(world.prospectors.map(item => ({ ...item, asset: assets[item.asset], user: world.profiles.find(profile => profile.id === item.user) })))),
            transactions: () => transactions,
            transactionsArray: () => world.transactions
        },
        mutations: {
            ...config.mutations,
            updateAsset(state, { id, data }) { Object.assign(assets[id], data) },
            updateAssets(state, { data, ids }) { world.assets.filter(asset => !ids || ids.includes(asset.id)).forEach(asset => Object.assign(asset, data)) }
        }
    }
}
