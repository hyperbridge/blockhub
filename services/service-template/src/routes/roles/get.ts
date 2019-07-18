import Role from '../../models/Role'

export const operationId = 'getRole'
export const run = async (options, db, req, res): Promise<any> => {
    const { roleId } = req.params

    if (!req.$access('user.role.read', roleId)) return res.unauthorized()

    const role = await Role.query().eager('[createdByUser, editedByUser]').findById(roleId)
        .where('deletedAt', null)
    if (!role) return res.status(404).end()

    const { name, description, meta } = role

    return res.data({
        roleId,
        name,
        description,
        meta
    })
}
