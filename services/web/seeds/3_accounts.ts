import Account from '../src/models/account'

export const data = [
    {
        status: 'active',
        email: 'test@test.com',
        firstName: 'First name',
        lastName: 'Last name',
        password: '$2a$13$vEf6V5EnDiapOIKRG4Kxy.DQ9v6WZG6cZqNq4qOh2/IuLXDIx9i2S',
        address: null,
        avatar: 'https://s.gravatar.com/avatar/40901655a5f67296d89a7d3b069b373a?s=60',
        meta: {
            permissions: {
                god: true
            }
        }
    },
    {
        status: 'active',
        email: 'onlyUserPermission@test.com',
        firstName: 'onlyUsers',
        lastName: '',
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
        lastName: '',
        password: '$2a$13$vEf6V5EnDiapOIKRG4Kxy.DQ9v6WZG6cZqNq4qOh2/IuLXDIx9i2S',
        meta: {
            permissions: {
            }
        }
    }
]

export const seed = async function (knex): Promise<any> {
    await knex('accounts').del()

    await Account
        .query(knex)
        .upsertGraph(data)
}
