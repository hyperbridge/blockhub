import { Model } from 'objection'
//import Account from './account'
import Project from './project'
//import ProjectMember from './project-member'

export default class Profile extends Model {
    id!: number
    isActive!: boolean
    accountId!: number
    createdAt!: String
    updatedAt!: String

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

    static get relationMappings() {
        return {
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
