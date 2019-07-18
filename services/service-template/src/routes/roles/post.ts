import now from '../../utils/time/now'
import Role from '../../models/Role'

export const operationId = 'createRole'
export const run = async (options, db, req, res): Promise<any> => {
    const { name, description, meta } = req.body
    const { applicationId } = req.headers

    if (!req.$access('user.role.create')) return res.unauthorized()

    const data = {
        applicationId,
        name,
        description,
        meta,
        createdAt: now(),
        createdBy: req.user.userId
    }

    const role = await Role.query().upsertGraph(data, { insertMissing: true })
    return res.data({
        roleId: role.roleId
    })
}
