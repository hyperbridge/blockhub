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

        if (!store.state.application.darklaunch_flags.map(flag => flag.code).includes(value)) {
            store.state.application.darklaunch_flags.push({
                code: value,
                description: 'Undefined',
                type: 'undefined'
            })
        }

        if (value &&
            store.state.application.darklaunch_flags &&
            store.state.application.account.darklaunch_flags &&
            !isVisible(store.state.application.darklaunch_flags, store.state.application.account.darklaunch_flags, value)) {
            el.hidden = true
        }
    }
})

Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        el.clickOutsideEvent = event => {
            console.log('el', el)
            console.log('binding', binding)
            console.log('vnode', vnode)
            console.log(event)

            /* Add support for multiple data title // && el.target.data.title */

            // Check that click was outside the el and his childrens

            if (!((el == event.target && el.dataset.title == vnode.context.title) || el.contains(event.target))) {
            // If it did, call method provided in attribute value

                if (binding.modifiers.bool) {
                    vnode.context[binding.expression] = false
                } else {
                    vnode.context[binding.expression](event)
                }

            }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    }
})
