import { normalize } from 'normalizr'
import schema from './schema'
import * as ethereum from '../../framework/ethereum'

const rawData = {
    projects: [
        {
            id: '1',
            name: 'Bitoreum: The Future of Finance',
            likes: 1000,
            images: {},
            owner: {
                id: '0x0'
            },
            author: {
                id: '0x0'
            },
            systemTags: [],
            authorTags: ['bitcoin'],
            comments: [],
            contributors: [],
            moderators: []
        }
    ]
}

export default {
    state: normalize(rawData, { projects: [schema.project] }),
    getters: {
    },
    actions: {
    },
    mutations: {
    }
}