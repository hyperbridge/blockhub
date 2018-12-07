import defaultData from './data'

import hooks = require('./hooks')

export default function(app) {
    const paginate = app.get('paginate')

    const options = {
        name: 'application',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        }
    }

    app.use('/application/state', {
        async find(params) {
            console.log('[service=/application/state, action=find]')

            return defaultData
        }
    })

    const service = app.service('/application/state')

    service.hooks(hooks)
}
