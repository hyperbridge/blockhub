import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Product from './product'
import NodeModel from './node'


// export interface RelationMappings {
//     [relationName: string]: RelationMapping;
// }
// export interface RelationMapping {
//     relation: Relation;
//     modelClass: ModelClass<any> | string;
//     join: RelationJoin;
//     modify?: (queryBuilder: QueryBuilder<any>) => QueryBuilder<any>;
//     filter?: ((queryBuilder: QueryBuilder<any>) => QueryBuilder<any>) | string | object;
//     beforeInsert: any
// }

export default class Leaderboard extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number
    score!: Number

    product!: Product
    productId!: Number

    static get tableName() {
        return 'leaderboards'
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
            // has many profiles
            product: {
                relation: Model.HasOneRelation,
                modelClass: NodeModel,
                join: {
                    from: 'leaderboards.productId',
                    to: 'products.id'
                }
            },
            parent: {
                relation: Model.HasOneRelation,
                modelClass: NodeModel,
                join: {
                    from: 'leaderboards.parentId',
                    to: 'nodes.id'
                }
            },
            players: {
                relation: Model.ManyToManyRelation,
                modelClass: Profile,
                join: {
                    from: 'leaderboards.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromLeaderboardId',
                        to: 'nodes.toProfileId',
                        extra: ['key']
                    }
                },
                filter: {
                    key: 'players'
                    // query => query.orderByRaw('coalesce(title, id)') //query => query.where('page:tagable_entity_tag.object_data:type', 'Page')
                },
                beforeInsert(model) {
                    (model as NodeModel).key = 'players'
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
