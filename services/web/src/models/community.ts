import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Discussion from './discussion'
import Event from './event'
import Node from './node'

export default class Community extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    static get tableName() {
        return 'communities'
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
                    from: 'communities.parentId',
                    to: 'nodes.id'
                }
            },
            discussions: {
                relation: Model.ManyToManyRelation,
                modelClass: Discussion,
                filter: {
                    key: 'discussions'
                },
                beforeInsert(model) {
                    model.key = 'discussions'
                },
                join: {
                    from: 'discussions.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromDiscussionId',
                        to: 'nodes.toCommunityId',
                        extra: ['key']
                    }
                }
            },
            subscribers: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    key: 'subscribers'
                },
                beforeInsert(model) {
                    model.key = 'subscribers'
                },
                join: {
                    from: 'profiles.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
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