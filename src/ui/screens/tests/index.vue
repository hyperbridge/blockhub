<template>
    <c-layout>
        <span v-translate>{{ msg }}</span>
        <input type="number" v-model.number="id"/>
        <button
            @click="$store.dispatch(
                'community/updateWishlist',
                ['product', id]
            )"
        >
            Add to wishlist
        </button>
    </c-layout>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Bonjour',
                id: 5
            }
        },
        computed: {
            identities() {
                return this.$store.getters['community/identities'];
            }
        }
    }
</script>

<style>

</style>
