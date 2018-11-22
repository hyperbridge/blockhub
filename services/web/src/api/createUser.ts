import * as DB from '../db'

export default async (req, res) => {
    const user = await DB.createUser(req.body.email, req.body.firstName, req.body.lastName)

    res.json({
        success: true,
        data: {
            id: user!.id
        }
    })
}