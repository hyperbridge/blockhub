import { Model, RelationMappings } from 'objection'
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
            voteIdea: {
                relation: Model.HasOneThroughRelation,
                modelClass: Idea,
                join: {
                    from: 'votes.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromVoteId',
                        to: 'nodes.toIdeaId'
                    }
                }
            },
            voteProduct: {
                relation: Model.HasOneThroughRelation,
                modelClass: Product,
                join: {
                    from: 'votes.id',
                    to: 'products.id',
                    through: {
                        from: 'nodes.fromVoteId',
                        to: 'nodes.toProductId'
                    }
                }
            },
            voteProject: {
                relation: Model.HasOneThroughRelation,
                modelClass: Project,
                join: {
                    from: 'votes.id',
                    to: 'projects.id',
                    through: {
                        from: 'nodes.fromVoteId',
                        to: 'nodes.toProjectId'
                    }
                }
            }
        }
    }
}