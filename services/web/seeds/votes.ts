import Vote from '../src/models/vote'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Vote
        .query(knex)
        .upsertGraph(data)
}
