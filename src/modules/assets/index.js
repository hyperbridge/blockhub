import Vue from 'vue';
import moment from 'moment';
import { extract, skip } from '@/store/utils';

import transactions from '@/db/seed/asset-transactions';
import trxsData from '@/db/seed/asset-transactions.json';
import usersData from '@/db/seed/users.json';
import assetsData from '@/db/seed/assets';
import collectionsData from '@/db/seed/collections';


const rand = () => Math.floor(Math.random() * 1000);
const assignId = (id, object) => ({ ...object, data: { ...object.data, id }, id });

const assets = {
    namespaced: true,
    state: {
        transactions: [],
        assets: assetsData.reduce((assets, asset) => ({
            ...assets,
            [asset.id]: {
                ...asset,
                market_price: 0,
                selected: false,
                for_sale: false,
            }
        }), {}),
        collections: collectionsData.reduce((collections, collection) => ({
            ...collections,
            [collection.id]: collection
        }), {}),
        snipers: {
            1: { id: 1, asset: 4, priceMin: 31, priceMax: 59, expDate: "2018-12-15T14:29:47+02:00" },
            3: { id: 3, asset: 6, priceMin: 11, priceMax: 89, expDate: "2018-11-14T14:29:47+02:00" }
        },
        offers: {
            1: { id: 1, auctions: [1, 2], buyout: 42, marketValue: 45, seller: { id: 2, name: 'Tenseii' }, expDate: moment().add(24, 'hours') },
            2: { id: 2, auctions: [1, 2], buyout: 42, marketValue: 45, seller: { id: 1, name: 'Tomeh' }, expDate: moment().add(12, 'hours') },
            3: { id: 3, auctions: [1, 2], buyout: 42, marketValue: 45, seller: { id: 1, name: 'Tomeh' }, expDate: moment().add(3, 'hours') },
            4: { id: 4, auctions: [1, 2], buyout: 42, marketValue: 45, seller: { id: 1, name: 'Tomeh' }, expDate: moment().add(11, 'hours') },
            5: { id: 5, auctions: [1, 2], buyout: 42, marketValue: 45, seller: { id: 1, name: 'Tomeh' }, expDate: moment().add(2, 'hours') }
        },
        auctions: {
            1: { id: 1, bid: 12.9, user: { name: 'Predda' }, date: moment().add(-1, 'day') },
            2: { id: 2, bid: 18.1, user: { name: 'Dalmyra' }, date: moment().add(-14, 'hours') }
        },
        filters: {
            1: { id: 1, name: null, phrase: 'Armor', priceMin: 1, priceMax: 52 },
            2: { id: 2, name: 'Cheap armors', phrase: 'Armors', priceMin: 0, priceMax: 10 }
        },
        trxs: trxsData.reduce((transactions, trx, index) => ({
            ...transactions,
            [trx.id]: {
                ...trx,
                createdAt: moment().add(-index, 'days')
            }
        }), {}),
        users: usersData.reduce((users, user) => ({
            ...users,
            [user.id]: user
        }), {}),
        navigator: {
            1: { id: 1, assetId: 1, evolvesTo: [2, 3], isRoot: true },
            2: { id: 2, assetId: 2, evolvesTo: [4]},
            3: { id: 3, assetId: 3, evolvesTo: []},
            4: { id: 4, assetId: 4, evolvesTo: []}
        }
    },
    mutations: {
        addAsset(state, { prop = 'assets', data }) {
            state[prop] = { ...state[prop], [data.id]: data };
        },
        create(state, { prop = 'assets', data, id }) {
            state[prop] = { ...state[prop], [id]: data };
        },
        updateAsset(state, { prop = 'assets', id, data }) {
            // Payload could be written in format => { 'id_28313': { ...payload data } }
            state[prop][id] = { ...state[prop][id], ...data };
        },
        update(state, { prop = 'assets', id, data }) {
            state[prop][id] = { ...state[prop][id], ...data };
        },
        updatev2(state, payload) {
            const [prop, id] = Object.keys(payload)[0].split('_');
            state[prop][id] = { ...state[prop][id], ...payload };
        },
        delete(state, { prop = 'assets', id }) {
            const { [id]: value, ...values } = state[prop];
            state[prop] = values;
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
        },
        evolveNavigator(state, { id, evolveId, assetId, isRoot = false }) {
            const { navigator } = state;
            state.navigator = {
                ...navigator,
                [evolveId]: {
                    ...navigator[evolveId],
                    evolvesTo: [...navigator[evolveId].evolvesTo, id]
                },
                [id]: { id, assetId, evolvesTo: [], isRoot }
            };
        }
    },
    actions: {
        create({ commit }, payload) {
            const id = rand();
            commit('create', { ...payload, id, data: { ...payload.data, id }});
        },
        update({ commit }, payload) {
            // async call
            commit('update', payload);
        },
        createFilter({ commit }, payload) {
            const id = rand();
            commit('create', assignId(payload));
        },
        createAuction({ state, commit }, { offerId, ...payload }) {
            const newId = rand();

            // commit('updatev2', { ['offers_'+ offerId]: {
            //     auctions: [...state.offers[id].auctions, newId]
            // }});

            commit('create', { id: newId, prop: 'auctions', data: payload });
            commit('update', {
                id: offerId,
                prop: 'offers',
                data: { auctions: [...state.offers[offerId].auctions, newId] }
            });
        },
        evolveNavigator({ commit }, payload) {
            const id = rand();
            commit('evolveNavigator', { ...payload, id });
        }
    },
    getters: {
        assets: ({ assets }, { collections: col }, { marketplace: { collections, products }}) => Object.values(assets)
            .reduce((populated, asset) => ({
                ...populated,
                [asset.id]: {
                    ...asset,
                    offers_list: asset.offers_list.map(id => assets[id]),
                    inventory_list: asset.inventory_list.map(id => assets[id]),
                    collections: asset.collections.map(id => collections[id]),
                    product: extract(products[asset.product], ['images', 'price'])
                }
            }), {}),
        array: (state, { assets }) => Object.values(assets),
        assetsArray: (state, { assets }) => Object.values(assets),
        users: ({ users }, { assets }) => Object.values(users)
            .map(user => ({
                ...user,
                inventory: user.inventory.map(id => extract(assets[id], ['image', 'price', 'product']))
            }))
            .reduce((populated, user) => ({
                ...populated,
                [user.id]: {
                    ...user,
                    inventoryGrouped: user.inventory.reduce((grouped, asset) => {
                        const { name } = asset.product;
                        grouped[name] = grouped[name] || [];
                        grouped[name] = [...grouped[name], asset];
                        return grouped;
                    }, {})
                }
            }), {}),
        transactions: ({ trxs, assets }, { users }) => Object.values(trxs)
            .reduce((populated, trx) => ({
                ...populated,
                // [trx.id]: trx
                [trx.id]: {
                    ...trx,
                    you: users[trx.you],
                    contractor: users[trx.contractor],
                    contractorOffer: trx.contractorOffer.map(id => assets[id]),
                    yourOffer: trx.yourOffer.map(id => assets[id])
                }
            }), {}),
        // inventoryGrouped: user.inventory.reduce((grouped, id) => {
        //     return {};

        //     // return {
        //     //     ...grouped,
        //     //     [name]: [
        //     //         ...grouped[name],
        //     //         assets[id]
        //     //     ]
        //     // };
        // }, {})
        transactionsArray: (state, { transactions }) => Object.values(transactions),
        inventoryAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => !asset.for_sale),
        selectedAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => asset.selected),
        forSaleAssets: (state, { assetsArray }) => assetsArray
            .filter(asset => asset.for_sale),
        assetsTags: (state, { assetsArray }) => assetsArray
            .reduce((tags, asset) => [
                ...tags,
                ...asset.system_tags.filter(tag =>
                    !tags.includes(tag)
                )
            ], []),
        assetsAttributes: (state, { assetsArray }) => assetsArray
            .reduce((attributes, asset) => [
                ...attributes,
                ...Object.keys(asset.metadata).filter(attr =>
                    !attributes.includes(attr)
                )
            ], []),
        assetsByName: (state, { assetsArray }) => name => assetsArray
            .filter(asset => asset.name.toLowerCase().includes(name.toLowerCase())),
        collections: ({ assets, collections }) => Object.values(collections)
            .reduce((populated, collection) => ({
                ...populated,
                [collection.id]: {
                    ...collection,
                    assets: collection.assets.map(id => assets[id])
                }
            }), {}),
        collectionsArray: (state, { collections }) => Object.values(collections),
        snipers: ({ snipers, assets }) => Object.values(snipers)
            .reduce((populated, sniper) => ({
                ...populated,
                [sniper.id]: {
                    ...sniper,
                    asset: assets[sniper.asset]
                }
            }), {}),
        offers: ({ offers, auctions }) => Object.values(offers)
            .reduce((populated, offer) => ({
                ...populated,
                [offer.id]: {
                    ...offer,
                    auctions: offer.auctions.map(id => auctions[id])
                }
            }), {}),
        offersArray: (state, { offers }) => Object.values(offers),
        filters: ({ filters }) => Object.values(filters)
    }
}

export default assets;
