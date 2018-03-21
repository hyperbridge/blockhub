

class Marketplace {
    constructor() {
        this.apps = [
            {
                id: 'sadas3asdasd-asd34asd3-adsas3',
                name: 'Battlerite',
                type: 'game',
                downloads: 4000,
                owner: '0x0',
                author: {
                    id: '0x0'
                },
                republicTags: ['game', 'upcoming'],
                authorTags: ['moba']
            },
            {
                id: 'vsdvs-asd34asfdssd3-ad434sas3',
                name: 'Fortnite',
                type: 'game',
                downloads: 4000,
                owner: '0x0',
                author: {
                    id: '0x0'
                },
                republicTags: ['game', 'specials'],
                authorTags: ['fps']
            },
            {
                id: "29dsa90-asdsad9adas-asdadas-asdasd",
                name: "World of Warcraft",
                type: 'game',
                downloads: 20,
                republicTags: ['game', 'specials'],
                authorTags: ['mmo']
            },
            {
                id: "29dsa90-3434asd-asdadas-asdasd",
                name: "Divvy",
                type: 'app',
                downloads: 0,
                republicTags: ['productivity', 'specials'],
                authorTags: ['hotkeys']
            }
        ]
    }

    init(contractMeta, contractAddress) {
        //web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/XXXXXX"));
        this.contractMeta = contractMeta
        this.contractAddress = contractAddress
        this.nonce = 0
    }

    async submitAppForReview() {
        let contract = web3.eth.contract(this.contractMeta.abi).at(this.contractAddress)
        const fromAddress = "0x8d53fe1D1CAC541801178bA7747920a7c010C5d0"
        const toAddress = "0x1D312928DACfA0ff4352cB3BEdaC901CAA217945"

        return await new Promise((resolve) => {
            web3.eth.getTransactionCount(fromAddress, (err, nonce) => {
                let rawTransaction = {
                    "from": fromAddress,
                    "nonce": web3.toHex(nonce),
                    "gasPrice": "0x04e3b29200",
                    "gasLimit": "0x7458",
                    "to": this.contractAddress,
                    "value": "0x0",
                    "data": contract.submitAppForReview.getData("Something", "0.4.", "something", "something", "something", 1),
                    "chainId": 0x03
                }

                web3.eth.sendTransaction(rawTransaction, (err, hash) => {
                    if (err)
                        console.log(err)

                    console.log(hash)
                })

                resolve()
            })
        })
    }

    getBalance() {
        return 0
    }
}

export default new Marketplace()