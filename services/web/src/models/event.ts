import { Model, RelationMappings, JsonSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Event extends BaseModel {
    // meta { message: "Earned 10 reputation points for being awesome" }
    // key = PROFILE_REPUTATION
    // value = -10, 10, etc.
    public parentId!: number

    public property!: string

    public static get tableName (): string {
        return 'events'
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
                    from: 'events.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}
