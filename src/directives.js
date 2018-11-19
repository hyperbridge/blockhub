import Vue from 'vue';
import store from './store';
import axios from 'axios';

Vue.directive('xmodel', {
    bind(el, binding, vnode) {
        const { context: ctx } = vnode;
        const { arg: event = 'input', expression, modifiers } = binding;

        const [element, prop] = expression.split('.');
        const modifierKeys = Object.keys(modifiers);
        const debounce = modifierKeys.find(key => key.includes('debounce'));
        let timeout = null;

        // vnode.componentOptions.propsData = ctx[element][prop + 'Clone'];
        // console.log(ctx)

        el.updateValue = e => {
            let value = (e.target && e.target.value) || e;
            if (modifiers.number) value = Number(value);

            if (debounce) {
                const [, time] = debounce.split('-');
                clearTimeout(timeout);
                timeout = setTimeout(() =>
                    ctx[element] = { [prop]: value },
                    time * 100 || 300
                );
            } else {
                ctx[element] = { [prop]: value };
            }


            // ctx[element + 'Clone'][prop] = value;

            // el.target.value = value;
            // vnode.componentOptions.propsData.value = value;
            // vnode.componentInstance.value = value;

            console.log(vnode)
        };

        el.addEventListener(event, el.updateValue);
    },
    unbind(el, { arg: event = 'input' }) {
        el.removeEventListener(event, el.updateValue);
    }
});

Vue.directive('focus', {
    inserted(el) {
        el.focus();
    }
});

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

        el.hidden = true

        if (value &&
            store.state.application.darklaunch_flags &&
            store.state.application.account.darklaunch_flags &&
            isVisible(store.state.application.darklaunch_flags, store.state.application.account.darklaunch_flags, value)) {
            el.hidden = false
        }

        if (store.state.application.darklaunch_override) {
            el.hidden = false
        }
    }
})

Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        const { expression, arg } = binding;
        const clickOutside = Symbol.for('clickOutside');


        el[clickOutside] = evt => {
            console.log(arg)

            if (arg && arg == 'self') {
                console.log("SELFF")
                vnode.context[expression](evt);
            } else if (!(el == evt.target || el.contains(evt.target))) {
                vnode.context[expression](evt);
            }
        }

        document.body.addEventListener('click', el[clickOutside]);
    },
    unbind(el) {
        document.body.removeEventListener('click', el[Symbol.for('clickOutside')]);
    }
});

Vue.directive('debounce', {
    bind(el, binding, vnode) {
        const { arg: event, expression } = binding;
        const { context } = vnode;

        const delay = 250;
        let timeout = null;

        el.__debounce__ = e => {
            clearTimeout(timeout);
            setTimeout(() => {
                console.log(vnode)
                console.log(binding)
                console.log(expression)
                context[expression](e);
            }, delay);
        };

        vnode.componentInstance.$on('customClick', el.__debounce__);
    },
    unbind(el, { arg: event }, vnode) {
        vnode.componentInstance.$off(event, el.__debounce__);
    }
});

Vue.directive('translate', {
    bind(el, binding, vnode) {
        console.log(el)
        console.log(binding)
        console.log(vnode)

        const { textContent } = el;
        const { language } = navigator;

        el.textContent = 'Translating...';

        setTimeout(() => {
            el.textContent = 'Translated';
        }, 2000);
    }
});
