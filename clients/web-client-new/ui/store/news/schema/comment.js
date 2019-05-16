import { schema } from 'normalizr'
import profile from './profile'

export default new schema.Entity('comments', {
    commenter: profile
})
