<template>
    <c-terms-popup title="Terms" :activated="activated" @close="$emit('close')" width="800">
        <div class="h4" slot="header">Terms of Service Agreement</div>
        <div slot="body">
            <div class="termsBlock">
                <c-terms-block />
            </div>
        </div>
    </c-terms-popup>
</template>

<script>
export default {
    props: ['activated'],
    components: {
        'c-terms-popup': () => import('~/components/popups/terms').then(m => m.default || m),
        'c-terms-block': () => import('~/components/terms-block').then(m => m.default || m)
    },
}
</script>

<style lang="scss" scoped>
</style>
