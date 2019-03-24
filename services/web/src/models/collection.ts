import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'

export default class Collection extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    static get tableName() {
        return 'collections'
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

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}
