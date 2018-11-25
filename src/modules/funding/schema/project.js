import { schema } from 'normalizr'
import profile from './profile'
import comment from './comment'

export default new schema.Entity('projects', {
    contributors: [profile],
    moderators: [profile],
    comments: [comment],
    owner: profile,
    author: profile
})
