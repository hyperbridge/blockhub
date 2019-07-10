import Message from '../src/models/message'

export const data = [
    {
        status: 'active',
        value: 'test'
    }
]

export const seed = function (knex): Promise<any> {
    return Message
        .query(knex)
        .upsertGraph(data)
}
