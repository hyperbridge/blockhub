import Offer from '../src/models/offer'

export const data = [
    {
        status: 'active',
        ownerId: 1
    }
]

export const seed = function (knex): Promise<any> {
    return Offer
        .query(knex)
        .upsertGraph(data)
}
