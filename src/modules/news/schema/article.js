import { schema } from 'normalizr'
import identity from './identity'
import comment from './comment'

export default new schema.Entity('articles', {
    author: identity,
    comments: [comment]
})
