import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Message from './message'
import Node from './node'
import BaseModel from './base'

export default class File extends BaseModel {
    // key = [image, document, other]
    parentId!: Number

    storageType!: String // s3, github, etc.
    accessType!: String

    static get tableName() {
        return 'files'
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
}
