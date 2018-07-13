import { schema } from 'normalizr'
import identity from './identity'
import review from './review'

export default new schema.Entity('assets', {
    owner: identity,
    author: identity,
    reviews: [review]
})
