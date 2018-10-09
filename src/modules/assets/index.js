import transactions from '@/db/seed/asset-transactions';
import moment from 'moment';

const assets = {
    state: {
        transactions: [],
    },
    mutations: {
        loadTransactions(state, payload = transactions) {
            state.transactions = payload
                .map((transaction, index) => ({
                    ...transaction,
                    createdAt: moment().add(-1 * (index + 1), 'days').format(),
                    updatedAt: moment().add(-1 * (index + 1), 'days').format()
                }));
        }
    }
}

export default assets;
