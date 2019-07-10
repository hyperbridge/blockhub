import File from '../src/models/file'

export const data = [
    {
        status: 'active'
    }
]

export const seed = function (knex): Promise<any> {
    return File
        .query(knex)
        .upsertGraph(data)
}
