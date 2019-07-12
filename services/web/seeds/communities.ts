import Community from '../src/models/community'

export const data = [
    {
        status: 'active',
        name: 'New to BlockHub',
        meta: {
            lastPostTime: '2018-08-01T04:09:00.000Z',
            discussionsCount: '8234'
        }
    },
    {
        title: 'Help and Tips',
        meta: {
            lastPostTime: '2017-11-04T04:09:00.000Z',
            discussionsCount: 34
        }
    },
    {
        status: 'active',
        name: 'Proposals and Ideas',
        meta: {
            lastPostTime: '2017-11-04T04:09:00.000Z',
            discussionsCount: '127',
            icon: 'fas fa-life-ring'
        }
    },
    {
        status: 'active',
        name: 'BlockHub for Mac',
        meta: {
            lastPostTime: '2018-07-24T04:09:00.000Z',
            discussionsCount: '37',
            icon: 'fab fa-apple'
        }
    },
    {
        status: 'active',
        name: 'BlockHub for Windows',
        meta: {
            lastPostTime: '2018-03-21T04:09:00.000Z',
            discussionsCount: '328',
            icon: 'fab fa-windows'
        }
    },
    {
        id: '4',
        status: 'active',
        name: 'BlockHub for Linux',
        meta: {
            lastPostTime: '2016-07-24T04:09:00.000Z',
            discussionsCount: '41',
            icon: 'fab fa-linux'
        }
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('communities').del()

    await Community
        .query(knex)
        .upsertGraph(data)
}
