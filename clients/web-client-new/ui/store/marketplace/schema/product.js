import { schema } from 'normalizr'
import profile from './profile'
import review from './review'

export default new schema.Entity('products', {
    owner: profile,
    author: profile,
    developers: [profile],
    publishers: [profile],
    // reviews: [review]
})
