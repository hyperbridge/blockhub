import * as JWT from 'jsonwebtoken'
import * as moment from 'moment'

import * as permissionValidator from '../utils/permissions/validator'
import User from '../models/User'

/* eslint-disable func-names */
export default async function (options, db, req, res, next): Promise<any> {
    req.$access = function () {
        return true
    }

    if (!options.security.auth) return next()
    if (!req.headers.authorization) return res.status(401).json({ message: 'No authorization header provided' })

    const token = req.headers.authorization.split(' ')[1]
    if (!token) return res.status(401).json({ message: 'No authorization header provided' })


    return JWT.verify(token, process.env.JWT_SECRET_KEY, async (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: 'Invalid token' })
        }

        const id = decoded ? decoded.sub : ''
        const iat = decoded ? decoded.iat : ''

        // Check if the user exists
        const user = await User.query()
            .eager('[roles, createdByUser, editedByUser]')
            .where('deletedAt', null)
            .findById(id)

        if (!user) return res.status(401).json({ message: 'Invalid authorization' })

        // If password was changed after the token was issued, invalidate it
        if (iat && iat < parseInt(moment(user.passwordEditedAt).format('x'), 10)) return res.status(401).json({ message: 'Token expired' })

        // If the user is disabled, reject the call
        if (!user.enabled) return res.status(401).json({ message: 'Account disabled' })

        if (!user.meta) user.meta = {}
        if (!user.meta.permissions) user.meta.permissions = {}

        let permissions = {}

        for (const role of user.roles) {
            for (const key in role.meta.permissions) {
                if (permissions[key]) {
                    permissions[key] = { ...permissions[key], ...role.meta.permissions[key] }
                } else {
                    permissions[key] = role.meta.permissions[key]
                }
            }
        }

        permissions = {
            ...permissions,
            ...user.meta.permissions
        }

        console.log(permissions)

        permissionValidator.setUserId(user.userId)
        permissionValidator.setUserPermissions(user.userId, permissions)

<<<<<<< HEAD
        req.$access = permissionValidator.run
=======
        req.$can = permissionValidator.run
>>>>>>> mail
        req.user = user

        next()
    })
}
