const keys = require('./keys.json.js')

let defaultUserId = 'anonymous'
let defaultApplicationId = null

export const setUserPermissions = function (userId, userPermissions) {
    permissions[userId] = userPermissions || {}
}

export const setUserId = function (userId) {
    defaultUserId = userId
}

export const setApplicationId = function (applicationId) {
    defaultApplicationId = applicationId
}

const permissions = {
    [defaultUserId]: {}
}

export const run = function (key, id, options) {
    if (!keys.includes(key)) {
        throw new Error(`Permission key does not exist: ${key}`)
    }

    if (typeof id === 'object') {
        options = id
        id = undefined
    }

    if (id) {
        id = Number(id)
    }

    if (!options) {
        options = {}
    }

    const userId = options.userId || defaultUserId
    const applicationId = options.applicationId || defaultApplicationId

    console.log(`Checking permission ${key} =`, permissions[userId][key])

    if (permissions[userId].god) {
        return true
    }

    if (!permissions[userId]) {
        return false
    }

    if (applicationId) {
        if (Array.isArray(permissions[userId].application)) {
            if (!permissions[userId].application.includes(applicationId)) {
                return false
            }
        } else if (!permissions[userId].application) {
            return false
        }
    }

    const scopes = key.split('.')

    for (let i = scopes.length; i > 0; i--) {
        const key = scopes.slice(0, i).join('.')

        console.log(`Checking permission ${key} =`, permissions[userId][key])

        if (id &&
            Array.isArray(permissions[userId][key]) &&
            permissions[userId][key].includes(id)) {
            return true
        }

        if (permissions[userId][key] === true) {
            return true
        } else if (permissions[userId][key] === false) {
            return false
        }
    }

    return false
}
