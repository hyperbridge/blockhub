import { Model, RelationMappings } from 'objection'
import NodeModel from './node'
import Rating from './rating'
import Profile from './profile'

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
                modelClass: NodeModel,
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
            backers: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    key: 'backers'
                },
                beforeInsert(model) {
                    (model as NodeModel).key = 'backers'
                },
                join: {
                    from: 'ideas.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['key']
                    }
                }
            },
            applications: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    key: 'applications'
                },
                beforeInsert(model) {
                    (model as NodeModel).key = 'applications'
                },
                join: {
                    from: 'ideas.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['key']
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
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}