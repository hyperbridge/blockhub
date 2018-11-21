const devConfig = require('./development.json')
const productionConfig = require('./production.json')

let config = devConfig

switch (process.env.NODE_ENV) {
    case 'production':
        config = {
            ...config,
            ...productionConfig
        }
        break
}

export default config
