<template>
    <div class="pagination" >
        <div class="pagination__slot text-left">
            <slot name="left-content" />
        </div>

        <nav class="pagination__nav" :class="{ 'show-bg' : showBg}">
            <ul>
                <li>
                    <a
                        href="#"
                        class="first"
                        @click.prevent="active_page = 1"
                    >
                        <i class="fas fa-angle-double-left"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="prev"
                        @click.prevent="change_page('prev')"
                    >
                        <i class="fas fa-angle-left"></i>
                    </a>
                </li>

                <li
                    v-for="page in visible_pages"
                    :key="page"
                    :class="{ 'active': page == active_page }"
                >
                    <a
                        :href="`#${page}`"
                        @click.prevent="change_page(page)"
                    >{{ page }}</a>
                </li>
                <li>
                    <a
                        href="#3"
                        class="next"
                        @click.prevent="change_page('next')"
                    >
                        <i class="fas fa-angle-right"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#3"
                        class="last"
                        @click.prevent="active_page = pages"
                    >
                        <i class="fas fa-angle-double-right"></i>
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
        name: 'pagination',
        props: {
            pages: {
                type: Number,
                default: 0
            },
            pages_show: {
                type: Number,
                default: 8
            },
            debounce: {
                type: Number,
                default: 0
            },
            showBg:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                active_page: 1,
                timeout: null
            }
        },
        methods: {
            change_page(page) {
                const { active_page, pages, debounce } = this;

                if (typeof page === 'number') {
                    this.active_page = page;
                } else if (page === 'next') {
                    if (active_page < pages) {
                        this.active_page++;
                    }
                } else if (page === 'prev') {
                    if (active_page > 1) {
                        this.active_page--;
                    }
                }
            }
        },
        computed: {
            visible_pages() {
                const { active_page, pages, base_pages, pages_show } = this;
                const mid_val = Math.round(pages_show / 2);
                const numbers = [];

                if (active_page > mid_val && pages > pages_show) {
                    let cur_page = active_page + mid_val >= pages ? pages - pages_show : active_page - mid_val;
                    for (let i = 0; i < pages_show; i++) {
                        cur_page++;
                        numbers.push(cur_page);
                    }
                } else {
                    const max_number = pages < pages_show ? pages : pages_show;
                    for (let i = 0; i < max_number; i++) {
                        numbers.push(i + 1);
                    }
                }
                return numbers;
            }
        },
        watch: {
            active_page(page) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.$emit('pageChange', page);
                }, this.debounce);
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
        margin-top: 25px;
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
