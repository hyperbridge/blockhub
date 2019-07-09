import Event from '../src/models/event'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Event
        .query(knex)
        .upsertGraph(data)
}
