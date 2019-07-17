import now from '../../../utils/time/now'
import User from '../../../models/User'
const bcrypt = require('bcrypt')
const { dump } = require('dumper.js')

export const operationId = 'authRegister'
export const run = async (options, db, req, res): Promise<any> => {
    const { username, password } = req.body

    if (username.length < 4 || username.length > 32) {
        return res.status(400).json({ message: 'Username must have 4-32 characters' })
    }
    if (password.length < 6 || password.length > 64) {
        return res.status(400).json({ message: 'Password must have 6-64 characters' })
    }

    /*
    Make sure the username doesn't exist yet
  */
    const exists = await User.query().where({
        username
    }).first()

    if (exists) return res.status(422).json({ message: 'Username already exists' })

    /*
    Hash the supplied password
  */
    let hash
    try {
        hash = await bcrypt.hash(password, 10)
    } catch (error) {
        dump(error)
        return res.status(422).json({ message: 'There was a problem processing your account' })
    }

    /*
    Create the user
  */
    const data = {
        username,
        password: hash,
        passwordEditedAt: now(),
        enabled: true,
        createdAt: now()
    }

    await User.query().upsertGraph(data, { insertMissing: true })

    return res.end()
}
