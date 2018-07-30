import Marketplace from './communication-api/ethereum/models/Marketplace'

export default {
    Ethereum: {
        Contracts: {
            Marketplace: require('./smart-contracts/ethereum/build/Marketplace.json')
        },
        Models: {
            Marketplace: Marketplace
        }
    }
}