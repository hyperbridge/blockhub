import Suggestion from '../src/models/suggestion'

export const data = [
    {
        status: 'active',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding suggestions')

    await knex('suggestions').del()

    await Suggestion
        .query(knex)
        .upsertGraph(data)
}
