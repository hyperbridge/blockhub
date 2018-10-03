import { schema } from 'normalizr'
import identity from './identity'
import wallet from './wallet'

export default new schema.Entity('account', {
    identities: [identity],
    wallets: [wallet]
})
