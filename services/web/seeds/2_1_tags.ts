import Tag from '../src/models/tag'

export const data = [
    {
        status: 'active',
        key: 'Game',
        value: 'Game',
        meta: {}
    },
    {
        status: 'active',
        key: 'Item',
        value: 'Item',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding tags')

    await knex('tags').del()
    await knex.raw('TRUNCATE TABLE tags RESTART IDENTITY CASCADE')

    await Tag
        .query(knex)
        .upsertGraph(data)
}
