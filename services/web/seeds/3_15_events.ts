import Event from '../src/models/event'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('events').del()

    await Event
        .query(knex)
        .upsertGraph(data)
}
