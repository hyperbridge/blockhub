import User from '../../models/User'
import now from '../../utils/time/now'


export const operationId = 'deleteUser'
export const run = async (options, db, req, res): Promise<any> => {
    const { userId } = req.params

    if (!req.$can('user.delete', userId)) return res.unauthorized()

    const user = await User.query().findById(userId).where('deletedAt', null)
    if (!user) return res.status(422).end()

    await User.query().findById(userId).patch({
        deletedAt: now(),
        deletedBy: req.user.userId
    })

    return res.end()
}
