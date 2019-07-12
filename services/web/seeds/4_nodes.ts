import Node from '../src/models/node'

export const data = [
]

export const seed = async function (knex): Promise<any> {
    await knex('nodes').del()

    await Node
        .query(knex)
        .upsertGraph(data)
}
