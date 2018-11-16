<template>
    <c-layout>
        <main class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1>Marketplace</h1>
                    <transition name="slider">
                        <h2 :key="$route.name">
                            {{ $route.name | cut }}
                        </h2>
                    </transition>

                    <p>You are connected to marketplace as:</p>
                    <c-user :user="identity"/>

                    <nav>
                        <ul class="marketplace-menu reset-list">
                            <li v-for="(link, index) in links" :key="index">
                                <router-link
                                    class="marketplace-menu__link"
                                    :to="{ name: link }"
                                >{{ link | cut }}</router-link>
                            </li>
                        </ul>
                    </nav>

                    <section>
                        <transition name="page" mode="out-in">
                            <router-view/>
                        </transition>
                    </section>
                </div>
            </div>
        </main>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block/index'], resolve),
            'c-user': (resolve) => require(['@/ui/components/user/simple'], resolve),
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
                    'Marketplace Prospectors',
                    'Marketplace Search',
                    'Marketplace Offers',
                ]
            }
        },
        filters: {
            cut: val => val.replace('Marketplace ', '')
        },
        computed: {
            identity() {
                return this.$store.getters['application/identity'];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .marketplace-menu {
        border-bottom: 1px solid #dee2e6;
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
        margin-top: 40px;
        .marketplace-menu__link {
            display: block;
            &.router-link-exact-active {
                border-color: #fff;
            }
            color: #fff;
            text-decoration: none;
            padding: 9px 0;
            font-size: 21px;
            border-bottom: 5px solid transparent;
        }
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


