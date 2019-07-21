const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
import timestamp from '../../../utils/time/timestamp'
import User from '../../../models/User'

/*
If you need to override the spec settings, use this:
override: {
  method: 'post',
  route: '/auth/login'
},
*/
export const operationId = 'authLogin'
export const run = async (options, db, req, res): Promise<any> => {
    const { username, password } = req.body

    /*
    Checks if the user exists
  */
    const user = await User.query()
        .eager('[roles, createdByUser, editedByUser]')
        .where({ username })
        .andWhere('deletedAt', null)
        .first()
    if (!user) return res.status(401).json({ message: 'Invalid authorization' })

    /*
    Checks if the user is disabled
  */
    if (!user.enabled) return res.status(401).json({ message: 'This account has been disabled' })

    /*
    Checks if the password is right
  */
    const comparePassword = await bcrypt.compare(password.toString(), user.password)
    if (!comparePassword) return res.status(401).json({ message: 'Invalid authorization.' })

    /*
    Create the jwt with some data
  */
    const jwt = JWT.sign({
        iss: process.env.SERVICE_NAME,
        sub: user.userId,
        iat: timestamp()
    }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' })

    if (!user.meta) user.meta = {}
    if (!user.meta.permissions) user.meta.permissions = {}

    return res.data({
        user: {
            userId: user.userId,
            username,
            createdAt: user.createdAt,
            editedAt: user.editedAt,
            passwordEditedAt: user.passwordEditedAt,
            meta: user.meta,
            roles: user.roles
        },
        token: jwt
    })
}
