import File from '../src/models/file'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding files')

    await knex('files').del()

    await File
        .query(knex)
        .upsertGraph(data)
}
