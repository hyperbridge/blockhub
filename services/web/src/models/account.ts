import { Model } from 'objection'
import Profile from './profile'

export default class Account extends Model {
    id!: number
    email!: string
    firstName!: string
    lastName!: string
    passwordHash!: string
    avatar!: string
    isActive!: boolean

    static get tableName() {
        return 'accounts'
    }

    static get relationMappings() {
        return {
            profiles: {
                relation: Model.HasManyRelation,
                modelClass: Profile,
                join: {
                    from: 'accounts.id',
                    to: 'profiles.parentId'
                }
            },
        }
    }
}
