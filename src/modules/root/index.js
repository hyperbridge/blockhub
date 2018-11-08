import { getId, mergeId } from '@/store/utils';

const rootStore = {
    mutations: {
        create(rootState, { id, module, target, data }) {
            const { [module]: state } = rootState;
            rootState[module][target] = { ...state[target], [id]: data };
        },
        update(rootState,  { id, module, target, data }) {
            const { [module]: state } = rootState;
            rootState[module][target][id] = {
                ...rootState[module][target][id],
                ...data
            };
            // const { [module]: state } = rootState;
        },
        delete(rootState, { id, module, target }) {
            const { [module]: state } = rootState;

            const { [id]: deleted, ...rest } = state[target][id];
            rootState[module][target] = rest;
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
            return id;
        },
        update({ commit }, payload) {
            const { id, target, data } = payload;
            // await axios.patch(`/${target}/${id}`, data);
            commit('update', payload);
        },
        delete({ commit }, payload) {
            const { id, target } = payload;
            // await axios.delete(`/${target}/${id}`);
            commit('delete', payload);
        },
        async createGeneric(
            { commit, dispatch, state },
            [prop, data, target, targetId, propModule = 'assets', module = propModule]
        ) {

            const newId = await dispatch(
                'create',
                { target: prop, data, module: propModule }
            );

            const targetData = {
                [prop]: [...state[target][tragetId][prop], newId]
            };
            commit('update', { target, id: tragetId, data: targetData, module });
        },
        deleteGeneric(
            { commit, dispatch, state },
            [prop, id, target, targetId, propModule = 'assets', module = propModule]
        ) {

            const targetData = {
                [prop]: state[target][targetId][prop].filter(propId => propId != id)
            };
            commit('update', { target, id: targetId, data: targetData, module });
            dispatch('delete', { id, target: prop, module: propModule });
        },

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
