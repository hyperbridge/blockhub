import * as moment from 'moment'
import { Model, RelationMappings, JsonSchema } from 'objection'
import User from './User'

export default class Role extends Model {
    public roleId!: number
    public name!: string
    public description: string
    public meta!: any
    public createdAt!: Date
    public createdBy!: number
    public editedAt: Date
    public editedBy: number
    public deletedAt: Date
    public deletedBy: number

    public static get idColumn (): string {
        return 'roleId'
    }

    public static get tableName (): string {
        return 'roles'
    }

    public static get jsonSchema (): JsonSchema {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                roleId: { type: 'integer' },
                name: { type: 'string' },
                description: { type: ['null', 'string'] },
                meta: { type: 'object' }
            }
        }
    }

    public static get relationMappings (): RelationMappings {
        return {
            createdByUser: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'users.userId',
                    to: 'roles.createdBy'
                }
            },
            editedByUser: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'users.userId',
                    to: 'roles.editedBy'
                }
            }
        }
    }

    public $beforeInsert (): void {
        this.createdAt = new Date()
    }

    public $beforeUpdate (): void {
        this.createdAt = moment(this.createdAt).toDate()
        this.editedAt = new Date()
    }
}
