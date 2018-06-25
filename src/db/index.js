import Loki from 'lokijs'

const data = require('json-loader!yaml-loader!./data.yaml')


console.log(JSON.stringify(data))

// TODO: refactor from class to functional

class DB {
    constructor() {
        const databaseInitialize = () => {
            this.accounts = this.loki.getCollection('accounts')

            if (!this.accounts) {
                this.loki.addCollection('accounts', { indices: ['id'] })
            }

            this.republic = {
                citizens: this.loki.getCollection('republicCitizens'),
                delegates: this.loki.getCollection('republicCouncilDelegates'),
                elections: this.loki.getCollection('republicElections')
            }

            if (!this.republic.citizens) {
                this.republic = {
                    citizens: this.loki.addCollection('republicCitizens', { indices: ['id'] }),
                    delegates: this.loki.addCollection('republicCouncilDelegates', { indices: ['id'] }),
                    elections: this.loki.addCollection('republicElections', { indices: ['id'] })
                }

                this.republic.council.delegates.insert([
                    {
                        name: 'Hyperbridge',
                        address: "0x0",
                        industry: "Technology"
                    }
                ])

                this.republic.citizens.insert([
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

                this.republic.elections.insert([
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
            }

            this.marketplace = {
                products: this.loki.getCollection('marketplaceProducts')
            }

            if (!this.marketplace.products) {
                this.marketplace.products = this.loki.addCollection('marketplaceProducts', { indices: ['id'] })

                this.marketplace.products.insert(data.products)
            }

            // debugger;
            // // manually save
            // this.loki.saveDatabase(function (err) {
            //     if (err) {
            //         console.log(err);
            //     }
            //     else {
            //         console.log("saved... it can now be loaded or reloaded with up to date data");
            //     }
            // });
        }

        const idbAdapter = (new Loki()).getIndexedAdapter()

        this.loki = new Loki('main.db', {
            adapter: new idbAdapter('main.db'),
            autoload: true,
            autoloadCallback: databaseInitialize,
            autosave: true,
            autosaveInterval: 4000
        })

        this.accounts = this.loki.addCollection('accounts')

        this.republic = {
            citizens: this.loki.addCollection('republicCitizens'),
            delegates: this.loki.addCollection('republicCouncilDelegates'),
            elections: this.loki.addCollection('republicElections')
        }

        this.marketplace = {
            products: this.loki.addCollection('marketplaceProducts')
        }

        this.marketplace.products.insert(data.products)
    }
}

export default new DB()