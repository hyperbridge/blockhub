<template>
    <div class="row margin-bottom-30"  >
        <div class="col-12">
            <c-block title="Top 20 Items" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                <template slot="additional-action">
                    <c-heading-bar-fields name="Price" icon="dollar-sign" @clickUp=""  @clickDown="" />
                    <c-heading-bar-fields name="Trading" icon="star" @clickUp=""  @clickDown="" />
                </template>

                <div class="filter-blk d-flex justify-content-between align-items-center margin-bottom-20">
                    <div class="d-inline-flex align-items-center">
                        <c-dropdown-menu title="FILTER BY GENRE">
                            <c-list
                                :items="selectableGenres"
                                @click="item => item.selected = !item.selected"
                            />
                        </c-dropdown-menu>
                        <c-dropdown-menu
                            title="FILTER BY PRODUCTS"
                        >
                            <c-list
                                :items="selectableProducts"
                                @click="item => item.selected = !item.selected"
                            />
                        </c-dropdown-menu>
                        <c-input-searcher
                            class="assets-explorer__input-searcher"
                            v-model="phrase"
                        />
                    </div>
                    <c-button
                        v-if="assets.length"
                        status="info"
                        icon_hide
                    >View All</c-button>
                </div>
                <c-content-navigation
                    v-if="assets.length"
                    :items="assets"
                >
                    <c-assets-list
                        slot-scope="{ items }"
                        :items="items"
                        :itemInRow="2"
                    />
                </c-content-navigation>
                <p v-else>
                    Nothing could be found. Want to <c-button status="plain">Check for updates</c-button>?
                </p>
            </c-block>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { arrayHandler } from '@/mixins';

    export default {
        name: 'assets-explorer',
        props: {
            assets: {
                type: Array,
                required: true
            }
        },
        components: {
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-heading-bar-fields' : (resolve) => require(['@/ui/components/heading-bar/additional-action'], resolve),
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-2'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
            'c-assets-list': (resolve) => require(['@/ui/components/assets-list-item'], resolve),
            'c-dropdown-menu': (resolve) => require(['@/ui/components/dropdown-menu/type-3'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
        },
        data() {
            return {
                phrase: '',
                selectableGenres: [],
                selectableProducts: []
            }
        },
        computed: {
            ...mapGetters({
                'genres': 'marketplace/productsTags',
                'products': 'marketplace/assetsProducts'
            })
        },
        mounted() {
            this.selectableGenres = this.genres.map(name => ({ name, selected: false }));
            this.selectableProducts = this.products.map(name => ({ name, selected: false }));
        }
    }
</script>

<style lang="scss" scoped>
    .assets-explorer__input-searcher {
        margin-left: 5px;
    }
</style>
