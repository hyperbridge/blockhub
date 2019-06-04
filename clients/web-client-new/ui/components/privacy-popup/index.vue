<template>
    <c-popup
        title="Privacy policy"
        :activated="activated"
        width="800"
        @close="$emit('close')">
        <div class="scroll_block">
            <c-privacy-block />
        </div>
    </c-popup>
</template>

<script>
export default {
    components: {
        'c-popup': () => import('~/components/popups').then(m => m.default || m),
        'c-privacy-block': () => import('~/components/privacy-block').then(m => m.default || m)
    },
    props: ['activated']
}
</script>

<style lang="scss" scoped>
</style>
