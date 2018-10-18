<template>
    <c-layout>
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
                        <transition name="page">
                            <router-view/>
                        </transition>
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
    .page-enter-active {
        transition: opacity .6s, transform .6s ease;
    }
    .page-leave-active {
        transition: opacity .3s, transform .3s ease;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateY(5vh);
    }
    .page-leave-active {
        position: absolute;
        width: calc(100% - 30px);
    }
</style>


