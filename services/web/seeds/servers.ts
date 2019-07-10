import Server from '../src/models/server'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Server
        .query(knex)
        .upsertGraph(data)
}
