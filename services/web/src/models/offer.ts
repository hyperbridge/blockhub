// has one asset or ??
import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'

export default class Offer extends Model {
    id!: number
    key!: String
    value!: String
    meta!: String
    createdAt!: String
    updatedAt!: String
    parentId!: Number

    static get tableName() {
        return 'offers'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['ownerId'],

            properties: {
                id: { type: 'integer' },
                ownerId: { type: 'integer' },
                address: { type: 'string' }
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
                    from: 'offers.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'offers.ownerId',
                    to: 'profiles.id'
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