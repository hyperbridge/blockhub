import { Model } from 'objection'

export default class ProjectMemberModel extends Model {
    static get tableName() {
        return 'project_members'
    }
}
