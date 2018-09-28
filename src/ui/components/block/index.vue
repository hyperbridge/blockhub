<template>
    <div class="block" :class="{ 'bg-gradient' : bgGradient, 'bg-color' : bgColor, 'no-gutter' : noGutter, 'only-content-bg' : onlyContentBg}">
        <c-heading-bar :name="title" :class="{ 'mb-0' : onlyContentBg}" :showArrows="false" v-if="title" />
        <slot name="title" v-else></slot>
        <div class="block__content">
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
            }
        },
        components: {
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve)
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
                background: -moz-linear-gradient(top, rgba(0,0,0,0.2) 88%, rgba(0,0,0,0.2) 91%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
                background: -webkit-linear-gradient(top, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
                background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
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
                    background: -moz-linear-gradient(top, rgba(0,0,0,0.2) 88%, rgba(0,0,0,0.2) 91%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
                    background: -webkit-linear-gradient(top, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
                    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
                }
            }
        }
    }
    .block__content{
        width: 100%;
    }
</style>

