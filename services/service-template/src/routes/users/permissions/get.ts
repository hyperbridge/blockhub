export const operationId = 'getUserPermissions'
export const run = async (options, db, req, res): Promise<any> => {
    if (!req.$can('user.permission')) return res.unauthorized()

    const permissions = require('../../../utils/permissions/keys.json')

    return res.data(permissions)
}
