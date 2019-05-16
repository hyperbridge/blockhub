<template>
    <div
        class="block w-100"
        :class="{
            'bg-gradient': bgGradient,
            'bg-color': bgColor,
            'no-gutter': noGutter,
            'only-content-bg': onlyContentBg
        }"
    >
        <c-heading-bar
            v-if="title"
            :name="title"
            :class="{ 'mb-0' : onlyContentBg }"
            :showArrows="false"
            :showActions="showActions"
        >
            <template slot="additional-action">
                <slot name="additional-action"/>
            </template>
        </c-heading-bar>
        <slot name="title"/>
        <div class="block__content" :class="{'no-padding': noPadding }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'block-1',
        props: {
            title: String,
            noGutter: {
                type: Boolean,
                default: false
            },
            bgColor: {
                type: Boolean,
                default: true
            },
            bgGradient: {
                type: Boolean,
                default: false
            },
            onlyContentBg: {
                type: Boolean,
                default: false
            },
            noPadding: {
                type: Boolean,
                default: false
            },
            showActions: {
                type: Boolean,
                default: false
            }
        },
        components: {
            'c-heading-bar': (resolve) => require(['@/components/heading-bar'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .block {
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        position: relative;
        color: #fff;
        &:not(.only-content-bg){
            &.bg-color{
                background: rgba(0, 0, 0, .13);
            }
            &.bg-gradient{
                border-radius: 5px 5px 0 0;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+88,000000+100&0.65+91,0+100 */
                background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            }
        }
        &.no-gutter{
            padding: 0;
        }
        &.only-content-bg{
            padding: 0;
            border-radius: 0;
            &.bg-color{
                .block__content{
                    padding: 15px;
                    background: rgba(0, 0, 0, .13);
                }
            }
            &.bg-gradient{
                .block__content{
                    padding: 15px;
                    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+88,000000+100&0.65+91,0+100 */
                    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                }
            }
        }
        backdrop-filter: blur(2px);
    }
    .block__content{
        width: 100%;
        &.no-padding{
            padding: 0 !important;
        }
    }
</style>

