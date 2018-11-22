import { Model } from 'objection'
import ProjectMember from './project-member'
import Language from './language'
import User from './user'

export default class ProjectModel extends Model {
    name!: String
    members: Array<User> = []
    isProposal: Boolean = false
    price!: Number
    oldPrice: Number
    images!: Object
    video!: String
    genre!: String
    releaseDate!: String
    developer!: String
    publisher!: String
    content!: String
    developerTags!: Array<String>
    languageSupport!: Array<Language>
    systemRequirements!: Array<SystemRequirement>
    systemTags: Array<SystemTag>
    type: String
    downloads: Number
    plans: Array<ProductPlan>
    frequentlyTradedAssets: Array<Asset>
    saleBox: Object
    rating: Array<Rating>
    assets: Array<Asset>
    community: Object
    nameUrl: String
    steamId: Number
    createdAt!: Date
    updatedAt!: Date
    author: String

    static get tableName() {
        return 'projects'
    }

    static get relationMappings() {
        return {
            members: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'projects.id',
                    through: {
                        from: 'project_members.projectId',
                        to: 'project_members.userId',
                        modelClass: ProjectMember,
                        extra: ['isAdmin']
                    },
                    to: 'users.id'
                }
            }
        }
    }
}
