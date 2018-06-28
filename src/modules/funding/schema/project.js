import { schema } from 'normalizr'
import identity from './identity'
import comment from './comment'

export default new schema.Entity('projects', {
    contributors: [identity],
    moderators: [identity],
    comments: [comment],
    owner: identity,
    author: identity
})
