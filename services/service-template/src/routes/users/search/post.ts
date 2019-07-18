import User from '../../../models/User'

export const operationId = 'searchUsers'
export const run = async (options, db, req, res): Promise<any> => {
    const { applicationId } = req.headers

    if (!req.$access('user.read')) return res.unauthorized()

    const users = await User.query()
        .where({
            applicationId,
            deletedAt: null
        }).eager('[createdByUser, editedByUser]')

    return res.data(users)
}
