import Role from '../src/models/role'

export const data = [
    {
        id: 1,
        status: 'active',
        name: 'God',
        description: null
    },
    {
        id: 2,
        status: 'active',
        name: 'Dev',
        description: null
    },
    {
        id: 3,
        status: 'active',
        name: 'Client',
        description: null
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('roles').del()

    await Role
        .query(knex)
        .upsertGraph(data)
}
