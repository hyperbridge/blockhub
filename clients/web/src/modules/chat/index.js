import moment from 'moment'

import messagesData from '../../db/seed/messages.json'
import usersData from '../../db/seed/users.json'
import profilesData from '../../db/seed/profiles.json'

import { extract, skip, getId, mergeId, normalize } from '../../store/utils'


export default {
    namespaced: true,
    state: {
        messages: messagesData.reduce((messages, msg, index) => ({
            ...messages,
            [msg.id]: {
                ...msg,
                createdAt: moment().add(-10, 'minutes').add(index + 1, 'minutes')
            }
        }), {}),
        users: usersData.reduce((users, user) => ({
            ...users,
            [user.id]: user
        }), {}),
        profiles: normalize(profilesData),
        offersSeller: {}
    },
    mutations: {
        create(state, { target = 'messages', id, data }) {
            state[target] = {
                ...state[target],
                [id]: data
            }
        },
        update(state, { target = 'messages', id, data }) {
            state[target][id] = { ...state[target][id], ...data }
        },
        delete(state, { target = 'messages', id }) {
            const { [id]: deleted, ...rest } = state[target]
            state[target] = rest
        }
    },
    actions: {
        create({ commit }, payload) {
            const { target, data } = payload
            const id = getId()
            /* const newData = await axios.post(`/${target}`, data)
               *** merge new data with payload's data and return id
               return newData.id
            */
            commit('create', { ...payload, id })
        },
        update({ commit }, payload) {
            const { id, target, data } = payload
            // await axios.patch(`/${target}/${id}`, data)
            commit('updateObject', payload)
        },
        delete({ commit }, payload) {
            const { id, target = 'messages' } = payload
            // await axios.delete(`/${target}/${id}`, { id })
            commit('delete', payload)
        },
        createMessage({ commit }, message) {
            const id = getId()

            const payload = {
                id,
                data: {
                    id,
                    author: 1,
                    content: message,
                    createdAt: moment()
                }
            }

            commit('create', payload)
            return id
        }
    },
    getters: {
        messages: ({ messages, users }, getters) => Object.values(messages)
            .reduce((populated, msg) => ({
                ...populated,
                [msg.id]: {
                    ...msg,
                    author: users[msg.author],
                    // timeAgo: moment(msg.createdAt).fromNow()
                }
            }), {})
    }
}