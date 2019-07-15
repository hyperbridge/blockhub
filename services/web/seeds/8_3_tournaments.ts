import Tournament from '../src/models/tournament'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('tournaments').del()

    await Tournament
        .query(knex)
        .upsertGraph(data)
}
