<template>
    <div class="pagination">
        <div class="pagination__slot text-left">
            <slot name="left-content" />
        </div>

        <nav
            class="pagination__nav"
            :class="{ 'show-bg' : showBg }">
            <ul>
                <li v-show="activePage > 1">
                    <a
                        href="#first"
                        class="first"
                        @click.prevent="$emit('pageChange', 1)">
                        <c-icon name="angle-double-left" />
                    </a>
                </li>
                <li v-show="activePage > 1">
                    <a
                        href="#prev"
                        class="prev"
                        @click.prevent="change_page('prev')">
                        <c-icon name="angle-left" />
                    </a>
                </li>

                <li
                    v-for="page in visiblePages"
                    :key="page"
                    :class="{ 'active': page === activePage }">
                    <a
                        :href="`#${page}`"
                        @click.prevent="change_page(page)">{{ page }}</a>
                </li>
                <li v-show="activePage < pages">
                    <a
                        href="#next"
                        class="next"
                        @click.prevent="change_page('next')">
                        <c-icon name="angle-right" />
                    </a>
                </li>
                <li v-show="activePage < pages">
                    <a
                        href="#last"
                        class="last"
                        @click.prevent="$emit('pageChange', pages)">
                        <c-icon name="angle-double-right" />
                    </a>
                </li>
            </ul>
        </nav>

        <div class="pagination__slot text-right">
            <slot name="right-content" />
        </div>
    </div>
</template>


<script>
export default {
    name: 'Pagination',
    props: {
        pages: {
            type: [Number, String],
            default: 0
        },
        activePage: {
            type: Number,
            default: 1
        },
        pagesShow: {
            type: Number,
            default: 8
        },
        showBg: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        visiblePages() {
            const { activePage, pages, basePages, pagesShow } = this
            const midVal = Math.round(pagesShow / 2)
            const numbers = []

            if (activePage > midVal && pages > pagesShow) {
                let curPage = activePage + midVal >= pages ? pages - pagesShow : activePage - midVal
                for (let i = 0; i < pagesShow; i++) {
                    curPage++
                    numbers.push(curPage)
                }
            } else {
                const maxNumber = pages < pagesShow ? pages : pagesShow
                for (let i = 0; i < maxNumber; i++) {
                    numbers.push(i + 1)
                }
            }
            return numbers
        }
    },
    methods: {
        change_page(page) {
            const { activePage, pages } = this

            if (typeof page === 'number') {
                this.$emit('pageChange', page)
            } else if (page === 'next') {
                if (activePage < pages) {
                    this.$emit('pageChange', activePage + 1)
                }
            } else if (page === 'prev') {
                if (activePage > 1) {
                    this.$emit('pageChange', activePage - 1)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-top: 15px;
    }
    .pagination__nav {
        padding: 10px;
        text-align: center;
        width: auto;
        display: inline-block;
        position: relative;
        &.show-bg{
            background: #2f324e;
            border-radius: 5px 5px 0 0;
            &:after {
                position: absolute;
                content: "";
                height: 42px;
                bottom: 0;
                right: -39px;
                border: 21px solid transparent;
                border-bottom: 21px solid #2f324e;
                border-left: 21px solid #2f324e;
            }
            &:before {
                position: absolute;
                content: "";
                height: 42px;
                bottom: 0;
                left: -39px;
                border: 21px solid transparent;
                border-bottom: 21px solid #2f324e;
                border-right: 21px solid #2f324e;
            }
        }
        ul{
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            li{
                list-style: none;
                display: inline-block;
                margin: 0 3px;
                width: 22px;
                height: 22px;
                line-height: 22px;
                text-align: center;
                a {
                    color: #A2A3BE;
                    font-size: 14px;
                    width: 100%;
                    height: 100%;
                    display: block;
                    &.first,
                    &.last,
                    &.prev,
                    &.next {
                            color: #fff;
                    }
                }
                &.active,
                &:hover {
                    background: rgba(255, 255, 255, .15);
                    border-radius: 3px;
                    font-weight: bold;
                    cursor: pointer;
                    a {
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }
        }
    }
    .pagination__slot{
        width: 25%;
        padding-bottom: 10px;
    }
</style>
