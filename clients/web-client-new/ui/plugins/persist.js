import Vue from 'vue'
import * as DB from '@/db'

let currentState = {}
let isChanged = false

export default ({ store }) => {
    const saveState = () => {
        if (!isChanged) return
        if (!DB.store.data) return

        DB.store.data[0] = currentState
        DB.save()
    }

    let timeout = null
    const debounce = (fn, debounceTime = 250) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(fn, debounceTime)
    }

    store.subscribe((mutation, state) => {
        currentState = state
        isChanged = true

        debounce(saveState, 1000)
    })
}
