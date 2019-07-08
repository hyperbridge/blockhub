import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Idea from './idea'
import Product from './product'
import Project from './project'
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
            },
            // idea: {
            //     relation: Model.HasOneThroughRelation,
            //     modelClass: Idea,
            //     join: {
            //         from: 'votes.id',
            //         to: 'ideas.id',
            //         through: {
            //             from: 'nodes.fromVoteId',
            //             to: 'nodes.toIdeaId'
            //         }
            //     }
            // },

            // project: {
            //     relation: Model.HasOneThroughRelation,
            //     modelClass: Project,
            //     join: {
            //         from: 'votes.id',
            //         to: 'projects.id',
            //         through: {
            //             from: 'nodes.fromVoteId',
            //             to: 'nodes.toProjectId'
            //         }
            //     }
            // }
        }
    }
}