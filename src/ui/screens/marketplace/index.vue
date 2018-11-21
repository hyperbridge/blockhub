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

                    <p class="marketplace__profile-info">You are connected to marketplace as:</p>
                    <div class="marketplace-identity">
                        <div class="marketplace-profile">
                            <c-img class="marketplace-profile__image" :src="identity.img"/>
                            <div>
                                <h3 class="marketplace-profile__name">
                                    {{ identity.name }}
                                </h3>
                                <input
                                    class="marketplace-profile__wallet"
                                    type="text"
                                    :value="identity.wallet"
                                    readonly
                                />
                            </div>
                        </div>
                    </div>

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
                            <router-view :identityId="identity.id"/>
                        </transition>
                    </section>
                </div>
            </div>
        </main>
    </c-layout>
</template>

<script>
    import offers from '@/db/api/offers';
    import prospectors from '@/db/api/prospectors';

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
                    'Marketplace Assets',
                ]
            }
        },
        filters: {
            cut: val => val.replace('Marketplace ', '')
        },
        mounted() {
            this.$store.dispatch('loadData', ['assets/offers', offers]);
            this.$store.dispatch('loadData', [
                'assets/prospectors',
                prospectors.filter(prosp => prosp.user.id == this.identity.id)
            ]);
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

    .marketplace-profile {
        $color: #2ecc71;
        background: $color;
        padding: 10px;
        border-radius: 10px;
        .marketplace-profile__name {
            text-shadow: 1.5px 1.5px 0 rgba(1,1,1,.2);
            margin-bottom: 4px;
        }
        .marketplace-profile__image {
            width: 50px;
            height: 50px;
            border-radius: 8px;
            margin-right: 10px;
        }
        .marketplace-profile__wallet {
            padding: 5px;
            height: 25px;
            border-radius: 6px;
            background: darken($color, 7%);
            border-style: none;
            color: #fff;
        }
        display: inline-flex;
        margin-left: auto;
        box-shadow: 3px 3px 0 0 darken($color, 15%);
    }

    .marketplace-identity {
        display: flex;
        justify-content: flex-end;
    }

    .marketplace__profile-info {
        text-align: right;
    }
</style>


