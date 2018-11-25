const baseConfig = require('./base.json')
const developmentConfig = require('./development.json')
const productionConfig = require('./production.json')

let config = baseConfig

switch (process.env.NODE_ENV) {
    case 'development':
        config = {
            ...config,
            ...developmentConfig
        }
        break
    case 'production':
        config = {
            ...config,
            ...productionConfig
        }
        break
}

module.exports = config
