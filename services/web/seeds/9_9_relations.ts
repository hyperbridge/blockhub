import Node from '../src/models/node'

export const data = [
    {
        fromProductId: 'active',
        toTagId: 'Hello',
        relationKey: 'tags',
        meta: {}
    }
]


export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Building relationships')

    await Node
        .query(knex)
        .upsertGraph(data, {
        })
}
