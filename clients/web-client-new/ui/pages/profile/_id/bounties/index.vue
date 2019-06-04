<template>
    <c-layout />
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/front-layout').then(m => m.default || m)
    },
    data: () => ({
        items: []
    })
}
</script>

<style lang="scss" scoped>

</style>
