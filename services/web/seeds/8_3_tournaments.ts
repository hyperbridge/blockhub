import Tournament from '../src/models/tournament'

export const data = [
    {
        status: 'active',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding tournaments')

    await knex('tournaments').del()

    await Tournament
        .query(knex)
        .upsertGraph(data)
}
