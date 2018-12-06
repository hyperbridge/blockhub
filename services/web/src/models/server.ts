import { Model, RelationMappings } from 'objection'
import Node from './node'
import Product from './product'
import Tag from './tag'

export default class Server extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
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

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' }
            },
            options: {
                timestamps: true
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

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}

// has many profiles
// has many tags
// has many events
// score