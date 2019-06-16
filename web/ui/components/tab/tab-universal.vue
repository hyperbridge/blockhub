<template>
    <div v-show="tabId == tabData.activeTab">
        <div class="tabs-universal__content">
            <transition name="tab-universal">
                <div v-if="tabId == tabData.activeTab">
                    <slot />
                </div>
            </transition>
        </div>
        <slot name="footer" />
    </div>
</template>

<script>
export default {
    props: {
        tabId: {
            type: [Number, String],
            required: true
        }
    },
    inject: ['tabData']
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


