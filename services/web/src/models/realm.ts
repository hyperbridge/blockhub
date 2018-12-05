import { Model, RelationMappings } from 'objection'
import Rating from './rating'
import Node from './node'

export default class Realm extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    static get tableName() {
        return 'realms'
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
                    from: 'realms.parentId',
                    to: 'nodes.id'
                }
            },
            rating: {
                relation: Model.HasOneRelation,
                modelClass: Rating,
                join: {
                    from: 'products.ratingId',
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