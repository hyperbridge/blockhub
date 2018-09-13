<template>
    <div>
        <nav>
            <slot name="nav">
                <ul class="tabs-universal__list">
                    <li
                        v-for="(tab, index) in dynamic_tabs"
                        :key="index"
                        class="tabs-universal__list-item"
                    >
                        <a
                            :aria-selected="active_tab == index"
                            class="list-item__link"
                            :class="{
                                'active': active_tab == index,
                                'avoid-clicks locked': is_tab_locked(index)
                            }"
                            @click.prevent="active_tab_data = index"
                            role="tab"
                        >{{ tab }}</a>
                    </li>
                </ul>
            </slot>
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
            tab_names: Array,
            active_tab_prop: [Number, String],
            locked_step: Number,
            locked_tab: Number
        },
        data() {
            return {
                tabs: [],
                active_tab_data: 0
            }
        },
        methods: {
            is_tab_locked(index) {
                const { locked_step, locked_tab } = this;
                return (locked_tab != null && locked_tab == index) || (locked_step != null && !(index < locked_step));
            }
        },
        computed: {
            dynamic_tabs() {
                return this.tab_names ? this.tab_names : this.tabs.map((tab, index) => 'TAB ' + ++index);
            },
            active_tab() {
                return this.active_tab_prop ? this.active_tab_prop : this.active_tab_data;
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
            &.active {
                border-color: rgb(94, 96, 155);
            }
            &.locked {
                color: rgba(255,255,255,.5);
            }
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

