<template>
    <c-terms-popup
        title="Terms"
        :activated="activated"
        width="800"
        @close="$emit('close')">
        <div
            slot="header"
            class="h4">
            Terms of Service Agreement
        </div>
        <div slot="body">
            <div class="termsBlock">
                <c-terms-block />
            </div>
        </div>
    </c-terms-popup>
</template>

<script>
export default {
    components: {
        'c-terms-popup': () => import('~/components/popups/terms').then(m => m.default || m),
        'c-terms-block': () => import('~/components/terms-block').then(m => m.default || m)
    },
    props: ['activated']
}
</script>

<style lang="scss" scoped>
</style>
