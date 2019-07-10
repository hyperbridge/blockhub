import Suggestion from '../src/models/suggestion'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Suggestion
        .query(knex)
        .upsertGraph(data)
}
