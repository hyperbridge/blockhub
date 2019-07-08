<template>
    <c-layout
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-4 text-center">
                    <h2>BlockHub Launched</h2>
                    <p>We've located your target and beamed the info to your BlockHub app. You can close this browser tab.</p>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Go | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub Go` },
                { hid: 'keywords', name: 'keywords', content: 'blockhub, go, blockchain, game, indie, developer' }
            ]
        }
    },
    computed: {
        code() {
            return this.$route.params.code
        }
    },
    mounted() {
        window.location = `blockhub://go/${this.code}`
    }
}
</script>

<style lang="scss" scoped>

</style>
