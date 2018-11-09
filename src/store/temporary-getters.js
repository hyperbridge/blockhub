import store from './index';

const { state, getters } = store;

const users = Object.values(state.assets.users)
    .reduce((populated, user) => ({
        ...populated,
        [user.id]: {
            ...user,
            inventory: user.inventory.map(id => getters['assets/assets'][id]),
            inventoryGrouped: user.inventory.reduce((grouped, id) => {
                const asset = getters['assets/assets'][id];
                grouped[asset.product.name] = grouped[asset.product.name] || [];
                grouped[asset.product.name] = [...grouped[asset.product.name], asset];
                return grouped;
            }, {})
        }
    }), {});

const transactions = Object.values(state.assets.trxs)
    .reduce((populated, trx) => ({
        ...populated,
        [trx.id]: {
            ...trx,
            // you: getters['assets/users'],
            // contractor: getters['assets/users'][trx.contractor],
            // contractorOffer: trx.contractorOffer.map(id => getters['assets/assets'][id]),
            // yourOffer: trx.yourOffer.map(id => getters['assets/assets'][id])
        }
    }), {});



const temporaryGetters = {
    assets: {
        // transactions,
        // transactionsArray: Object.values(transactions),
        // users
    }
}



const ctx = {};

export default ctx;
