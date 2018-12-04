// has many applications -> node
// has many backers

import { Model } from 'objection'
import Node from './node'
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

    profileId!: Number

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

    static get relationMappings() {
        return {
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'ideas.parentId',
                    to: 'nodes.id'
                }
            },
            backers: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    key: 'backers'
                },
                beforeInsert(model) {
                    model.key = 'backers'
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
                    model.key = 'applications'
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