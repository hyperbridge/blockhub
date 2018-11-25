import { schema } from 'normalizr'
import profile from './profile'
import review from './review'

export default new schema.Entity('assets', {
    owner: profile,
    author: profile,
    reviews: [review]
})
