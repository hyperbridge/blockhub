import Role from '../src/models/role'

export const data = [
    {
        id: 1,
        status: 'active',
        name: 'God',
        meta: {
            description: null
        }
    },
    {
        id: 2,
        status: 'active',
        name: 'Dev',
        meta: {
            description: null
        }
    },
    {
        id: 3,
        status: 'active',
        name: 'Client',
        meta: {
            description: null
        }
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding roles')

    await knex('roles').del()
    await knex.raw('TRUNCATE TABLE roles RESTART IDENTITY CASCADE')

    await Role
        .query(knex)
        .upsertGraph(data, { insertMissing: true })
}
