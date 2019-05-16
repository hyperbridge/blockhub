<template>
    <div>
        <div class="col-12 text-center" v-if="loading">
            <c-spinner />
        </div>
        <template v-else>
            <div class="col-12 text-center" v-if="!visibleItems.length">
                <h3>No results</h3>
            </div>
            <slot :items="visibleItems" />
            <div class="content-navigation-wrapper" v-show="visibleItems.length">
                <c-pagination
                    v-if="paginationMode"
                    v-bind="$attrs"
                    :activePage="activePage + 1"
                    :pages="pagination.pages"
                    @pageChange="activePage = $event - 1"
                >
                    <slot name="left-content" slot="left-content"/>
                    <slot name="right-content" slot="right-content"/>
                </c-pagination>
                <c-load-more
                    v-else
                    v-bind="$attrs"
                    @click="loadMore()"
                >
                {{ itemsLeft ? 'Load More +' + itemsLeft : 'Show Less' }}
                </c-load-more>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'content-navigation',
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
        components: {
            'c-pagination': (resolve) => require(['@/components/pagination'], resolve),
            'c-spinner': (resolve) => require(['@/components/spinner'], resolve),
            'c-load-more': (resolve) => require(['@/components/buttons/load-more'], resolve)
        },
        data() {
            return {
                activePage: 0,
                limitTo: this.setLimits || this.setItemsLimit,
                itemsPerPage: this.setLimits || this.setItemsPerPage
            }
        },
        methods: {
            loadMore() {
                if (this.limitTo < this.items.length) {
                    this.limitTo += this.setItemsLimit;
                } else {
                    this.limitTo -= this.setItemsLimit;
                }
            }
        },
        computed: {
            paginationMode() {
                return this.$store.state.application.settings.client.pagination;
            },
            pagination() {
                const startPage = this.activePage * this.itemsPerPage;
                const pages = Math.ceil(this.items.length / this.itemsPerPage);
                return {
                    start: startPage,
                    end: startPage + this.itemsPerPage,
                    pages
                };
            },
            visibleItems() {
                return this.paginationMode
                    ? this.items.slice(this.pagination.start, this.pagination.end)
                    : this.items.slice(0, this.limitTo);
            },
            visibleItemsLength() {
                return this.visibleItems.length;
            },
            itemsLeft() {
                return this.items.length - this.visibleItemsLength;
            }
        },
        watch: {
            visibleItemsLength(length) {
                if (length === 0 && this.activePage > 0) {
                    this.activePage = 0;
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
