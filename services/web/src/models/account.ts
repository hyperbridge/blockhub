import { Model, RelationMappings } from 'objection'
import Profile from './profile'

export default class Account extends Model {
    id!: Number
    createdAt!: String
    updatedAt!: String
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
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                password: { type: 'string' }
            },
            options: {
                timestamps: true
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

    $beforeInsert() {
        this.createdAt = this.updatedAt = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updatedAt = new Date().toISOString()
    }
}