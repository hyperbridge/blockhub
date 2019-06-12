import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Rating from './rating'
import Node from './node'
import BaseModel from './base'

export default class Suggestion extends BaseModel {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    rating!: Rating

    static get tableName() {
        return 'suggestions'
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
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'suggestions.parentId',
                    to: 'nodes.id'
                }
            },
            profile: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'suggestions.profileId',
                    to: 'nodes.id'
                }
            },
            rating: {
                relation: Model.HasOneRelation,
                modelClass: Rating,
                join: {
                    from: 'suggestions.ratingId',
                    to: 'ratings.id'
                }
            },
        }
    }
}
