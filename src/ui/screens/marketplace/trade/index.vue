<template>
    <c-block-menu :links="links">
        <router-view/>
    </c-block-menu>
</template>

<script>
    export default {
        components: {
            'c-block-menu': (resolve) => require(['@/ui/components/block/menu'], resolve),
        },
        data() {
            return {
                links: [
                    { title: 'Offers', to: '/marketplace/trade' },
                    { title: 'History', to: { name: 'Marketplace Trade History' }},
                ]
            }
        }
    }
</script>

<style>

</style>
