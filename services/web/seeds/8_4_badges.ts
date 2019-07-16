import Badge from '../src/models/badge'

export const data = [
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding badges')

    await knex('badges').del()

    await Badge
        .query(knex)
        .upsertGraph(data)
}
