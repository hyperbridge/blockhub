<template>
    <div v-show="tabId == tabData.activeTab">
        <div class="steps__content">
            <transition name="step">
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
    .step-enter-active, .step-leave-active {
        transition: opacity .4s ease, transform .4s ease;
    }
    .step-leave-active {
        position: absolute;
    }
    .step-enter, .step-leave-to {
        opacity: 0;
        transform: translateX(20px);
    }
</style>


