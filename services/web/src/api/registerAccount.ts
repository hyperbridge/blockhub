const {
    version,
    description
} = require('../../package.json')

export default (_, res) => {
    res.json({
        name: 'sss',
        description,
        version,
        uptime: process.uptime()
    })
}