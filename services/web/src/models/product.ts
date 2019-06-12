import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Asset from './asset'
import Rating from './rating'
import Tag from './tag'
import Community from './community'
import Idea from './idea'
import Project from './project'
import Discussion from './discussion'
import Server from './server'
import File from './file'
import Node from './node'
import BaseModel from './base'

type Language = Object
type SystemRequirement = Object
type ProductPlan = Object

type ProductMeta = {
    name: String
    members: Array<Profile>
    isProposal: Boolean
    price: Number
    oldPrice: Number
    images: Object
    video: String
    genre: String
    releaseDate: String
    developer: String
    publisher: String
    developerTags: Array<String>
    languageSupport: Array<Language>
    systemRequirements: Array<SystemRequirement>
    tags: Array<Tag>
    type: String
    downloads: Number
    plans: Array<ProductPlan>
    frequentlyTradedAssets: Array<Asset>
    saleBox: Object
    assets: Array<Asset>
    community: Object
    nameUrl: String
    steamId: Number
    author: String
}

export default class Product extends BaseModel {
    parentId!: Number
    score!: Number

    owner!: Profile
    ownerId!: Number

    rating!: Rating
    ratingId!: Number

    idea!: Idea
    ideaId!: Number

    project!: Project
    projectId!: Number


    static get tableName() {
        return 'products'
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
            // members: {
            //     relation: Model.ManyToManyRelation,
            //     modelClass: User,
            //     join: {
            //         from: 'projects.id',
            //         through: {
            //             from: 'project_members.projectId',
            //             to: 'project_members.userId',
            //             modelClass: ProjectMember,
            //             extra: ['isAdmin']
            //         },
            //         to: 'users.id'
            //     }
            // },
            rating: {
                relation: Model.HasOneRelation,
                modelClass: Rating,
                join: {
                    from: 'products.ratingId',
                    to: 'ratings.id'
                }
            },
            community: {
                relation: Model.HasOneRelation,
                modelClass: Community,
                join: {
                    from: 'products.communityId',
                    to: 'communities.id'
                }
            },
            idea: {
                relation: Model.HasOneRelation,
                modelClass: Idea,
                join: {
                    from: 'products.ideaId',
                    to: 'ideas.id'
                }
            },
            project: {
                relation: Model.HasOneRelation,
                modelClass: Project,
                join: {
                    from: 'products.projectId',
                    to: 'projects.id'
                }
            },
            subproducts: {
                relation: Model.HasManyRelation,
                modelClass: Product,
                join: {
                    from: 'products.id',
                    to: 'products.parentId'
                }
            },
            servers: {
                relation: Model.HasManyRelation,
                modelClass: Server,
                join: {
                    from: 'products.id',
                    to: 'servers.productId'
                }
            },
            updates: {
                relation: Model.ManyToManyRelation,
                modelClass: Discussion,
                join: {
                    from: 'products.id',
                    to: 'discussions.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toDiscussionId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'updates'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'updates'
                }
            },
            // orders: {
            //     relation: Model.ManyToManyRelation,
            //     modelClass: Order,
            //     join: {
            //         from: 'products.id',
            //         to: 'orders.id',
            //         through: {
            //             from: 'nodes.fromProductId',
            //             to: 'nodes.toOrderId',
            //             extra: ['relationKey']
            //         }
            //     },
            //     filter: {
            //         relationKey: 'orders'
            //     },
            //     beforeInsert(model) {
            //         model.key = 'orders'
            //     }
            // },
            files: {
                relation: Model.ManyToManyRelation,
                modelClass: File,
                join: {
                    from: 'products.id',
                    to: 'files.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toFileId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'files'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'files'
                }
            },
            tags: {
                relation: Model.ManyToManyRelation,
                modelClass: Tag,
                join: {
                    from: 'products.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toTagId',
                        extra: ['relationKey']
                    }
                },
                filter: {
                    relationKey: 'tags'
                },
                beforeInsert(model) {
                    (model as Node).relationKey = 'tags'
                }
            }
        }
    }
}