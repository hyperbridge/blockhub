import { schema } from 'normalizr'
import identity from './identity'
import review from './review'

export default new schema.Entity('products', {
    owner: identity,
    author: identity,
    developers: [identity],
    publishers: [identity],
    reviews: [review]
})
