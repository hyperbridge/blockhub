<template>
    <div>
        <div v-if="asset">
            <h1>{{ asset.name }}</h1>


        </div>
        <p v-else>Asset with id {{ id }} doesn't exist</p>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {

            }
        },
        computed: {
            asset() {
                return this.$store.getters['assets/assets'][this.id];
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
