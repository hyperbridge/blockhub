import { Model } from 'objection'
import Project from './project'
import ProjectMember from './project-member'

export default class User extends Model {
    id!: number
    email!: string
    firstName!: string
    lastName!: string
    passwordHash!: string
    isActive: boolean = true

    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        return {
            projects: {
                relation: Model.ManyToManyRelation,
                modelClass: Project,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'project_members.userId',
                        to: 'project_members.groupId',
                        modelClass: ProjectMember,
                        extra: ['isAdmin']
                    },
                    to: 'projects.id'
                }
            }
        }
    }
}
