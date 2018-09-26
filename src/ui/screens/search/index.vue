<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <c-block title="Search">
                            <div class="row align-items-center">
                                <div class="col-12 col-md-6 col-lg-8">
                                    <c-input-searcher v-model="phrase" @input="search"/>
                                </div>
                                <div class="col-12 col-md-auto">
                                    <c-button status="success" size="lg" icon="sliders-h" data-toggle="collapse" data-target="#moreFilters" aria-expanded="false" aria-controls="collapseFilters">
                                        Filters
                                    </c-button>
                                </div>
                            </div>
                            <div class="collapse" id="moreFilters">
                                <hr>
                                <!--Checkbox list-->
                                <div class="row">
                                    <div class="tab-card col-12 col-md-4 col-lg-3 mb-4">
                                        <div class="checkbox-list">
                                            <c-checkbox-group title="Game type">
                                                <c-checkbox v-for="(item, index) in filters.game_type"
                                                            :key="index"
                                                            :id="'game_type_' + index"
                                                            :label="item.label"
                                                            v-model="item.value" />
                                            </c-checkbox-group>
                                        </div>
                                    </div>
                                </div>
                                <!--Checkbox list End-->
                                <!--Input row-->
                                <div class="row">
                                    <div class="col-12 col-md-4 col-lg-3">
                                        <div class="form-group">
                                            <label>Search Title 1</label>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                    <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 col-lg-3">
                                        <div class="form-group">
                                            <label>Search Title 2</label>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                    <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 col-lg-3">
                                        <div class="form-group">
                                            <label>Search Title 3</label>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search" aria-label="Search">
                                                    <div class="input-group-append">
                                                            <span class="input-group-text">
                                                                <i class="fas fa-search"></i>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <c-dropdown-list
                                        :list="selectableTags"
                                        @click="tag => tag.selected = !tag.selected"
                                    />
                                </div>
                            </div>
                        </c-block>
                        <div class="filter-tags">
                            <div class="filter-tags__item"
                                 v-for="(item, index) in filters.game_type"
                                 :key="index" v-if="item.value == true">
                                {{ item.label }}
                                <i class="fas fa-times-circle" @click="$emit('click')"></i>
                            </div>
                        </div>
                        <h3>Active filters</h3>
                        <div class="active-filters">
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
                        <div>
                            <h3>Results</h3>
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
            }
        },
        mounted() {
            this.results = this.products;
            this.selectableTags = this.productsTags.map(tag => ({ name: tag, selected: true }));
        }
    }
</script>

<style lang="scss" scoped>
    .filter-tags {
        display: flex;
        margin: 10px -4px;
    }
    .filter-tags__item {
        background: #fae17d;
        padding: 0px  3px 0 10px;
        border-radius: 15px;
        margin: 4px;
        color: #30304B;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 20px;
        i {
            margin-left: 5px;
            font-size: 16px;
            &:hover {
                color: #45456c;
                cursor: pointer;
            }
        }
    }

    .active-filters {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
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
