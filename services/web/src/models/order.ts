import { Model, RelationMappings } from 'objection'
import Node from './node'

export default class Order extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object // licenseConditions licenseKey license (needs to meet conditions)
    parentId!: Number

    transactionId!: String

    static get tableName() {
        return 'orders'
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
                    from: 'orders.parentId',
                    to: 'nodes.id'
                }
            },
            profile: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'orders.profileId',
                    to: 'nodes.id'
                }
            },
            items: {
                relation: Model.HasManyRelation,
                modelClass: Node,
                join: {
                    from: 'orders.id',
                    through: {
                        from: 'nodes.fromOrderId',
                        to: 'nodes.id',
                        extra: ['key']
                    },
                    to: 'nodes.id'
                },
                filter: {
                    key: 'items'
                },
                beforeInsert(model) {
                    model.key = 'items'
                },
            },
        }
    }
}
