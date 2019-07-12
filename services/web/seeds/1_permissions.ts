import Permission from '../src/models/permission'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('permissions').del()

    await Permission
        .query(knex)
        .upsertGraph(data)
}
