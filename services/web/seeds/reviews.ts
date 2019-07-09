import Review from '../src/models/review'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Review
        .query(knex)
        .upsertGraph(data)
}
