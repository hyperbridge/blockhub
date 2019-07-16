import Message from '../src/models/message'

export const data = [
    {
        status: 'active',
        value: 'test',
        owner: { id: 1 }
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding messages')

    await knex('messages').del()

    await Message
        .query(knex)
        .upsertGraph(data, {
            relate: true
        })
}
