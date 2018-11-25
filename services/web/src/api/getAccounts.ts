import * as DB from '../db'

export default async (req, res) => {
    const accounts = DB.getAccounts(false)

    res.json({
        success: true,
        data: {
            accounts
        }
    })
}