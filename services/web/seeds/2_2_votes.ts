import Vote from '../src/models/vote'

export const data = [
    {
        status: 'active',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding votes')

    await knex('votes').del()

    await Vote
        .query(knex)
        .upsertGraph(data)
}
