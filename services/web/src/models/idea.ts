import { Model, RelationMappings, JsonSchema } from 'objection'
import Node from './node'
import Rating from './rating'
import Profile from './profile'
import Community from './community'
import Tag from './tag'
import BaseModel from './base'
import Vote from './vote'

export default class Idea extends BaseModel {
    public ownerId!: number
    public owner!: Profile
    public communityId!: number
    public community!: Community
    public ratingId!: number
    public rating!: Rating

    public type!: string // [battlepass, app, game, etc.]
    public tags!: Array<Tag>

    public static get tableName (): string {
        return 'ideas'
    }

    public static get timestamps (): boolean {
        return true
    }

    public static get jsonSchema (): JsonSchema {
        return {
            type: 'object',
            required: ['name', 'meta', 'ownerId', 'communityId', 'ratingId'],
            properties: {
                name: { type: 'string' },
                ownerId: { type: 'integer' },
                communityId: { type: 'integer' },
                ratingId: { type: 'integer' },
                meta: {
                    type: 'object',
                    required: [],
                    properties: {
                    }
                }
            }
        }
    }

    public static get relationMappings (): RelationMappings {
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
                    from: 'ideas.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            vote: {
                relation: Model.ManyToManyRelation,
                modelClass: Vote,
                join: {
                    from: 'ideas.id',
                    to: 'votes.id',
                    through: {
                        from: 'nodes.toIdeaId',
                        to: 'nodes.fromVoteId',
                        extra: ['relationKey']
                    }
                },
            },
            community: {
                relation: Model.HasOneRelation,
                modelClass: Community,
                join: {
                    from: 'ideas.communityId',
                    to: 'communities.id'
                }
            },
            backers: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'backers'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'backers'
                },
                join: {
                    from: 'ideas.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            applications: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'applications'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'applications'
                },
                join: {
                    from: 'ideas.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            rating: {
                relation: Model.HasOneRelation,
                modelClass: Rating,
                join: {
                    from: 'ideas.ratingId',
                    to: 'ratings.id'
                }
            },
            tags: {
                relation: Model.ManyToManyRelation,
                modelClass: Tag,
                join: {
                    from: 'ideas.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toTagId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'tags'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'tags'
                }
            },
        }
    }
}
