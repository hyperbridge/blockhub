import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Node from './node'
import BaseModel from './base'


export default class Vote extends BaseModel {
    // value = 1 or -1 or emoji
    parentId!: Number

    static get tableName() {
        return 'votes'
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
                    from: 'votes.parentId',
                    to: 'nodes.id'
                }
            },
            owner: {
                relation: Model.HasOneThroughRelation,
                modelClass: Profile,
                join: {
                    from: 'votes.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromVoteId',
                        to: 'nodes.toProfileId'
                    }
                }
            }
        }
    }
}
