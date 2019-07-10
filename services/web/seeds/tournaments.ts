import Tournament from '../src/models/tournament'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Tournament
        .query(knex)
        .upsertGraph(data)
}
