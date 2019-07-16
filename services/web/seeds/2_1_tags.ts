import Tag from '../src/models/tag'

export const data = [
    {
        status: 'active',
        key: 'game',
        name: 'Game',
        value: 'why is this required',
        meta: {}
    },
    {
        status: 'active',
        key: 'Item',
        name: 'Item',
        value: 'why is this required',
        meta: {}
    },
    {
        status: 'active',
        key: 'released',
        name: 'Released',
        value: 'why is this required',
        meta: {}
    },
    {
        status: 'active',
        key: 'rpg',
        name: 'RPG',
        value: 'why is this required',
        meta: {}
    },
    {
        status: 'active',
        key: 'fantasy',
        name: 'Fantasy',
        value: 'why is this required',
        meta: {}
    },
    {
        status: 'active',
        key: 'onlineCoop',
        name: 'Online Co-Op',
        value: 'why is this required',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding tags')

    await knex('tags').del()
    await knex.raw('TRUNCATE TABLE tags RESTART IDENTITY CASCADE')

    await Tag
        .query(knex)
        .upsertGraph(data, {
            relate: true
        })
}
