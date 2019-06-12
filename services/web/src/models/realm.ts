import { Model, RelationMappings } from 'objection'
import Rating from './rating'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Realm extends BaseModel {
    parentId!: Number

    ownerId!: Number
    owner!: Profile

    static get tableName() {
        return 'realms'
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
}