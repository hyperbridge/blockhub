import store from './index';

const { state, getters } = store;

const transactions = Object.values(state.assets.trxs)
    .reduce((populated, trx) => ({
        ...populated,
        [trx.id]: {
            ...trx,
            you: getters['assets/users'][trx.you],
            contractor: getters['assets/users'][trx.contractor],
            contractorOffer: trx.contractorOffer.map(id => getters['assets/assets'][id]),
            yourOffer: trx.yourOffer.map(id => getters['assets/assets'][id])
        }
    }), {});

const users = Object.values(state.assets.users)
    .reduce((populated, user) => ({
        ...populated,
        [user.id]: {
            ...user,
            inventory: user.inventory.map(id => getters['assets/assets'][id])
        }
    }), {});



const temporaryGetters = {
    assets: {
        transactions,
        transactionsArray: Object.values(transactions),
        users
    }
}


window.getters = temporaryGetters;
console.log(temporaryGetters.assets)

export default temporaryGetters;
