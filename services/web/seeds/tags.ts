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

export const seed = function (knex): Promise<any> {
    return Tag
        .query(knex)
        .upsertGraph(data)
}
