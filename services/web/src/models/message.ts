import { Model, RelationMappings, JsonSchema } from 'objection'
import Node from './node'
import Profile from './profile'
import BaseModel from './base'

export default class Message extends BaseModel {
    public parentId!: number
    public ownerId!: number

    public static get tableName (): string {
        return 'messages'
    }

    public static get timestamps (): boolean {
        return true
    }

    public static get jsonSchema (): JsonSchema {
        return {
            type: 'object',
            required: [],
            properties: {
            }
        }
    }

    public static get relationMappings (): RelationMappings {
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
            replies: {
                relation: Model.HasManyRelation,
                modelClass: Message,
                join: {
                    from: 'messages.id',
                    to: 'messages.replyToId'
                }
            },
            replyTo: {
                relation: Model.HasOneRelation,
                modelClass: Message,
                join: {
                    from: 'messages.replyToId',
                    to: 'messages.id'
                }
            }
        }
    }
}
