<template>
    <div v-show="tabId == tabData.activeTab">
        <div class="tab__content">
            <transition name="tab">
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
    .tab-enter-active, .tab-leave-active {
        transition: opacity .4s ease, transform .4s ease;
    }
    .tab-leave-active {
        position: absolute;
    }
    .tab-enter, .tab-leave-to {
        opacity: 0;
        transform: translateX(20px);
    }
    .tab__content{
        display: block;
    }
</style>


