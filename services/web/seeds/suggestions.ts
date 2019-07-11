import Suggestion from '../src/models/suggestion'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('suggestions').del()

    await Suggestion
        .query(knex)
        .upsertGraph(data)
}
