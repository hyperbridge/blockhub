const { authenticate } = require('@feathersjs/authentication').hooks
const { allowNull, wildcardsInLike } = require('../../hooks')


// const populate = function (options = { key: 'profile', columnName: 'profileId' }) {
//     return async context => {
//         const { app, method, result, params } = context
//         const items = method === 'find' ? result.data : [result]

//         await Promise.all(items.map(async item => {
//             console.log(item.id)
//             if (method === 'create') {
//                 const profile = await app.service('profiles').create({
//                     accountId: item.id,
//                     name: 'Default'
//                 })

//                 item.profiles = [profile]
//             } else {
//                 const profile = await app.service('profiles').find({
//                     query: {
//                         accountId: item.id
//                     }
//                 })

//                 item.profiles = profile.data
//             }
//         }))

//         return context
//     }
// }


const updateQuery = function (options = {}) {
    return async context => {
        context.params.query = {
            $pick: ['id', 'name', 'accountId'],
            $eager: 'account',
        }

        return context
    }
}



const accessGate = function (options = {}) {
    return async context => {
        const { app, method, result, params } = context
        const items = method === 'find' ? result.data : [result]
        let account = params.user

        if (!account.id) {
            throw new Error('You dont have access to do that')
        }

        await Promise.all(items.map(async item => {
            console.log(method, item, account)
            if (method === 'create') {
                item.accountId = account.id

                account.profiles.push(item)
            }
            else if (method === 'update') {
                if (!item.accountId) {
                    // TODO: why the F do we have to do this? couldn't get accountId field without it
                    if (!account.profiles) {
                        account.profiles = await app.service('profiles').find({
                            query: {
                                //id: item.id,
                                accountId: account.id
                                //'$pick': ['id', 'name', 'accountId']
                            }
                        })

                        account.profiles = account.profiles.data
                    }

                    item = account.profiles.find(i => i.id === item.id)
                }
            }

            if (!item) {
                throw new Error('Profile not found')
            }

            if (item.accountId !== account.id) {
                throw new Error('You dont have access to do that')
            }
        }))

        console.log(444, context)

        return context
    }
}

const zzz = function (options = {}) {
    return async context => {
        // context.arguments.address = 'adasd'
        // context.params.result.address = 'adasd'
        context.data.accountId = 13
        context.data.address = 'adasd'
console.log(context) 
        return context
    }
}

export const before = {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [authenticate('jwt'), zzz()],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
}

export const after = {
    all: [],
    find: [],
    get: [],
    create: [zzz()],
    update: [],
    patch: [],
    remove: []
}

export const error = {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
}
