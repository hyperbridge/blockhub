<template>
    <c-popup title="Privacy policy" :activated="activated" @close="$emit('close')" width="800">
        <div class="scroll_block">
            <c-privacy-block />
        </div>
    </c-popup>
</template>

<script>
export default {
    props: ['activated'],
    components: {
        'c-popup': () => import('~/components/popups').then(m => m.default || m),
        'c-privacy-block': () => import('~/components/privacy-block').then(m => m.default || m)
    },
}
</script>

<style lang="scss" scoped>
</style>
