import Profile from '../src/models/profile'

export const data = [
    {
        status: 'active',
        name: 'Profile name',
        accountId: 1,
        address: null,
        avatar: null,
        meta: {},
        role: 'developer'
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('profiles').del()

    await Profile
        .query(knex)
        .upsertGraph(data)
}
