import fs from 'fs'
import path from 'path'
import Web3 from 'web3'
import CryptoJS from 'crypto-js'
import bip39 from 'bip39'
import crypto from 'crypto'
import electron from 'electron'
// import electron, { app, BrowserWindow, Menu, ipcMain, shell, webFrame } from 'electron'
import TokenAPI from 'hyperbridge-token'
import ReserveAPI from 'hyperbridge-reserve'
import FundingAPI from 'hyperbridge-funding-protocol'
import MarketplaceAPI from 'hyperbridge-marketplace-protocol'
import * as Wallet from './wallet'
import * as DB from '../db'
import * as Windows from '../main/windows'

const config = require('../config')

const local = {
    provider: null,
    requests: {},
    account: {
        wallet: null
    },
    passphrase: null,
    password: null,
    events: {},
}

export const on = (event, listener) => {
    if (typeof local.events[event] !== 'object') {
        local.events[event] = [];
    }
    local.events[event].push(listener);
    return () => removeListener(event, listener);
}

export const removeListener = (event, listener) => {
    if (typeof local.events[event] === 'object') {
        const idx = local.events[event].indexOf(listener);
        if (idx > -1) {
            local.events[event].splice(idx, 1);
        }
    }
}

export const emit = (event, ...args) => {
    if (typeof local.events[event] === 'object') {
        local.events[event].forEach(listener => listener.apply(this, args));
    }
}

export const once = (event, listener) => {
    const remove = on(event, (...args) => {
        remove();
        listener.apply(this, args);
    });
}

export const decrypt = (data, key) => {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
}

export const encrypt = (data, key) => {
    return CryptoJS.AES.encrypt(data, key).toString()
}

export const promptPasswordRequest = async (data = {}) => {
    return new Promise(async (resolve) => {
        const mainScreen = electron.screen.getPrimaryDisplay()
        Windows.main.window.setSize(500, 800)
        Windows.main.window.center()

        while (!local.passphrase && !local.password) {
            // Web sends back password prompt response
            const res = await sendCommand('promptPasswordRequest', data)

            // Decrypt the passphrase and use to set web3 provider
            try {
                let passphrase = null
                if (local.account.encrypt_passphrase) {
                    passphrase = decrypt(local.account.passphrase, res.password)
                } else {
                    passphrase = local.account.passphrase
                }

                if (!passphrase) {
                    throw new Error()
                }

                local.passphrase = passphrase
                local.password = res.password
            } catch (e) {
                console.log(e)

                data = { error: { message: 'Password was incorrect', code: 1 } }
            }
        }

        console.log('passphrase', local.passphrase)

        local.wallet = await Wallet.create(local.passphrase)

        Windows.main.window.setSize(1440, 800)
        Windows.main.window.center()

        resolve()
    })
}

export const createIdentityRequest = (identity) => {
    return new Promise(async (resolve, reject) => {
        const id = (local.account.identity_index || 10) +1
        const identity = await Wallet.create(local.passphrase, id)

        local.account.identities.push({
            id,
            public_address: identity.public_address
        })

        local.account.identity_index = id

        await saveAccountFile()

        resolve({
            id: id,
            public_address: identity.public_address
        })
    })
}

export const saveIdentityRequest = (identity) => {
    return new Promise(async (resolve, reject) => {
        const origIdentity = local.account.identities.find(i => i.id === identity.id)

        origIdentity.name = identity.name

        await saveAccountFile()

        resolve(origIdentity)
    })
}

export const removeIdentityRequest = (identity) => {
    return new Promise(async (resolve, reject) => {
        const origIdentity = local.account.identities.find(i => i.id === identity.id)

        const index = local.account.identities.indexOf(origIdentity)
        local.account.identities.splice(index, 1)

        await saveAccountFile()

        resolve()
    })
}



export const getProtocolByName = (name) => {
    if (name === 'funding') {
        return FundingAPI
    } else if (name === 'marketplace') {
        return MarketplaceAPI
    } else if (name === 'reserve') {
        return ReserveAPI
    } else if (name === 'token') {
        return TokenAPI
    }

    throw new Error('[DesktopBridge] Unknown protocol requested: ' + name)
}



export const setContractAddress = async ({ protocolName, contractName, address }) => {
    return new Promise(async (resolve, reject) => {
        let protocol = getProtocolByName(protocolName)

        protocol.api.ethereum
            .setContractAddress(contractName, address)
            .catch(() => {
                reject('Unable to deploy contract')
            })
            .then(() => {
                resolve()
            })

        // update saved contract address
        // 0x05b3dc72dbda198bc8434993c4feb0f20c179a58
        const state = DB.application.config.data[0]
        const currentNetwork = state.current_ethereum_network

        const config = state.ethereum[currentNetwork].packages[protocolName]
        config.contracts[contractName].address = address

        DB.save()
    })
}

export const updateFundingProject = async ({ id, data }) => {
    const project = DB.funding.projects.findOne({ 'id': id })

    return new Promise(async (resolve, reject) => {
        const projectRegistrationContract = FundingAPI.api.ethereum.state.contracts.ProjectRegistration.deployed

        // TODO
        resolve(project)
    })
}

export const createFundingProject = async ({ title, description, about }) => {
    const project = {
        title,
        description,
        about,
        minContributionGoal: 1000,
        maxContributionGoal: 10000,
        contributionPeriod: 4,
        noRefunds: false,
        noTimeline: true,
    }

    return new Promise(async (resolve, reject) => {
        const projectRegistrationContract = FundingAPI.api.ethereum.state.contracts.ProjectRegistration.deployed

        projectRegistrationContract.ProjectCreated().watch((err, res) => {
            if (err) {
                console.warn('[BlockHub][Funding] Error', err)

                return reject(err)
            }

            project.$loki = undefined
            project.id = res.args.projectId.toNumber()

            try {
                DB.funding.projects.insert(project)
            } catch (e) {
                try {
                    DB.funding.projects.update(project)
                } catch (e) {
                    reject(e)
                }
            }

            resolve(project)
        })

        await projectRegistrationContract.createProject(
            project.title,
            project.description,
            project.about,
            project.minContributionGoal,
            project.maxContributionGoal,
            project.contributionPeriod,
            project.noRefunds,
            project.noTimeline
        )

        watcher.stopWatching()

        await projectRegistrationContract.setProjectContributionGoals(projectId, projectMinContributionGoal, projectMaxContributionGoal, projectContributionPeriod, { from: developerAccount });
        await projectRegistrationContract.setProjectTerms(projectId, noRefunds, noTimeline, { from: developerAccount });

        const project = await projectRegistrationContract.getProject(projectId);

        console.log(project)
    })
}

export const createMarketplaceProductRequest = async ({ profile, product }) => {
    return new Promise(async (resolve, reject) => {
        const productRegistrationContract = MarketplaceAPI.api.ethereum.state.contracts.ProductRegistration.deployed

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

            resolve(product)
        })

        // product.name = 'test'
        // product.type = 'game'
        // product.content = 'test'

        await productRegistrationContract.createProduct(
            product.name,
            product.type,
            product.content,
            { from: profile.public_address }
        )

        watcher.stopWatching(() => {
            // Must be async or tries to launch nasty process
        })
    })
}

export const getAllProducts = async () => {
    return new Promise(async (resolve, reject) => {
        console.log('[BlockHub] Filtering Ethereum logs for production creation events')
        const web3 = local.wallet.web3
        const filter = web3.eth.filter({ toBlock: 'pending' })

        filter.watch((error, log) => {
            console.log(444, log) //  {"address":"0x0000000000000000000000000000000000000000", "data":"0x0000000000000000000000000000000000000000000000000000000000000000", ...}
        })

        // get all past logs again.
        const results = filter.get((error, logs) => {
            // do things
            console.log(555, logs)

            // {
            //     logIndex: 0,
            //         transactionIndex: 0,
            //             transactionHash: '0x8a98d58debba34e7cdaba2ef92b9215954c4ac08b2c00d55b13467b9f5145aa5',
            //                 blockHash: '0xf95cc8c8efcb7e0073c426af8e49864bb92d83086e56d3f9b1bd61aa2e93a502',
            //                     blockNumber: 51,
            //                         address: '0x28e6f186a229b8905b5228ad15d96f6b4fae16fc',
            //                             data: '0x0000000000000000000000000000000000000000000000000000000000000006',
            //                                 topics:
            //     ['0x8bfed7c0004768df129b4900300816f8e85b8633621048ae882252021aa699b2'],
            //         type: 'mined'
            // }
        })

        // stops and uninstalls the filter
        filter.stopWatching(() => {
            // Must be async or tries to launch nasty process
        })

        //await marketplaceStorage.getUint(web3.sha3(web3._extend.utils.toHex("developer.developerMap") + identity.public_address.replace('0x', ''), { encoding: 'hex' }));
    })
}

// Do same as Developer, but just save as curator_id instead
export const createCuratorRequest = async (identity) => {
    return new Promise(async (resolve, reject) => {
        const web3 = local.wallet.web3
        const developerContract = MarketplaceAPI.api.ethereum.state.contracts.Developer.deployed

        identity = local.account.identities.filter(i => i.id === identity.id)[0]

        let watcher = developerContract.DeveloperCreated().watch(function (error, result) {
            if (!error) {
                identity.curator_id = result.args.developerId.toNumber()

                DB.save()


                saveAccountFile().then()

                return resolve(identity.curator_id)
            }

            return reject(error)
        })

        try {
            await developerContract.createDeveloper(identity.name, { from: identity.public_address })

            watcher.stopWatching(() => {
                // Must be async or tries to launch nasty process
            })
        } catch (error) {
            watcher.stopWatching(() => {
                // Must be async or tries to launch nasty process
            })

            if (error.toString().indexOf('already a developer') !== -1) {
                console.log("Already a developer, finding ID")

                const developerContract = MarketplaceAPI.api.ethereum.state.contracts.Developer.deployed
                const marketplaceStorage = MarketplaceAPI.api.ethereum.state.contracts.MarketplaceStorage.deployed //await developerContract.marketplaceStorage()

                let developerId = await marketplaceStorage.getUint(web3.sha3(web3._extend.utils.toHex("developer.developerMap") + identity.public_address.replace('0x', ''), { encoding: 'hex' }));

                if (developerId && developerId.toNumber()) {
                    identity.curator_id = developerId.toNumber()

                    DB.save()

                    await saveAccountFile()

                    return resolve(identity.curator_id)
                } else {
                    return reject(error.toString())
                }
            }

            return reject(error.toString())
        }
    })
}

export const registerUsernameRequest = async (identity) => {
    return new Promise(async (resolve, reject) => {
        const web3 = local.wallet.web3
        const developerContract = DomainAPI.api.ethereum.state.contracts.DomainManager.deployed

        identity = local.account.identities.filter(i => i.id === identity.id)[0]

        let watcher = developerContract.DeveloperCreated().watch(function (error, result) {
            if (!error) {
                identity.curator_id = result.args.developerId.toNumber()

                DB.save()


                saveAccountFile().then()

                return resolve(identity.curator_id)
            }

            return reject(error)
        })
    })
}

export const createDeveloperRequest = async (identity) => {
    return new Promise(async (resolve, reject) => {
        const web3 = local.wallet.web3
        const developerContract = MarketplaceAPI.api.ethereum.state.contracts.Developer.deployed

        identity = local.account.identities.filter(i => i.id === identity.id)[0]

        let watcher = developerContract.DeveloperCreated().watch(function (error, result) {
            if (!error) {
                identity.developer_id = result.args.developerId.toNumber()

                saveAccountFile().then()

                return resolve(identity.developer_id)
            }
            
            return reject(error)
        })

        try {
            await developerContract.createDeveloper(identity.name, { from: identity.public_address })

            watcher.stopWatching(() => {
                // Must be async or tries to launch nasty process
            })
        } catch (error) {
            watcher.stopWatching(() => {
                // Must be async or tries to launch nasty process
            })

            if (error.toString().indexOf('already a developer') !== -1) {
                console.log("Already a developer, finding ID")

                const developerContract = MarketplaceAPI.api.ethereum.state.contracts.Developer.deployed
                const marketplaceStorage = MarketplaceAPI.api.ethereum.state.contracts.MarketplaceStorage.deployed //await developerContract.marketplaceStorage()

                let developerId = await marketplaceStorage.getUint(web3.sha3(web3._extend.utils.toHex("developer.developerMap") + identity.public_address.replace('0x', ''), { encoding: 'hex' }));

                if (developerId && developerId.toNumber()) {
                    identity.developer_id = developerId.toNumber()

                    DB.save()

                    await saveAccountFile()

                    return resolve(identity.developer_id)
                } else {
                    return reject(error.toString())
                }
            }

            return reject(error.toString())
        }
    })
}

const getWebProvider = (network) => {
    if (network === 'local') {
        return new Web3.providers.HttpProvider('http://localhost:8545')
    } else if (network === 'kovan') {
        return new Web3.providers.HttpProvider('https://kovan.infura.io/q0dsZEe9ohtOnGy8V0cT')
    } else if (network === 'rinkeby') {
        return new Web3.providers.HttpProvider('https://rinkeby.infura.io/q0dsZEe9ohtOnGy8V0cT')
    } else if (network === 'mainnet') {
        return new Web3.providers.HttpProvider('https://mainnet.infura.io/q0dsZEe9ohtOnGy8V0cT')
    } else if (network === 'ropsten') {
        return new Web3.providers.HttpProvider('https://ropsten.infura.io/q0dsZEe9ohtOnGy8V0cT')
    }
}

export const initProtocol = async ({ protocolName }) => {
    console.log('[BlockHub] Initializing protocol: ' + protocolName)

    return new Promise(async (resolve) => {
        const protocol = getProtocolByName(protocolName)
        const state = DB.application.config.data[0]
        const currentNetwork = state.current_ethereum_network

        const config = state.ethereum[currentNetwork].packages[protocolName]
        
        //const provider = getWebProvider(currentNetwork)

        // local.wallet.web3.eth.accounts.privateKeyToAccount('0x' + local.account.private_key, (err, account) => {
        //     local.wallet.web3.eth.accounts.wallet.add(account, () => { })
        // })

        config.user_from_address = local.account.public_address
        
        console.log('[BlockHub] Initializing protocol, with public address: ', config.user_from_address)

        protocol.api.ethereum.init(
            local.wallet.provider,
            config.user_from_address,
            config.user_to_address
        )

        for (let contractName in protocol.api.ethereum.state.contracts) {
            console.log('Hooking up protocol contract: ' + protocolName + ' - ' + contractName)

            if (!config.contracts[contractName]) {
                config.contracts[contractName] = {}
            }

            const contract = config.contracts[contractName]

            if (protocol.api.ethereum.state.contracts[contractName].links) {
                config.contracts[contractName].links = protocol.api.ethereum.state.contracts[contractName].links
            }

            // Metadata
            config.contracts[contractName].name = contractName
            config.contracts[contractName].link = 'https://github.com/hyperbridge/protocol/blob/master/packages/' + protocolName + '/smart-contracts/ethereum/contracts/' + contractName + '.sol'

            if (contract.address) {
                await setContractAddress({ protocolName, contractName, address: contract.address })
                    .catch(() => {
                        config.contracts[contractName].address = null
                        config.contracts[contractName].created_at = null
                    })
                    .then(() => {

                    })
            } else {
                config.contracts[contractName].created_at = null
            }
        }

        resolve({
            currentNetwork,
            protocolName,
            config,
        })
    })
}

export const duration = {
    seconds: function (val) { return val; },
    minutes: function (val) { return val * this.seconds(60); },
    hours: function (val) { return val * this.minutes(60); },
    days: function (val) { return val * this.hours(24); },
    weeks: function (val) { return val * this.days(7); },
    years: function (val) { return val * this.days(365); },
}



export const deployContract = async ({ protocolName, contractName, oldContractAddress }) => {
    return new Promise(async (resolve, reject) => {
        const protocol = getProtocolByName(protocolName)
        const state = DB.application.config.data[0]
        const currentNetwork = state.current_ethereum_network
        const config = state.ethereum[currentNetwork].packages[protocolName]
        const web3 = local.wallet.web3

        let links = []
        let params = []

        if (!config.contracts[contractName]) {
            config.contracts[contractName] = {
                name: contractName,
                created_at: null,
                address: null
            }
        }

        if (!protocol.api.ethereum.state.contracts[contractName]) {
            throw "That contract doesn't exist"
        }

        if (protocol.api.ethereum.state.contracts[contractName].links) {
            links = protocol.api.ethereum.state.contracts[contractName].links

            for (let i in links) {
                const contractName = links[i].name

                if (!config.contracts[contractName].address) {
                    await deployContract({ protocolName, contractName })
                }

                links[i].address = config.contracts[contractName].address
            }
        }

        if (protocol.api.ethereum.state.contracts[contractName].params) {
            params = protocol.api.ethereum.state.contracts[contractName].params

            for (let i in params) {
                const contractName = params[i]

                if (config.contracts[contractName]) {
                    if (!config.contracts[contractName].address) {
                        await deployContract({ protocolName, contractName })
                    }

                    params[i] = config.contracts[contractName].address
                }

            }
        }

        if (protocolName === 'reserve' && contractName === 'TokenSale') {
            let token = TokenAPI.api.ethereum.state.contracts.Token.deployed
            const eternalStorage = TokenAPI.api.ethereum.state.contracts.EternalStorage.deployed
            const hbxToken = TokenAPI.api.ethereum.state.contracts.TokenDelegate.deployed
            const tokenLib = TokenAPI.api.ethereum.state.contracts.TokenLib.deployed

            //await eternalStorage.addAdmin(hbxToken.address, { from: local.wallet.public_address })

            //await token.upgradeTo(hbxToken.address, { from: local.wallet.public_address }).catch(() => { })

            token = { ...TokenAPI.api.ethereum.state.contracts.TokenDelegate.deployed, ...token }

            const tokenWallet = await Wallet.create(local.passphrase, 2) // this should be a semi-secure wallet - metamask
            const saleWallet = await Wallet.create(local.passphrase, 3) // this should be secure wallet - hardware

            console.log('tokenWallet addy', tokenWallet.public_address, tokenWallet.private_key)
            console.log('saleWallet addy', saleWallet.public_address, saleWallet.private_key)
            const decimals = web3._extend.utils.toBigNumber(18)
            const totalAmount = web3._extend.utils.toBigNumber(1000000000)
            const saleAmount = web3._extend.utils.toBigNumber(300000000)

            const tokenSupply = totalAmount.times(web3._extend.utils.toBigNumber(10).pow(decimals))
            const tokenAllowance = saleAmount.times(web3._extend.utils.toBigNumber(10).pow(decimals))

            //await token.mint(tokenWallet.public_address, tokenSupply, { from: local.wallet.public_address })

            const latestBlock = await web3.eth.getBlockPromise('latest')

            const openingTime = latestBlock.timestamp + 200 //1541862000 //latestBlock.timestamp + 200 //latestBlock.timestamp + duration.weeks(1) // nov 10 is 1541862000
            const closingTime = 1544454000 //openingTime + duration.weeks(1)

            const rate = web3._extend.utils.toBigNumber(210.39 / 0.055) // 3825 timbits per wei
            const cap = web3._extend.utils.toBigNumber(web3._extend.utils.toWei(18500000 / 210.39, 'ether'))

            params = [
                rate,
                saleWallet.public_address,
                hbxToken.address
            ]

            links = []

            console.log('[BlockHub] Deploying contract ' + contractName + ' with params ' + JSON.stringify(params) + ' and links ' + JSON.stringify(links))

            // uint256 _rate, address _wallet, ERC20 _token, address _tokenWallet, uint256 _cap, uint256 _startTime, uint256 _endTime
            const tokensale = ReserveAPI.api.ethereum.state.contracts.TokenSale.deployed//await ReserveAPI.api.ethereum.deployContract('TokenSale', links, params)

            config.contracts[contractName].created_at = Date.now()
            config.contracts[contractName].address = tokensale.address

            DB.application.config.update(state)
            DB.save()
            
            const originalProvider = TokenAPI.api.ethereum.state.provider

            TokenAPI.api.ethereum.state.contracts.Token.contract.setProvider(tokenWallet.provider)
            TokenAPI.api.ethereum.state.contracts.Token.contract.provider = tokenWallet.provider
            TokenAPI.api.ethereum.state.contracts.TokenDelegate.contract.setProvider(tokenWallet.provider)
            let tokenDelegateHolder = await TokenAPI.api.ethereum.state.contracts.TokenDelegate.contract.at(hbxToken.address)
            let tokenWalletHolder = await TokenAPI.api.ethereum.state.contracts.Token.contract.at(token.address)
            tokenWalletHolder = { ...tokenDelegateHolder, ...tokenWalletHolder }

            //await tokenWalletHolder.approve(tokensale.address, tokenAllowance, { from: tokenWallet.public_address })

            TokenAPI.api.ethereum.state.contracts.Token.contract.setProvider(originalProvider)
            TokenAPI.api.ethereum.state.contracts.TokenDelegate.contract.setProvider(originalProvider)

            return resolve(config.contracts[contractName])
        } else {
            console.log('[BlockHub] Deploying contract ' + contractName + ' with params ' + JSON.stringify(params) + ' and links ' + JSON.stringify(links))

            protocol.api.ethereum
                .deployContract(contractName, links, params)
                .then(async (contract) => {
                    config.contracts[contractName].created_at = Date.now()
                    config.contracts[contractName].address = contract.address

                    DB.application.config.update(state)
                    DB.save()

                    if (protocolName === 'marketplace' && contractName === 'Developer') {
                        const developerContract = protocol.api.ethereum.state.contracts.Developer.deployed
                        const marketplaceStorage = protocol.api.ethereum.state.contracts.MarketplaceStorage.deployed

                        if (!oldContractAddress) {
                            oldContractAddress = 0x0000000000000000000000000000000000000000
                        }

                        try {
                            await marketplaceStorage.registerContract("Developer", oldContractAddress, developerContract.address)
                            await developerContract.initialize()
                        } catch (e) {
                            console.log('Tried to register ' + contractName + ' but its probably already registered')
                        }
                    }

                    if (protocolName === 'marketplace' && contractName === 'ProductRegistration') {
                        const blankAddress = 0x0000000000000000000000000000000000000000
                        const marketplaceStorage = protocol.api.ethereum.state.contracts.MarketplaceStorage.deployed
                        const productRegistrationContract = protocol.api.ethereum.state.contracts.ProductRegistration.deployed

                        await marketplaceStorage.registerContract("ProductRegistration", blankAddress, productRegistrationContract.address)
                        await productRegistrationContract.initialize()
                    }

                    if (protocolName === 'funding' && contractName === 'ProjectRegistration') {
                        const blankAddress = 0x0000000000000000000000000000000000000000
                        const projectRegistrationContract = protocol.api.ethereum.state.contracts.ProjectRegistration.deployed
                        const fundingStorageContract = protocol.api.ethereum.state.contracts.FundingStorage.deployed

                        await fundingStorageContract.registerContract('ProjectRegistration', blankAddress, projectRegistrationContract.address)
                        await projectRegistrationContract.initialize()
                    }

                    resolve(config.contracts[contractName])
                })
        }

    })
}


export const setAccountRequest = async () => {
    return new Promise(async (resolve) => {
        let account = local.account

        if (local.password) {
            const decryptedPrivateKey = decrypt(account.private_key, local.password)
            console.log('private key', decryptedPrivateKey)
            account = {
                public_address: account.public_address,
                secret_question_1: account.secret_question_1,
                secret_answer_1: 'HIDDEN',
                secret_question_2: account.secret_question_2,
                secret_answer_2: account.secret_answer_2,
                passphrase: 'HIDDEN',
                private_key: 'HIDDEN',
                password: 'HIDDEN',
                email: decrypt(account.email, decryptedPrivateKey),
                first_name: decrypt(account.first_name, decryptedPrivateKey),
                last_name: decrypt(account.last_name, decryptedPrivateKey),
                birthday: decrypt(account.birthday, decryptedPrivateKey),
                current_identity: account.current_identity,
                identities: account.identities.map(identity => ({
                    id: identity.id,
                    name: identity.name,
                    public_address: identity.public_address,
                    developer_id: identity.developer_id
                }))
            }
        } else {
            account = {
                public_address: null,
                secret_question_1: null,
                secret_answer_1: null,
                secret_question_2: null,
                secret_answer_2: null,
                passphrase: null,
                private_key: null,
                password: null,
                email: null,
                first_name: null,
                last_name: null,
                birthday: null,
                current_identity: { id: null },
                identities: []
            }
        }

        await sendCommand('setAccountRequest', { account })

        resolve()
    })
}

export const updateAccountRequest = async (data) => {
    return new Promise(async (resolve) => {
        if (data.encrypt_passphrase) {
            if (data.encrypt_passphrase) {
                local.account.passphrase = encrypt(local.account.passphrase, local.password)
            } else {
                // We're disabling when previously enabled
                if (local.account.encrypt_passphrase) {
                    local.account.passphrase = decrypt(local.account.passphrase, local.password)
                }
            }

            local.account.encrypt_passphrase = data.encrypt_passphrase

            await saveAccountFile()

            resolve()
        }
    })
}

export const getPassphraseRequest = async (data) => {
    return new Promise(async (resolve) => {
        // TODO: use data.seed
        let randomBytes = crypto.randomBytes(16) // 128 bits of seed is enough

        // the 12 word phrase
        let passphrase = bip39.entropyToMnemonic(randomBytes.toString('hex'))

        resolve(passphrase)
    })
}

export const readFile = (filepath) => {
    return new Promise(async (resolve, reject) => {
        fs.readFile(filepath, 'utf-8', function (err, data) {
            if (err) {
                console.log('An error occurred reading the file: ' + err.message)
                return reject(err)
            }

            resolve(data)
        })
    })
}

export const saveFile = (filepath, content) => {
    return new Promise(async (resolve) => {
        fs.writeFile(filepath, content, function (err) {
            if (err) {
                console.log('An error occurred updating the file: ' + err.message)
                return reject(err)
            }

            console.log('The file has been succesfully saved')

            resolve()
        })
    })
}

export const removeFile = (filepath) => {
    return new Promise(async (resolve, reject) => {
        fs.unlink(filepath, function (err, data) {
            if (err) {
                console.log('An error occurred removing the file: ' + err.message)
                return reject(err)
            }

            resolve(data)
        })
    })
}

export const saveAccountFileRequest = async (data) => {
    return new Promise(async (resolve) => {
        const userDataPath = electron.app.getPath('userData')

        await saveFile(path.join(userDataPath, 'account.json'), JSON.stringify(local.account))
    })
}

export const importAccountFileRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const userDataPath = electron.app.getPath('userData')

        electron.dialog.showOpenDialog(async (fileNames) => {
            if (fileNames === undefined) {
                return reject("No file selected")
            }

            const options = {
                title: 'Replace Account?',
                type: 'question',
                buttons: ['OK', 'Cancel'],
                message: 'Are you sure you want to replace your existing account? Make sure you have a backup, as this will delete the file the old file on this computer and it cannot be undone.'
            }

            electron.dialog.showMessageBox(Windows.main.window, options, async (res) => {
                if (res === 0) {
                    saveFile(path.join(userDataPath, 'account.json'), await readFile(fileNames[0]))

                    console.log("The account has been succesfully imported: " + userDataPath + '/account.json')

                    resolve()
                }
            })
        })
    })
}

export const exportAccountFileRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const content = JSON.stringify(local.account)

        electron.dialog.showSaveDialog({ defaultPath: "*/account.json" }, (fileName) => {
            if (fileName === undefined) {
                return reject("The file wasn't saved")
            }

            fs.writeFile(fileName, content, (err) => {
                if (err) {
                    return reject("An error ocurred creating the file: " + err.message)
                }

                console.log("The account has been succesfully exported: " + fileName)
                resolve()
            })
        })
    })
}

export const deleteAccountRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const content = JSON.stringify(local.account)

        const options = {
            title: 'Delete Account?',
            type: 'question',
            buttons: ['OK', 'Cancel'],
            message: 'Are you sure you would like to delete your account? Make sure you have a backup, as this will delete the file on this computer and it cannot be undone.'
        }

        electron.dialog.showMessageBox(Windows.main.window, options, async (res) => {
            if (res === 0) {
                const path = electron.app.getPath('userData')
                removeFile(path + '/account.json')

                local.account = {
                    public_address: null,
                    secret_question_1: null,
                    secret_answer_1: null,
                    secret_question_2: null,
                    secret_answer_2: null,
                    passphrase: null,
                    private_key: null,
                    password: null,
                    email: null,
                    first_name: null,
                    last_name: null,
                    birthday: null,
                }

                await sendCommand('setAccountRequest', {
                    account: local.account
                })
            }
        })
    })
}

export const saveAccountFile = async () => {
    return new Promise(async (resolve) => {
        const path = electron.app.getPath('userData')

        console.log(local.account)

        saveFile(path + '/account.json', JSON.stringify(local.account))

        resolve()
    })
}

export const generateWallet = async () => {
    return new Promise(async (resolve) => {
        let randomBytes = crypto.randomBytes(16) // 128 bits of seed is enough

        // the 12 word phrase
        let passphrase = bip39.entropyToMnemonic(randomBytes.toString('hex'))

        const wallet = await Wallet.create(passphrase)

        resolve({
            passphrase: passphrase,
            public_address: wallet.public_address,
            private_key: wallet.private_key
        })
    })
}

export const createTransactionRequest = async ({ fromAddress, toAddress, amount }) => {
    return new Promise(async (resolve) => {
        let transactionData = createTransaction
        
        resolve(transactionData)
    })
}

export const sendTransactionRequest = async ({ fromAddress, toAddress, amount, transactionData }) => {
    return new Promise(async (resolve) => {

        const options = {
            title: 'Confirm Transaction',
            type: 'question',
            buttons: ['OK', 'Cancel'],
            message: `Sending: ${amount} ETH

From: ${fromAddress}

To: ${toAddress}

Once this transaction is sent it cannot be reversed. 

Are you sure you want to send?`
        }

        electron.dialog.showMessageBox(Windows.main.window, options, async (res) => {
            if (res === 0) {
                console.log(fromAddress.toLowerCase())
                console.log(local.account.identities)
                
                const walletIndex = local.account.identities.find((identity) => fromAddress.toLowerCase() === identity.public_address.toLowerCase()).id

                const wallet = await Wallet.create(local.passphrase, walletIndex)
                const web3 = wallet.web3

                web3.eth.sendTransaction({
                    to: toAddress,
                    from: fromAddress,
                    value: web3._extend.utils.toWei(amount, 'ether')
                }, (err, transactionHash) => {
                    if (err) {
                        return resolve({
                            success: false,
                            message: err
                        })
                    }

                    resolve({
                        success: true,
                        transactionHash: transactionHash
                    })
                })
                    // .catch((e) => {
                    
                    // })
            } else {
                resolve({
                    success: false,
                    message: 'Cancelled'
                })
            }
        })
    })
}

export const setEnvironmentMode = async (environmentMode) => {
    return new Promise(async (resolve) => {
        config.IS_PRODUCTION = environmentMode === 'production'

        DB.application.config.data[0].environment_mode = environmentMode

        let networkOptions = {
            'production': 'mainnet',
            'staging': 'ropsten',
            'beta': 'ropsten',
            'preview': 'local',
            'local': 'local'
        }

        DB.application.config.data[0].current_ethereum_network = networkOptions[environmentMode]

        DB.save()

        Wallet.ethereum.activeNetwork = networkOptions[environmentMode]
        Wallet.ethereum.fromAddress = local.account.public_address

        console.log('[BlockHub] Setting environment mode: ', environmentMode)
        console.log('[BlockHub] Setting active network: ', networkOptions[environmentMode])

        await sendCommand('updateState', {
            module: 'application',
            state: {
                environment_mode: environmentMode,
                current_ethereum_network: networkOptions[environmentMode]
            }
        })

        // Tell web protocol config data
        if (local.wallet) {
            await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'token' }))
            await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'reserve' }))
            await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'funding' }))
            await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'marketplace' }))
        }

        resolve()
    })
}


export const recoverPasswordRequest = async ({ secret_question_1, secret_answer_1, birthday }) => {
    return new Promise(async (resolve) => {
        let password = null

        try {
            password = decrypt(local.account.password, secret_answer_1 + birthday)

            if (!password) {
                throw new Error()
            }
        } catch (e) {
            console.log(e)

            return resolve({ error: { message: 'Incorrect secret answer or birthday', code: 1 } })
        }

        resolve({ password })
    })
}


export const writeToClipboard = async (data) => {
    return new Promise(async (resolve) => {
        electron.clipboard.writeText(data, 'selection')

        resolve()
    })
}

export const handleCreateAccountRequest = async ({ email, password, birthday, first_name, last_name, passphrase, encrypt_passphrase, secret_question_1, secret_answer_1, secret_question_2, secret_answer_2 }) => {
    return new Promise(async (resolve) => {
        const wallet = await Wallet.create(passphrase, 0)
        const identity = await Wallet.create(passphrase, 10)

        local.account = {
            ...local.account,
            public_address: wallet.public_address,
            secret_question_1: secret_question_1,
            secret_question_2: secret_question_2,
            encrypt_passphrase: encrypt_passphrase,
            passphrase: encrypt_passphrase ? encrypt(passphrase, password) : passphrase,
            private_key: encrypt(wallet.private_key, password),
            password: encrypt(password, secret_answer_1 + birthday),
            email: encrypt(email, wallet.private_key),
            first_name: encrypt(first_name, wallet.private_key),
            last_name: encrypt(last_name, wallet.private_key),
            birthday: encrypt(birthday, wallet.private_key),
            versonCreated: config.APP_VERSION,
            identity_index: 10,
            current_identity: {
                id: 10
            },
            identities: [
                {
                    id: 10,
                    name: 'Default',
                    public_address: identity.public_address,
                    private_key: encrypt(identity.private_key, password),
                }
            ]
        }

        await saveAccountFile()

        local.password = password
        local.wallet = wallet

        // Tell web all non-sensitive account info
        resolve({
            account: {
                public_address: wallet.public_address,
                email: email,
                first_name: first_name,
                last_name: last_name,
                birthday: birthday,
                secret_question_1: secret_question_1,
                secret_question_2: secret_question_2,
                current_identity: {
                    id: 10
                },
                identities: [
                    {
                        id: 10,
                        name: 'Default',
                        public_address: identity.public_address
                    }
                ]
            }
        })
    })
}

export const ID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const sendCommand = async (key, data = {}, peer = null, responseId = null) => {
    const cmd = {
        key: key,
        responseId: responseId,
        requestId: ID(),
        data: data
    }

    console.log('[DesktopBridge] Sending command', cmd)

    if (!local.bridge) {
        console.warn('[DesktopBridge] Not connected to bridge. This shouldnt happen.')
    }

    let _resolve, _reject
    const promise = new Promise((resolve, reject) => {
        _resolve = resolve
        _reject = reject
    })
    promise.resolve = _resolve
    promise.reject = _reject

    local.requests[cmd.requestId] = promise

    local.bridge.send('command', JSON.stringify(cmd))

    return promise
}

export const maximizeWindow = () => {
    const mainScreen = electron.screen.getPrimaryDisplay()
    // const width = 1400
    // const height = (width / 1980) * 1080

    // Windows.main.window.webContents.setZoomFactor(width / 1980)
    Windows.main.window.setSize(mainScreen.size.width, mainScreen.size.height)
    Windows.main.window.center()
}

export const runCommand = async (cmd, meta = {}) => {
    console.log('[DesktopBridge] Running command: ', cmd.key, cmd)

    return new Promise(async (resolve, reject) => {
        if (cmd.responseId) {
            if (local.requests[cmd.responseId]) {
                console.log('[DesktopBridge] Running response callback', cmd.responseId)

                local.requests[cmd.responseId].resolve(cmd.data)

                delete local.requests[cmd.responseId]
            }

            return resolve()
        }

        let resultKey = 'genericResponse'
        let resultData = null
        let responseId = cmd.requestId

        if (cmd.key === 'init') {
            console.log('[BlockHub] Web initialized', cmd.data) // msg from web page

            if (cmd.data == '1') {
                await setEnvironmentMode(DB.application.config.data[0].environment_mode)

                // const mode = config.IS_PRODUCTION ? 'production' : 'local'

                // sendCommand('setMode', mode)

                // Check for account file and load it
                try {
                    const userDataPath = electron.app.getPath('userData')
                    const accountData = await readFile(path.join(userDataPath, 'account.json'))

                    local.account = JSON.parse(accountData)
                } catch (e) {
                    console.log(e)
                }

                // Prompt password request if account exists but hasn't been unlocked
                if (local.account.passphrase) {
                    if (local.account.encrypt_passphrase && !local.password) {
                        // Desktop asks to prompt password
                        await promptPasswordRequest({ secret_question_1: local.account.secret_question_1 })
                    } else {
                        // Passphrase was already decrypted and not already set (incase reloading page)
                        if (!local.passphrase) {
                            local.passphrase = local.account.passphrase
                        }
                    }

                    // Tell web all non-sensitive account info
                    await setAccountRequest()

                    sendCommand('updateState', {
                        module: 'marketplace',
                        state: {
                            products: DB.marketplace.products.data
                        }
                    })

                    // Tell web protocol config data
                    await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'token' }))
                    await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'reserve' }))
                    await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'funding' }))
                    await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'marketplace' }))
                } else {
                    // Tell web to reset account
                    await setAccountRequest()
                }

                // Initialize local data
                const products = await getAllProducts()
                console.log(products)

                //this.identities = await getAllIdentities()
                //this.projects = await getAllProjects()


                // If exists, prompt web to require password
                // Web sends back response (requirePasswordResponse)
                // Decrypt the passphrase and use to set web3 provider
                // Desktop sends back all non-sensitive account info
                // Check the wallet exists in the accounts contract
                // If not, prompt to add it
                // If no ETH, let them know they need it
                // Sync any changes from smart contract
                // If doesn't exist, prompt web to create account


                // console.log('[BlockHub] Setting up heartbeat')

                // setInterval(() => {
                //     sendCommand('heartbeat', 1) // send to web page
                // }, 2000)
            } else {
                console.error('[BlockHub] Error initializing web', cmd.data)
            }
        } else if (cmd.key === 'ping') {
            console.log('[BlockHub] Ping from web', cmd.data)

            sendCommand('pong', 'ok')
        } else if (cmd.key === 'resize') {
            //Windows.main.window.webContents.setZoomFactor(cmd.data.width / 1980)
            //Windows.main.window.setSize(cmd.data.width, cmd.data.height)
            //Windows.main.window.center()
        } else if (cmd.key === 'createAccountRequest') {
            resultData = await handleCreateAccountRequest(cmd.data)
            resultKey = 'createAccountResponse'
        } else if (cmd.key === 'getAccountRequest') {
            resultData = await handleGetAccountRequest(cmd.data)
            resultKey = 'getAccountResponse'
        } else if (cmd.key === 'setContractAddress') {
            resultData = await setContractAddress(cmd.data)
            resultKey = 'setContractAddressResponse'
        } else if (cmd.key === 'deployContract') {
            resultData = await deployContract(cmd.data)
            resultKey = 'deployContractResponse'
        } else if (cmd.key === 'createFundingProject') {
            resultData = await createFundingProject(cmd.data)
            resultKey = 'createFundingProjectResponse'
        } else if (cmd.key === 'updateAccountRequest') {
            resultData = await updateAccountRequest(cmd.data)
            resultKey = 'updateAccountRequestResponse'
        } else if (cmd.key === 'initProtocol') {
            resultData = await initProtocol(cmd.data)
            resultKey = 'initProtocolResponse'
        } else if (cmd.key === 'importAccountFileRequest') {
            resultData = await importAccountFileRequest(cmd.data)
            resultKey = 'importAccountFileResponse'
        } else if (cmd.key === 'exportAccountFileRequest') {
            resultData = await exportAccountFileRequest(cmd.data)
            resultKey = 'exportAccountFileResponse'
        } else if (cmd.key === 'deleteAccountRequest') {
            resultData = await deleteAccountRequest(cmd.data)
            resultKey = 'deleteAccountFesponse'
        } else if (cmd.key === 'getPassphraseRequest') {
            resultData = await getPassphraseRequest(cmd.data)
            resultKey = 'getPassphraseResponse'
        } else if (cmd.key === 'createTransactionRequest') {
            resultData = await createTransactionRequest(cmd.data)
            resultKey = 'createTransactionResponse'
        } else if (cmd.key === 'sendTransactionRequest') {
            resultData = await sendTransactionRequest(cmd.data)
            resultKey = 'sendTransactionResponse'
        } else if (cmd.key === 'createIdentityRequest') {
            resultData = await createIdentityRequest(cmd.data)
            resultKey = 'createIdentityResponse'
        } else if (cmd.key === 'saveIdentityRequest') {
            resultData = await saveIdentityRequest(cmd.data)
            resultKey = 'saveIdentityResponse'
        } else if (cmd.key === 'removeIdentityRequest') {
            resultData = await removeIdentityRequest(cmd.data)
            resultKey = 'removeIdentityResponse'
        } else if (cmd.key === 'createMarketplaceProductRequest') {
            resultData = await createMarketplaceProductRequest(cmd.data)
            resultKey = 'createMarketplaceProductResponse'
        } else if (cmd.key === 'createFundingProjectRequest') {
            resultData = await createFundingProject(cmd.data)
            resultKey = 'createFundingProjectResponse'
        } else if (cmd.key === 'createDeveloperRequest') {
            resultData = await createDeveloperRequest(cmd.data)
            resultKey = 'createDeveloperResponse'
        } else if (cmd.key === 'createCuratorRequest') {
            resultData = await createCuratorRequest(cmd.data)
            resultKey = 'createCuratorResponse'
        } else if (cmd.key === 'recoverPasswordRequest') {
            resultData = await recoverPasswordRequest(cmd.data)
            resultKey = 'recoverPasswordResponse'
        } else if (cmd.key === 'registerUsernameRequest') {
            resultData = await registerUsernameRequest(cmd.data)
            resultKey = 'registerUsernameResponse'
        } else if (cmd.key === 'setEnvironmentMode') {
            resultData = await setEnvironmentMode(cmd.data)
            resultKey = 'setEnvironmentModeResponse'
        } else if (cmd.key === 'writeToClipboard') {
            resultData = await writeToClipboard(cmd.data)
            resultKey = 'writeToClipboardResponse'
        } else if (cmd.key === 'eval') {
            // Don't allow eval in production
            if (!config.IS_PRODUCTION) {
                const BABEL_PROMISE = {
                    a: require("@babel/runtime-corejs2/core-js/promise")
                }

                const BABEL_GENERATOR = function () {
                    return require('@babel/runtime-corejs2/helpers/asyncToGenerator')
                }

                const BABEL_REGENERATOR = {
                    a: require('@babel/runtime-corejs2/regenerator')
                }

                let evalCode = cmd.data.code

                evalCode = evalCode.replace(/babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_.___default/g, 'BABEL_PROMISE')
                evalCode = evalCode.replace(/babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_.___default/g, 'BABEL_GENERATOR')
                evalCode = evalCode.replace(/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_.___default/g, 'BABEL_REGENERATOR')

                resultData = await Function('return (' + evalCode + ')')()(
                    local,
                    DB,
                    exports,
                    FundingAPI, 
                    MarketplaceAPI, 
                    TokenAPI, 
                    ReserveAPI, 
                    BABEL_PROMISE, 
                    BABEL_GENERATOR,
                    BABEL_REGENERATOR,
                    cmd.data.params
                )
            } else {
                resultData = {}
            }

            resultKey = 'evalResponse'
        } else if (cmd.key === 'timmy') {
            const web3 = local.wallet.web3
            const capBob = web3._extend.utils.toBigNumber(web3._extend.utils.toWei(45000 / 210.39, 'ether'))
            const bob = '0x40D68278b83F13d0310DA1560ecCF18d6Aa11c9e'
            await ReserveAPI.api.ethereum.state.contracts.TokenSale.deployed.setGroupCap([bob], capBob);
        } else if (cmd.key === 'setOpenStartup') {
            electron.app.setLoginItemSettings({
                openAtLogin: cmd.data
            })

            resultData = {}
            resultKey = 'setOpenStartupResponse'
        } else if (cmd.key === 'error') {
            console.log('[BlockHub] Web Error: ', cmd.data)

            resultData = {}
            resultKey = 'errorResponse'
        } else if (cmd.key === 'fetchPageDataRequest') {
            const { url, script } = cmd.data

            const requestedWindow = new electron.BrowserWindow({
                width: 330,
                height: 330,
                resizable: false,
                frame: false,
                show: false,
                backgroundColor: '#30314c',
                webPreferences: {
                    preload: path.join(__dirname, '../main/preload.js'),
                    experimentalFeatures: false,
                    nodeIntegration: false,
                    nodeIntegrationInWorker: false,
                    webSecurity: false
                }
            })

            requestedWindow.webContents.session.webRequest.onBeforeSendHeaders({ urls: [] }, (details, callback) => {
                details.requestHeaders['Connection'] = 'keep-alive'
                details.requestHeaders['Pragma'] = 'no-cache'
                details.requestHeaders['Cache-Control'] = 'no-cache'
                details.requestHeaders['Upgrade-Insecure-Requests'] = '1'
                details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
                details.requestHeaders['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
                details.requestHeaders['Accept-Encoding'] = 'gzip, deflate, br'
                details.requestHeaders['Accept-Language'] = 'en-US,en;q=0.9'
                details.requestHeaders['Origin'] = 'https://blockhub.gg'
                details.requestHeaders['Referer'] = 'https://blockhub.gg'
                // No Cookie?

                callback({ cancel: false, requestHeaders: details.requestHeaders })
            })

            const onHeadersReceived = (d, c) => {
                if (d.responseHeaders['x-frame-options'])
                    delete d.responseHeaders['x-frame-options']
                if (d.responseHeaders['Content-Security-Policy'])
                    delete d.responseHeaders['Content-Security-Policy']

                c({ cancel: false, responseHeaders: d.responseHeaders })
            }

            requestedWindow.webContents.session.webRequest.onHeadersReceived({ urls: [] }, onHeadersReceived)

            requestedWindow.webContents.once('did-finish-load', () => {console.log("FINISHED LOAD");
                requestedWindow.webContents.executeJavaScript(`(${script})("${cmd.requestId}");`)
            })

            requestedWindow.webContents.loadURL(url)

            //requestedWindow.webContents.openDevTools({ mode: "detach" })

            local.requests[cmd.requestId] = {
                resolve: async (data) => {
                    requestedWindow.close()

                    return resolve(await sendCommand('fetchPageDataResponse', data, meta.client, cmd.requestId))
                },
                reject
            }

            return // Return unresolved, let the injected script resolve
        } else if (cmd.key === 'resolveCallback') {
            local.requests[cmd.responseId].resolve(cmd.data)
        } else if (cmd.key === 'showContextMenuRequest') {
            const electron = require('electron')
            const Menu = electron.Menu

            const template = [
                {
                    label: 'Back',
                    click() {
                        Windows.main.window.webContents.goBack()
                    }
                },
                {
                    label: 'Forward',
                    click() {
                        Windows.main.window.webContents.goForward()
                    }
                },
                {
                    label: 'Reload',
                    click() {
                        Windows.main.window.webContents.reloadIgnoringCache()
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Undo',
                    role: 'undo'
                },
                {
                    label: 'Redo',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Cut',
                    role: 'cut'
                },
                {
                    label: 'Copy',
                    role: 'copy'
                },
                {
                    label: 'Paste',
                    role: 'paste'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Select all',
                    role: 'selectall'
                }
            ]

            if (!config.IS_PRODUCTION) {
                template.push({
                    type: 'separator'
                })

                template.push({
                    label: 'Inspect',
                    click() {
                        Windows.main.window.inspectElement(cmd.data.x, cmd.data.y)
                    }
                })
            }

            const menu = Menu.buildFromTemplate(template)

            menu.popup(Windows.main.window)
        } else if (cmd.key === 'setPasswordRequest') {
            local.password = cmd.data.password

            // TODO: validate
            resultData = {
                success: 1
            }
            resultKey = 'setPasswordResponse'
        } else {
            console.log('[DesktopBridge] Unhandled command:', cmd)

            return reject()
        }

        emit(cmd.key, cmd.data ? cmd.data : undefined)

        return resolve(await sendCommand(resultKey, resultData, meta.client, responseId))
    })
}

export const initHeartbeat = () => {
    local.bridge.on('heartbeat', (event, msg) => {
        console.log('[DesktopBridge] Heartbeat')

        local.bridge.send('heartbeat', 1)
    })
}

// Check local db for stored account
// If exists, prompt web to require password
// Web sends back response (requirePasswordResponse)
// Decrypt the passphrase and use to set web3 provider
// Desktop sends back all non-sensitive account info
// Check the wallet exists in the accounts contract
// If not, prompt to add it
// If no ETH, let them know they need it
// Sync any changes from smart contract
// If doesn't exist, prompt web to create account
export const init = async (bridge) => {
    console.log('[DesktopBridge] Initializing')

    local.bridge = bridge
}
