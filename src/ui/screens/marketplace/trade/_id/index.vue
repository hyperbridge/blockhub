<template>
    <div>
        {{ id }}
        <c-block-menu :links="links">
            <router-view :trx="trx"/>
        </c-block-menu>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-block-menu': (resolve) => require(['@/ui/components/block/menu'], resolve),
        },
        data() {
            return {
            }
        },
        computed: {
            links() {
                return [
                    { title: 'Offer', to: `/marketplace/trade/${this.id}` },
                    { title: 'Chat', to: `/marketplace/trade/${this.id}/chat` }
                ];
            },
            trx() {
                return this.$store.getters['assets/transactions'][this.id];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

