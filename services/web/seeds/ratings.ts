import Rating from '../src/models/rating'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Rating
        .query(knex)
        .upsertGraph(data)
}
