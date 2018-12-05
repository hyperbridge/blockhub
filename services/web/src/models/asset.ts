
import { Model, RelationMappings } from 'objection'
import License from './license'
import Offer from './offer'
import Node from './node'

export default class Asset extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number
    score!: Number

    static get tableName() {
        return 'assets'
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
                    from: 'assets.parentId',
                    to: 'nodes.id'
                }
            },
            license: {
                relation: Model.HasOneRelation,
                modelClass: License,
                join: {
                    from: 'assets.licenseId',
                    to: 'assets.id'
                }
            },
            offers: {
                relation: Model.ManyToManyRelation,
                modelClass: Offer,
                filter: {
                    key: 'offers'
                },
                beforeInsert(model) {
                    (model as Node).key = 'offers'
                },
                join: {
                    from: 'offers.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromOfferId',
                        to: 'nodes.toCommunityId',
                        extra: ['key']
                    }
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
