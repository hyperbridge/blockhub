import { Model, RelationMappings } from 'objection'
import Node from './node'
import Vote from './vote'

export default class Rating extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

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
            parent: {
                relation: Model.HasOneRelation,
                modelClass: Node,
                join: {
                    from: 'ratings.parentId',
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
