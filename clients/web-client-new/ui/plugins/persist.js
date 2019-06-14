import Vue from 'vue'
import * as DB from '@/db'

let currentState = {}
let isChanged = false

export default ({ store }) => {
    store.subscribe((mutation, state) => {
        currentState = state
        isChanged = true
    })

    const saveState = () => {
        if (!isChanged) return

        DB.store.data = currentState
        DB.save()
    }

    setInterval(saveState, 1 * 60 * 1000)

    store.commit('initialize', DB.store.data)
}
