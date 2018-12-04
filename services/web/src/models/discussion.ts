import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Message from './message'
import Event from './events'
import Node from './node'

export default class Discussion extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    content!: String
    meta!: Object
    parentId!: Number
    rootMessageId!: Number

    static get tableName() {
        return 'discussions'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' }
            },
            options: {
                timestamps: true
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'discussions.parentId',
                    to: 'nodes.id'
                }
            },
            rootMessage: {
                relation: Model.HasOneRelation,
                modelClass: Message,
                join: {
                    from: 'discussions.rootMessageId',
                    to: 'messages.id'
                }
            },
            members: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    key: 'members'
                },
                beforeInsert(model) {
                    model.key = 'members'
                },
                join: {
                    from: 'members.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toCommunityId',
                        extra: ['key']
                    }
                }
            },
            messages: {
                relation: Model.ManyToManyRelation,
                modelClass: Message,
                filter: {
                    key: 'messages'
                },
                beforeInsert(model) {
                    model.key = 'messages'
                },
                join: {
                    from: 'messages.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromMessageId',
                        to: 'nodes.toCommunityId',
                        extra: ['key']
                    }
                }
            },
            events: {
                relation: Model.ManyToManyRelation,
                modelClass: Event,
                filter: {
                    key: 'events'
                },
                beforeInsert(model) {
                    model.key = 'events'
                },
                join: {
                    from: 'events.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromEventId',
                        to: 'nodes.toCommunityId',
                        extra: ['key']
                    }
                }
            },
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}