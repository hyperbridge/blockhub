import Vue from 'vue';

Vue.directive('omodel', {
    bind(el, binding, vNode) {
        const { value } = binding;
        console.log(value)

        el.addEventListener('input', e => {
            console.log(e)
            console.log(vNode)
            // value[prop] = val;
        });
    }
});

Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        el.clickOutsideEvent = event => {
            console.log('el', el);
            console.log('binding', binding);
            console.log('vnode', vnode);
            console.log(event);

            /* Add support for multiple data title // && el.target.data.title */

            // Check that click was outside the el and his childrens

            if (!((el == event.target && el.dataset.title == vnode.context.title) || el.contains(event.target))) {
            // If it did, call method provided in attribute value

                if (binding.modifiers.bool) {
                    vnode.context[binding.expression] = false;
                } else {
                    vnode.context[binding.expression](event);
                }

            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    }
});
