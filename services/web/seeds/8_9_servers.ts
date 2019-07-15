import Server from '../src/models/server'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('servers').del()

    await Server
        .query(knex)
        .upsertGraph(data)
}
