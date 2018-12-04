import { Model, RelationMappings } from 'objection'
import Profile from './profile'
import Asset from './asset'
import Rating from './rating'
import Tag from './tag'
import Idea from './idea'
import Project from './project'
import Discussion from './discussion'
import Server from './server'
import File from './file'

type Language = Object
type SystemRequirement = Object
type ProductPlan = Object

export default class Product extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object // score
    parentId!: Number

    rating!: Rating
    ratingId!: Number

    idea!: Idea
    ideaId!: Number

    project!: Project
    projectId!: Number

    name!: String
    members: Array<Profile> = []
    isProposal: Boolean = false
    price!: Number
    oldPrice!: Number
    images!: Object
    video!: String
    genre!: String
    releaseDate!: String
    developer!: String
    publisher!: String
    developerTags!: Array<String>
    languageSupport!: Array<Language>
    systemRequirements!: Array<SystemRequirement>
    systemTags!: Array<Tag>
    type!: String
    downloads!: Number
    plans!: Array<ProductPlan>
    frequentlyTradedAssets!: Array<Asset>
    saleBox!: Object
    assets!: Array<Asset>
    community!: Object
    nameUrl!: String
    steamId!: Number
    author!: String

    static get tableName() {
        return 'products'
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
                        extra: ['key']
                    }
                },
                filter: {
                    key: 'updates'
                },
                beforeInsert(model) {
                    model.key = 'updates'
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
            //             extra: ['key']
            //         }
            //     },
            //     filter: {
            //         key: 'orders'
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
                        extra: ['key']
                    }
                },
                filter: {
                    key: 'files'
                },
                beforeInsert(model) {
                    model.key = 'files'
                }
            },
            developerTags: {
                relation: Model.ManyToManyRelation,
                modelClass: Tag,
                join: {
                    from: 'products.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toTagId',
                        extra: ['key']
                    }
                },
                filter: {
                    key: 'developerTags'
                },
                beforeInsert(model) {
                    model.key = 'developerTags'
                }
            },
            systemTags: {
                relation: Model.ManyToManyRelation,
                modelClass: Tag,
                join: {
                    from: 'products.id',
                    to: 'tags.id',
                    through: {
                        from: 'nodes.fromProductId',
                        to: 'nodes.toTagId',
                        extra: ['key']
                    }
                },
                filter: {
                    key: 'systemTags'
                },
                beforeInsert(model) {
                    model.key = 'systemTags'
                }
            }
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}