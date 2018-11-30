<template>
    <c-layout>
        <div class="row">
            <div class="col-12">
                <c-block title="Search" class="searching-box">
                    <div class="search__main">
                        <c-input-searcher
                            v-model="phrase"
                            placeholder="Search for games"
                            aria-placeholder="Search for games"
                        />
                        <c-button
                            status="success"
                            size="lg"
                            icon="sliders-h"
                            data-toggle="collapse"
                            data-target="#expand-filters"
                            aria-expanded="false"
                            aria-controls="collapseFilters"
                            @click="expandFilters = !expandFilters"
                        >Filters</c-button>
                    </div>
                    <transition name="slide-in-top">
                    <div
                        v-if="expandFilters"
                        class="search-filters__container"
                    >
                        <div class="filter-box">
                            <h4>
                                Specials:
                                <span v-show="selectedSpecials.length">
                                    ({{ selectedSpecials.length }})
                                </span>
                            </h4>
                            <c-checkbox
                                v-for="(tag, index) in systemTags"
                                :key="index"
                                :id="`specials-${tag.value}`"
                                v-model="tag.selected"
                            >
                                {{ tag.value | replaceLoDash | upperFirstChar }}
                            </c-checkbox>
                        </div>
                        <div class="filter-box">
                            <h4>
                                Price range:
                                <span v-show="price.min && price.max">
                                    ({{ price.min }} - {{ price.max }})
                                </span>
                            </h4>
                            <p class="margin-top-20">Minimum:</p>
                            <c-range-slider
                                v-model.number="price.min"
                                :min="0"
                                :max="60"
                            />
                            <p class="margin-top-20">Maximum:</p>
                            <c-range-slider
                                v-model.number="price.max"
                                :max="300"
                            />
                        </div>
                        <div class="filter-box">
                            <h4>
                                Genres:
                                <span v-show="selectedGenres.length">
                                    ({{ selectedGenres.length }})
                                </span>
                            </h4>
                            <c-list
                                :items="selectableTags"
                                @click="tag => tag.selected = !tag.selected"
                            />
                        </div>
                        <div class="filter-box">
                            <h4>
                                Languages:
                                <span v-show="selectedLanguages.length">
                                    ({{ selectedLanguages.length }})
                                </span>
                            </h4>
                            <div>
                                <c-list
                                    :items="selectableLanguages"
                                    @click="item => item.selected = !item.selected"
                                >
                                </c-list>
                            </div>
                        </div>
                        <div class="filter-box">
                            <h4>Community:</h4>
                            <p class="margin-top-20">Size:</p>
                            <c-range-slider
                                v-model.number="communitySize"
                                :max="1000"
                            />
                            <p class="margin-top-20">Active Users:</p>
                            <c-range-slider
                                v-model.number="activeUsers"
                                :max="5000"
                            />
                        </div>
                        <div class="filter-box">
                            <h4>System:</h4>
                            <c-checkbox
                                v-for="os in platforms"
                                :key="os.prop"
                                :id="`specials-${os.prop}`"
                                v-model="os.selected"
                            >
                                <c-icon
                                    cat="fab"
                                    class="platform-icon"
                                    :name="os.icon"
                                    :class="[ os.selected
                                        ? 'icon--active'
                                        : 'icon--inactive'
                                    ]"
                                />
                                {{ os.name }}
                            </c-checkbox>
                        </div>
                    </div>
                    </transition>
                </c-block>
                <transition name="slide-in-top">
                    <div class="active-filters" v-if="filtersActive">
                        <h3>Active filters</h3>
                        <div class="active-filters__content">
                            <c-option-tag
                                v-if="phrase.length"
                                title="NAME:"
                                :text="phrase"
                                @delete="phrase = ''"
                            />
                            <c-option-tag
                                v-if="selectedGenres.length"
                                title="GENRES:"
                                @delete="selectedGenres.forEach(genre => genre.selected = false)"
                            >
                                <c-option-tag
                                    v-for="(genre, index) in selectedGenres"
                                    :key="index"
                                    :text="genre.name"
                                    @delete="genre.selected = false"
                                    isChildren
                                />
                            </c-option-tag>
                            <c-option-tag
                                v-if="selectedSpecials.length"
                                title="SPECIALS:"
                                @delete="selectedSpecials.forEach(tag => tag.selected = false)"
                            >
                                <c-option-tag
                                    v-for="(tag, index) in selectedSpecials"
                                    :key="index"
                                    :text="tag.value | replaceLoDash | upperFirstChar"
                                    @delete="tag.selected = false"
                                    isChildren
                                />
                            </c-option-tag>
                            <c-option-tag
                                v-if="price.min > 0 || price.max > 0"
                                title="PRICE RANGE:"
                                @delete="price.min = 0; price.max = 0"
                            >
                                <c-option-tag
                                    v-if="price.min"
                                    title="Minimum:"
                                    :text="price.min"
                                    @delete="price.min = 0"
                                    isChildren
                                />
                                <c-option-tag
                                    v-if="price.max"
                                    title="Maximum:"
                                    :text="price.max"
                                    isChildren
                                    @delete="price.max = 0"
                                />
                            </c-option-tag>
                            <c-option-tag
                                v-if="selectedLanguages.length"
                                title="LANGUAGES:"
                                @delete="selectableLanguages.forEach(lang => lang.selected = false)"
                            >
                                <c-option-tag
                                    v-for="(lang, index) in selectedLanguages"
                                    :key="index"
                                    :text="lang.name"
                                    @delete="lang.selected = false"
                                    isChildren
                                />
                            </c-option-tag>
                            <c-option-tag
                                v-if="communitySize || activeUsers"
                                title="COMMUNITY:"
                                @delete="communitySize = 0; activeUsers = 0"
                            >
                                <c-option-tag
                                    v-if="communitySize"
                                    title="Size:"
                                    :text="communitySize"
                                    @delete="communitySize = 0"
                                    isChildren
                                />
                                <c-option-tag
                                    v-if="activeUsers"
                                    title="Active users:"
                                    :text="activeUsers"
                                    @delete="activeUsers = 0"
                                    isChildren
                                />
                            </c-option-tag>
                            <c-option-tag
                                v-if="selectedPlatforms.length"
                                title="PLATFORMS:"
                                @delete="selectedPlatforms.forEach(os => os.selected = false)"
                            >
                                <c-option-tag
                                    v-for="(os, index) in selectedPlatforms"
                                    :key="index"
                                    :text="os.name | upperFirstChar"
                                    @delete="os.selected = false"
                                    isChildren
                                />
                            </c-option-tag>
                        </div>
                    </div>
                </transition>
                <h3>Results</h3>
                <div class="results__container">
                    <div class="results">
                        <c-spinner v-if="isTyping"/>
                        <div v-else-if="!resultsFiltered.length">
                            <p>No results were found for provided filters</p>
                            <c-button
                                @click="clearFilters()"
                                status="info"
                            >Clear filters</c-button>
                            <c-button @click="$store.commit('application/activateModal', 'coming-soon')">Check for updates</c-button>
                        </div>
                        <c-content-navigation
                            v-else
                            :items="resultsFiltered"
                            :setItemsLimit="12"
                            :setItemsPerPage="12"
                        >
                            <c-game-grid
                                slot-scope="{ items }"
                                :itemInRow="2"
                                :showRating="false"
                                :items="items"
                                itemBg="transparent"
                                showTime
                            />
                        </c-content-navigation>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { debouncer } from '@/mixins'

    export default {
        components: {
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
            'c-game-grid': (resolve) => require(['@/ui/components/game-grid/with-description'], resolve),
            'c-spinner': (resolve) => require(['@/ui/components/spinner'], resolve),
            'c-option-tag': (resolve) => require(['@/ui/components/option-tag'], resolve),
            'c-range-slider': (resolve) => require(['@/ui/components/range-slider/pure'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
        },
        mixins: [debouncer],
        data() {
            return {
                systemTags: [
                    { value: "featured", selected: false },
                    { value: "new", selected: false },
                    { value: "sale", selected: false },
                    { value: "specials", selected: false },
                    { value: "top_seller", selected: false },
                    { value: "trending", selected: false },
                    { value: "upcoming", selected: false }
                ],
                phrase: '',
                results: [],
                isTyping: false,
                selectableTags: [],
                selectableLanguages: [],
                price: {
                    min: 0,
                    max: 0
                },
                expandFilters: false,
                timeout2: 0,
                communitySize: 0,
                activeUsers: 0,
                platforms: [
                    { prop: 'win', icon: 'windows', name: 'Windows', selected: false },
                    { prop: 'mac', icon: 'apple', name: 'macOS', selected: false },
                    { prop: 'linux', icon: 'linux', name: 'Linux', selected: false }
                ],
            }
        },
        methods: {
            search() {
                this.debounce(() => {
                    if (!this.isTyping) this.isTyping = true
                    if (this.filtersActive) {
                        this.debounce(() => {
                            this.isTyping = false
                            this.results = [...this.getProductsQuery(this.query)]
                        }, 250, 'timeout2')
                    } else {
                        this.isTyping = false
                        this.results = this.products
                    }
                    this.$router.replace({ name: 'Search', query: this.urlQuery })
                }, 500)
            },
            clearFilters() {
                const {
                    phrase,
                    selectedSpecials,
                    selectedGenres,
                    selectedLanguages,
                    price,
                    communitySize,
                    activeUsers,
                    selectedPlatforms
                } = this
                if (phrase.length) this.phrase = ''
                if (selectedSpecials.length) this.selectedSpecials.forEach(tag => tag.selected = false)
                if (selectedGenres.length) this.selectedGenres.forEach(tag => tag.selected = false)
                if (selectedLanguages.length) this.selectedLanguages.forEach(lang => lang.selected = false)
                if (price.min || price.max) { this.price.min = 0; this.price.max = 0; };
                if (communitySize || activeUsers) { this.communitySize = 0; this.activeUsers = 0; }
                if (selectedPlatforms.length) this.selectedPlatforms.forEach(platform => platform.selected = false)
            }
        },
        computed: {
            ...mapGetters({
                getProductsQuery: 'marketplace/getProductsQuery',
                products: 'marketplace/productsArray',
                productsTags: 'marketplace/productsTags',
                languages: 'marketplace/productsLanguages'
            }),
            query() {
                const { phrase, selectedSpecials, selectedGenres, selectedLanguages, price, communitySize, activeUsers } = this
                const query = {}
                if (phrase.length) query['name'] = { '$eq': phrase }
                if (selectedSpecials.length) query['systemTags'] = { '$contains': selectedSpecials.map(tag => tag.value) }
                if (selectedGenres.length) query['developerTags'] = { '$contains': selectedGenres.map(tag => tag.name) }
                // if (selectedLanguages.length) query['languageSupport'] = {
                //     '$contains': { name: selectedLanguages.map(lang => lang.name) }
                // }
                if (price.min || price.max) query['price'] = { '$between': [price.min, price.max | 300] }
                if (communitySize) query['communitySize'] = { '$between': [communitySize, 999999999] }
                if (activeUsers) query['activeUsers'] = { '$between': [activeUsers, 999999999] }
                return query
            },
            resultsFiltered() {
                const { selectedLanguagesNames, selectedPlatformsNames } = this

                return this.results
                    .filter(product => selectedLanguagesNames.length
                        ? product.languageSupport.filter(lang =>
                            selectedLanguagesNames.includes(lang.name)
                          ).length
                        : true
                    )
                    .filter(product => selectedPlatformsNames.length
                        ? product.systemRequirements.filter(req =>
                            selectedPlatformsNames.includes(req.os)
                          ).length
                        : true
                    )
            },
            selectedGenres() {
                return this.selectableTags.filter(tag => tag.selected)
            },
            selectedSpecials() {
                return this.systemTags.filter(tag => tag.selected)
            },
            selectedLanguages() {
                return this.selectableLanguages.filter(lang => lang.selected)
            },
            selectedLanguagesNames() {
                return this.selectedLanguages.map(lang => lang.name)
            },
            selectedPlatforms() {
                return this.platforms.filter(platform => platform.selected)
            },
            selectedPlatformsNames() {
                return this.selectedPlatforms.map(platform => platform.prop)
            },
            filtersActive() {
                return !!(this.selectedGenres.length ||
                    this.phrase.length ||
                    this.selectedSpecials.length ||
                    this.price.max || this.price.min ||
                    this.selectedLanguages.length ||
                    this.communitySize || this.activeUsers ||
                    this.selectedPlatforms.length)
            },
            urlQuery() {
                const urlQuery = {}
                const {
                    phrase,
                    selectedSpecials,
                    selectedGenres,
                    selectedLanguages,
                    price,
                    communitySize,
                    activeUsers,
                    selectedPlatforms
                } = this

                if (phrase.length) urlQuery.name = phrase
                if (price.min) urlQuery.priceMin = price.min
                if (price.max) urlQuery.priceMax = price.max
                if (selectedSpecials.length) urlQuery.specials = selectedSpecials.map(tag => tag.value)
                if (selectedGenres.length) urlQuery.tags = selectedGenres.map(tag => tag.name)
                if (selectedLanguages.length) urlQuery.langs = this.selectedLanguagesNames
                if (communitySize) urlQuery.communitySize = communitySize
                if (activeUsers) urlQuery.activeUsers = activeUsers
                if (selectedPlatforms.length) urlQuery.platforms = this.selectedPlatformsNames
                return urlQuery
            }
        },
        mounted() {
            if (!Object.keys(this.$route.query).length) {
                this.results = this.products
            } else {

                this.isTyping = true
                const {
                    tags,
                    langs,
                    name,
                    priceMin,
                    priceMax,
                    specials,
                    showFilters,
                    activeUsers,
                    communitySize,
                    platforms
                } = this.$route.query

                if (name) this.phrase = name
                if (priceMin) this.price.min = priceMin
                if (priceMax) this.price.max = priceMax

                this.selectableTags = this.productsTags.map(tag => ({
                    name: tag, selected: tags && tags.includes(tag)
                }))

                this.selectableLanguages = this.languages.map(lang => ({
                    name: lang, selected: !!(langs && langs.includes(lang))
                }))

                if (showFilters) this.expandFilters = true
                if (activeUsers) this.activeUsers = activeUsers
                if (communitySize) this.communitySize = communitySize
                if (platforms) this.platforms.forEach(platform => {
                    if (platforms.includes(platform.prop)) platform.selected = true
                })

                if (specials) {
                    this.systemTags.forEach(tag => {
                        if (specials.includes(tag.value)) tag.selected = true
                    })
                }
            }
        },
        watch: {
            urlQuery: {
                handler: 'search',
                deep: true
            }
        },
        filters: {
            replaceLoDash(val) {
                return val.replace(/_/g, ' ')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search__main {
        display: flex;
        align-items: center;
        .input-searcher {
            margin-right: 30px;
            width: 300px;
        }
        margin-bottom: 40px;
    }

    .search-filters__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .filter-box {
        margin: 10px;
        flex: 1;
        min-width: 180px;
        padding: 10px;
        border-radius: 4px;
        background: rgba(255,255,255,.03);
        // max-width: 50%;
    }

    .searching-box {
        margin-bottom: 30px;
    }

    .c-checkbox {
        display: block !important;
        margin: 5px 0;
    }

    .active-filters {
        margin-bottom: 30px;
    }
    .active-filters__content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .results__container {
        min-height: 800px;
    }
    .results {
        display: flex;
        justify-content: center;
    }

    .input-group {
        border-color: rgba(0, 0, 0, .7);
        border-radius: 5px;
        overflow: hidden;
        .input-group-append {
            margin: 0;
            .input-group-text {
                border: none;
            }
        }
        input {
            border: none;
            &:active,
            &:focus {
                border: unset;
                box-shadow: none;
            }
        }
    }
    .platform-icon {
        font-size: 18px;
        margin-right: 5px;
    }
</style>
