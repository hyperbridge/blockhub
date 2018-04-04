import * as abiDecoder from '../lib/abi-decoder'


window.web3 = new window.Web3(new window.Web3.providers.HttpProvider("http://localhost:8545"))


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

    init(contractMeta, contractAddress, fromAddress, toAddress) {
        //web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/XXXXXX"))
        this.contractMeta = contractMeta
        this.contractAddress = contractAddress
        this.fromAddress = fromAddress
        this.toAddress = toAddress
        this.nonce = 0
    }

    async submitAppForReview(name, version, category, files, checksum, permissions) {
        let contract = new web3.eth.Contract(this.contractMeta.abi, this.contractAddress)

        console.log('Calling Marketplace.submitAppForReview with arguments: ', arguments)

        return await new Promise((resolve) => {
            web3.eth.getTransactionCount(this.fromAddress, (err, nonce) => {
                let rawTransaction = {
                    "from": this.fromAddress,
                    "nonce": web3.utils.toHex(nonce),
                    "gasPrice": web3.utils.toWei("0.000000021", "ether"),
                    "gasLimit": web3.utils.toHex("900000"),
                    "to": this.contractAddress,
                    "value": "0x0",
                    "data": contract.methods.submitAppForReview(name, web3.utils.asciiToHex(version), category, files, checksum, permissions).encodeABI(),
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

    async voteForApp(id, version, vote) {
        let contract = new web3.eth.Contract(this.contractMeta.abi, this.contractAddress)

        console.log('Calling Marketplace.voteForApp with arguments: ', arguments)

        return await new Promise((resolve) => {
            web3.eth.getTransactionCount(this.fromAddress, (err, nonce) => {
                let rawTransaction = {
                    "from": this.fromAddress,
                    "nonce": web3.utils.toHex(nonce),
                    "gasPrice": "0x04e3b29200",
                    "gasLimit": "0x7458",
                    "to": this.contractAddress,
                    "value": "0x0",
                    "data": contract.methods.voteForApp(id, version, vote).encodeABI(),
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