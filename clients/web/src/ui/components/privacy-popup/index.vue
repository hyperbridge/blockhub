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
        'c-popup': (resolve) => require(['@/ui/components/popups'], resolve),
        'c-privacy-block': (resolve) => require(['@/ui/components/privacy-block'], resolve)
    },
}
</script>

<style lang="scss" scoped>
</style>
