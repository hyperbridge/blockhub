import moment from 'moment';

import messagesData from '@/db/seed/messages.json';
import usersData from '@/db/seed/users.json';
import identitiesData from '@/db/seed/identities.json';

import { extract, getId, mergeId, normalize } from '@/store/utils';



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
        identities: normalize(identitiesData)
    },
    mutations: {
        create(state, { target = 'messages', id, data }) {
            state[target] = {
                ...state[target],
                [id]: data
            };
        },
        update(state, { target = 'messages', id, data }) {
            state[target][id] = { ...state[target][id], ...data };
        },
        delete(state, { target = 'messages', id }) {
            const { [id]: deleted, ...rest } = state[target];
            state[target] = rest;
        }
    },
    actions: {
        create({ commit }, payload) {
            const { target, data } = payload;
            const id = getId();
            /* const newData = await axios.post(`/${target}`, data);
               *** merge new data with payload's data and return id
               return newData.id;
            */
            commit('create', { ...payload, id });
        },
        update({ commit }, payload) {
            const { id, target, data } = payload;
            // await axios.patch(`/${target}/${id}`, data);
            commit('update', payload);
        },
        delete({ commit }, payload) {
            const { id, target = 'messages' } = payload;
            // await axios.delete(`/${target}/${id}`, { id })
            commit('delete', payload);
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

            commit('create', payload);
            return id;
        },
        updateWishlist(
            { dispatch, rootGetters: { ['application/account']: account }},
            [name, itemId]
        ) {
            const identity = account.active_identity;
            const prop = [name + '_wishlist'];
            const wishlist = { ...identity[prop] };

            if (wishlist[itemId]) delete wishlist[itemId];
            else wishlist[itemId] = true;

            dispatch(
                'updateV2',
                [`community/identities/${prop}`, identity.id, { [prop]: wishlist }],
                { root: true }
            );
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
        identities: ({ identities }, { users }) => Object
            .entries(identities)
            .reduce((populated, [id, identity]) => ({
                ...populated,
                [id]: {
                    ...identity,
                    friends: identity.friends.map(id => identities[id]),
                    inventory: users[identity.owner].inventory,
                    inventoryGrouped: users[identity.owner].inventoryGrouped
                }
            }), {})
    }
};

export default community;
