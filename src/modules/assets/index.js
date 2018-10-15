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
        negateValue(state, { prop = 'assets', id, iprop }) {
            state[prop][id][iprop] = !state[prop][id][iprop];
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
        assets: ({ assets }, getters, { marketplace: { collections }}) => Object.values(assets)
            .reduce((populated, asset) => ({
                ...populated,
                [asset.id]: {
                    ...asset,
                    offers_list: asset.offers_list.map(id => assets[id]),
                    inventory_list: asset.inventory_list.map(id => assets[id]),
                    collections: asset.collections.map(id => collections[id])
                }
            }), {}),
        array: (state, { assets }) => Object.values(assets),
        assetsArray: state => Object.values(state.assets),
        inventoryAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => !asset.for_sale),
        selectedAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => asset.selected),
        forSaleAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => asset.for_sale)
    }
}

export default assets;
