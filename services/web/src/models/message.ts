import { Model, RelationMappings } from 'objection'
import Node from './node'
import Profile from './profile'

export default class Message extends Model {
    id!: number
    key!: String
    value!: String
    createdAt!: String
    updatedAt!: String
    parentId!: Number

    ownerId!: Number

    static get tableName() {
        return 'messages'
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
                    from: 'messages.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'messages.ownerId',
                    to: 'profiles.id'
                }
            },
            replyTo: {
                relation: Model.HasOneRelation,
                modelClass: Message,
                join: {
                    from: 'messages.replyToId',
                    to: 'messages.id'
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