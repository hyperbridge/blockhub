<template>
    <c-layout>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <ul>
                            <li><router-link :to="'/marketplace'">Home</router-link></li>
                            <li><router-link :to="'/marketplace/search'">Search</router-link></li>
                        </ul>
                        <c-block title="Marketplace" noGutter onlyContentBg bgGradient v-if="block">
                            <router-view/>
                        </c-block>
                        <router-view v-else/>
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
        },
        computed: {
            assets() {
                return this.$store.getters['assets/assets'];
            }
        },
        data() {
            return {
                block: true
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>


