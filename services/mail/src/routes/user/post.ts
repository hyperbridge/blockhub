import now from '../../utils/time/now'
import User from '../../models/User'

export const operationId = 'createUser'
export const run = async (options, db, req, res): Promise<any> => {
    const { username } = req.body
    const { applicationId } = req.headers

    if (!req.$can('user.create')) return res.unauthorized()

    const data = {
        applicationId,
        username,
        createdAt: now(),
        createdBy: req.user.userId
    }

    const user = await User.query().upsertGraph(data, { insertMissing: true })
    return res.data({
        userId: user.userId
    })
}
