import Loki from 'lokijs'

const data = require('./data')

let loki = null

export let marketplace = null
export let funding = null
export let account = null
export let republic = null


export const init = (cb) => {
    const databaseInitialize = () => {
        reload()

        cb && cb()
    }

    const idbAdapter = (new Loki()).getIndexedAdapter()

    loki = new Loki('main.db', {
        adapter: new idbAdapter('main.db'),
        autoload: true,
        autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 4000
    })
}

export const instance = () => {
    return loki
}

export const save = () => {
    loki.saveDatabase(function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Database saved.");
        }
    })
}

export const clean = () => {
    loki.getCollection('account') && loki.getCollection('account').chain().remove()
    loki.getCollection('republicCitizens') && loki.getCollection('republicCitizens').chain().remove()
    loki.getCollection('republicCouncilDelegates') && loki.getCollection('republicCouncilDelegates').chain().remove()
    loki.getCollection('republicElections') && loki.getCollection('republicElections').chain().remove()
    loki.getCollection('marketplaceProducts') && loki.getCollection('marketplaceProducts').chain().remove()
    loki.getCollection('marketplaceAssets') && loki.getCollection('marketplaceAssets').chain().remove()
    loki.getCollection('fundingProjects') && loki.getCollection('fundingProjects').chain().remove()

    account = loki.addCollection('account')

    republic = {
        citizens: loki.addCollection('republicCitizens'),
        delegates: loki.addCollection('republicCouncilDelegates'),
        elections: loki.addCollection('republicElections')
    }

    marketplace = {
        products: loki.addCollection('marketplaceProducts'),
        assets: loki.addCollection('marketplaceAssets')
    }

    funding = {
        projects: loki.addCollection('fundingProjects')
    }
}

export const reload = () => {
    clean()

    marketplace.products.insert(data.marketplace.products)
    marketplace.assets.insert(data.marketplace.assets)

    funding.projects.insert(data.funding.projects)

    republic.delegates.insert([
        {
            name: 'Hyperbridge',
            address: "0x0",
            industry: "Technology"
        }
    ])

    republic.citizens.insert([
        {
            name: "eric",
            address: "0x0",
            apps: [
                {
                    id: "0asdasd0a-adsasda-asdasd9",
                    name: "blockhub",
                    link: "http://something/blockhub.exe"
                }
            ]
        }
    ])

    republic.elections.insert([
        {
            title: '2018 Election',
            description: 'We intend to do things. Learn more here: https://hyperbridge.org/election2018',
            startAt: '03-03-2018',
            endAt: '03-03-2019',
            nominees: [
                {
                    address: "0x0",
                    name: "Microsoft"
                },
                {
                    address: "0x0",
                    name: "Google"
                }
            ],
            winners: []
        },
        {
            title: '2019 Election',
            startAt: '03-03-2019',
            endAt: '03-03-2020',
            nominees: [
                {
                    address: "0x0",
                    name: "Microsoft"
                },
                {
                    address: "0x0",
                    name: "Google"
                }
            ],
            winners: [
                {
                    address: "0x0",
                    name: "Google"
                }
            ]
        }
    ])

    save()
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