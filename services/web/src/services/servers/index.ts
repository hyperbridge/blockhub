import Model from '../../models/server'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function (app): any {
    const paginate = app.get('paginate')

    const options = {
        model: Model,
        id: 'id',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        }
    }

    app.use('/servers', createService(options))

    const service = app.service('/servers')

    service.hooks(hooks)
}

// app.GetServersAtAddress(addressOrIp).done(function(result) {
//     console.log(result);
// });
