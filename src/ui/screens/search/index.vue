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
                                >Filters</c-button>
                            </div>

                            <div class="collapse" id="expand-filters">
                                <div>
                                    <h4>Specials</h4>
                                    <c-checkbox
                                        v-for="(tag, index) in systemTags"
                                        :key="index"
                                        v-model="tag.selected"
                                    >
                                        {{ tag.value | replaceLoDash | upperFirstChar }}
                                    </c-checkbox>
                                </div>
                                <h4>Genres</h4>
                                <div class="row">
                                    <c-dropdown-list
                                        :list="selectableTags"
                                        @click="tag => tag.selected = !tag.selected"
                                    />
                                </div>
                            </div>
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
                                        isParent
                                    >
                                        <c-option-tag
                                            v-for="(genre, index) in selectedGenres"
                                            :key="index"
                                            :text="genre.name"
                                            @delete="genre.selected = false"
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
            'c-checkbox-group': (resolve) => require(['@/ui/components/checkbox/group'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
            'c-game-grid': (resolve) => require(['@/ui/components/games-grid/with-description'], resolve),
            'c-spinner': (resolve) => require(['@/ui/components/spinner'], resolve),
            'c-option-tag': (resolve) => require(['@/ui/components/option-tag'], resolve),
            'c-dropdown-list': (resolve) => require(['@/ui/components/dropdown-menu/list'], resolve),
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
                selectableTags: []
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
                productsTags: 'marketplace/productsTags'
            }),
            marketplace() {
                return this.$store.state.marketplace;
            },
            selectedGenres() {
                return this.selectableTags.filter(tag => tag.selected);
            },
            filtersActive() {
                return this.selectedGenres.length || this.phrase.length;
            }
        },
        mounted() {
            this.results = this.products;
            this.selectableTags = this.productsTags.map(tag => ({ name: tag, selected: false }));
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
