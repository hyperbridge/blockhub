import * as DB from '../db'

export default async (req, res) => {
    const account = DB.getAccount(req.params.id)

    res.json({
        success: true,
        data: {
            account
        }
    })
}