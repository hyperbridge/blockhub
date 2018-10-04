<template>
    <div class="tabs-universal" :class="`tabs-universal--${styled ? 'styled' : 'default'}`">
        <nav class="tabs-universal__nav" v-if="!disableMenu">
            <slot name="nav">
                <ul class="tabs-universal__list">
                    <li
                        v-for="tab in dynamicTabs"
                        :key="tab.id"
                        class="tabs-universal__list-item"
                        :class="'layer' + tab.id"
                    >
                        <a
                            :aria-selected="active_tab == tab.id"
                            class="list-item__link"
                            :class="{
                                'active': active_tab == tab.id,
                                'locked': isTabLocked(tab.id),
                            }"
                            @click.prevent="tabClick(tab.id)"
                            role="tab"
                        >{{ tab.name }}</a>
                    </li>
                </ul>
            </slot>
        </nav>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'tabs-universal',
        props: {
            tabNames: Array,
            tabText: String,
            active_tab_prop: [Number, String],
            lockedStep: Number,
            locked_tab: Number,
            styled: Boolean,
            disableMenu: Boolean
        },
        data() {
            return {
                tabs: [],
                active_tab_data: 1
            }
        },
        methods: {
            isTabLocked(index) {
                const { lockedStep, locked_tab } = this;
                return (locked_tab != null && locked_tab == index) || (lockedStep != null && !(index < lockedStep));
            },
            tabClick(index) {
                this.active_tab_data = index;
                this.$emit('click', index);
            }
        },
        computed: {
            dynamicTabs() {
                return this.tabNames
                    ? this.tabNames.map((name, index) => ({ id: index + 1, name }))
                    : this.tabs.map((tab, index) => ({
                        name: (this.tabText ? this.tabText + ' ' :  'TAB ') +  (index + 1),
                        id: index + 1
                      }));
            },
            active_tab() {
                return this.active_tab_prop != null ? this.active_tab_prop : this.active_tab_data;
            },
            activeStyle() {
                return this.styled ? '--styled' : '--default';
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
    .tabs-universal {
        width: 100%;
    }

    .tabs-universal__list {
        margin: 0;
        padding: 0;
        display: flex;
        list-style-type: none;
    }

    .tabs-universal__list-item {
        .list-item__link {
            cursor: pointer;
            display: block;
            font-size: 15px;
            padding: 6px 15px;
            text-align: center;
            position: relative;
        }
    }

    /deep/ .tabs-universal__content {
        position: relative;
        overflow: hidden;
    }

    .tabs-universal--default {
        .tabs-universal__list {
            justify-content: center;
        }
        .tabs-universal__list-item {
            margin: 0 15px;
        }
        .list-item__link {
            border-bottom: 2px solid transparent;
            &.active {
                border-color: rgb(94, 96, 155);
            }
            &.locked {
                color: rgba(255,255,255,.5);
            }
        }
        /deep/ .tabs-universal__content {
            margin-top: 15px;
        }
    }

    .tabs-universal--styled {
        .tabs-universal__nav {
            position: relative;
        }
        .tabs-universal__nav:after {
            content: "";
            position: absolute;
            left: 0;
            top: 32px;
            right: 15px;
            height: 15px;
            background: #3e3e5c;
            z-index: 10;
        }
        .tabs-universal__list-item {
            margin-right: 20px;
            border-radius: 8px 8px 0 0;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            &:not(:first-child) {
                .list-item__link:before {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    right: calc(100% - 2px);
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-right: 15px solid #393955;
                    -webkit-filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .15));
                    filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .1));
                }
            }
            .list-item__link {
                border-radius: 8px 8px 0 0;
                background-color: #393955;
                color: #606079;
                &.active {
                    background-color: #3E3E5C;
                    color: #fff;
                    z-index: 8;
                    &:after {
                        border-bottom-color: #3e3e5c;
                        border-left-color: #3e3e5c;
                    }
                    &:before {
                        border-bottom-color: #3e3e5c;
                        border-right-color: #3e3e5c;
                    }
                }
                &:after {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    left: calc(100% - 2px);
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-left: 15px solid #393955;
                    -webkit-filter: drop-shadow(5px -2px 3px rgba(0, 0, 0, 0.15));
                    filter: drop-shadow(5px -2px 3px rgba(0, 0, 0, 0.14));
                }
            }
        }
        /deep/ .tabs-universal__content {
            background-color: #3E3E5C;
            border-radius: 0 5px 5px 5px;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
            padding: 15px;
        }
        .layer1 a {
            z-index: 7;
        }
        .layer2 a {
            z-index: 6;
        }
        .layer3 a {
            z-index: 5;
        }
        .layer4 a {
            z-index: 4;
        }
    }
</style>

