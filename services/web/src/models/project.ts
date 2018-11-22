import { Model } from 'objection'
import ProjectMemberModel from './project-member'
import UserModel from './User'

export default class ProjectModel extends Model implements Model {
    name: string = ''
    members: Array<UserModel> = []

    static get tableName() {
        return 'projects'
    }

    static get relationMappings() {
        return {
            members: {
                relation: Model.ManyToManyRelation,
                modelClass: UserModel,
                join: {
                    from: 'projects.id',
                    through: {
                        from: 'project_members.projectId',
                        to: 'project_members.userId',
                        modelClass: ProjectMemberModel,
                        extra: ['isAdmin']
                    },
                    to: 'users.id'
                }
            }
        }
    }
}
