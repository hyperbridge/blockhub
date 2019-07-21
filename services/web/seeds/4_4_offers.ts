import Offer from '../src/models/offer'

export const data = [
    {
        status: 'active',
        ownerId: 1,
        meta: {
            "id": 1,
            "asset": 1,
            "bids": [1, 2],
            "buyout": 42,
            "marketValue": 45,
            "seller": 4,
            "expiresIn": ""
        }
    },
    {
        status: 'active',
        ownerId: 1,
        meta: {
            "id": 2,
            "asset": 2,
            "bids": [2, 3],
            "buyout": 42,
            "marketValue": 45,
            "seller": 4,
            "expiresIn": ""
        }
    },
    {
        status: 'active',
        ownerId: 1,
        meta: {
            "id": 3,
            "asset": 3,
            "bids": [4, 5, 6, 7],
            "buyout": 42,
            "marketValue": 45,
            "seller": 4,
            "expiresIn": ""
        }
    }
]


export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding offers')

    await knex('offers').del()

    await Offer
        .query(knex)
        .upsertGraph(data)
}
