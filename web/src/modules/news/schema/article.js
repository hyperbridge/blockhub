import { schema } from 'normalizr'
import profile from './profile'
import comment from './comment'

export default new schema.Entity('articles', {
    author: profile,
    comments: [comment]
})
