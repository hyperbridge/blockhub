import Server from '../src/models/server'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding servers')

    await knex('servers').del()

    await Server
        .query(knex)
        .upsertGraph(data)
}
