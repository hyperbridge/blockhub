import Model, { DiscussionType } from '../../models/discussion'
import createService = require('feathers-objection')
import hooks = require('./hooks')
import Node, { NodeRelation } from '../../models/node'

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
        allowedEager: '[owner.^, community.^, messages.^, messages.replies.^, chat]',
        allowedUpsert: '[]'
    }

    app.use('/discussions/:id/:channelId/joinChannel', {
        async create (data, { route: { id, channelId } }) {
            return await Node.query().insert({
                fromProfileId: id,
                toDiscussionId: channelId,
                relationKey: NodeRelation.Chat
            })
        }
    })

    app.use('/discussions/:id/joinChannel', {
        async create (data, { route: { id, channelId } }) {
            return await Node.query().insert({
                fromProfileId: id,
                toDiscussionId: channelId,
                relationKey: NodeRelation.Chat
            })
        }
    })

    app.use('discussions', createService(options))

    const service = app.service('discussions')

    service.hooks(hooks)
}
