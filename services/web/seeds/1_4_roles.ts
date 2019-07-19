import Role from '../src/models/role'

export const data = [
    {
        status: 'active',
        name: 'God',
        meta: {
            description: null
        }
    },
    {
        status: 'active',
        name: 'Dev',
        meta: {
            description: null
        }
    },
    {
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
        .upsertGraph(data)
}
