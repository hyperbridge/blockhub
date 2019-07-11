import Product from '../src/models/product'

export const data = [
    {
        status: 'active',
        ownerId: 1,
        name: 'Product name',
        value: 'Product about',
        meta: {
            about: 'Product description'
        }
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('products').del()

    Product
        .query(knex)
        .upsertGraph(data)
}
