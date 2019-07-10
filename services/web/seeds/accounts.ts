import Account from '../src/models/account'

export const data = [
    {
        status: 'active',
        email: 'eric6@muyser.com',
        firstName: 'First name',
        lastName: 'Last name',
        password: '$2a$13$vEf6V5EnDiapOIKRG4Kxy.DQ9v6WZG6cZqNq4qOh2/IuLXDIx9i2S',
        address: null,
        avatar: 'https://s.gravatar.com/avatar/40901655a5f67296d89a7d3b069b373a?s=60',
        meta: {}
    }
]

export const seed = function (knex): Promise<any> {
    return Account
        .query(knex)
        .upsertGraph(data)
}
