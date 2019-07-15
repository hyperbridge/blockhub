import Tag from '../src/models/tag'

export const data = [
    {
        status: 'active',
        value: 'Game'
    },
    {
        status: 'active',
        value: 'Item'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('tags').del()

    await Tag
        .query(knex)
        .upsertGraph(data)
}
