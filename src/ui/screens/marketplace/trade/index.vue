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
                    { title: 'Manager', to: '/marketplace/trade' },
                    { title: 'Explorer', to: { name: 'Marketplace Trade Explorer' }},
                    { title: 'History', to: { name: 'Marketplace Trade History' }},
                    { title: 'Settings', to: { name: 'Marketplace Trade Settings' }}
                ]
            }
        }
    }
</script>

<style>

</style>
