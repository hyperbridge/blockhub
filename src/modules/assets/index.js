import Vue from 'vue';
import moment from 'moment';

import transactions from '@/db/seed/asset-transactions';
import assetsData from '@/db/seed/assets';

const assets = {
    namespaced: true,
    state: {
        transactions: [],
        assets: assetsData.reduce((assets, asset) => {
            assets[asset.id] = {
                ...asset,
                market_price: 0,
                selected: false,
                for_sale: false,
            };
            return assets;
        }, {})
    },
    mutations: {
        addAsset(state, { prop = 'assets', data }) {
            state[prop] = { ...state[prop], [data.id]: data };
        },
        updateAsset(state, { prop = 'assets', id, data }) {
            // Payload could be written in format => { 'id_28313': { ...payload data } }
            state[prop][id] = { ...state[prop][id], ...data };
        },
        deleteAsset(state, { prop = 'assets', id }) {
            // delete state[prop][id];
            Vue.delete(state[prop][id]);
        },
        updateAssets(state, { prop = 'assets', data, ids }) {
            if (!ids) {
                for (let id in state[prop]) {
                    state[prop][id] = { ...state[prop][id], ...data };
                }
            } else {
                for (let id of ids) {
                    const payloadData = data[id] || data;
                    state[prop][id] = { ...state[prop][id], ...payloadData };
                }
            }
        },
        loadTransactions(state, payload = transactions) {
            state.transactions = payload
                .map((transaction, index) => ({
                    ...transaction,
                    createdAt: moment().add(-1 * (index + 1), 'days').format(),
                    updatedAt: moment().add(-1 * (index + 1), 'days').format(),
                    edited: false
                }));
        },
        addTransactionAsset(state, payload) {
            const { tradeId, target, asset } = payload;
            const transactionKey = state.transactions.findIndex(trx => trx.id === tradeId);
            state.transactions[transactionKey][target].selling.push(asset);

            if (!transactions[transactionKey].edited) transaction.edited = true;
        },
        deleteTransactionAsset(state, payload) {
            const { tradeId, target, assetId } = payload;
            // const assetKey = state.transactions[]
            state.transactions[transactionKey][target].selling.splice(assetKey, 1);
        }
    },
    actions: {

    },
    getters: {
        assetsArray: state => Object.values(state.assets),
        inventoryAssets: (state, getters) => getters.assetsArray
            .filter(asset => !asset.for_sale)
    }
}

// import Vue from 'vue';
// import assetsData from '@/db/seed/assets';

// const assets = {
//     namespaced: true,
//     state: {
//         inventory: {}
//     },
//     mutations: {
//         loadAssets(state) {
//             state.inventory = assetsData.reduce((assets, asset) => {
//                 assets[asset.id] = {
//                     ...asset,
//                     selected: false
//                 };
//                 return assets;
//             }, {});
//         }
//     }
// };


export default assets;
