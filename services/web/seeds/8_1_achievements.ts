import Achievement from '../src/models/achievement'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding achievements')

    await knex('achievements').del()

    await Achievement
        .query(knex)
        .upsertGraph(data)
}
