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
                @changeTab="category = $event; clearFilters()"
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
                    <c-dropdown id="products-genres" name="Filter by Genre" :showBg="true" class="product-genre">
                        <div class="product-genre__content">
                            <a
                                v-for="genre in availableGenres"
                                :key="genre"
                                :href="`#${genre}`"
                                :class="{ 'product-genre__btn--active': genre === activeGenre }"
                                @click.prevent="setGenre(genre)"
                            >{{ genre }}</a>
                        </div>
                    </c-dropdown>
                    <c-input-searcher
                        v-model="phrase"
                    />
                </div>
                <c-button status="info" icon_hide>All New Releases</c-button>
            </div>
            <transition name="slide-in">
                <div v-if="filtersActive" class="active-filters">
                    Active filters:
                    <div class="active-filters__content">
                        <c-option-tag
                            v-if="phrase.length"
                            title="Name:"
                            :text="phrase"
                            @delete="phrase = ''"
                        />
                        <c-option-tag
                            v-if="selectedGenres.length"
                            title="Genres:"
                            @delete="selectedGenres = []"
                        >
                            <c-option-tag
                                v-for="(genre, index) in selectedGenres"
                                :key="genre"
                                :text="genre"
                                @delete="selectedGenres.splice(index, 1)"
                                isNested
                            />
                        </c-option-tag>
                    </div>
                </div>
            </transition>
            <c-game-grid
                v-if="filteredProducts.length"
                :itemInRow="2"
                :showRating="false"
                :items="filteredProducts"
                showTime
                itemBg="transparent"
            />
            <div v-else-if="filtersActive">
                <p>No products were found for your filters</p>
                <c-button
                    status="info"
                    size="md"
                    icon_hide
                    @click="clearFilters()"
                >Clear filters</c-button>
            </div>
            <p v-else>
                No products were found
            </p>
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
            'c-input-searcher': () => import('@/ui/components/inputs/searcher'),
            'c-dropdown': () => import('@/ui/components/dropdown-menu/type-2'),
            'c-game-grid': () => import('@/ui/components/games-grid/with-description'),
            'c-content-navigation': () => import('@/ui/components/content-navigation'),
            'c-option-tag': () => import('@/ui/components/option-tag')
        },
        data() {
            return {
                category: 'top_selling_products',
                phrase: '',
                activeGenre: null,
                selectedGenres: [],
                sortBy: {
                    property: 'date',
                    desc: true
                }
            }
        },
        methods: {
            setGenre(genre) {
                this.activeGenre = this.activeGenre === genre ? null : genre;
            },
            clearFilters() {
                this.activeGenre = null;
                this.phrase = '';
            }
        },
        computed: {
            products() {
                return this.$store.state.marketplace[this.category];
            },
            filteredProducts() {
                return this.products
                    .filter(product =>
                        product.name.toLowerCase().includes(this.phrase.toLowerCase())
                    )
                    .filter(product => this.activeGenre
                        ? product.developer_tags.includes(this.activeGenre)
                        : true
                    )
            },
            availableGenres() {
                return this.products.reduce((tags, product) => {
                    product.developer_tags.forEach(tag => {
                        if (!tags.includes(tag)) tags.push(tag);
                    });
                    return tags;
                }, []);
            },
            filtersActive() {
                const { phrase, activeGenre } = this;
                return phrase.length || activeGenre;
            }
        },
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
    .product-genre__content {
        max-height: 260px;
        overflow-y: auto;
    }
    .product-genre__btn--active {
        background: rgba(255,255,255,.1);
    }

    .slide-in-enter-active, .slide-in-active {
        transition: transform .25s ease, opacity .25s ease;
    }
    .slide-in-enter, .slide-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }

    .active-filters {
        margin: 20px 0;
    }
    .active-filters__content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
</style>
