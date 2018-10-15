<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        computed: {
            assets() {
                return this.$store.getters['assets/assetsArray'];
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>


