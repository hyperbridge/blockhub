import { Model } from 'objection'
import ProjectModel from './project'
import ProjectMemberModel from './project-member'

export default class UserModel extends Model implements Model {
    email: string = ''
    first_name: string = ''
    last_name: string = ''
    is_active: boolean = false
    password_hash: string = ''

    static get tableName() {
        return 'user'
    }

    static get relationMappings() {
        return {
            projects: {
                relation: Model.ManyToManyRelation,
                modelClass: ProjectModel,
                join: {
                    from: 'user.id',
                    through: {
                        from: 'project_member.user_id',
                        to: 'project_member.group_id',
                        modelClass: ProjectMemberModel,
                        extra: ['is_admin']
                    },
                    to: 'project.id'
                }
            }
        }
    }
}
