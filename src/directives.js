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
