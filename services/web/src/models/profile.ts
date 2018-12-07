import { Model, RelationMappings } from 'objection'
import Project from './project'
import License from './license'
import Order from './order'
import Message from './message'
import Asset from './asset'
import Offer from './offer'
import Node from './node'
import Realm from './realm'
import Badge from './badge'
import Collection from './collection'
import Event from './event'
import Idea from './idea'
import Product from './product'


export default class Profile extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    accountId!: Number
    role!: String // [user, developer, curator]
    reputation!: Number // based on events

    ideas!: Array<Idea>
    projects!: Array<Project>
    products!: Array<Product>
    licenses!: Array<License>
    orders!: Array<Order>
    messages!: Array<Message>
    assets!: Array<Asset>
    offers!: Array<Offer>
    badges!: Array<Badge>
    events!: Array<Event>
    collections!: Array<Collection>
    wishlists!: Array<Node>

    static get tableName() {
        return 'profiles'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['accountId'],

            properties: {
                id: { type: 'integer' },
                accountId: { type: 'integer' },
                address: { type: ['string', 'null'] }
            },
            options: {
                timestamps: true
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            // has many realms
            // has many contributions
            // has many friends -> profiles
            // has many wishlistProducts -> nodes fromProfileId = profile.id toProductId
            // has many wishlistAssets -> nodes fromProfileId = profile.id toAssetId isn't null
            licenses: {
                relation: Model.ManyToManyRelation,
                modelClass: License,
                join: {
                    from: 'profiles.id',
                    to: 'licenses.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toLicenseId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'licenses'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'licenses'
                }
            },
            orders: {
                relation: Model.ManyToManyRelation,
                modelClass: Order,
                join: {
                    from: 'profiles.id',
                    to: 'orders.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toOrderId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'orders'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'orders'
                }
            },
            messages: {
                relation: Model.ManyToManyRelation,
                modelClass: Message,
                join: {
                    from: 'profiles.id',
                    to: 'messages.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toMessageId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'messages'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'messages'
                }
            },
            assets: {
                relation: Model.ManyToManyRelation,
                modelClass: Asset,
                join: {
                    from: 'profiles.id',
                    to: 'assets.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toAssetId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'assets'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'assets'
                }
            },
            offers: {
                relation: Model.ManyToManyRelation,
                modelClass: Offer,
                join: {
                    from: 'profiles.id',
                    to: 'offers.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toOfferId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'offers'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'offers'
                }
            },
            pledges: {
                relation: Model.ManyToManyRelation,
                modelClass: Project,
                join: {
                    from: 'profiles.id',
                    to: 'projects.id',
                    through: {
                        from: 'nodes.toProfileId',
                        to: 'nodes.fromProjectId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'pledges'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'pledges'
                }
            },
            realms: {
                relation: Model.ManyToManyRelation,
                modelClass: Realm,
                join: {
                    from: 'profiles.id',
                    to: 'realms.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toRealmId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'realms'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'realms'
                }
            },
            events: {
                relation: Model.ManyToManyRelation,
                modelClass: Event,
                join: {
                    from: 'profiles.id',
                    to: 'events.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toEventId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'events'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'events'
                }
            },
            badges: {
                relation: Model.ManyToManyRelation,
                modelClass: Badge,
                join: {
                    from: 'profiles.id',
                    to: 'badges.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toBadgeId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'badges'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'badges'
                }
            },
            collections: {
                relation: Model.ManyToManyRelation,
                modelClass: Collection,
                join: {
                    from: 'profiles.id',
                    to: 'collections.id',
                    through: {
                        from: 'nodes.fromProfileId',
                        to: 'nodes.toCollectionId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'collections'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'collections'
                }
            },
            wishlists: {
                relation: Model.HasManyRelation,
                modelClass: Node,
                join: {
                    from: 'profiles.id',
                    to: 'nodes.id'
                },
                filter: {
                    relationKey: 'wishlists'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'wishlists'
                }
            },

            // account: {
            //     relation: Model.BelongsToOneRelation,
            //     modelClass: Account,
            //     join: {
            //         from: 'profiles.accountId',
            //         to: 'accounts.id'
            //     }
            // },
            projects: {
                relation: Model.HasManyRelation,
                modelClass: Project,
                join: {
                    from: 'profiles.id',
                    to: 'projects.ownerId'
                }
            },
            // projects: {
            //     relation: Model.ManyToManyRelation,
            //     modelClass: Project,
            //     join: {
            //         from: 'accounts.id',
            //         through: {
            //             from: 'project_members.accountId',
            //             to: 'project_members.projectId',
            //             modelClass: ProjectMember,
            //             extra: ['isAdmin']
            //         },
            //         to: 'projects.id'
            //     }
            // }
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}