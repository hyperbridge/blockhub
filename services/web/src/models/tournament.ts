import { Model, RelationMappings, JsonSchema } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Tournament extends BaseModel {
    public parentId!: number

    public static get tableName (): string {
        return 'tournaments'
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
                    from: 'tournaments.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}
