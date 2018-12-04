import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'

export default class Bounty extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object // prize
    parentId!: Number

    static get tableName() {
        return 'bounties'
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
                    from: 'bounties.parentId',
                    to: 'nodes.id'
                }
            },
            hunters: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    key: 'hunters'
                },
                beforeInsert(model) {
                    model.key = 'hunters'
                },
                join: {
                    from: 'hunters.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
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
