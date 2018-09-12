<template>
    <div>
        <nav>
            <ul class="tabs-universal__list">
                <li
                    v-for="(tab, index) in dynamic_tabs"
                    :key="index"
                    class="tabs-universal__list-item"
                >
                    <a
                        :aria-selected="active_tab == index"
                        class="list-item__link"
                        :class="{ 'active': active_tab == index }"
                        @click.prevent="active_tab = index"
                        role="tab"
                    >{{ tab }}</a>
                </li>
            </ul>
        </nav>
        <div class="tabs-universal__content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tabs-universal',
        props: {
            tab_names: {
                type: Array
            }
        },
        data() {
            return {
                tabs: [],
                active_tab: 0
            }
        },
        computed: {
            dynamic_tabs() {
                return this.tab_names ? this.tab_names : this.tabs.map((tab, index) => 'TAB ' + ++index);
            }
        },
        provide() {
            const tab_data = {};
            Object.defineProperty(tab_data, 'active_tab', {
                enumerable: true,
                get: () => this.active_tab
            });
            return { tab_data }
        },
        mounted() {
            this.tabs = this.$children;
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-universal__list {
        margin: 0;
        padding: 0;
        display: flex;
        list-style-type: none;
        justify-content: center;
    }

    .tabs-universal__list-item {
        margin: 0 15px;
        .list-item__link {
            border-bottom: 2px solid transparent;
            cursor: pointer;
            display: block;
            min-width: 42px;
            min-height: 26px;
            text-align: center;
        }
        .active {
            border-color: rgb(94, 96, 155);
        }
    }

    .tabs-universal__content {
        margin-top: 15px;
        position: relative;
        overflow: hidden;
        .tab-universal-enter-active, .tab-universal-leave-active {
            transition: opacity .4s ease, transform .4s ease;
        }
        .tab-universal-leave-active {
            position: absolute;
        }
        .tab-universal-enter, .tab-universal-leave-to {
            opacity: 0;
            transform: translateX(20px);
        }
    }
</style>

