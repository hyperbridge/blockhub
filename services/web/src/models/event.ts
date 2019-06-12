import { Model, RelationMappings } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Event extends BaseModel {
    // meta { message: "Earned 10 reputation points for being awesome" }
    // key = PROFILE_REPUTATION
    // value = -10, 10, etc.
    parentId!: Number

    property!: String

    static get tableName() {
        return 'events'
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
                    from: 'events.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}
