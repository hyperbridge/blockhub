import Account from '../src/models/account'

export const data = [
    {
        status: 'active',
        email: 'test@test.com',
        firstName: 'First name',
        lastName: 'Last name',
        password: '$2a$13$vEf6V5EnDiapOIKRG4Kxy.DQ9v6WZG6cZqNq4qOh2/IuLXDIx9i2S',
        address: null,
        meta: {
            permissions: {
                god: true
            },
            verificationTimestamp: null,
            avatar: 'https://s.gravatar.com/avatar/40901655a5f67296d89a7d3b069b373a?s=60',
            isVerified: false,
            isVerifying: false,
            birthday: null,
            currency: {},
            language: {},
            notifications: [],
            wallets: [],
            profiles: [],
            idts: [],
            projectWishlist: { 1: true },
            projectFavorites: {},
            savedPaths: [
                "/home/leafo/.config/itch/apps",
                "C:/Users/Tom/Program Files/apps",
                "/home/games"
            ],
            friendsList: [4, 5],
            tradeLinkId: "478"
        }
    },
    {
        status: 'active',
        email: 'onlyUserPermission@test.com',
        firstName: 'onlyUsers',
        lastName: 'Test',
        password: '$2a$13$vEf6V5EnDiapOIKRG4Kxy.DQ9v6WZG6cZqNq4qOh2/IuLXDIx9i2S',
        meta: {
            permissions: {
                businessArea: true,
                user: true
            }
        }
    },
    {
        status: 'active',
        email: 'noPermissions@test.com',
        firstName: 'noPermissions',
        lastName: 'Test',
        password: '$2a$13$vEf6V5EnDiapOIKRG4Kxy.DQ9v6WZG6cZqNq4qOh2/IuLXDIx9i2S',
        meta: {
            permissions: {
            }
        }
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding accounts')

    await knex('accounts').del()
    await knex.raw('TRUNCATE TABLE accounts RESTART IDENTITY CASCADE')

    const accounts = await Account
        .query(knex)
        .upsertGraph(data)
}
