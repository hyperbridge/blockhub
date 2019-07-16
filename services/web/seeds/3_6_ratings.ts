import Rating from '../src/models/rating'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding ratings')

    await knex('ratings').del()

    await Rating
        .query(knex)
        .upsertGraph(data)
}
