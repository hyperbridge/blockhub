import { getId, mergeId } from '@/store/utils';
import { findRelation } from '@/store/module-relations';


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

            // const { id, data } = await axios.post(`/${target}`, data);
            const id = getId();
            commit('create', { ...payload, id, data: { ...data, id }});
            return id;
        },
        update({ commit }, payload) {
            const { id, target, data } = payload;
            // await axios.patch(`/${target}/${id}`, data);
            commit('update', payload);
        },
        updateV2({ commit }, [targets, id, data]) {
            const [module, target] = targets.split('/');
            // await axios.patch(`/${target}/${id}`, data);
            commit('update', { module, target, id, data });
        },
        delete({ commit }, payload) {
            const { id, target } = payload;
            // await axios.delete(`/${target}/${id}`);
            commit('delete', payload);
        },
        async createRelation(
            { commit, dispatch, state },
            [targets, targetId, data]
        ) {
            const [module, target, prop] = targets.split('/');
            /* "assets/transactions/messages" => path, dest, targets? */

            const propModule = findRelation(module, target, prop);

            const newId = await dispatch(
                'create',
                { target: prop, module: propModule, data }
            );

            const targetData = {
                [prop]: [...state[module][target][targetId][prop], newId]
            };
            commit('update', { module, target, id: targetId, data: targetData });
            return newId;
        },
        deleteRelation(
            { commit, dispatch, state },
            [targets, targetId, id]
        ) {
            const [module, target, prop] = targets.split('/');
            const propModule =  findRelation(module, target, prop);

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
