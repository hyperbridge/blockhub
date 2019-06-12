import { Model, RelationMappings } from 'objection'
import Node from './node'
import BaseModel from './base'

export default class Tag extends BaseModel {
    parentId!: Number
    locked!: Boolean

    static get tableName() {
        return 'tags'
    }

    static get timestamps() {
        return true
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['key', 'value', 'meta'],
            properties: {
                key: { type: 'string' },
                value: { type: 'string' },
                meta: {
                    type: 'object',
                    required: ['author', 'assets'],
                    properties: {
                        author: { type: 'string' },
                        assets: { type: 'array' },
                        background: { type: ['string', 'null'] },
                        estimatedValue: { type: 'integer' }
                    }
                }
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'tags.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}