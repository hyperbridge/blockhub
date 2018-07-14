<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        <p v-if="is_connected">
                            Welcome, you're now on the decentralized web. <a href="/#/sitemap">Check the sitemap</a> for things to do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>


<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default')
    },
    computed: {
        is_connected() {
            return this.$store.state.network.connection.datasource
        }
    },
    updated() {
    }
}
</script>


<style lang="scss" scoped>
</style>
