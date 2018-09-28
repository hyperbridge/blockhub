<template>
    <div class="row product-grid">
        <c-block :noGutter="true" :bgGradient="true" :onlyContentBg="true">
            <c-heading-bar
                slot="title"
                class="mb-0"
                :headingTabs="[
                    { title: 'Top Games', category: 'top_selling_products' },
                    { title: 'New Releases', category: 'new_products' },
                    { title: 'Upcoming', category: 'upcoming_products' }
                ]"
                @changeTab="category = $event; clearFilters()"
            >
                <template slot="additional-action">
                    <span class="sort-title">Sort by:</span>
                    <c-heading-bar-fields
                        v-for="(opt, index) in sortOptions"
                        :key="index"
                        :name="opt.title"
                        :icon="opt.icon"
                        @clickUp="setSort(opt.property, true)"
                        @clickDown="setSort(opt.property, false)"
                        :activeUp="sortBy.property === opt.property ? sortBy.asc : null"
                    />
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
                                :class="{ 'product-genre__btn--active': selectedGenres.includes(genre) }"
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
                            title="NAME:"
                            :text="phrase"
                            @delete="phrase = ''"
                        />
                        <c-option-tag
                            v-if="selectedGenres.length"
                            title="GENRES:"
                            @delete="selectedGenres = []"
                            isParent
                        >
                            <c-option-tag
                                v-for="(genre, index) in selectedGenres"
                                :key="index"
                                :text="genre"
                                @delete="selectedGenres.splice(index, 1)"
                                isChildren
                            />
                        </c-option-tag>
                        <c-option-tag
                            v-if="sortBy.property"
                            title="SORT BY:"
                            @delete="sortBy.property = null"
                        >
                            <c-option-tag
                                title="Property:"
                                @delete="sortBy.property = null"
                                isChildren
                                :isParent="false"
                            >
                                <select v-model="sortBy.property">
                                    <option
                                        v-for="prop in sortProps"
                                        :key="prop"
                                        :value="prop"
                                    >
                                        {{ prop | upperFirstChar }}
                                    </option>
                                </select>
                            </c-option-tag>
                            <c-option-tag
                                title="Direction:"
                                @delete="sortBy.asc = !sortBy.asc"
                                isChildren
                                :isParent="false"
                                hideButton
                            >
                                {{ sortBy.asc ? 'Ascending' : 'Descending' }}
                                <c-icon
                                    name="arrow-up"
                                    class="sort-button"
                                    :class="{ 'desc': !sortBy.asc }"
                                    @click="sortBy.asc = !sortBy.asc"
                                />
                            </c-option-tag>
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
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-heading-bar-fields': (resolve) => require(['@/ui/components/heading-bar/additional-action'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-2'], resolve),
            'c-game-grid': (resolve) => require(['@/ui/components/games-grid/with-description'], resolve),
            'c-content-navigation': (resolve) => require(['@/ui/components/content-navigation'], resolve),
            'c-option-tag': (resolve) => require(['@/ui/components/option-tag'], resolve)
        },
        data() {
            return {
                category: 'top_selling_products',
                phrase: '',
                selectedGenres: [],
                sortBy: {
                    property: null,
                    asc: true
                },
                sortOptions: [
                    { title: 'Name', property: 'name', icon: 'language' },
                    { title: 'Price', property: 'price', icon: 'dollar-sign' },
                ]
            }
        },
        methods: {
            setGenre(genre) {
                const genreKey = this.selectedGenres.indexOf(genre);
                genreKey > -1
                 ? this.selectedGenres.splice(genreKey, 1)
                 : this.selectedGenres.push(genre)
            },
            clearFilters() {
                this.selectedGenres = [];
                this.phrase = '';
                this.sortBy.property = null;
                this.sortBy.asc = true;
            },
            setSort(prop, direction) {
                const { property, asc } = this.sortBy;
                this.sortBy.property = property === prop && direction === asc
                 ? null
                 : prop
                this.sortBy.asc = direction;
            },
        },
        computed: {
            products() {
                return this.$store.state.marketplace[this.category];
            },
            filteredProducts() {
                const { property, asc } = this.sortBy;
                const sortDir = dir => asc ? dir : dir * -1;
                return this.products
                    .filter(product =>
                        product.name.toLowerCase().includes(this.phrase.toLowerCase())
                    )
                    .filter(product => this.selectedGenres.length
                        ? product.developer_tags.some(genre => this.selectedGenres.includes(genre))
                        : true
                    )
                    .sort((a, b) => property
                        ? a[property] > b[property]
                            ? sortDir(1)
                            : a[property] < b[property] ? sortDir(-1) : 0
                        : 0
                    );
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
                const { phrase, selectedGenres, sortBy: { property } } = this;
                return phrase.length || selectedGenres.length || property;
            },
            sortProps() {
                return this.sortOptions.map(option => option.property);
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

    .slide-in-enter-active {
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

    .sort-button {
        color: rgba(1,1,1,.8);
        margin-left: 6px;
        transition: transform .2s ease;
        cursor: pointer;
        &.desc {
            transform: rotate(180deg);
        }
    }
</style>
