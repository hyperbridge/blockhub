<template>
    <div>
        <div v-if="loading"
             class="col-12 text-center">
            <c-spinner />
        </div>
        <template v-else>
            <div v-if="!visibleItems.length"
                 class="col-12 text-center">
                <h3>No results</h3>
            </div>
            <slot :items="visibleItems" />
            <div v-show="visibleItems.length"
                 class="content-navigation-wrapper">
                <c-pagination
                    v-if="paginationMode"
                    v-bind="$attrs"
                    :activePage="activePage + 1"
                    :pages="pagination.pages"
                    @pageChange="activePage = $event - 1">
                    <slot slot="left-content"
                          name="left-content" />
                    <slot slot="right-content"
                          name="right-content" />
                </c-pagination>
                <c-load-more
                    v-else
                    v-bind="$attrs"
                    @click="loadMore()">
                    {{ itemsLeft ? 'Load More +' + itemsLeft : 'Show Less' }}
                </c-load-more>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'ContentNavigation',
    components: {
        'c-pagination': () => import('~/components/pagination').then(m => m.default || m),
        'c-spinner': () => import('~/components/spinner').then(m => m.default || m),
        'c-load-more': () => import('~/components/buttons/load-more').then(m => m.default || m)
    },
    inheritAttrs: false,
    props: {
        loading: Boolean,
        items: {
            type: Array,
            default: () => []
        },
        setItemsLimit: {
            type: Number,
            default: 6
        },
        setItemsPerPage: {
            type: Number,
            default: 6
        },
        setLimits: Number
    },
    data() {
        return {
            activePage: 0,
            limitTo: this.setLimits || this.setItemsLimit,
            itemsPerPage: this.setLimits || this.setItemsPerPage
        }
    },
    computed: {
        paginationMode() {
            return this.$store.state.application.settings.client.pagination
        },
        pagination() {
            const startPage = this.activePage * this.itemsPerPage
            const pages = Math.ceil(this.items.length / this.itemsPerPage)
            return {
                start: startPage,
                end: startPage + this.itemsPerPage,
                pages
            }
        },
        visibleItems() {
            return this.paginationMode
                ? this.items.slice(this.pagination.start, this.pagination.end)
                : this.items.slice(0, this.limitTo)
        },
        visibleItemsLength() {
            return this.visibleItems.length
        },
        itemsLeft() {
            return this.items.length - this.visibleItemsLength
        }
    },
    watch: {
        visibleItemsLength(length) {
            if (length === 0 && this.activePage > 0) {
                this.activePage = 0
            }
        }
    },
    methods: {
        loadMore() {
            if (this.limitTo < this.items.length) {
                this.limitTo += this.setItemsLimit
            } else {
                this.limitTo -= this.setItemsLimit
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .content-navigation-wrapper {
        width: 100%;
        margin: 15px 0;
        display: flex;
        justify-content: center;
    }
</style>
