import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Discussion from './discussion'
import Event from './event'
import Node from './node'
import BaseModel from './base'

export default class Community extends BaseModel {
    parentId!: Number
    ownerId!: Number

    currentActiveUsers!: Number
    monthlyActiveUsers!: Number
    dailyActiveUsers!: Number

    static get tableName() {
        return 'communities'
    }

    static get timestamps() {
        return true
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
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
                    from: 'communities.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromCommunityId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            discussions: {
                relation: Model.ManyToManyRelation,
                modelClass: Discussion,
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
            },
            subscribers: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'subscribers'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'subscribers'
                },
                join: {
                    from: 'profiles.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
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
}
