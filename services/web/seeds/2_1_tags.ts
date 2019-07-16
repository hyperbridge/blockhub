import Tag from '../src/models/tag'

export const data = [
    {
        id: 1,
        status: 'active',
        key: 'Game',
        value: 'Game',
        meta: {}
    },
    {
        id: 2,
        status: 'active',
        key: 'Item',
        value: 'Item',
        meta: {}
    },
    {
        id: 3,
        status: 'active',
        key: 'released',
        value: 'Released',
        meta: {}
    },
    {
        id: 4,
        status: 'active',
        key: 'rpg',
        value: 'RPG',
        meta: {}
    },
    {
        id: 5,
        status: 'active',
        key: 'fantasy',
        value: 'Fantasy',
        meta: {}
    },
    {
        id: 6,
        status: 'active',
        key: 'onlineCoop',
        value: 'Online Co-Op',
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
            insertMissing: true
        })
}
