import { getId, mergeId, normalize } from '@/store/utils';
import { findRelation, decompose, findRelationPaths } from '@/store/modules-relation';


const rootStore = {
    mutations: {
        create(rootState, { id, module, target, data }) {
            const { [module]: state } = rootState;
            console.log('ROOT CREATE',id, module, target, data)
            rootState[module][target] = { ...state[target], [id]: data };
        },
        update(rootState,  { id, module, target, data }) {
            const { [module]: state } = rootState;

            console.log(id, module, target, data)

            rootState[module][target][id] = {
                ...rootState[module][target][id],
                ...data
            };

            console.log(rootState)
            // const { [module]: state } = rootState;
        },
        updateV2(rootState, [targets, id, data]) {
            const [module, target] = targets.split('/');

            rootState[module][target][id] = {
                ...rootState[module][target][id],
                ...data
            };
        },
        updateSingle(rootState, [targets, data]) {
            const [module, target] = targets.split('/');
            rootState[module][target] = {
                ...rootState[module][target],
                ...data
            }
        },
        delete(rootState, { id, module, target }) {
            const { [module]: state } = rootState;

            const shallowCopy = { ...rootState[module][target] };
            delete shallowCopy[id];
            rootState[module][target] = shallowCopy;

            /* BUG? */
            // const { [id]: deleted, ...rest } = rootState[module][target];
            // console.log('module', module, 'target', target, 'id', id)
        },
        loadData(rootState, [targets, data]) {
            const [module, target] = targets.split('/');
            rootState[module][target] = {
                ...[module][target],
                ...normalize(data)
            }
        },
        clearData(rootState, paths) {
            for (let path of paths) {
                const [module, target] = path.split('/');
                rootState[module][target] = {};
            }
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


        // Version that creates relation with existing element (doesn't require new data, only item id)
        createWeakRel(
          { commit, dispatch, state },
          [targets, targetId, itemId]
        ) {
            const [module, target, prop] = targets.split('/');

            const data = {
                [prop]: [...state[module][target][targetId][prop], itemId]
            };

            commit('update', { module, target, id: targetId, data });
        },
        deleteWeakRel(
            { commit, dispatch, state },
            [targets, targetId, itemId]
        ) {
            const [module, target, prop] = targets.split('/');

            const data = {
                [prop]: state[module][target][targetId][prop].filter(id => id != itemId)
            };
            commit('update', { module, target, id: targetId, data });
        },


        async createRelation(
            { commit, dispatch, state },
            [targets, targetId, data]
        ) {
            const [module, target, prop] = targets.split('/');
            /* "assets/transactions/messages" => path, dest, targets? */

            // const propModule = findRelation(module, target, prop);
            const [propModule, propTarget] = findRelation(module, target, prop);

            const newId = await dispatch(
                'create',
                { target: propTarget, module: propModule, data }
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
        },



        loadData({ commit }, [destination, data]) {
            // console.log(decompose(destination, data))
            const mutations = Object.entries(decompose(destination, data));


            for (let [mutation, data] of mutations) {
                commit('loadData', [mutation, data]);
            }
        },
        clearData({ commit }, target) {
            commit('clearData', findRelationPaths(target));
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
