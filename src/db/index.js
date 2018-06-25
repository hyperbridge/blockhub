import Loki from 'lokijs'

const data = require('json-loader!yaml-loader!./data.yaml')

// TODO: refactor from class to functional

let loki = null

export let marketplace = null
export let accounts = null
export let republic = null

// const databaseInitialize = () => {
//     accounts = loki.getCollection('accounts')

//     republic = {
//         citizens: loki.getCollection('republicCitizens'),
//         delegates: loki.getCollection('republicCouncilDelegates'),
//         elections: loki.getCollection('republicElections')
//     }

//     marketplace = {
//         products: loki.getCollection('marketplaceProducts')
//     }
// }

// const idbAdapter = (new Loki()).getIndexedAdapter()

// loki = new Loki('main.db', {
//     adapter: new idbAdapter('main.db'),
//     autoload: true,
//     autoloadCallback: databaseInitialize,
//     autosave: true,
//     autosaveInterval: 4000
// })

// accounts = loki.addCollection('accounts')

// republic = {
//     citizens: loki.addCollection('republicCitizens'),
//     delegates: loki.addCollection('republicCouncilDelegates'),
//     elections: loki.addCollection('republicElections')
// }

// marketplace = {
//     products: loki.addCollection('marketplaceProducts')
// }

// marketplace.products.insert(data.products)


// republic.council.delegates.insert([
//     {
//         name: 'Hyperbridge',
//         address: "0x0",
//         industry: "Technology"
//     }
// ])

// republic.citizens.insert([
//     {
//         name: "eric",
//         address: "0x0",
//         apps: [
//             {
//                 id: "0asdasd0a-adsasda-asdasd9",
//                 name: "blockhub",
//                 link: "http://something/blockhub.exe"
//             }
//         ]
//     }
// ])

// republic.elections.insert([
//     {
//         title: '2018 Election',
//         description: 'We intend to do things. Learn more here: https://hyperbridge.org/election2018',
//         startAt: '03-03-2018',
//         endAt: '03-03-2019',
//         nominees: [
//             {
//                 address: "0x0",
//                 name: "Microsoft"
//             },
//             {
//                 address: "0x0",
//                 name: "Google"
//             }
//         ],
//         winners: []
//     },
//     {
//         title: '2019 Election',
//         startAt: '03-03-2019',
//         endAt: '03-03-2020',
//         nominees: [
//             {
//                 address: "0x0",
//                 name: "Microsoft"
//             },
//             {
//                 address: "0x0",
//                 name: "Google"
//             }
//         ],
//         winners: [
//             {
//                 address: "0x0",
//                 name: "Google"
//             }
//         ]
//     }
// ])



export const init = (cb) => {
    const databaseInitialize = () => {
        accounts = loki.getCollection('accounts')

        republic = {
            citizens: loki.getCollection('republicCitizens'),
            delegates: loki.getCollection('republicCouncilDelegates'),
            elections: loki.getCollection('republicElections')
        }

        marketplace = {
            products: loki.getCollection('marketplaceProducts')
        }

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

export const toObject = () => {
    return {
        accounts: accounts.data,
        marketplace: {
            products: marketplace.products.data
        }
    }
}