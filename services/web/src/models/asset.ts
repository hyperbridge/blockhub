
import { Model, RelationMappings } from 'objection'
import License from './license'
import Offer from './offer'
import Node from './node'
import BaseModel from './base'

export default class Asset extends BaseModel {
    parentId!: Number
    score!: Number
    status!: String

    static get tableName() {
        return 'assets'
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
                    relationKey: 'offers'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'offers'
                },
                join: {
                    from: 'offers.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromOfferId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            },
        }
    }
}
