import { Model, RelationMappings } from 'objection'
import Node from './node'
import BaseModel from './base'


export default class Badge extends BaseModel {
    parentId!: Number
    status!: String

    name!: String

    static get tableName() {
        return 'badges'
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
                    from: 'badges.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}