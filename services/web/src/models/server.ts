import { Model, RelationMappings } from 'objection'
import Node from './node'
import Product from './product'
import Tag from './tag'
import BaseModel from './base'

export default class Server extends BaseModel {
    parentId!: Number
    score!: Number

    product!: Product
    productId!: Number

    address!: String
    port!: Number
    totalConnected!: Number

    static get tableName() {
        return 'servers'
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
                    from: 'servers.parentId',
                    to: 'nodes.id'
                }
            },
            tags: {
                relation: Model.ManyToManyRelation,
                modelClass: Tag,
                join: {
                    from: 'servers.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromServerId',
                        to: 'nodes.toTagId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'tags'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'tags'
                }
            },
        }
    }
}

// has many profiles
// has many tags
// has many events
// score