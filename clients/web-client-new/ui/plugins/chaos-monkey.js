import * as ChaosMonkey from '../framework/chaos-monkey'
// Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)
ChaosMonkey.config.ENABLED = false

/* Usage:
- mode1 - Navigate to http://localhost:8000#/mode1
    - Best used to mode a well-behaved peer relayer
- mode2 - Navigate to http://localhost:8000#/mode2
    - Best used to mode a non-Web3 enabled user can receive data from peer network
    - Clean database
    - No relaying, ie. no responding to peer data requests
- mode3 - Navigate to http://localhost:8000#/mode3
    - Best used to mode fault-tolerance, ie. does this thing behave appropriately when problems occur
    - Permanent chaos monkey
*/

/*
TODO: Implement this in the future
const CheckDevConfig = () => {
    if (!process.client) {
        return ''
    }

    const hash = document.location.hash.replace('#/', '')
    if (hash.slice(0, 5) !== 'conf=') return false

    const conf = hash.replace('conf=', '')
    if (conf === 'relayOn') {
        // PeerService.config.RELAY = true
    }
    if (conf === 'relayOff') {
        // PeerService.config.RELAY = false
    }
    if (conf === 'chaosForced') {
        ChaosMonkey.config.FORCED = true
    }

    return conf
}

CheckDevConfig()
*/


const initSubscribers = store => {
    return /* eslint-disable no-unreachable */
    store.subscribe((mutation, state) => {
        if (mutation.type !== 'application/setInternetConnection') {
            console.info(`[BlockHub] Store Mutation: ${mutation.type}`, mutation.payload, state)
        }

        if (mutation.type === 'database/initialized') {
            if (ChaosMonkey.random()) {
                // Hey devs, lets have some fun
                // Bye bye data
                // Things still workie?
                store.dispatch('database/clean')
            }

            if (devConfig === 'clean') {
                store.dispatch('database/clean')
            }
        }
    })
}
