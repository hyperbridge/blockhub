import * as DB from '../db'

export default async (req, res) => {
    const users = DB.getUsers(false)

    res.json({
        success: true,
        data: {
            users
        }
    })
}