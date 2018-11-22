import { Model } from 'objection'
import ProjectModel from './project'
import ProjectMemberModel from './project-member'

export default class UserModel extends Model implements Model {
    email: string = ''
    firstName: string = ''
    lastName: string = ''
    isActive: boolean = false
    passwordHash: string = ''

    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        return {
            projects: {
                relation: Model.ManyToManyRelation,
                modelClass: ProjectModel,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'project_members.userId',
                        to: 'project_members.groupId',
                        modelClass: ProjectMemberModel,
                        extra: ['isAdmin']
                    },
                    to: 'projects.id'
                }
            }
        }
    }
}
