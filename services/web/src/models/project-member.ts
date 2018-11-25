import { Model } from 'objection'

export default class ProjectMember extends Model {
    static get tableName() {
        return 'project_members'
    }
}
