import { Model, RelationMappings } from 'objection'
import Node from './node'
import Rating from './rating'
import Profile from './profile'
import BaseModel from './base'

export default class Review extends BaseModel {
    parentId!: Number

    rating!: Rating

    owner!: Profile
    ownerId!: Number

    static get tableName() {
        return 'reviews'
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
                    from: 'reviews.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}
