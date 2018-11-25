<template>
    <div>
        <div class="tabs-nav" :class="variant">
            <ul>
                <li
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="`nav-item layer${index+1}`"
                >
                    <a
                        :href="tab.href"
                        :class="{ 'active': tab.isActive }"
                        @click.prevent="selectTab(tab.name, index)"
                    >{{ tab.name }}</a>
                </li>
            </ul>
            <slot name="tabs-nav">
            </slot>
        </div>
        <div class="tabs-container" ref="tabs">
            <slot :tabs="tabs"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'c-tabs',
        props: {
            variant: {
                type: String,
                default: 'default'
            },
            currentStep: [Number, String]
        },
        data() {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        },
        methods: {
            selectTab(tabName, tabIndex) {
                if (this.currentStep) {

                    if (tabIndex + 1 <= this.currentStep) {
                        this.tabs.forEach((tab, i) => {
                            tab.isActive = tabIndex == i;
                        });
                    }

                } else {
                    this.tabs.forEach(tab => {
                        tab.isActive = (tab.name == tabName);
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-nav {
        border-bottom: none;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        ul{
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            .nav-item {
                list-style: none;
                margin-right: 20px;
                a {
                    color: #606079;
                    background: #393955;
                    padding: 0 15px;
                    font-size: 15px;
                    line-height: 32px;
                    border: none;
                    position: relative;
                    display: inline-block;
                    border-radius: 8px 8px 0 0;
                    box-shadow: 0 -1px 10px rgba(0, 0, 0, .2);
                    &:before {
                        content: "";
                        position: absolute;
                        height: 23px;
                        bottom: 0;
                        left: -28px;
                        border: 15px solid transparent;
                        border-bottom: 15px solid #393955;
                        border-right: 15px solid #393955;
                        -webkit-filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .15));
                        filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .1));
                    }
                    &:after {
                        content: "";
                        position: absolute;
                        height: 23px;
                        bottom: 0;
                        right: -28px;
                        border: 15px solid transparent;
                        border-bottom: 15px solid #393955;
                        border-left: 15px solid #393955;
                        -webkit-filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                        filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                    }
                    &.active {
                        border-bottom: none;
                        background: #3e3e5c;
                        z-index: 8 !important;
                        color: #fff;
                        &:before {
                            border-bottom-color: #3e3e5c;
                            border-right-color: #3e3e5c;
                        }
                        &:after {
                            border-bottom-color: #3e3e5c;
                            border-left-color: #3e3e5c;
                        }
                    }
                }
                &.layer1 a {
                    z-index: 7;
                }
                &.layer2 a {
                    z-index: 6;
                }
                &.layer3 a {
                    z-index: 5;
                }
                &.layer4 a {
                    z-index: 4;
                }
                &:first-child {
                    a {
                        box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                        &:before {
                            display: none;
                        }
                    }
                }
            }
        }
        &.type-2{
            position: relative;
            &:after{
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
                height: 2px;
                display: inline-block;
                background: #fff;
                content: "";
            }
            ul{
                width: auto;
                .nav-item{
                    a{
                        &.active{
                            background: #fff;
                            color: #3D3E5D;
                            &:before{
                                border-bottom-color: #fff;
                                border-right-color: #fff;
                            }
                            &:after{
                                border-bottom-color: #fff;
                                border-left-color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

