import { Model, RelationMappings } from 'objection'
import BaseModel from './base'
import Profile from './profile'

export default class Account extends BaseModel {
    parentId!: Number

    email!: String
    firstName!: String
    lastName!: String
    password!: String
    avatar!: String

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
                email: { type: 'string' },
                firstName: { type: 'string', minLength: 1, maxLength: 255 },
                lastName: { type: 'string', minLength: 1, maxLength: 255 },
                password: { type: 'string' },
                // status: {
                //     type: 'string',
                //     enum: ['active', 'disabled', 'removed'],
                //     default: 'active'
                // }
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

}