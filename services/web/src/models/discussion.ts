import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Message from './message'
import Event from './event'
import Node from './node'
import Rating from './rating'

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
            rating: {
                relation: Model.HasOneRelation,
                modelClass: Rating,
                join: {
                    from: 'products.ratingId',
                    to: 'ratings.id'
                }
            },
            members: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'members'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'members'
                },
                join: {
                    from: 'members.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            },
            messages: {
                relation: Model.ManyToManyRelation,
                modelClass: Message,
                filter: {
                    relationKey: 'messages'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'messages'
                },
                join: {
                    from: 'messages.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromMessageId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            },
            events: {
                relation: Model.ManyToManyRelation,
                modelClass: Event,
                filter: {
                    relationKey: 'events'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'events'
                },
                join: {
                    from: 'events.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromEventId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
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