import * as DB from '../db'

export default async (req, res) => {
    await DB.removeUser(req.params.id)

    res.redirect('/users')
}