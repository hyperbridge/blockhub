import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Collection extends BaseModel {
    name!: String
    parentId!: Number

    static get tableName() {
        return 'collections'
    }

    static get timestamps() {
        return true
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['id', 'createdAt', 'name', 'meta'],
            properties: {
                parentId: { type: 'integer' },
                name: { type: 'string' }
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            owner: {
                relation: Model.HasOneThroughRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'owner'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'owner'
                },
                join: {
                    from: 'collections.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromCollectionId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'collections.parentId',
                    to: 'nodes.id'
                }
            },
        }
    }
}
