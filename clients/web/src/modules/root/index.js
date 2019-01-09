import Vue from 'vue'
import { getId, mergeId, normalize } from '../../store/utils'
import { findRelation, decompose, findRelationPaths } from '../../store/modules-relation'

/* Create and populate action/mutation needed (asset/offers) */

const rootStore = {
    mutations: {
        createV1(rootState, { id, module, target, data }) {
            const { [module]: state } = rootState
            console.log('ROOT CREATE',id, module, target, data)
            rootState[module][target] = { ...state[target], [id]: data }
        },
        create(rootState, [path, id, data]) {
            const [module, target] = path.split('/')

            rootState[module][target] = {
                ...rootState[module][target],
                [id]: data
            }
        },
        update(rootState, [path, value]) {
            const [module, target] = path.split('/')

            rootState[module][target] = value
        },
        updateObject(rootState, [path, key, value]) {
            const [module, target] = path.split('/')

            Vue.set(rootState[module][target], key, {
                ...rootState[module][target][key],
                ...value
            })
        },
        updateSingle(rootState, [path, data]) {
            const [module, target] = path.split('/')
            if (data !== null && typeof data === 'object') {
                rootState[module][target] = {
                    ...rootState[module][target],
                    ...data
                }
            } else {
                //rootState[module][target] = data
                Vue.set(rootState[module], target, data)
            }
        },
        delete(rootState, [path, id]) {
            const [module, target] = path.split('/')

            const shallowCopy = { ...rootState[module][target] }
            delete shallowCopy[id]
            rootState[module][target] = shallowCopy

            /* BUG? */
            // const { [id]: deleted, ...rest } = rootState[module][target]
            // console.log('module', module, 'target', target, 'id', id)
        },
        loadData(rootState, [path, data]) {
            const [module, target] = path.split('/')
            rootState[module][target] = {
                ...rootState[module][target],
                ...normalize(data)
            }
        },
        clearData(rootState, paths) {
            for (let path of paths) {
                const [module, target] = path.split('/')
                rootState[module][target] = {}
            }
        }
    },
    actions: {
        create({ commit }, [path, payload]) {
            const [module, target] = path.split('/')

            /*
                const { data } = await axios.post(`/${target}`, payload)
                commit('create', [targets, data.id, { ...payload, ...data }])
            */

            const id = getId()
            commit('create', [path, id, { ...payload, id }])
            return id
        },
        update({ commit }, [path, id, data]) {
            const [module, target] = path.split('/')
            // await axios.patch(`/${target}/${id}`, data)
            commit('updateObject', [path, id, data])
        },
        delete({ commit }, [path, id]) {
            const [module, target] = path.split('/')

            // await axios.delete(`/${target}/${id}`)
            commit('delete', [path, id])
        },


        // Version that creates relation with existing element (doesn't require new data, only item id)
        createWeakRel(
          { commit, dispatch, state },
          [targets, targetId, itemId]
        ) {
            const [module, target, prop] = targets.split('/')

            const data = {
                [prop]: [...state[module][target][targetId][prop], itemId]
            }

            commit('updateObject', [`${module}/${target}`, targetId, data])
        },
        deleteWeakRel(
            { commit, dispatch, state },
            [targets, targetId, itemId]
        ) {
            const [module, target, prop] = targets.split('/')

            const data = {
                [prop]: state[module][target][targetId][prop].filter(id => id != itemId)
            }
            commit('updateObject', [`${module}/${target}`, targetId, data])
        },


        async createRelation(
            { commit, dispatch, state },
            [targets, targetId, data]
        ) {
            const [module, target, prop] = targets.split('/')
            /* "assets/transactions/messages" => path, dest, targets? */

            // const propModule = findRelation(module, target, prop)
            const [propModule, propTarget] = findRelation(module, target, prop)

            const newId = await dispatch(
                'create',
                [`${propModule}/${propTarget}`, data]
            )

            const targetData = {
                [prop]: [...state[module][target][targetId][prop], newId]
            }
            commit('updateObject', [`${module}/${target}`, targetId, targetData])
            return newId
        },
        deleteRelation(
            { commit, dispatch, state },
            [targets, targetId, id]
        ) {
            const [module, target, prop] = targets.split('/')
            const propModule =  findRelation(module, target, prop)

            const targetData = {
                [prop]: state[module][target][targetId][prop].filter(propId => propId != id)
            }
            commit('updateObject', [`${module}/${target}`, targetId, targetData])
            dispatch('delete', [`${propModule}/${prop}`, id])
        },



        loadData({ commit }, [destination, data]) {
            const mutations = Object.entries(decompose(destination, data))

            for (let [mutation, data] of mutations) {
                commit('loadData', [mutation, data])
            }
        },
        clearData({ commit }, target) {
            commit('clearData', findRelationPaths(target))
        }
    }
}

export default rootStore

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
    })

*/
