<template>
    <c-layout>
        <!-- <span v-translate>{{ msg }}</span> -->
        <div v-if="showDiv"
             v-click-outside="clicked"
             class="divv">
            Test
        </div>
        <input v-model.number="id"
               type="number">
        <button
            @click="$store.dispatch(
                'community/updateWishlist',
                ['product', id]
            )">
            Add to wishlist
        </button>
        <c-installer-progress :progress="14" />
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-installer-progress': () => import('~/components/progress-bar/installer').then(m => m.default || m)
    },
    data() {
        return {
            msg: 'Bonjour',
            id: 5,
            showDiv: true
        }
    },
    computed: {
        profiles() {
            return this.$store.getters['community/profiles']
        }
    },
    methods: {
        clicked(e) {
            this.showDiv = !this.showDiv
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

