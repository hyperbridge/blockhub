<template>
    <div class="heading-bar">
        <h3 v-if="name"
            class="heading-bar__name margin-right-40"
            :class="{ 'heading-bar__name--with-bg': showBackground }"
            jest="name">
            {{ name }}
        </h3>
        <div v-else
             class="heading-bar__tabs margin-right-40">
            <slot name="heading-tabs">
                <a
                    v-for="(tab, index) in headingTabs"
                    :key="index"
                    :class="{ 'active': index == activeTab }"
                    href="#"
                    :style="{'z-index': 20 - index}"
                    jest="tab-item"
                    @click.prevent="changeTab(index, tab.category)">{{ tab instanceof Object ? tab.title : tab }}</a>
            </slot>
        </div>
        <div v-if="showActions"
             class="heading-bar__additional-action">
            <slot name="additional-action" />
            <c-button v-if="more"
                      status="plain"
                      :href="more"
                      icon="angle-right"
                      :swapOrder="true">
                MORE
            </c-button>
            <div v-if="showArrows"
                 class="heading-bar__nav">
                <a
                    href="#"
                    class="nav-prev"
                    @click.prevent="$emit('prevClick')">
                    <c-icon name="arrow-left" />
                </a>
                <a
                    href="#"
                    class="nav-next"
                    @click.prevent="$emit('nextClick')">
                    <c-icon name="arrow-right" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeadingBar',
    props: {
        name: String,
        showBackground: Boolean,
        showArrows: Boolean,
        more: Boolean,
        showActions: Boolean,
        headingTabs: Array,
        activeIndex: Number,
        itemsLength: Number
    },
    data() {
        return {
            activeTab: 0
        }
    },
    computed: {
        dynamicIndex() {
            let { activeIndex: i, itemsLength } = this
            i %= itemsLength
            return i < 0 ? i * -1 : i
        }
    },
    methods: {
        changeTab(i, category) {
            this.activeTab = i
            this.$emit('changeTab', category)
        }
    }
}
</script>

<style lang="scss" scoped>
    $name_tab_bg: #44455d;

    .heading-bar{
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 2px solid #fff;
        margin-bottom: 20px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
    }

    .heading-bar__name {
        color: #fff;
        border-bottom: 5px solid #fff;
        padding: 0 5px 0 0;
        margin: 0 0 -1px 0;
        display: inline-block;
        font-size: 21px;
        line-height: 36px;
        float: left;
        max-width: calc( 100% - 95px );
        position: relative;
        &:after{
            content: "";
            position: absolute;
            bottom: -10px;
            right: -10px;
            height: 5px;
            border: 5px solid transparent;
            border-bottom: 5px solid #fff;
            border-left: 5px solid #fff;
        }

        &.heading-bar__name--with-bg{
            background: #fff;
            color: #30304B;
            border-radius: 5px 10px 0 0;
            border: none;
            padding: 0 15px;
            line-height: 40px;
            font-weight: normal;
            &:after{
                height: 23px;
                bottom: 0;
                right: -29px;
                border: 17px solid transparent;
                border-bottom: 20px solid #fff;
                border-left: 15px solid #fff;
            }
        }
    }
    .heading-bar__tabs{
        overflow: hidden;
        width: 100%;
        a {
            color: #ececed;
            background: $name_tab_bg;
            padding: 0 20px;
            font-size: 21px;
            line-height: 40px;
            border: none;
            position: relative;
            display: inline-block;
            border-radius: 10px 10px 0 0;
            box-shadow: 0 -1px 10px rgba(0, 0, 0, .2);
            margin: 0 10px;
            text-decoration: none;
            &:before {
                content: "";
                position: absolute;
                height: 23px;
                bottom: 0;
                left: -29px;
                border: 17px solid transparent;
                border-bottom: 20px solid $name_tab_bg;
                border-right: 15px solid $name_tab_bg;
                -webkit-filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .15));
                filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .1));
            }
            &:after {
                content: "";
                position: absolute;
                height: 23px;
                bottom: 0;
                right: -29px;
                border: 17px solid transparent;
                border-bottom: 20px solid $name_tab_bg;
                border-left: 15px solid $name_tab_bg;
                -webkit-filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
            }
            &:hover{
                color: #8c8cb0;
            }
            &.active {
                border-bottom: none;
                background: #fff;
                z-index: 20!important;
                color: #3e3e5c;
                &:before {
                    border-bottom-color: #fff;
                    border-right-color: #fff;
                }
                &:after {
                    border-bottom-color: #fff;
                    border-left-color: #fff;
                }
            }
            &:first-child {
                box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                margin-left: 0;
                &:before {
                    display: none;
                }
            }
        }
    }
    .heading-bar__additional-action{
        width: auto;
        min-width: 235px;
        line-height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        overflow: hidden;

        @media (max-width: 575px) {
            & {
                display: none;
            }
        }
    }

    .heading-bar__nav{
        display: inline-block;
        width: 60px;
        float: right;
        text-align: right;
        a{
            display: inline-block;
            width: 30px;
            color: #fff;
            float: left;
            line-height: 40px;
            font-size: 20px;
            cursor: pointer;
            opacity: .7;
            &.more{
                font-size: 14px;
                width: auto;
                font-weight: bold;
                float: right;
                i{
                    margin-left: 5px;
                }
            }
            &:hover{
                opacity: 1;
            }
        }
    }


</style>
