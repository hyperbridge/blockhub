<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace
                        <h2>Inventory</h2>
                        <nav class="inventory__menu-container">
                            <ul class="inventory__menu reset-list">
                                <li v-for="(link, index) in links" :key="index">
                                    <router-link :to="link.url" class="menu__link">
                                        {{ link.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                        <router-view :assets="assets"/>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-asset-comparison': (resolve) => require(['@/ui/components/asset-comparison'], resolve),
            'c-assets-grid-inventory': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
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
                return this.$store.getters['assets/inventoryAssets'];
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
            &.router-link-exact-active {
                // background-image: linear-gradient(to bottom, rgba(1,1,1,.3), rgba(1,1,1,.05));
            }
        }
    }
</style>
