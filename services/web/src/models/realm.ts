import { Model, RelationMappings } from 'objection'
import Rating from './rating'
import Profile from './profile'
import Node from './node'

export default class Realm extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    ownerId!: Number
    owner!: Profile

    static get tableName() {
        return 'realms'
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
                    from: 'realms.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromRealmId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'realms.parentId',
                    to: 'nodes.id'
                }
            },
            rating: {
                relation: Model.ManyToManyRelation,
                modelClass: Rating,
                join: {
                    from: 'realms.id',
                    to: 'ratings.id',
                    through: {
                        from: 'nodes.fromRealmId',
                        to: 'nodes.toRatingId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'rating'
                },
                beforeInsert(model) {
                    console.log(model);
                    (model as Node).relationKey = 'rating'
                }
            },
            // rating: {
            //     relation: Model.HasOneRelation,
            //     modelClass: Rating,
            //     join: {
            //         from: 'realms.ratingId',
            //         to: 'ratings.id'
            //     }
            // },
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}