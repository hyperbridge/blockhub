<template>
    <div class="dropdown dropmenu_container" :class="{'show' : show}" >
        <div class="rw-btn rw-btn--card" @click="toggleMenu" v-if="!$slots.title">
            <div></div>
        </div>
        <div class="dropdown__title" @click="toggleMenu" v-else>
            <slot name="title" />
        </div>
        <div class="dropdown-menu dropdown-menu-left"
             :class="{'show' : show}">
            <div class="position-relative" style="z-index: 4">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                show: false
            }
        },
        methods:{
            toggleMenu(){
                this.show = !this.show;
                this.$emit('click')
            },
            closeMenu(){
                this.show = false;
            }
        },
        directives: {
            'click-outside': {
                bind: function (el, binding, vNode) {
                    // Provided expression must evaluate to a function.
                    if (typeof binding.value !== 'function') {
                        const compName = vNode.context.name
                        let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
                        if (compName) {
                            warn += `Found in component '${compName}'`
                        }

                        console.warn(warn)
                    }
                    // Define Handler and cache it on the element
                    const bubble = binding.modifiers.bubble
                    const handler = (e) => {
                        if (bubble || (!el.contains(e.target) && el !== e.target)) {
                            binding.value(e)
                        }
                    }
                    el.__vueClickOutside__ = handler

                    // add Event Listeners
                    document.addEventListener('click', handler)
                },
                unbind: function (el, binding) {
                    // Remove Event Listeners
                    document.removeEventListener('click', el.__vueClickOutside__)
                    el.__vueClickOutside__ = null

                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    .dropmenu_container {
        position: relative;
        display: inline-block;
        .rw-btn--card {
            padding: 0;
            border: none;
            width: 20px;
            height: 20px;
            div {
                border-color: #fff;
                &:before,
                &:after {
                    border-color: #fff;
                }
            }
            &:hover {
                background: transparent;
            }
        }
        .dropdown__title{
            color: #fff;
            white-space: nowrap;
        }
        &.show {
            .rw-btn--card {
                background: transparent;
                color: #fff;
                div {
                    border-color: #fff;
                    background: #fff;
                    &:before,
                    &:after {
                        background: #fff;
                    }
                }
            }
        }
        .dropdown-menu {
            width: auto;
            padding: 10px;
            border-radius: 5px;
            /*overflow: hidden;*/
            border: none;
            background: rgba(255, 255, 255, .75);
        }
    }
</style>

