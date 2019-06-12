// has one asset or ??
import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Offer extends BaseModel {
    parentId!: Number

    static get tableName() {
        return 'offers'
    }

    static get timestamps() {
        return true
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['ownerId'],

            properties: {
                ownerId: { type: 'integer' },
                address: { type: 'string' }
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'offers.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'offers.ownerId',
                    to: 'profiles.id'
                }
            },
        }
    }
}