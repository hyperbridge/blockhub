import { getId, mergeId } from '@/store/utils';

const relations = {
    assets: {
        trxs: { messages: 'community' },
        transactions: { messages: 'community' }
    },
    community: {},
    marketplace: {}
};

const rootStore = {
    mutations: {
        create(rootState, { id, module, target, data }) {
            const { [module]: state } = rootState;
            console.log('ROOT CREATE HOOK',id, module, target, data)
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

            const shallowCopy = { ...rootState[module][target] };
            delete shallowCopy[id];
            rootState[module][target] = shallowCopy;

            /* BUG? */
            // const { [id]: deleted, ...rest } = rootState[module][target];
            // console.log('module', module, 'target', target, 'id', id)
        }
    },
    actions: {
        create({ commit, state: rootState }, payload) {
            const { target, module, data } = payload;
            const { [module]: state } = rootState;

            // const newData = await axios.post(`/${target}`, data);
            const id = getId();
            commit('create', { ...payload, id, data: { ...data, id }});
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
            [targets, targetId, data]
        ) {
            const [module, target, prop] = targets.split('/');
            /* "assets/transactions/messages" => path, dest, targets? */

            const propModule = (relations[module][target] && relations[module][target][prop]) || module;

            const newId = await dispatch(
                'create',
                { target: prop, module: propModule, data }
            );

            const targetData = {
                [prop]: [...state[module][target][targetId][prop], newId]
            };
            commit('update', { module, target, id: targetId, data: targetData });
        },
        deleteGeneric(
            { commit, dispatch, state },
            [targets, targetId, id]
        ) {
            const [module, target, prop] = targets.split('/');
            const propModule = (relations[module][target] && relations[module][target][prop]) || module;

            const targetData = {
                [prop]: state[module][target][targetId][prop].filter(propId => propId != id)
            };
            commit('update', { module, target, id: targetId, data: targetData });
            dispatch('delete', { id, target: prop, module: propModule });
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
