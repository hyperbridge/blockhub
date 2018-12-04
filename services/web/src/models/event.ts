import { Model, RelationMappings } from 'objection'
import Node from './node'

export default class Event extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    meta!: Object // { message: "Earned 10 reputation points for being awesome" }
    parentId!: Number
    key!: String // PROFILE_REPUTATION
    value!: Number // -10, 10, etc.

    property!: String

    static get tableName() {
        return 'events'
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
                    from: 'events.parentId',
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
