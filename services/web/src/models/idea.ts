import { Model, RelationMappings } from 'objection'
import Node from './node'
import Rating from './rating'
import Profile from './profile'
import Community from './community'
import Tag from './tag'

export default class Idea extends Model {
    id!: Number
    key!: String
    value!: String
    meta!: Object
    createdAt!: String
    updatedAt!: String
    parentId!: Number

    ownerId!: Number
    owner!: Profile

    type!: String // [battlepass, app, game, etc.]
    tags!: Array<Tag>

    static get tableName() {
        return 'ideas'
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
                    from: 'ideas.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'ideas.ownerId',
                    to: 'profiles.id'
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
                    from: 'ideas.parentId',
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
                    console.log(model);
                    (model as Node).relationKey = 'tags'
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