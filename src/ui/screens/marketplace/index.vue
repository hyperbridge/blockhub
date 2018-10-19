<template>
    <c-layout>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h1>Marketplace</h1>
                        <transition name="slider">
                            <h2 :key="$route.name">
                                {{ $route.name | cut }}
                            </h2>
                        </transition>

                        <ul>
                            <li v-for="(link, index) in links" :key="index">
                                <router-link :to="{ name: link }">{{ link | cut }}</router-link>
                            </li>
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
                links: [
                    'Marketplace',
                    'Marketplace Trade Manager',
                    'Marketplace Snipers',
                    'Marketplace Search'
                ]
            }
        },
        computed: {
            marketRoutes: () => {
                return []
                router.options.routes.find(route => route.name === 'Marketplace').children
            }
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

    .slider {
        &-leave-active {
            transition: opacity .35s ease, transform .35s ease;
        }
        &-enter-active {
            transition: opacity .6s ease, transform .6s ease;
        }
        &-enter, &-leave-to {
            opacity: 0;
        }
        &-enter {
            transform: translateY(-30px);
        }
        &-leave-to {
            transform: translateY(25px);
        }
        &-leave-active {
            position: absolute;
        }
    }
</style>


