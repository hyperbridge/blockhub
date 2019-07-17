import Role from '../../models/Role'
import now from '../../utils/time/now'


export const operationId = 'deleteRole'
export const run = async (options, db, req, res): Promise<any> => {
    const { roleId } = req.params

    if (!req.$can('user.role.delete', roleId)) return res.unauthorized()

    const role = await Role.query().findById(roleId).where('deletedAt', null)
    if (!role) return res.status(422).end()

    await Role.query().findById(roleId).patch({
        deletedAt: now(),
        deletedBy: req.user.userId
    })

    return res.end()
}
