import { Model, RelationMappings } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class BattlePass extends BaseModel {
    // meta = tiers, rewards, associated product, etc.
    parentId!: Number

    static get tableName() {
        return 'battlepasses'
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
                    from: 'battlepasses.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}
