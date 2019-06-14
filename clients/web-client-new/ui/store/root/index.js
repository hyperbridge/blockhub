import Vue from 'vue'

export const state = () => ({})

export const mutations = {
    createV1(rootState, { id, module, target, data }) {
        const { [module]: state } = rootState
        console.log('ROOT CREATE', id, module, target, data)
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
        for (const path of paths) {
            const [module, target] = path.split('/')
            rootState[module][target] = {}
        }
    }
}

export const actions = {
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
    updateSingle({ rootState }, [path, data]) {
        const [module, target] = path.split('/')
        if (data !== null && typeof data === 'object') {
            rootState[module][target] = {
                ...rootState[module][target],
                ...data
            }
        } else {
            console.log(arguments)
            // rootState[module][target] = data
            Vue.set(rootState[module], target, data)
        }
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
    }
}
