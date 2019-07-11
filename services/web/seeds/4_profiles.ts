import Profile from '../src/models/profile'

export const data = [
    {
        status: 'active',
        name: 'Profile name',
        accountId: 1,
        address: null,
        avatar: null,
        role: 'developer', // [developer, user]
        meta: {
            reputation: 0,
            badges: [],
            assets: [],
            licenses: [],
            products: [],
            messages: [],
            passphrase: null,
            privateKey: null,
            productWishlist: {},
            productFavorites: {},
            events: []
        },
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('profiles').del()

    await Profile
        .query(knex)
        .upsertGraph(data)
}
