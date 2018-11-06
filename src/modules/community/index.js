import moment from 'moment';

import messagesData from '@/db/seed/messages.json';
import usersData from '@/db/seed/users.json';

import { extract, getId, mergeId } from '@/store/utils';

const community = {
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
    },
    mutations: {
        add(state, { target = 'messages', id, data }) {
            state[target] = {
                ...state[target],
                [id]: data
            };
        }
    },
    actions: {
        create({ commit }, payload) {
            const id = getId();
            commit('create', { ...payload, id });
        },
        createMessage({ commit }, message) {
            const id = getId();

            const payload = {
                id,
                data: {
                    id,
                    author: 1,
                    content: message,
                    createdAt: moment()
                }
            };

            commit('add', payload);
        }
    },
    getters: {
        messages: ({ messages, users }, getters) => Object.values(messages)
            .reduce((populated, msg) => ({
                ...populated,
                [msg.id]: {
                    ...msg,
                    author: users[msg.author]
                }
            }), {}),
        users: ({ users }, getters, rootState, { ['assets/assets']: assets }) => Object.values(users)
            .map(user => ({
                ...user,
                inventory: user.inventory.map(id => extract(assets[id], ['image', 'price', 'product']))
            }))
            .reduce((populated, user) => ({
                ...populated,
                [user.id]: {
                    ...user,
                    inventoryGrouped: user.inventory.reduce((grouped, asset) => {
                        const { name } = asset.product;
                        grouped[name] = grouped[name] || [];
                        grouped[name] = [...grouped[name], asset];
                        return grouped;
                    }, {})
                }
            }), {}),
    }
};

export default community;
