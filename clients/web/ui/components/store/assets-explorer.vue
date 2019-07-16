<template>
    <div class="row margin-bottom-30">
        <div class="col-12">
            <c-block
                title="Top 20 Items"
                :noGutter="true"
                :onlyContentBg="true"
                :bgGradient="true"
                showActions>
                <template slot="additional-action">
                    <span
                        class="margin-right-15"
                        hidden>Sort by:</span>
                    <c-heading-bar-fields
                        v-for="(opt, index) in sortOptions"
                        :key="index"
                        :name="opt.title"
                        :icon="opt.icon"
                        :activeUp="sortBy.property === opt.property ? sortBy.asc : null"
                        @clickUp="setSort(opt.property, true)"
                        @clickDown="setSort(opt.property, false)" />
                </template>

                <div class="filter-block d-flex justify-content-between align-items-center margin-bottom-20">
                    <div class="d-inline-flex align-items-center">
                        <c-dropdown-menu
                            class="margin-right-10"
                            title="FILTER BY PRODUCTS">
                            <c-list
                                :items="selectableProducts"
                                @click="item => item.selected = !item.selected" />
                        </c-dropdown-menu>
                        <c-dropdown-menu
                            class="margin-right-10"
                            title="FILTER BY GENRE">
                            <c-list
                                :items="selectableGenres"
                                @click="item => item.selected = !item.selected" />
                        </c-dropdown-menu>
                        <c-input-searcher
                            v-model="phrase"
                            class="assets-explorer__input-searcher" />
                    </div>
                    <nuxt-link
                        tag="div"
                        :to="{
                            name: 'Marketplace',
                            query: { showFilters: true }
                        }">
                        <c-button
                            v-if="assets.length"
                            tag="div"
                            status="lightpurple"
                            iconHide>
                            View All
                        </c-button>
                    </nuxt-link>
                </div>
                <transition name="slide-in-top">
                    <div v-if="filtersActive">
                        <div class="flex-center-wrap">
                            <c-option-tag
                                v-if="phrase"
                                title="Name:"
                                :text="phrase"
                                @delete="phrase = ''" />
                            <c-option-tag
                                v-if="selectedProducts.length"
                                title="PRODUCTS:"
                                @delete="selectedProducts.forEach(product => product.selected = false)">
                                <c-option-tag
                                    v-for="(product, index) in selectedProducts"
                                    :key="index"
                                    :text="product.value"
                                    isChildren
                                    @delete="product.selected = false" />
                            </c-option-tag>
                            <c-option-tag
                                v-if="selectedGenres.length"
                                title="GENRES:"
                                @delete="selectedGenres.forEach(genre => genre.selected = false)">
                                <c-option-tag
                                    v-for="(genre, index) in selectedGenres"
                                    :key="index"
                                    :text="genre.name"
                                    isChildren
                                    @delete="genre.selected = false" />
                            </c-option-tag>
                            <c-option-tag
                                v-if="sortBy.property"
                                title="SORT BY:"
                                @delete="sortBy.property = ''; sortBy.asc = true">
                                <c-option-tag
                                    title="Property:"
                                    isChildren
                                    :isParent="false"
                                    @delete="sortBy.property = ''">
                                    <select v-model="sortBy.property">
                                        <option
                                            v-for="opt in sortOptions"
                                            :key="opt.property"
                                            :value="opt.property">
                                            {{ opt.title }}
                                        </option>
                                    </select>
                                </c-option-tag>
                                <c-option-tag
                                    v-if="sortBy.property === 'price'"
                                    title="Price:"
                                    :isParent="false"
                                    isChildren>
                                    <select v-model="sortBy.priceProp">
                                        <option
                                            v-for="priceProp in priceProps"
                                            :key="priceProp"
                                            :value="priceProp">
                                            {{ priceProp | upperFirstChar }}
                                        </option>
                                    </select>
                                </c-option-tag>
                                <c-option-tag
                                    title="Direction:"
                                    isChildren
                                    :isParent="false"
                                    hideButton
                                    @delete="sortBy.asc = !sortBy.asc">
                                    {{ sortBy.asc ? 'Ascending' : 'Descending' }}
                                    <c-icon
                                        name="arrow-up"
                                        class="sort-button"
                                        :class="{ 'desc': !sortBy.asc }"
                                        @click="sortBy.asc = !sortBy.asc" />
                                </c-option-tag>
                            </c-option-tag>
                        </div>
                    </div>
                </transition>
                <c-content-navigation
                    v-if="filteredAssets.length"
                    :items="filteredAssets">
                    <c-assets-list
                        slot-scope="{ items }"
                        :items="items"
                        :itemInRow="2" />
                </c-content-navigation>
                <div v-else-if="filtersActive">
                    <p>
                        No products were found using these filters. Want to <c-button
                            status="plain"
                            @click="$store.commit('application/activeModal', 'comingSoon')">
                            Check for updates
                        </c-button>?
                    </p>
                    <c-button
                        status="info"
                        size="md"
                        iconHide
                        @click="clearFilters()">
                        Clear filters
                    </c-button>
                </div>
                <p v-else>
                    Nothing could be found. Want to <c-button
                        status="plain"
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Check for updates
                    </c-button>?
                </p>
            </c-block>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AssetsExplorer',
    components: {
        'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        'c-block': () => import('~/components/block').then(m => m.default || m),
        'c-heading-bar-fields': () => import('~/components/heading-bar/additional-action').then(m => m.default || m),
        'c-dropdown': () => import('~/components/dropdown-menu/type-2').then(m => m.default || m),
        'c-input-searcher': () => import('~/components/inputs/searcher').then(m => m.default || m),
        'c-assets-list': () => import('~/components/assets-list-item').then(m => m.default || m),
        'c-dropdown-menu': () => import('~/components/dropdown-menu/type-3').then(m => m.default || m),
        'c-list': () => import('~/components/list').then(m => m.default || m),
        'c-option-tag': () => import('~/components/option-tag').then(m => m.default || m)
    },
    props: {
        assets: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            phrase: '',
            selectableGenres: [],
            selectableProducts: [],
            sortBy: {
                property: '',
                priceProp: 'current',
                asc: true
            },
            sortOptions: [
                { title: 'Name', property: 'name', icon: 'language' },
                { title: 'Price', property: 'price', icon: 'dollar-sign' }
            ]
        }
    },
    methods: {
        clearFilters() {
            this.phrase = ''
            this.sortBy.property = ''
            this.sortBy.asc = true
            this.selectedProducts.forEach(product => product.selected = false)
            this.selectedGenres.forEach(genre => genre.selected = false)
        },
        setSort(prop, direction) {
            const { property, asc } = this.sortBy
            this.sortBy.property = property === prop && direction === asc
                ? null
                : prop
            this.sortBy.asc = direction
        }
    },
    computed: {
        genres(){
            return []
        },
        products() {
            return []
        },
        selectedProducts() {
            return this.selectableProducts.filter(product => product.selected)
        },
        selectedProductsNames() {
            return this.selectedProducts.map(product => product.value)
        },
        selectedGenres() {
            return this.selectableGenres.filter(genre => genre.selected)
        },
        filtersActive() {
            return Boolean(this.selectedProducts.length ||
                    this.phrase ||
                    this.selectedGenres.length ||
                    this.sortBy.property)
        },
        filteredAssets() {
            const { property, asc, priceProp } = this.sortBy
            const { phrase, selectedProductsNames } = this
            const sortDir = dir => asc ? dir : dir * -1

            return this.assets
                .filter(asset => phrase
                    ? asset.name.toLowerCase().includes(phrase.toLowerCase())
                    : true)
                .filter(asset => selectedProductsNames.length
                    ? selectedProductsNames.includes(asset.productName)
                    : true)
                .sort((a, b) => property
                    ? property === 'price'
                        ? a.price[priceProp] > b.price[priceProp]
                            ? sortDir(1)
                            : a.price[priceProp] < b.price[priceProp] ? sortDir(-1) : 0
                        : a[property] > b[property]
                            ? sortDir(1)
                            : a[property] < b[property] ? sortDir(-1) : 0
                    : 0)
        },
        priceProps() {
            return Object.keys(this.assets[0].price)
        }
    },
    mounted() {
        this.selectableGenres = this.genres.map(name => ({ name, selected: false }))
        this.selectableProducts = this.products.map(name => ({ name, selected: false }))
    }
}
</script>

<style lang="scss" scoped>
    .assets-explorer__input-searcher {
        margin-left: 5px;
    }
    .sort-button {
        cursor: pointer;
        margin-left: 4px;
        transition: transform .2s ease;
        &.desc {
            transform: rotate(180deg);
        }
    }
    @media (max-width: 768px) {
        .filter-block{
            display: none!important;
        }
    }
</style>
