<template>
    <Layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    Marketplace
                    <h2>Inventory</h2>
                    <nav class="inventory__menu-container">
                        <ul class="inventory__menu reset-list">
                            <li
                                v-for="(link, index) in links"
                                :key="index">
                                <nuxt-link
                                    :to="link.url"
                                    class="menu__link">
                                    {{ link.title }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                    <router-view :assets="assets" />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'AssetComparison': () => import('@ericmuyser/hyper-ui').then(m => m.AssetComparison),
        'AsssetsGridInventory': () => import('@ericmuyser/hyper-ui').then(m => m.AsssetsGridInventory)
    },
    data() {
        return {
            links: [
                { url: '/marketplace/inventory', title: 'Explore' },
                { url: '/marketplace/inventory/compare', title: 'Compare assets' }
            ]
        }
    },
    computed: {
        assets() {
            return this.$store.getters['assets/inventoryAssets']
        }
    }
}
</script>

<style lang="scss" scoped>
    .inventory__menu-container {
        margin-bottom: 30px;
    }
    .inventory__menu {
        display: flex;
        .menu__link {
            display: block;
            padding: 15px;
            background-color: rgba(255,255,255,.05);
            color: #fff;
            text-decoration: none;
            &:hover {
                background-color: rgba(255,255,255,.1);
            }
            &.nuxt-link-exact-active {
                // background-image: linear-gradient(to bottom, rgba(1,1,1,.3), rgba(1,1,1,.05));
            }
        }
    }
</style>
