import Order from '../src/models/order'

export const data = [
    {
        status: 'active',
        meta: {}
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding orders')

    await knex('orders').del()

    await Order
        .query(knex)
        .upsertGraph(data)
}
