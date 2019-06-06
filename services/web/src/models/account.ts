import { Model, RelationMappings } from 'objection'
import BaseModel from './base'
import Profile from './profile'

export default class Account extends BaseModel {
    id!: Number
    key!: String
    value!: String
    meta!: Object
    parentId!: Number
    status!: String

    email!: String
    firstName!: String
    lastName!: String
    password!: String
    avatar!: String
    //isActive!: boolean

    static get timestamps() {
        return true
    }

    static get tableName() {
        return 'accounts'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                firstName: { type: 'string', minLength: 1, maxLength: 255 },
                lastName: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string' },
                status: {
                    type: 'string',
                    enum: ['active', 'disabled', 'removed'],
                    default: 'active'
                }
            }
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            profiles: {
                relation: Model.HasManyRelation,
                modelClass: Profile,
                join: {
                    from: 'accounts.id',
                    to: 'profiles.accountId'
                }
            },
        }
    }

    static get namedFilters() {
        return {
            active: builder => {
                builder.where('status', 'active')
            }
        }
    }

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}