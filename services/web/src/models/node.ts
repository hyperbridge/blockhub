import { Model, RelationMappings } from 'objection'
import Account from './account'
import Profile from './profile'
import Idea from './idea'
import Project from './project'
import Product from './product'
import BaseModel from './base'

// Based on https://github.com/Vincit/objection.js/issues/19
// Exclusive ARC https://hashrocket.com/blog/posts/modeling-polymorphic-associations-in-a-relational-database#exclusive-belongs-to-aka-exclusive-arc-
export default class Node extends BaseModel {
    parentId!: Number

    relationKey!: String

    fromAccount!: Account
    fromAccountId!: Number
    toAccount!: Account
    toAccountId!: Number

    fromProfile!: Profile
    fromProfileId!: Number
    toProfile!: Profile
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

    static get timestamps() {
        return false
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                relationKey: { type: 'string' }
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            fromProfile: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'nodes.fromProfileId',
                    to: 'profiles.id'
                }
            },
            toProfile: {
                relation: Model.HasOneRelation,
                modelClass: Profile,
                join: {
                    from: 'nodes.toProfileId',
                    to: 'profiles.id'
                }
            },
            fromAccount: {
                relation: Model.HasOneRelation,
                modelClass: Account,
                join: {
                    from: 'nodes.fromAccountId',
                    to: 'accounts.id'
                }
            },
            toAccount: {
                relation: Model.HasOneRelation,
                modelClass: Account,
                join: {
                    from: 'nodes.toAccountId',
                    to: 'accounts.id'
                }
            },
            fromIdea: {
                relation: Model.HasOneRelation,
                modelClass: Idea,
                join: {
                    from: 'nodes.fromIdeaId',
                    to: 'profiles.id'
                }
            },
            toIdea: {
                relation: Model.HasOneRelation,
                modelClass: Idea,
                join: {
                    from: 'nodes.toIdeaId',
                    to: 'profiles.id'
                }
            },
            fromProject: {
                relation: Model.HasOneRelation,
                modelClass: Project,
                join: {
                    from: 'nodes.fromProjectId',
                    to: 'profiles.id'
                }
            },
            toProject: {
                relation: Model.HasOneRelation,
                modelClass: Project,
                join: {
                    from: 'nodes.toProjectId',
                    to: 'profiles.id'
                }
            },
            fromProduct: {
                relation: Model.HasOneRelation,
                modelClass: Product,
                join: {
                    from: 'nodes.fromProductId',
                    to: 'profiles.id'
                }
            },
            toProduct: {
                relation: Model.HasOneRelation,
                modelClass: Product,
                join: {
                    from: 'nodes.toProductId',
                    to: 'profiles.id'
                }
            },
        }
    }

    from() {
        if (this.fromAccountId) return this.fromAccount
        if (this.fromProfileId) return this.fromProfile

        throw new Error("No FROM relation")
    }

    to() {
        if (this.toAccountId) return this.toAccount
        if (this.toProfileId) return this.toProfile

        throw new Error("No TO relation")
    }
}

// objectId: { type: Schema.Types.ObjectId, required: true },
// author: { type: String, required: true },
// text: { type: String, required: true },
// rate: { type: Number, default: 0 },
// createdAt: { type: Date, default: Date.now },
// updatedAt: { type: Date, default: Date.now },
// replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]


// product reviews =  has many meta join fromProduct = product.id where type = 'review'

// parentId is nodeId which is anything
// parentId is profile or project or product 
// event.parent.getAssociation() => 
//     if (this.productId !== null)
//         return this.product

// event.parent.to().name


// objection/index.d.ts
// export interface RelationMapping {
//     relation: Relation;
//     modelClass: ModelClass<any> | string;
//     join: RelationJoin;
//     modify?: (queryBuilder: QueryBuilder<any>) => QueryBuilder<any>;
//     filter?: ((queryBuilder: QueryBuilder<any>) => QueryBuilder<any>) | string | object;
//     beforeInsert?: (model: Model, context: QueryContext) => Promise<void> | void;
// }