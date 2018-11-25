// const {
//     name,
//     version,
//     description
// } = require('../../../package.json')

export default (_, res) => {
    res.json({
        name: 'test',
        description: 'test',
        version: '0.1',
        uptime: process.uptime()
    })
}