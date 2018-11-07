import { getId, mergeId } from '@/store/utils';

const rootStore = {
    mutations: {
        create(rootState, { id, module, target, data }) {
            const { [module]: state } = rootState;
            rootState[module][target] = { ...state[target], [id]: data };
        },
        update(state,  { id, module, target }) {
            // const { [module]: state } = rootState;
        },
        delete(state, { id, module, target }) {
            // const { [module]: state } = rootState;
        }
    },
    actions: {
        create({ commit, state: rootState }, payload) {
            const { target, module, data } = payload;
            const { [module]: state } = rootState;

            // const newData = await axios.post(`/${target}`, data);
            const id = getId();
            commit('create', { data, id });
        },
        update() {

        },
        delete() {

        }
    }
};

export default rootStore;

/*

    **** Future: support for nested modules e.g. assets/transactions

    Example payload data to create new asset in assets module

    commit('create', {
        id: 30,
        module: 'assets',
        target: 'assets',
        data: {
            id: 30,
            name: 'New asset'
        }
    });

*/
