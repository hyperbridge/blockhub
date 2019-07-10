import License from '../src/models/license'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return License
        .query(knex)
        .upsertGraph(data)
}
