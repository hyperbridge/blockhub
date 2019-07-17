import * as moment from 'moment'
import { Model, RelationMappings, JsonSchema } from 'objection'
import Role from './Role'

export default class User extends Model {
    public userId!: number
    public username!: string
    public enabled!: boolean
    public meta!: any
    public password!: string
    public passwordEditedAt: Date
    public createdAt!: Date
    public createdBy!: number
    public editedAt: Date
    public editedBy: number
    public deletedAt: Date
    public deletedBy: number
    public roles: Array<Role>

    public static get idColumn (): string {
        return 'userId'
    }

    public static get tableName (): string {
        return 'users'
    }

    public static get jsonSchema (): JsonSchema {
        return {
            type: 'object',
            required: ['username', 'password', 'enabled'],

            properties: {
                userId: { type: 'integer' },
                username: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string', minLength: 1, maxLength: 255 },
                passwordEditedAt: { type: 'datetime' },
                enabled: { type: 'boolean' },
                meta: { type: 'object' },
                roles: {
                    type: 'array',
                    uniqueItems: true,
                    minItems: 0,
                    items: {
                        type: 'object',
                        required: ['roleId', 'name'],
                        properties: {
                            roleId: { type: 'integer' },
                            name: { type: 'string' }
                        }
                    }
                }
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
                    to: 'users.createdBy'
                }
            },
            editedByUser: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'users.userId',
                    to: 'users.editedBy'
                }
            },
            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: Role,
                join: {
                    from: 'users.userId',
                    to: 'roles.roleId',
                    through: {
                        from: 'users_roles.userId',
                        to: 'users_roles.roleId'
                    }
                }
            }
        }
    }

    public $beforeInsert (): void {
        this.createdAt = new Date()
    }

    public $beforeUpdate (): void {
        this.createdAt = moment(this.createdAt).toDate()
        this.passwordEditedAt = this.passwordEditedAt ? moment(this.passwordEditedAt).toDate() : null
        this.editedAt = new Date()
    }
}
