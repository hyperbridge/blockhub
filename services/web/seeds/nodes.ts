import Node from '../src/models/node'

export const data = [
]

export const seed = function (knex): Promise<any> {
    return Node
        .query(knex)
        .upsertGraph(data)
}
