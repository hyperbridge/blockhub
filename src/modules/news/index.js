import { normalize } from 'normalizr'
import schema from './schema'

const rawData = {
    articles: [
        {
            id: "post1",
            author: { "id": "1", username: "user1", name: "User 1" },
            body: "......",
            comments: [
                {
                    id: "comment1",
                    author: { "id": "2", username: "user2", name: "User 2" },
                    comment: ".....",
                },
                {
                    id: "comment2",
                    author: { "id": "3", username: "user3", name: "User 3" },
                    comment: ".....",
                }
            ]
        },
        {
            id: "post2",
            author: { "id": "1", username: "user2", name: "User 2" },
            body: "......",
            comments: [
                {
                    id: "comment3",
                    author: { "id": "1", username: "user3", name: "User 3" },
                    comment: ".....",
                },
                {
                    id: "comment4",
                    author: { "id": "2", username: "user1", name: "User 1" },
                    comment: ".....",
                },
                {
                    id: "comment5",
                    author: { "id": "3", username: "user3", name: "User 3" },
                    comment: ".....",
                }
            ]
        }
        // and repeat many times
    ]
}

export default {
    state: normalize(rawData, { articles: [schema.article] }),
    getters: {},
    actions: {},
    mutations: {}
}