<template>
    <div>
        <slot :items="visibleItems"/>
        <div class="content-navigation-wrapper" v-show="visibleItems.length">
            <c-pagination
                v-if="paginationMode"
                :activePage="activePage + 1"
                :pages="pagination.pages"
                @pageChange="activePage = $event - 1"
            />
            <c-load-more v-else
                @click="loadMore()"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'content-navigation',
        props: {
            items: {
                type: Array,
                default() {
                    return [];
                }
            },
            setItemsLimit: {
                type: Number,
                default: 6
            },
            setItemsPerPage: {
                type: Number,
                default: 6
            }
        },
        components: {
            'c-pagination': (resolve) => require(['@/ui/components/pagination'], resolve),
            'c-load-more': (resolve) => require(['@/ui/components/buttons/load-more'], resolve)
        },
        data() {
            return {
                activePage: 0,
                limitTo: this.setItemsLimit,
                itemsPerPage: this.setItemsPerPage
            }
        },
        methods: {
            loadMore() {
                if (this.limitTo < this.items.length) {
                    this.limitTo += this.setItemsLimit;
                }
            }
        },
        computed: {
            paginationMode() {
                return this.$store.state.network.account.settings.client.pagination;
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
        margin: 15px 0;
        display: flex;
        justify-content: center;
    }
</style>
