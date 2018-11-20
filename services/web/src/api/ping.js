const {
    name,
    version,
    description
} = require('../../package.json')

export default (req, res) => {
    res.json({
        name,
        description,
        version,
        uptime: process.uptime()
    })
}