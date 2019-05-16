import { schema } from 'normalizr'
import profile from './profile'
import wallet from './wallet'

export default new schema.Entity('account', {
    profiles: [profile],
    wallets: [wallet]
})
