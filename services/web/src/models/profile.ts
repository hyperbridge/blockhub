import { Model, RelationMappings } from 'objection'
import Project from './project'

export default class Profile extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
    key!: String
    value!: String
    meta!: Object
    parentId!: Number

    isActive!: Boolean
    accountId!: Number
    role!: String // [user, developer, curator]
    reputation!: Number // based on events

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
                address: { type: 'string' }
            },
            options: {
                timestamps: true
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            // has many licenses
            // has many orders
            // has many messages
            // has many assets
            // has many asset offers
            // has many nodes
            // has many project pledges
            // has many realms
            // has many contributions
            // has many friends -> profiles
            // has many badges
            // has many events
            // has many wishlistProducts -> nodes fromProfileId = profile.id toProductId
            // has many wishlistAssets -> nodes fromProfileId = profile.id toAssetId isn't null

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