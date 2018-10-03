import Vue from 'vue'
import store from './store'

Vue.directive('omodel', {
    bind(el, binding, vnode) {
        const { value } = binding
        console.log(value)

        el.addEventListener('input', e => {
            console.log(e)
            console.log(vnode)
            // value[prop] = val
        })
    }
})

function isVisible(availableFlags, userFlags, code, variant, data) {
    return availableFlags.map(flag => flag.code).includes(code) && userFlags.map(flag => flag.enabled ? flag.code : null).includes(code)
}

Vue.directive('darklaunch', {
    bind(el, binding, vnode, oldVnode) {
        const { value } = binding

        if (!isVisible(store.state.application.darklaunch_flags, store.state.application.account.darklaunch_flags, value)) {
            el.hidden = true
        }
    }
})
