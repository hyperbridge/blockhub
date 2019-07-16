import Offer from '../src/models/offer'

export const data = [
    {
        status: 'active',
        ownerId: 1
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding offers')

    await knex('offers').del()

    await Offer
        .query(knex)
        .upsertGraph(data)
}
