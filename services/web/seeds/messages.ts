import Message from '../src/models/message'

export const data = [
    {
        status: 'active',
        value: 'test'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('messages').del()

    await Message
        .query(knex)
        .upsertGraph(data)
}
