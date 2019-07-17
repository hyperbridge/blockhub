import Role from '../../../models/Role'

export const operationId = 'searchRoles'
export const run = async (options, db, req, res): Promise<any> => {
    const { applicationId } = req.headers

    if (!req.$can('user.role.read')) return res.unauthorized()

    const roles = await Role.query()
        .where({
            applicationId,
            deletedAt: null
        }).eager('[createdByUser, editedByUser]')

    return res.data(roles)
}
