import { schema } from 'normalizr'
import identity from './identity'

export default new schema.Entity('comments', {
    commenter: identity
})
