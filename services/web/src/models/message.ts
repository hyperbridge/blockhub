import { Model } from 'objection'
import Account from './account'

export default class Message extends Model {
    id!: number
    accountId!: number
    text!: string
    createdAt!: string
    updatedAt!: string

    static get tableName() {
        return 'messages'
    }

    static get relationMappings() {
        return {
            account: {
                relation: Model.HasOneRelation,
                modelClass: Account,
                join: {
                    from: 'messages.accountId',
                    to: 'accounts.id'
                }
            }
            // matches: {
            //     relation: Model.HasManyRelation,
            //     modelClass: MatchModel,
            //     join: {
            //         from: 'session.id',
            //         to: 'match.session_id'
            //     }
            // },
        }
    }
}
