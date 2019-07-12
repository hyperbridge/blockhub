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

                    <p class="marketplace__profile-info">
                        You are connected to marketplace as:
                    </p>
                    <div class="marketplace-profile">
                        <div class="marketplace-profile">
                            <c-img
                                class="marketplace-profile__image"
                                :src="profile.img" />
                            <div>
                                <h3 class="marketplace-profile__name">
                                    {{ profile.name }}
                                </h3>
                                <input
                                    class="marketplace-profile__wallet"
                                    type="text"
                                    :value="profile.wallet"
                                    readonly>
                            </div>
                        </div>
                    </div>

                    <nav>
                        <ul class="marketplace-menu reset-list">
                            <li
                                v-for="(link, index) in links"
                                :key="index">
                                <nuxt-link
                                    class="marketplace-menu__link"
                                    :to="{ name: link }">
                                    {{ link | cut }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>

                    <section>
                        <transition
                            name="page"
                            mode="out-in">
                            <router-view :profileId="profile.id" />
                        </transition>
                    </section>
                </div>
            </div>
        </main>
    </c-layout>
</template>

<script>
// import offers from '@/db/api/offers'
// import prospectors from '@/db/api/prospectors'
// import transactions from '@/db/api/asset-transactions'

export default {
    components: {
        'c-user': () => import('~/components/user/simple').then(m => m.default || m)
    },
    filters: {
        cut: val => val.replace('Marketplace ', '')
    },
    data() {
        return {
            links: [
                'Marketplace',
                'Marketplace Trade Manager',
                'Marketplace Prospectors',
                'Marketplace Search',
                'Marketplace Assets'
            ]
        }
    },
    computed: {
        assets() {
            return this.$store.getters['assets/assets']
        },
        profile() {
            return this.$store.state.application.activeProfile
        }
    },
    mounted() {
        // this.$store.dispatch('loadData', ['assets/offers', offers])
        // this.$store.dispatch('loadData', ['assets/prospectors', prospectors])
        // this.$store.dispatch('loadData', ['assets/transactions', transactions])
    },
    created() {
        this.$store.commit('application/activateModal', 'coming-soon')
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
            &.nuxt-link-exact-active {
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

    .marketplace-profile {
        display: flex;
        justify-content: flex-end;
    }

    .marketplace__profile-info {
        text-align: right;
    }
</style>


