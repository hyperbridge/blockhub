<template>
    <Layout>
        <template slot="left-sidebar">
            <div class="navigation container">
                <h3>
                    SEARCH
                </h3>
                <div class="search__main">
                    <InputSearcher
                        v-model="phrase"
                        class="w-100"
                        placeholder="Search for games"
                        aria-placeholder="Search for games" />
                    <!-- <Button
                        class="col-12"
                        status="success"
                        size="lg"
                        icon="sliders-h"
                        data-toggle="collapse"
                        data-target="#expand-filters"
                        aria-expanded="false"
                        aria-controls="collapseFilters"
                        @click="expandFilters = !expandFilters"
                    >Filters</Button> -->
                </div>
                <transition name="slide-in-top">
                    <div
                        v-if="expandFilters"
                        class="search-filters__container">
                        <div class="filter-box">
                            <h4>
                                Specials:
                                <span v-show="selectedTags.length">
                                    ({{ selectedTags.length }})
                                </span>
                            </h4>
                            <Checkbox
                                v-for="(tag, index) in tags"
                                :id="`specials-${tag.value}`"
                                :key="index"
                                v-model="tag.selected">
                                {{ tag.value | replaceLoDash | upperFirstChar }}
                            </Checkbox>
                        </div>
                        <div class="filter-box">
                            <h4>
                                Price range:
                                <span v-show="price.min && price.max">
                                    ({{ price.min }} - {{ price.max }})
                                </span>
                            </h4>
                            <p class="margin-top-20">
                                Minimum:
                            </p>
                            <RangeSlider
                                v-model.number="price.min"
                                :min="0"
                                :max="60" />
                            <p class="margin-top-20">
                                Maximum:
                            </p>
                            <RangeSlider
                                v-model.number="price.max"
                                :max="300" />
                        </div>
                        <div class="filter-box">
                            <h4>
                                Genres:
                                <span v-show="selectedGenres.length">
                                    ({{ selectedGenres.length }})
                                </span>
                            </h4>
                            <List
                                :items="selectableTags"
                                @click="tag => tag.selected = !tag.selected" />
                        </div>
                        <div class="filter-box">
                            <h4>
                                Languages:
                                <span v-show="selectedLanguages.length">
                                    ({{ selectedLanguages.length }})
                                </span>
                            </h4>
                            <div>
                                <List
                                    :items="selectableLanguages"
                                    @click="item => item.selected = !item.selected" />
                            </div>
                        </div>
                        <div class="filter-box">
                            <h4>Community:</h4>
                            <p class="margin-top-20">
                                Size:
                            </p>
                            <RangeSlider
                                v-model.number="communitySize"
                                :max="1000" />
                            <p class="margin-top-20">
                                Active Users:
                            </p>
                            <RangeSlider
                                v-model.number="activeUsers"
                                :max="5000" />
                        </div>
                        <div class="filter-box">
                            <h4>System:</h4>
                            <Checkbox
                                v-for="os in platforms"
                                :id="`specials-${os.prop}`"
                                :key="os.prop"
                                v-model="os.selected">
                                <Icon
                                    cat="fab"
                                    class="platform-icon"
                                    :name="os.icon"
                                    :class="[ os.selected
                                        ? 'icon--active'
                                        : 'icon--inactive'
                                    ]" />
                                {{ os.name }}
                            </Checkbox>
                        </div>
                    </div>
                </transition>
            </div>
        </template>

        <div class="row">
            <div class="col-12">
                <transition name="slide-in-top">
                    <div
                        v-if="filtersActive"
                        class="active-filters">
                        <!-- <h3>Active filters</h3> -->
                        <div class="active-filters__content">
                            <OptionTag
                                v-if="phrase.length"
                                title="NAME:"
                                :text="phrase"
                                @delete="phrase = ''" />
                            <OptionTag
                                v-if="selectedGenres.length"
                                title="GENRES:"
                                @delete="selectedGenres.forEach(genre => genre.selected = false)">
                                <OptionTag
                                    v-for="(genre, index) in selectedGenres"
                                    :key="index"
                                    :text="genre.name"
                                    isChildren
                                    @delete="genre.selected = false" />
                            </OptionTag>
                            <OptionTag
                                v-if="selectedTags.length"
                                title="SPECIALS:"
                                @delete="selectedTags.forEach(tag => tag.selected = false)">
                                <OptionTag
                                    v-for="(tag, index) in selectedTags"
                                    :key="index"
                                    :text="tag.value | replaceLoDash | upperFirstChar"
                                    isChildren
                                    @delete="tag.selected = false" />
                            </OptionTag>
                            <OptionTag
                                v-if="price.min > 0 || price.max > 0"
                                title="PRICE RANGE:"
                                @delete="price.min = 0; price.max = 0">
                                <OptionTag
                                    v-if="price.min"
                                    title="Minimum:"
                                    :text="price.min"
                                    isChildren
                                    @delete="price.min = 0" />
                                <OptionTag
                                    v-if="price.max"
                                    title="Maximum:"
                                    :text="price.max"
                                    isChildren
                                    @delete="price.max = 0" />
                            </OptionTag>
                            <OptionTag
                                v-if="selectedLanguages.length"
                                title="LANGUAGES:"
                                @delete="selectableLanguages.forEach(lang => lang.selected = false)">
                                <OptionTag
                                    v-for="(lang, index) in selectedLanguages"
                                    :key="index"
                                    :text="lang.name"
                                    isChildren
                                    @delete="lang.selected = false" />
                            </OptionTag>
                            <OptionTag
                                v-if="communitySize || activeUsers"
                                title="COMMUNITY:"
                                @delete="communitySize = 0; activeUsers = 0">
                                <OptionTag
                                    v-if="communitySize"
                                    title="Size:"
                                    :text="communitySize"
                                    isChildren
                                    @delete="communitySize = 0" />
                                <OptionTag
                                    v-if="activeUsers"
                                    title="Active users:"
                                    :text="activeUsers"
                                    isChildren
                                    @delete="activeUsers = 0" />
                            </OptionTag>
                            <OptionTag
                                v-if="selectedPlatforms.length"
                                title="PLATFORMS:"
                                @delete="selectedPlatforms.forEach(os => os.selected = false)">
                                <OptionTag
                                    v-for="(os, index) in selectedPlatforms"
                                    :key="index"
                                    :text="os.name | upperFirstChar"
                                    isChildren
                                    @delete="os.selected = false" />
                            </OptionTag>
                            <OptionTag
                                title="Clear All"
                                @delete="clearFilters()" />
                        </div>
                    </div>
                </transition>
                <!-- <h3>Results</h3> -->
                <!-- <div class="results__container"> -->
                <!--<div class="results">-->
                <ContentNavigation
                    class="results__container row"
                    :loading="loading"
                    :items="resultsFiltered"
                    :setItemsLimit="12"
                    :setItemsPerPage="12">
                    <div
                        v-for="(project, index) in resultsFiltered"
                        :key="index"
                        class="p-2 col-12 col-md-6 col-lg-4 col-xl-3">
                        <ProjectCard
                            :id="project.id"
                            :image="project.meta.images && project.meta.images.mediumTile"
                            :description="project.description"
                            :funds="project.meta.funds"
                            :parentName="project.product && project.product.name"
                            :parentDeveloper="project.product && project.product.developer"
                            :parentImage="project.product && project.product.meta.images.mediumTile"
                            class="p-0" />
                    </div>
                    <!-- <GameGrid
                        slot-scope="{ items }"
                        :itemInRow="2"
                        :showRating="false"
                        :items="items"
                        itemBg="transparent"
                        showTime
                    >
                    </GameGrid> -->
                </ContentNavigation>
            </div>
            <!-- </div> -->
            <!--</div>-->
        </div>
    </Layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { debounce } from '@/mixins'

export default {
    components: {
        'InputSearcher': () => import('@ericmuyser/hyper-ui').then(m => m.InputSearcher),
        'ProjectCard': () => import('@ericmuyser/hyper-ui').then(m => m.ProjectCard),
        'OptionTag': () => import('@ericmuyser/hyper-ui').then(m => m.OptionTag),
        'RangeSlider': () => import('@ericmuyser/hyper-ui').then(m => m.RangeSlider),
        'List': () => import('@ericmuyser/hyper-ui').then(m => m.List),
        'ContentNavigation': () => import('@ericmuyser/hyper-ui').then(m => m.ContentNavigation)
    },
    watchQuery: ['page', 'count'],
    filters: {
        replaceLoDash(val) {
            return val.replace(/_/g, ' ')
        }
    },
    mixins: [debounce],
    data() {
        return {
            tags: [
                { value: 'featured', selected: false },
                { value: 'new', selected: false },
                { value: 'sale', selected: false },
                { value: 'specials', selected: false },
                { value: 'topSeller', selected: false },
                { value: 'trending', selected: false },
                { value: 'upcoming', selected: false },
                { value: 'series', selected: false }
            ],
            phrase: '',
            results: [],
            loading: false,
            selectableTags: [],
            selectableLanguages: [],
            price: {
                min: 0,
                max: 0
            },
            expandFilters: true,
            communitySize: 0,
            activeUsers: 0,
            platforms: [
                { prop: 'win', icon: 'windows', name: 'Windows', selected: false },
                { prop: 'mac', icon: 'apple', name: 'macOS', selected: false },
                { prop: 'linux', icon: 'linux', name: 'Linux', selected: false }
            ]
        }
    },
    mounted() {
        if (Object.keys(this.$route.query).length) {
            this.loading = true
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
                name: lang, selected: Boolean(langs && langs.includes(lang))
            }))

            if (showFilters) this.expandFilters = true
            if (activeUsers) this.activeUsers = activeUsers
            if (communitySize) this.communitySize = communitySize
            if (platforms) {
                this.platforms.forEach(platform => {
                    if (platforms.includes(platform.prop)) platform.selected = true
                })
            }

            if (specials) {
                this.tags.forEach(tag => {
                    if (specials.includes(tag.value)) tag.selected = true
                })
            }
        } else {
            this.results = this.products
        }
    },
    methods: {
        search() {
            this.debounce(() => {
                if (!this.loading) this.loading = true

                // if (this.filtersActive) {
                this.$api.service(`/search`).find(
                    {
                        query: this.query
                    }
                ).then(res => {
                    this.results = res.projects.data // [...this.getProductsQuery(this.query)]
                    this.loading = false
                })
                    .catch(e => {
                        this.results = []
                        this.loading = false
                    })
                // } else {
                //     this.loading = false
                //     this.results = this.products
                // }

                this.$router.replace({ path: '/search', query: this.urlQuery })
            }, 500)
        },
        clearFilters() {
            const {
                phrase,
                selectedTags,
                selectedGenres,
                selectedLanguages,
                price,
                communitySize,
                activeUsers,
                selectedPlatforms
            } = this

            if (phrase.length) this.phrase = ''
            if (selectedTags.length) this.selectedTags.forEach(tag => tag.selected = false)
            if (selectedGenres.length) this.selectedGenres.forEach(tag => tag.selected = false)
            if (selectedLanguages.length) this.selectedLanguages.forEach(lang => lang.selected = false)
            if (price.min || price.max) { this.price.min = 0; this.price.max = 0 }
            if (communitySize || activeUsers) { this.communitySize = 0; this.activeUsers = 0 }
            if (selectedPlatforms.length) this.selectedPlatforms.forEach(platform => platform.selected = false)
        }
    },
    computed: {
        ...mapGetters({
            getProductsQuery: 'marketplace/getProductsQuery',
            products: 'marketplace/productsArray',
            // productsTags: 'marketplace/productsTags',
            languages: 'marketplace/productsLanguages'
        }),
        genres() {
            return []
        },
        query() {
            const { phrase, selectedTags, selectedGenres, selectedLanguages, price, communitySize, activeUsers } = this
            const query = {}

            if (phrase.length) query.name = { '$eq': phrase }
            if (selectedTags.length) query.tags = { '$contains': selectedTags.map(tag => tag.value) }
            if (selectedGenres.length) query.genres = { '$contains': selectedGenres.map(tag => tag.name) }
            // if (selectedLanguages.length) query['languageSupport'] = {
            //     '$contains': { name: selectedLanguages.map(lang => lang.name) }
            // }
            if (price.min || price.max) query.price = { '$between': [price.min, price.max | 300] }
            if (communitySize) query.communitySize = { '$between': [communitySize, 999999999] }
            if (activeUsers) query.activeUsers = { '$between': [activeUsers, 999999999] }

            return query
        },
        resultsFiltered() {
            const { selectedLanguagesNames, selectedPlatformsNames } = this

            return this.results
                .filter(product => selectedLanguagesNames.length
                    ? product.languageSupport.filter(lang =>
                        selectedLanguagesNames.includes(lang.name)).length
                    : true)
                .filter(product => selectedPlatformsNames.length
                    ? product.systemRequirements.filter(req =>
                        selectedPlatformsNames.includes(req.os)).length
                    : true)
        },
        selectedGenres() {
            return this.selectableTags.filter(tag => tag.selected)
        },
        selectedTags() {
            return this.tags.filter(tag => tag.selected)
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
            return Boolean(this.selectedGenres.length ||
                    this.phrase.length ||
                    this.selectedTags.length ||
                    this.price.max || this.price.min ||
                    this.selectedLanguages.length ||
                    this.communitySize || this.activeUsers ||
                    this.selectedPlatforms.length)
        },
        urlQuery() {
            const urlQuery = {}
            const {
                phrase,
                selectedTags,
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
            if (selectedTags.length) urlQuery.specials = selectedTags.map(tag => tag.value)
            if (selectedGenres.length) urlQuery.tags = selectedGenres.map(tag => tag.name)
            if (selectedLanguages.length) urlQuery.langs = this.selectedLanguagesNames
            if (communitySize) urlQuery.communitySize = communitySize
            if (activeUsers) urlQuery.activeUsers = activeUsers
            if (selectedPlatforms.length) urlQuery.platforms = this.selectedPlatformsNames

            return urlQuery
        }
    },
    watch: {
        urlQuery: {
            handler: 'search',
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .search__main {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }

    .search-filters__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .filter-box {
        flex: 1;
        min-width: 180px;
        padding: 10px;
        padding-left: 0;
        border-radius: 4px;
    }

    .searching-box {
        margin-bottom: 30px;
    }

    .checkbox {
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
