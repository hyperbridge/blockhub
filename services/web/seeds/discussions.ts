import Discussion from '../src/models/discussion'

export const data = [
    {
        status: 'active',
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            actionStatus: 'pinned',
            author: {
                name: 'Alan Walker'
            },
            content: 'something',
            preview: 'https://via.placeholder.com/100x100',
            comments: [
                {
                    rate: 11,
                    author: {
                        name: 'Alan Walker',
                        img: 'https://via.placeholder.com/100x100'
                    },
                    date: '2017-11-04T04:09:00.000Z',
                    text: 'test'
                }
            ]
        }
    },
    {
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            actionStatus: 'locked',
            author: {
                name: 'Alan Walker'
            }
        }
    },
    {
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            actionStatus: 'starred',
            author: {
                name: 'Alan Walker'
            }
        }
    },
    {
        name: 'New to BlockHub',
        meta: {
            rate: 43,
            commentsCount: 8234,
            author: {
                name: 'Alan Walker'
            }
        }
    }
]

export const seed = function (knex): Promise<any> {
    return Discussion
        .query(knex)
        .upsertGraph(data)
}
