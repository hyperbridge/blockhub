import Vote from '../src/models/vote'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('votes').del()

    await Vote
        .query(knex)
        .upsertGraph(data)
}
