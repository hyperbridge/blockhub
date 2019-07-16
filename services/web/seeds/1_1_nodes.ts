import Node from '../src/models/node'

export const data = [
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding nodes')

    // Log all queries
    knex.on('query', (query): any => {
        console.log(query)
    })

    await knex('nodes').del()
    await knex.raw('TRUNCATE TABLE nodes RESTART IDENTITY CASCADE')

    await Node
        .query(knex)
        .upsertGraph(data)
}
