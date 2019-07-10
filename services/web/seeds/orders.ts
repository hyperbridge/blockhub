import Order from '../src/models/order'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Order
        .query(knex)
        .upsertGraph(data)
}
