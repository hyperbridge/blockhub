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

export const seed = function (knex): Promise<any> {
    return Profile
        .query(knex)
        .upsertGraph(data)
}
