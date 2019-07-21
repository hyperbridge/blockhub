import * as moment from 'moment'

import now from '../../utils/time/now'
import User from '../../models/User'
import Role from '../../models/Role'

export const operationId = 'updateUser'
export const run = async (options, db, req, res): Promise<any> => {
    const { userId } = req.params
    let { username, roles, meta } = req.body

    if (!req.$access('user.update', userId)) return res.unauthorized()

    const user = await User.query().findById(userId).where('deletedAt', null)
    if (!user) return res.status(422).end()

    if (username === null) username = user.username
    if (meta === null) meta = user.meta

    await User.query().upsertGraph({
        ...user,
        username,
        roles,
        meta,
        createdAt: moment(user.createdAt).toDate(),
        editedAt: now(),
        editedBy: req.user.userId
    }, {
        relate: true,
        unrelate: true,
        update: true,
        noDelete: ['roles']
    })

    return res.end()
}
