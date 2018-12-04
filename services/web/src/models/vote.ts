import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'

export default class Vote extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String // value = 1 or -1 or emoji
    meta!: Object
    parentId!: Number

    static get tableName() {
        return 'votes'
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
                    from: 'votes.parentId',
                    to: 'nodes.id'
                }
            },
            profile: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'votes.profileId',
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