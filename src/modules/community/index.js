
import messagesData from '@/db/seed/messages.json';
import usersData from '@/db/seed/users.json';

import { extract } from '@/store/utils';

const community = {
    namespaced: true,
    state: {
        messages: messagesData.reduce((messages, msg) => ({
            ...messages,
            [msg.id]: msg
        }), {}),
        users: usersData.reduce((users, user) => ({
            ...users,
            [user.id]: user
        }), {}),
    },
    mutations: {

    },
    actions: {

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
