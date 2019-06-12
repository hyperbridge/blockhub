import { Model, RelationMappings } from 'objection'
import Node from './node'
import Profile from './profile'
import BaseModel from './base'

export default class Message extends BaseModel {
    parentId!: Number

    ownerId!: Number

    static get tableName() {
        return 'messages'
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
}