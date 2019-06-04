<template>
    <c-layout />
</template>

<script>
export default {
    components: {
    },
    components: {
        'c-layout': () => import('~/components/front-layout').then(m => m.default || m)
    },
    data: () => ({
        wallets: []
    })
}
</script>

<style lang="scss" scoped>

</style>
