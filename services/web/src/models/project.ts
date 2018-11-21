import { Model } from 'objection'
import ProjectMemberModel from './project-member'
import UserModel from './User'

export default class ProjectModel extends Model implements Model {
    name: string = ''
    members: Array<UserModel> = []

    static get tableName() {
        return 'project'
    }

    static get relationMappings() {
        return {
            members: {
                relation: Model.ManyToManyRelation,
                modelClass: UserModel,
                join: {
                    from: 'project.id',
                    through: {
                        from: 'project_member.project_id',
                        to: 'project_member.user_id',
                        modelClass: ProjectMemberModel,
                        extra: ['is_admin']
                    },
                    to: 'user.id'
                }
            }
        }
    }
}
