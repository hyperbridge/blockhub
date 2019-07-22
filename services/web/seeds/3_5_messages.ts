import Message from '../src/models/message'

export const data = [
    {
        status: 'active',
        value: 'Hello',
        owner: { id: 1 },
        meta: {}
    },
    {
        status: 'active',
        value: 'World',
        owner: { id: 1 },
        meta: {}
    },
    {
        status: 'active',
        value: 'Is it a good offer?',
        owner: { id: 1 },
        meta: {}
    },
    {
        status: 'active',
        value: 'Looks good',
        owner: { id: 1 },
        meta: {}
    },
    {
        status: 'active',
        value: 'Ok good',
        owner: { id: 1 },
        meta: {}
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
