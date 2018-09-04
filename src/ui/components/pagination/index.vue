<template>
    <nav class="pagination">
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
</template>


<script>
    export default {
        name: 'pagination',
        props: {
            pages: {
                type: Number,
                default: 0
            },
            debounce: {
                type: Number,
                default: 0
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
                const { active_page, pages, base_pages } = this;
                const numbers = [];

                if (active_page > 4 && pages > 8) {
                    let cur_page = active_page + 4 >= pages ? pages - 8 : active_page - 4;
                    for (let i = 0; i < 8; i++) {
                        cur_page++;
                        numbers.push(cur_page);
                    }
                } else {
                    const max_number = pages < 8 ? pages : 9;
                    for (let i = 1; i < max_number; i++) {
                        numbers.push(i);
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

    .pagination {
        padding: 10px;
        text-align: center;
        width: auto;
        display: inline-block;
        position: relative;
        background: #2E2F4A;
        border-radius: 5px 5px 0 0;
        &:after {
                position: absolute;
                content: "";
                height: 42px;
                bottom: 0;
                right: -39px;
                border: 21px solid transparent;
                border-bottom: 21px solid #2E2F4A;
                border-left: 21px solid #2E2F4A;
            }
        &:before {
                position: absolute;
                content: "";
                height: 42px;
                bottom: 0;
                left: -39px;
                border: 21px solid transparent;
                border-bottom: 21px solid #2E2F4A;
                border-right: 21px solid #2E2F4A;
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
</style>
