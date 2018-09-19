import Vue from 'vue';

Vue.directive('omodel', {
    bind(el, binding, vNode) {
        const { value } = binding;

        el.addEventListener('input', (prop, val) => {
            console.log(prop, val)
            console.log(vNode)
            value[prop] = val;
        });
    }
});
