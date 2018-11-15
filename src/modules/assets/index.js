import Vue from 'vue';
import moment from 'moment';
import { extract, skip, getId, assignId, mergeId, normalize } from '@/store/utils';

import transactionsData from '@/db/seed/asset-transactions.json';
import usersData from '@/db/seed/users.json';
import assetsData from '@/db/seed/assets.json';
import collectionsData from '@/db/seed/collections.json';
import productsData from '@/db/seed/products.json';


const rand = () => Math.floor(Math.random() * 1000);

const transactions = normalize(transactionsData, (trx, i) => ({
    createdAt: moment().add(-i, 'days')
}));

const assets = {
    namespaced: true,
    state: {
        assets: normalize(assetsData, {
            market_price: 0,
            selected: false,
            for_sale: false
        }),
        collections: normalize(collectionsData),
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
        offerBids: {},
        auctions: {
            1: { id: 1, bid: 12.9, user: { name: 'Predda' }, date: moment().add(-1, 'day') },
            2: { id: 2, bid: 18.1, user: { name: 'Dalmyra' }, date: moment().add(-14, 'hours') }
        },
        filters: {
            1: { id: 1, name: null, phrase: 'Armor', priceMin: 1, priceMax: 52 },
            2: { id: 2, name: 'Cheap armors', phrase: 'Armors', priceMin: 0, priceMax: 10 }
        },
        trxs: transactions,
        transactions,
        users: normalize(usersData),
        navigator: {
            1: { id: 1, assetId: 1, evolvesTo: [2, 3], isRoot: true },
            2: { id: 2, assetId: 2, evolvesTo: [4]},
            3: { id: 3, assetId: 3, evolvesTo: []},
            4: { id: 4, assetId: 4, evolvesTo: []}
        },
        products: normalize(productsData)
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
        update(state, { prop = 'assets', target = prop, id, data }) {
            state[target][id] = { ...state[target][id], ...data };
        },
        updatev2(state, payload) {
            const [prop, id] = Object.keys(payload)[0].split('_');
            state[prop][id] = { ...state[prop][id], ...payload };
        },
        delete(state, { prop = 'assets', id }) {
            const { [id]: value, ...values } = state[prop];
            state[prop] = values;
        },
        deleteMany(state, { prop = 'assets', ids }) {
            const copy = { ...state[prop] };
            for (let id of ids) {
                delete copy[id];
            }
            state[prop] = copy;
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
        },
        devolveNavigator(state, { id: itemId, parentId }) {

            const navTree = state.navigator[parentId];
            state.navigator[parentId] = {
                ...navTree,
                evolvesTo: navTree.evolvesTo.filter(id => id !== itemId)
            };
        }
    },
    actions: {
        create({ commit }, payload) {
            const id = rand();
            commit('create', { ...payload, id, data: { ...payload.data, id }});
        },
        update({ commit }, payload) {
            const { prop, target = prop || 'messages', data, id } = payload;
            // await axios.post(`/${target}/${id}`, data);
            commit('update', payload);
        },
        createFilter({ commit }, payload) {
            const id = rand();
            commit('create', assignId(payload));
        },
        createAuction({ state, commit }, { offerId, ...payload }) {
            const newId = rand();

            commit('create', { id: newId, prop: 'auctions', data: payload });
            commit('update', {
                id: offerId,
                target: 'offers',
                data: { auctions: [...state.offers[offerId].auctions, newId] }
            });
        },
        async createTransactionMessage({ dispatch, state }, { trxId, message }) {
            const id = await dispatch('community/createMessage', message, { root: true });

            const data = { messages: [...state.trxs[trxId].messages, id] };

            await dispatch('update', { target: 'trxs', data, id: trxId });
            return id;
        },
        deleteTransactionMessage({ commit, dispatch, state }, { id, trxId }) {
            console.log(state.trxs[trxId].messages)
            const data = {
                messages: state.trxs[trxId].messages.filter(msgId => msgId !== id)
            };
            console.log(data)
            commit('update', { id: trxId, target: 'trxs', data });
            dispatch('community/delete', { id }, { root: true });
        },
        evolveNavigator({ commit }, payload) {
            const id = rand();
            commit('evolveNavigator', { ...payload, id });
        },
        devolveNavigator({ state: { navigator }, commit }, { id, parentId }) {
            const idsToDelete = [];

            const checkId = (id) => {
                if (navigator[id].evolvesTo.length) {
                    navigator[id].evolvesTo.forEach(id => {
                        idsToDelete.push(id);
                        checkId(id);
                    });
                }
            };
            checkId(id);

            // async calls

            commit('devolveNavigator', { id, parentId });
            commit('deleteMany', { prop: 'navigator', ids: [...idsToDelete, id] });
        },

    },
    getters: {
        assets: ({ assets, products }, { collections: col }, { marketplace: { collections }}) =>
            normalize(assets, asset => ({
                offers_list: asset.offers_list.map(id => assets[id]),
                inventory_list: asset.inventory_list.map(id => assets[id]),
                collections: asset.collections.map(id => collections[id]),
                product: extract(products[asset.product], ['images', 'price'])
            })),
        /* Old normalization
        assets: ({ assets, products }, { collections: col }, { marketplace: { collections }}) => Object.values(assets)
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
        */
        assetsArray: (state, { assets }) => Object.values(assets),
        assetsMap: (state, { assets }) => Object.entries(assets),
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
        transactions: (
            { transactions, assets }, getters, rootState,
            { ['community/messages']: messages, ['community/identities']: identities }
        ) => normalize(transactions, trx => ({
                you: identities[trx.you],
                contractor: identities[trx.contractor],
                contractorOffer: trx.contractorOffer.map(id => assets[id]),
                yourOffer: trx.yourOffer.map(id => assets[id]),
                messages: trx.messages.map(id => messages[id])
            })),
        transactionsMap: (state, { transactions }) => Object.entries(transactions),
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
        collections: ({ assets, collections }) =>
            normalize(collections, col => ({
                assets: col.assets.map(id => assets[id])
            })),
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
