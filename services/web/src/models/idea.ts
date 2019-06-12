import { Model, RelationMappings } from 'objection'
import Node from './node'
import Rating from './rating'
import Profile from './profile'
import Community from './community'
import Tag from './tag'
import BaseModel from './base'

export default class Idea extends BaseModel {
    ownerId!: Number
    owner!: Profile
    communityId!: Number
    community!: Community
    ratingId!: Number
    rating!: Rating

    type!: String // [battlepass, app, game, etc.]
    tags!: Array<Tag>

    static get tableName() {
        return 'ideas'
    }

    static get timestamps() {
        return true
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
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
                    from: 'ideas.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
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