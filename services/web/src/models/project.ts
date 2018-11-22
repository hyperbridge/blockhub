import { Model } from 'objection'
import ProjectMember from './project-member'
import User from './User'

export default class ProjectModel extends Model {
    name: string = ''
    members: Array<User> = []

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
