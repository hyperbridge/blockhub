const { authenticate } = require('@feathersjs/authentication').hooks
const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks
const { errorIfReadonly, allowNull, wildcardsInLike } = require('../../hooks')
const gravatar = require('../../hooks/gravatar')

const populate = function (options = { key: 'profile', columnName: 'profileId' }) {
    return async context => {
        const { app, method, result, params } = context
        const items = method === 'find' ? result.data : [result]

        await Promise.all(items.map(async item => {console.log(item.id)
            if (method === 'create') {
                const profile = await app.service('profiles').create({
                    accountId: item.id,
                    name: 'Default'
                })

                item.profiles = [profile]
            } else {
                const profile = await app.service('profiles').find({
                    query: {
                        accountId: item.id
                    }
                })

                item.profiles = profile.data
            }
        }))

        return context
    }
}


export const before = {
    all: [],
    find: [authenticate('jwt'), allowNull(), wildcardsInLike()],
    get: [authenticate('jwt')],
    create: [hashPassword(), gravatar()],
    update: [hashPassword(), authenticate('jwt')],
    patch: [hashPassword(), authenticate('jwt')],
    remove: [authenticate('jwt')]
}

export const after = {
    all: [
        populate(),
        // Make sure the password field is never sent to the client
        // Always must be the last hook
        protect('password')
    ],
    find: [],
    get: [],
    create: [],
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




// function findCategoryById(hook) {
//     /*
//       This makes both of these work:
//       /products?category[id]=abcat0208002
//       /products?category.id=abcat0208002
//     */
//     let catId
//     let q = hook.params.query
//     if (q['category.id']) {
//         catId = q['category.id']
//         delete q['category.id']
//     } else if (q.category && q.category.id) {
//         catId = q.category.id
//         delete q.category
//     }

//     if (catId) {
//         // q.id = {
//         //     // a bit gnarly but works https://github.com/sequelize/sequelize/issues/1869
//         //     $in: hook.app.db.Sequelize.literal(`(
//         //         SELECT DISTINCT productId from productcategory
//         //         INNER JOIN categories on categories.id = productcategory.categoryId
//         //         where categories.id = '${catId}')`)
//         // }
//     }
// }

// function findbyCategoryName(hook) {
//     /*
//       This makes both of these work:
//       /products?category[name]=Coffee%20Pods
//       /products?category.name=Coffee%20Pods
//     */
//     let catName
//     let q = hook.params.query
//     if (q['category.name']) {
//         catName = q['category.name']
//         delete q['category.name']
//     } else if (q.category && q.category.name) {
//         catName = q.category.name
//         delete q.category
//     }

//     if (catName) {
//         // q.id = {
//         //     // a bit gnarly but works https://github.com/sequelize/sequelize/issues/1869
//         //     $in: hook.app.db.Sequelize.literal(`(
//         // SELECT DISTINCT productId from productcategory
//         // INNER JOIN categories on categories.id = productcategory.categoryId
//         // where categories.name = '${catName}')`)
//         // }
//     }
// }
// const auth = require('feathers-authentication').hooks
// const { callbackToPromise, remove, validate } = require('feathers-hooks-common')
// //const validateSchema = require('feathers-hooks-validate-joi')

// // const clientValidations = require('/common/usersClientValidations')
// // const serverValidations = require('/server/validations/usersServerValidations')
// // const schemas = require('/server/validations/schemas')

// // const serverValidationsSignup = callbackToPromise(serverValidations.signup, 1)

// exports.before = {
//     create: [
//         // validateSchema.form(schemas.signup, schemas.options), // schema validation
//         // validate(clientValidations.signup), // re-run form sync validation
//         // validate(values => clientValidations.signupAsync(values, 'someMoreParams')), // re-run form async
//         // validate(serverValidationsSignup), // run server validation
//         //remove('confirmPassword'),
//         //auth.hashPassword()
//     ]
// }