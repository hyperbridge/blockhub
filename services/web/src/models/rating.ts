import { Model, RelationMappings } from 'objection'
import Node from './node'
import Vote from './vote'
import Profile from './profile'

export default class Rating extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number
    ownerId!: Number

    votes!: Array<Vote>

    score!: Number // based on upvote/downvote profile reputation
    average!: Number
    upvoteTotal!: Number // has many upvoters votes -> profile where value = 1
    downvoteTOtal!: Number // has many downvoters votes -> profile where value = -1

    static get tableName() {
        return 'ratings'
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
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'ratings.ownerId',
                    to: 'profiles.id'
                }
            },
            parent: {
                relation: Model.HasOneThroughRelation,
                modelClass: Profile,
                filter: {
                    relationKey: 'parent'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'parent'
                },
                join: {
                    from: 'ratings.id',
                    to: 'profiles.id',
                    through: {
                        from: 'nodes.fromIdeaId',
                        to: 'nodes.toProfileId',
                        extra: ['relationKey']
                    }
                }
            },
            votes: {
                relation: Model.HasManyRelation,
                modelClass: Vote,
                join: {
                    from: 'ratings.id',
                    to: 'votes.ratingId'
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
