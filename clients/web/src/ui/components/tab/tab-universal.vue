<template>
    <div v-show="tab_id == tab_data.active_tab">
        <div class="tabs-universal__content" >
            <transition name="tab-universal">
                <div v-if="tab_id == tab_data.active_tab">
                    <slot/>
                </div>
            </transition>
        </div>
        <slot name="footer"/>
    </div>
</template>

<script>
export default {
    name: 'tab-universal',
    props: {
        tab_id: {
            type: [Number, String],
            required: true
        }
    },
    inject: ['tab_data']
}
</script>

<style lang="scss" scoped>
    .tab-universal-enter-active, .tab-universal-leave-active {
        transition: opacity .4s ease, transform .4s ease;
    }
    .tab-universal-leave-active {
        position: absolute;
    }
    .tab-universal-enter, .tab-universal-leave-to {
        opacity: 0;
        transform: translateX(20px);
    }
</style>



