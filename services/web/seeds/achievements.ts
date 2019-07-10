import Achievement from '../src/models/achievement'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return Achievement
        .query(knex)
        .upsertGraph(data)
}
