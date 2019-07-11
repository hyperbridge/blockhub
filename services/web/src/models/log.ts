import { Model, RelationMappings, JsonSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Log extends BaseModel {
    // key = [warning, information, error, report]
    public parentId!: number

    public static get tableName (): string {
        return 'logs'
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
                    from: 'logs.parentId',
                    to: 'nodes.id'
                }
            }
        }
    }
}
