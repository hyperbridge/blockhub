import * as DB from '../db'

export default (req, res) => {
    DB.getUsers(false).then((users) => {
        res.json({
            success: true,
            data: {
                users: users
            }
        })
    })
}