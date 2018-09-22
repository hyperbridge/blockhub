<template>
    <div class="row product-grid">
        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                :headingTabs="[
                    { title: 'Top Selling', category: 'top_selling_products' },
                    { title: 'New Releases', category: 'new_products' },
                    { title: 'Upcoming', category: 'upcoming_products' }
                ]"
                @changeTab="category = $event"
            >
                <template slot="additional-action">
                    <span class="sort-title">Sort by:</span>
                    <c-heading-bar-fields name="Date" icon="calendar" @clickUp=""  @clickDown="" />
                    <c-heading-bar-fields name="Best Reviews" icon="star" @clickUp=""  @clickDown="" />
                    <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown="" />
                </template>
            </c-heading-bar>
            <div class="product-grid__filters">
                <div class="d-flex align-items-center">
                    <c-dropdown id="test" name="Filter by Genre" :showBg="true">
                        <a href="#3">RPG</a>
                        <a href="#3">ACTION</a>
                        <a href="#3">Cars</a>
                    </c-dropdown>
                    <c-searcher customClass="mb-0" />
                </div>
                <c-button status="info" icon_hide>All New Releases</c-button>
            </div>
            <c-game-grid
                v-if="marketplace[category] && marketplace[category].length"
                :itemInRow="2"
                :showRating="false"
                :items="marketplace[category]"
                showTime
                itemBg="transparent"
            />
            <c-content-navigation />
        </c-block>
    </div>
</template>

<script>
    export default {
        name: 'games-explorer',
        components: {
            'c-block': () => import('@/ui/components/block'),
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-heading-bar-fields' : () => import('@/ui/components/heading-bar/additional-action'),
            'c-dropdown': () => import('@/ui/components/dropdown-menu/type-2'),
            'c-game-grid': () => import('@/ui/components/games-grid/with-description'),
            'c-content-navigation': () => import('@/ui/components/content-navigation')
        },
        computed: {
            marketplace() {
                return this.$store.state.marketplace;
            }
        },
        data() {
            return {
                category: 'top_selling_products',
                genre: '',
                sortBy: {
                    property: 'date',
                    desc: true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product-grid {
        margin: 30px 0;
    }
    .product-grid__filters {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .sort-title {
        font-weight: 700;
        margin-right: 20px;
    }
</style>
