import { Model, RelationMappings } from 'objection'
import Node from './node'

export default class License extends Model {
    id!: Number
    key!: String
    value!: String
    createdAt!: String
    updatedAt!: String
    meta!: Object
    parentId!: Number

    static get tableName() {
        return 'licenses'
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
                    from: 'licenses.parentId',
                    to: 'nodes.id'
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