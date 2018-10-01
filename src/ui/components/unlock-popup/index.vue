<template>
    <c-popup :activated="activated" type="custom" ref="modal" title="Unlock" width="350"  @close="$emit('close')">
        <div class="c-popup__close" @click="$emit('close')" slot="custom_close">
            <i class="fas fa-times"></i>
        </div>
        <div class="unlock-modal" slot="custom_content">
            <input type="password" name="password" ref="password" placeholder="Account password" />
            <c-button @click="unlock()">Unlock</c-button>
        </div>
    </c-popup>
</template>

<script>
    import Tabs from '../tab/tabs.vue'
    import Tab from '../tab/tab.vue'
    import Switch from '../switch/index'
    import Buttons from '../buttons/index.vue'
    import PopUp from '../popups/index'

    export default {
        props: ['activated'],
        components: {
            'c-tab': Tab,
            'c-tabs': Tabs,
            'c-switch': Switch,
            'c-button': Buttons,
            'c-popup': PopUp,
        },
        data() {
            return {
            }
        },
        methods: {
            unlock() {
                this.$store.dispatch('network/unlockAccount', { password: this.$refs.password })
            }
        }
    }

</script>

<style lang="scss" scoped>
    .unlock-modal{
        background: transparent;
        color: #fff;
    }
</style>
