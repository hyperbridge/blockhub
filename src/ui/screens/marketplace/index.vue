<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <ul>
                            <li v-for="(link, index) in marketRoutes" :key="index">
                                <router-link :to="{ name: link.name }">{{ link.name | cut }}</router-link>
                            </li>
                            <!-- <li><router-link :to="'/marketplace'">Home</router-link></li>
                            <li><router-link :to="'/marketplace/search'">Search</router-link></li> -->
                        </ul>
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import router from '@/router';

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
            }
        },
        computed: {
            marketRoutes: () => router.options.routes.find(route => route.name === 'Marketplace').children
        },
        filters: {
            cut: val => val.replace('Marketplace ', '')
        }
    }
</script>

<style lang="scss" scoped>
</style>


