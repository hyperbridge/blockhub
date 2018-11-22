import * as DB from '../db'

export default (req, res) => {
    DB.createUser(req.body.email, req.body.firstName, req.body.lastName).then(() => {
        res.json({
            success: true,
            data: {
                id: 1
            }
        })
    })
}