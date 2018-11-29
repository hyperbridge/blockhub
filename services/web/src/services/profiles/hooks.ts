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


// const updateQuery = function(options = {}) {
//     return async context => {
//         context.params.query = {
//             $pick: ['id', 'name', 'accountId'],
//             $eager: 'account',
//         }

//         return context
//     }
// }

const beforeCreate = function(options = {}) {
    return async context => {
        context.data.accountId = context.params.user.id

        return context
    }
}


const beforeUpdate = function(options = {}) {
    return async context => {
        const item = await context.app.service('/profiles').get(context.id)

        context.data = {
            ...item,
            ...context.data
        }

        return context
    }
}

const afterUpdate = function(options = {}) {
    return async context => {
        context.result = {
            name: context.data.name,
            avatar: context.data.avatar
        }

        return context
    }
}

const accessGate = function(options = {}) {
    return async context => {
        //console.log(context)
        const { app, method, result, params } = context
        const items = method === 'find' ? result.data : [result]
        let account = params.user

        if (!account.id) {
            throw new Error('You dont have access to do that')
        }

        await Promise.all(items.map(async item => {
            console.log(item.accountId, account.id)
            if (method === 'create') {
            }
            else if (method === 'update') {
            }

            if (!item) {
                throw new Error('Profile not found')
            }

            if (item.accountId !== account.id) {
                throw new Error('You dont have access to do that')
            }
        }))

        return context
    }
}

export const before = {
    all: [],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [authenticate('jwt'), beforeCreate()],
    update: [authenticate('jwt'), beforeUpdate()],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
}

export const after = {
    all: [],
    find: [],
    get: [],
    create: [accessGate()],
    update: [accessGate(), afterUpdate()],
    patch: [accessGate()],
    remove: [accessGate()]
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
