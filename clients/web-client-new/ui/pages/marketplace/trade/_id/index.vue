<template>
    <div>
        <p v-if="!trx">
            Transaction with id <i>{{ id }}</i> doesn't exist
        </p>
        <c-block-menu v-else :links="links">
            <router-view :trxa="trx" :trx="trx" :id="id"/>
        </c-block-menu>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-block-menu': (resolve) => require(['@/components/block/menu'], resolve),
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

