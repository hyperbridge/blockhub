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

export const seed = function (knex): Promise<any> {
    return Product
        .query(knex)
        .upsertGraph(data)
}
