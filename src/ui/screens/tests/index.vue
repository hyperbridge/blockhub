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
        <c-installer-progress :progress="14"/>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-installer-progress': (resolve) => require(['@/ui/components/progress-bar/installer'], resolve),
        },
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
            profiles() {
                return this.$store.getters['community/profiles'];
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

