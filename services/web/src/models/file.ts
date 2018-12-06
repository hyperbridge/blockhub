import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Message from './message'
import Node from './node'

export default class File extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String // [image, document, other]
    value!: String
    meta!: String
    parentId!: Number

    storageType!: String // s3, github, etc.
    accessType!: String

    static get tableName() {
        return 'files'
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
                    from: 'files.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'files.ownerId',
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
