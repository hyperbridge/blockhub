import Model from '../../models/profile'
import createService = require('feathers-objection')
import hooks = require('./hooks')

export default function(app) {
    const paginate = app.get('paginate')

    const options = {
        model: Model,
        id: 'id',
        paginate: {
            default: 10,
            max: 25,
            ...paginate
        },
        allowedEager: 'account'
    }

    app.use('/profiles', createService(options))

    app.use('/profiles/:id/convert', {
        async update(id, data, params) {
            console.log('[service=/profiles/:id/convert, action=update]')

            await Model.query()
                .where({ id })
                .update(data)

            return data
        }
    })

    app.use('/profiles/:id/setAddress', {
        async update(id, data, params) {
            console.log('[service=/profiles/:id/setAddress, action=update]')

            await Model.query()
                .where({ id })
                .update(data)

            return data
        }
    })

    app.service('/profiles').hooks(hooks)
    app.service('/profiles/:id/convert').hooks(hooks)
    app.service('/profiles/:id/setAddress').hooks(hooks)
    //app.service('/profiles/:id/tags').hooks(hooks)
}

// add to base:
// page
// numberPage
// excludedTags
// matchAllTags
// requiredFlags
// searchText
// omittedFlags
// returnVoteData
// returnChildren
// returnMetadata
// totalOnly
// daysOld
// includeRecentlyUpdatedOnly
