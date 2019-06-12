import { Model, RelationMappings } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Achievement extends BaseModel {
    parentId!: Number

    static get tableName() {
        return 'achievements'
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
                    from: 'achievements.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}
