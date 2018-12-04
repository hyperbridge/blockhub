import { Model, RelationMappings } from 'objection'
import Account from './account'
import Profile from './profile'

// Based on https://github.com/Vincit/objection.js/issues/19
// Exclusive ARC https://hashrocket.com/blog/posts/modeling-polymorphic-associations-in-a-relational-database#exclusive-belongs-to-aka-exclusive-arc-
export default class NodeModel extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    fromAccount!: Account
    fromAccountId!: Number
    toAccountId!: Number

    fromProfileId!: Number
    toProfileId!: Number

    fromBadgeId!: Number
    toBadgeId!: Number

    fromAchievementId!: Number
    toAchievementId!: Number

    fromIdeaId!: Number
    toIdeaId!: Number

    fromSuggestionId!: Number
    toSuggestionId!: Number

    fromProjectId!: Number
    toProjectId!: Number

    fromProductId!: Number
    toProductId!: Number

    fromAssetId!: Number
    toAssetId!: Number

    fromBountyId!: Number
    toBountyId!: Number

    fromRealmId!: Number
    toRealmId!: Number

    fromCommunityId!: Number
    toCommunityId!: Number

    fromDiscussionId!: Number
    toDiscussionId!: Number

    fromMessageId!: Number
    toMessageId!: Number

    fromOfferId!: Number
    toOfferId!: Number

    fromLicenseId!: Number
    toLicenseId!: Number

    fromOrderId!: Number
    toOrderId!: Number

    fromRatingId!: Number
    toRatingId!: Number

    fromReviewId!: Number
    toReviewId!: Number

    fromTagId!: Number
    toTagId!: Number

    fromVoteId!: Number
    toVoteId!: Number

    fromLeaderboardId!: Number
    toLeaderboardId!: Number

    fromLogId!: Number
    toLogId!: Number

    fromFileId!: Number
    toFileId!: Number

    fromEventId!: Number
    toEventId!: Number

    fromServerId!: Number
    toServerId!: Number

    static get tableName() {
        return 'nodes'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                key: { type: 'string' }
            },
            options: {
                timestamps: true
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            profile: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'nodes.profileId',
                    to: 'profiles.id'
                }
            },
            account: {
                relation: Model.HasOneRelation,
                modelClass: Account,
                join: {
                    from: 'nodes.accountId',
                    to: 'accounts.id'
                }
            },
        }
    }

    from() {
        if (this.fromAccountId) return this.fromAccount

        throw new Error("No FROM relation")
    }

    to() {
        throw new Error("No TO relation")
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}

// objectId: { type: Schema.Types.ObjectId, required: true },
// author: { type: String, required: true },
// text: { type: String, required: true },
// rate: { type: Number, default: 0 },
// createdAt: { type: Date, default: Date.now },
// updatedAt: { type: Date, default: Date.now },
// replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]

// has many upvoters profile
// has many downvoters profile
// upvoteTotal
// downvoteTotal
// scoreTotal - based on upvote/downvote reputation

// product reviews =  has many meta join fromProduct = product.id where type = 'review'

// parentId is nodeId which is anything
// parentId is profile or project or product 
// event.parent.getAssociation() => 
//     if (this.productId !== null)
//         return this.product

// event.parent.to().name