import { Model } from 'objection'
import User from './user'

export default class Message extends Model {
    id!: number
    userId!: number
    text!: string
    createdAt!: string
    updatedAt!: string

    static get tableName() {
        return 'messages'
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.HasOneRelation,
                modelClass: User,
                join: {
                    from: 'messages.userId',
                    to: 'users.id'
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
