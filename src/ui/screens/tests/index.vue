<template>
    <c-layout>
        <!-- <span v-translate>{{ msg }}</span> -->
        <div class="divv" v-click-outside="clicked" v-if="showDiv">Test</div>
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
                id: 5,
                showDiv: true
            }
        },
        methods: {
            clicked(e) {
                this.showDiv = !this.showDiv;
            }
        },
        computed: {
            identities() {
                return this.$store.getters['community/identities'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .divv {
        background: red;
        width: 100px;
        height: 100px;
    }
</style>

