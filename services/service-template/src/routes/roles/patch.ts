import now from '../../utils/time/now'
import Role from '../../models/Role'
import User from '../../models/User'

export const operationId = 'updateRole'
export const run = async (options, db, req, res): Promise<any> => {
    const { roleId } = req.params
    let { name, description, meta } = req.body

    if (!req.$access('user.role.update', roleId)) return res.unauthorized()

    const role = await Role.query().findById(roleId).where('deletedAt', null)
    if (!role) return res.status(422).end()

    if (name === null) name = role.name
    if (description === null) description = role.description
    if (meta === null) meta = role.meta

    await Role.query().findById(roleId).patch({
        name,
        description,
        meta,
        editedAt: now(),
        editedBy: req.user.userId
    })

    return res.end()
}
