import User from '../../models/User'

export const operationId = 'getUser'
export const run = async (options, db, req, res): Promise<any> => {
    const { userId } = req.params

    if (!req.$can('user.read', userId)) return res.unauthorized()

    const user = await User.query().eager('[roles, createdByUser, editedByUser]').findById(userId)
        .where('deletedAt', null)
    if (!user) return res.status(404).end()

    const { username, roles, meta } = user

    return res.data({
        userId,
        username,
        roles,
        meta
    })
}
