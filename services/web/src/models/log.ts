import { Model, RelationMappings } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Log extends BaseModel {
    // key = [warning, information, error, report]
    parentId!: Number

    static get tableName() {
        return 'logs'
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
                    from: 'logs.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}