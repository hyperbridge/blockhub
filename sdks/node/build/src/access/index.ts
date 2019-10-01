const keys = require('./keys.json')

let defaultUserId = 'anonymous'

export const setUserPermissions = function (userId, userPermissions) {
    permissions[userId] = userPermissions || {}
}

export const setUserId = function (userId) {
    defaultUserId = userId
}

const permissions = {
    [defaultUserId]: {}
}

export const validator = function (key, id, options) {
    if (!keys.includes(key)) {
        console.error('Access key does not exist: ', key)
        return false
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

    if (permissions[userId]['god']) {
        return true
    }

    if (!permissions[userId]) {
        return false
    }

    const scopes = key.split('.')

    for (let i = scopes.length; i > 0; i--) {
        const key = scopes.slice(0, i).join('.')

        console.log(`Checking permission ${key} =`, permissions[userId][key])

        if (id
            && Array.isArray(permissions[userId][key])
            && permissions[userId][key].includes(id)) {
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
