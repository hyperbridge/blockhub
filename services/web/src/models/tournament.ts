import { Model, RelationMappings } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Tournament extends BaseModel {
    parentId!: Number

    static get tableName() {
        return 'tournaments'
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
                    from: 'tournaments.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}