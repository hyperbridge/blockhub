import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Bounty extends BaseModel {
    // meta = prize
    parentId!: Number

    static get tableName() {
        return 'bounties'
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
                    from: 'bounties.parentId',
                    to: 'nodes.id'
                }
            },
            hunters: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'hunters'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'hunters'
                },
                join: {
                    from: 'hunters.id',
                    to: 'communities.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toCommunityId',
                        extra: ['relationKey']
                    }
                }
            },
        }
    }
}
