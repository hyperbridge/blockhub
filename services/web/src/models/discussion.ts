import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Message from './message'
import Event from './event'
import Node from './node'
import Rating from './rating'
import Community from './community'

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
            owner: {
                relation: Model.HasOneThroughRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'owner'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'owner'
                },
                join: {
                    from: 'discussions.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromDiscussionId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
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
                    from: 'discussions.ratingId',
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
                    from: 'profiles.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toDiscussionId',
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
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromMessageId',
                        to: 'nodes.toDiscussionId',
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
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromEventId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                }
            },
            community: {
                relation: Model.HasOneThroughRelation,
                modelClass: Community,
                filter: {
                    relationKey: 'discussions'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'discussions'
                },
                join: {
                    from: 'discussions.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromDiscussionId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            }
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}
