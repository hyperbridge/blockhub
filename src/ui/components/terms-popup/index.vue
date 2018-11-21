<template>
    <c-terms-popup title="Terms" :activated="activated" @close="$emit('close')" width="800">
        <div class="h4" slot="header">Terms of Service Agreement</div>
        <div slot="body">
            <div class="terms_block">
                <c-terms-block />
            </div>
        </div>
    </c-terms-popup>
</template>

<script>
export default {
    props: ['activated'],
    components: {
        'c-terms-popup': (resolve) => require(['@/ui/components/popups/terms'], resolve),
        'c-terms-block': (resolve) => require(['@/ui/components/terms-block'], resolve)
    },
}
</script>

<style lang="scss" scoped>
</style>
