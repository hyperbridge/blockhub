<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-block title="Search" class="searching-box">
                            <div class="search__main">
                                <c-input-searcher
                                    v-model="phrase"
                                    @input="search"
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
                                    <h4>Specials:</h4>
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
                                    <h4>Price range:</h4>
                                    <p class="margin-top-20">Minimum:</p>
                                    <c-range-slider
                                        v-model.number="price.min"
                                        :max="300"
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
                                </div>
                            </div>
                        </transition>
                        <h3>Results</h3>
                        <div class="results">
                            <c-spinner v-if="isTyping"/>
                            <p v-else-if="!results.length">
                                No results were found for provided filters
                            </p>
                            <c-game-grid
                                v-else
                                :itemInRow="2"
                                :showRating="false"
                                :items="results"
                                itemBg="transparent"
                                showTime
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { debouncer } from '@/mixins';

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-checkbox': (resolve) => require(['@/ui/components/checkbox/'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
            'c-game-grid': (resolve) => require(['@/ui/components/games-grid/with-description'], resolve),
            'c-spinner': (resolve) => require(['@/ui/components/spinner'], resolve),
            'c-option-tag': (resolve) => require(['@/ui/components/option-tag'], resolve),
            'c-range-slider': (resolve) => require(['@/ui/components/range-slider/pure'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
        },
        mixins: [debouncer],
        data() {
            return {
                filters: {
                    game_type: {
                        simulator: {
                            label: 'Simulator',
                            value: false
                        },
                        action: {
                            label: 'Action',
                            value: true
                        },
                        real_time: {
                            label: 'Real time',
                            value: false
                        },
                        strategy: {
                            label: 'Strategy',
                            value: false
                        },
                        adventure: {
                            label: 'Adventure',
                            value: false
                        }
                    }
                },
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
                expandFilters: false
            }
        },
        methods: {
            search(phrase) {
                this.phrase = phrase;
                if (!this.isTyping) this.isTyping = true;

                this.debounce(() => {
                    this.isTyping = false;
                    this.results = this.getProductsByName(phrase);
                }, 400);
            }
        },
        computed: {
            ...mapGetters({
                getProductsByName: 'marketplace/getProductsByName',
                products: 'marketplace/productsArray',
                productsTags: 'marketplace/productsTags',
                languages: 'marketplace/productsLanguages'
            }),
            marketplace() {
                return this.$store.state.marketplace;
            },
            selectedGenres() {
                return this.selectableTags.filter(tag => tag.selected);
            },
            selectedSpecials() {
                return this.systemTags.filter(tag => tag.selected);
            },
            selectedLanguages() {
                return this.selectableLanguages.filter(lang => lang.selected);
            },
            filtersActive() {
                return !!(this.selectedGenres.length ||
                    this.phrase.length ||
                    this.selectedSpecials.length ||
                    this.price.max || this.price.min ||
                    this.selectedLanguages.length);
            },
            filtered() {
                return this.marketplace.products.filter(product => {
                    // product.
                })
            }
        },
        mounted() {
            this.results = this.products;
            this.selectableTags = this.productsTags.map(tag => ({ name: tag, selected: false }));
            this.selectableLanguages = this.languages.map(lang => ({ name: lang, selected: false }));
        },
        filters: {
            replaceLoDash(val) {
                return val.replace(/_/g, ' ');
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
</style>
