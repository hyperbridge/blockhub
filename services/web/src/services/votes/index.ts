import Model from '../../models/vote'
import Node from '../../models/node'

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
        },
        allowedInsert: '[]',
        allowedUpsert: '[]',
        allowedEager: '[owner.^]'
    }

    app.use('votes', createService(options))
    const service = app.service('votes')

    app.use('/votes/check', {
        async find (params) {
            const { objectType, objectId, profileId } = params.query

            let ret = {}
            console.log('[service=/vote/check, action=find]')

            const profile = await app.service('profiles').find({
                query: {
                    'profiles.id': profileId,
                    $eager: '[vote]'
                }
            })
            console.log('Object profile check')
            console.log(profile.data[0])

            if (profile.data[0].vote) {
                let query = {}
                const objectTypeLow = objectType.toLowerCase()
                if (objectTypeLow == 'product') {
                    query = {
                        query: {
                            'products.id': objectId,
                            $eager: '[vote]'
                        }
                    }
                }
                if (objectTypeLow == 'idea') {
                    query = {
                        query: {
                            'ideas.id': objectId,
                            $eager: '[vote]'
                        }
                    }
                }
                if (objectTypeLow == 'project') {
                    query = {
                        query: {
                            'projects.id': objectId,
                            $eager: '[vote]'
                        }
                    }
                }
                const table = `${objectTypeLow}s`
                const object = await app.service(table).find(query)
                console.log('Object Voter Profile check')
                console.log(object.data[0])

                profile.data[0].vote.forEach(voteFromProfile => object.data[0].vote.forEach(voteFromObject => {
                    if (voteFromProfile.id === voteFromObject.id) {
                        ret = voteFromProfile
                    }
                }))
            }
            ret.objectType = objectType
            ret.objectId = objectType
            ret.voted = ret.id ? true : false

            console.log(ret)
            return ret
        }
    })

    service.hooks(hooks)
}
