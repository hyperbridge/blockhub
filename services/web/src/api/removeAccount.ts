import * as DB from '../db'

export default async (req, res) => {
    await DB.removeAccount(req.params.id)

    res.redirect('/accounts')
}