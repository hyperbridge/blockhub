import Badge from '../src/models/badge'

export const data = [
]

export const seed = async function (knex): Promise<any> {
    await knex('badges').del()

    await Badge
        .query(knex)
        .upsertGraph(data)
}
