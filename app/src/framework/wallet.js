import Web3 from 'web3'
import HDWalletProvider from 'truffle-hdwallet-provider'
import contract from 'truffle-contract'
import Bluebird from 'bluebird'
import * as DB from '../db'



export const ethereum = {
    infura: {
        accessToken: 'q0dsZEe9ohtOnGy8V0cT',
        endpoint: 'https://ropsten.infura.io/'
    },
    activeNetwork: 'local',
    networks: {
        local: {
            provider: function (passphrase, index) {
                return new HDWalletProvider(
                    passphrase,
                    'http://localhost:8545',
                    index
                )
            },
            host: 'localhost',
            port: 8545,
            gas: 4500000,
            gasPrice: 25000000000,
            network_id: '*'
        },
        kovan: {
            provider: function (passphrase, index) {
                return new HDWalletProvider(
                    passphrase,
                    'https://kovan.infura.io/' + ethereum.infura.accessToken,
                    index
                )
            },
            network_id: '*',
            gas: 4500000,
            gasPrice: 25000000000
        },
        rinkeby: {
            provider: function (passphrase, index) {
                return new HDWalletProvider(
                    passphrase,
                    'https://rinkeby.infura.io/' + ethereum.infura.accessToken,
                    index
                )
            },
            network_id: '*',
            gas: 4500000,
            gasPrice: 25000000000
        },
        mainnet: {
            provider: function (passphrase, index) {
                return new HDWalletProvider(
                    passphrase,
                    'https://mainnet.infura.io/' + ethereum.infura.accessToken,
                    index
                )
            },
            network_id: '*',
            gas: 4500000,
            gasPrice: 25000000000
        },
        ropsten: {
            provider: function (passphrase, index) {
                return new HDWalletProvider(
                    passphrase,
                    'https://ropsten.infura.io/' + ethereum.infura.accessToken,
                    index
                )
            },
            network_id: 3,
            gas: 4500000,
            gasPrice: 25000000000
        }
    }
}

const withTimeout = (millis, promise, originalReject) => {
    const timeout = new Promise((resolve, reject) => setTimeout(() => originalReject(`Could not connect`), millis))

    return Promise.race([
        promise,
        timeout
    ])
}

export const getCurrentAccount = async (web3) => {
    return new Promise(async (resolve, reject) => {
        // TODO: timeout if the remote isnt online

        try {
            //const currentAccounts = await withTimeout(5000, web3.eth.getAccountsPromise(), reject)

            web3.eth.getAccounts((err, currentAccounts) => {
                resolve({
                    public_address: currentAccounts[0],
                    private_key: web3.currentProvider.wallets[currentAccounts[0].toLowerCase()]._privKey.toString('hex')
                })
            })
        } catch(e) {
            console.log(e)
        }
    })
}

Bluebird.config({
    // Enable warnings
    warnings: true,
    // Enable long stack traces
    longStackTraces: true,
    // Enable cancellation
    cancellation: true,
    // Enable monitoring
    monitoring: true
});

// 'retreat attack lift winter amazing noodle interest dutch craft old solve save',
export const create = async (passphrase, index = 0) => {
    console.log('[BlockHub] Initializing wallet...')

    const provider = ethereum.networks[ethereum.activeNetwork].provider(passphrase, index)
    const web3 = new Web3(provider)

    //provider.engine.stop()
    //provider.engine._providers[2].provider.timeout = 10
    //provider.engine._providers = [provider.engine._providers[0], provider.engine._providers[2]]

    Bluebird.promisifyAll(web3.eth, { suffix: 'Promise' })

    return new Promise(async (resolve, reject) => {
        const account = await getCurrentAccount(web3, index)

        resolve({
            web3,
            provider,
            ...account
        })
    })

    // const myContract = contract(myABI)
    // myContract.setProvider(ethereum.web3.currentProvider)
}