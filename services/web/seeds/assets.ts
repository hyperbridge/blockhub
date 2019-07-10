import Asset from '../src/models/asset'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Asset
        .query(knex)
        .upsertGraph(data)
}
