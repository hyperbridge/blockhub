import Badge from '../src/models/badge'

export const data = [
]

export const seed = function (knex): Promise<any> {
    return Badge
        .query(knex)
        .upsertGraph(data)
}
