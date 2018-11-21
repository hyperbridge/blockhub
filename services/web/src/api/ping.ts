const {
    name,
    version,
    description
} = require('../../package.json')

export default (_, res) => {
    res.json({
        name,
        description,
        version,
        uptime: process.uptime()
    })
}