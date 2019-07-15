import { Model, RelationMappings, JsonSchema } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'

export default class Collection extends BaseModel {
    public name!: string
    public parentId!: number
    public owner!: Profile;

    public static get tableName (): string {
        return 'collections'
    }

    public static get timestamps (): boolean {
        return true
    }

    public static get jsonSchema (): JsonSchema {
        return {
            type: 'object',
            required: ['name', 'meta'],
            properties: {
                parentId: { type: 'integer' },
                name: { type: 'string' },
                meta: {
                    type: 'object',
                    required: ['author', 'assets'],
                    properties: {
                        author: { type: 'string' },
                        assets: { type: 'array' },
                        background: { type: ['string', 'null'] },
                        estimatedValue: { type: 'integer' }
                    }
                }
            }
        }
    }

    public static get relationMappings (): RelationMappings {
        return {
            owner: {
                relation: Model.HasOneThroughRelation,
                modelClass: Profile,
                filter: (qb) => {
                    qb.join('nodes as node_profiles', 'node_profiles.toProfileId', '=', 'profiles.id')
                    qb.where('node_profiles.relationKey', 'owner')
                },
                beforeInsert (model) {
                    (model as Node).relationKey = 'owner'
                },
                join: {
                    from: 'collections.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromCollectionId',
                        to: 'nodes.toProfileId'
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
            }
        }
    }
}
