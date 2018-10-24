<template>
    <div class="c-range-slider" :class="sClass">
        <label v-if="label">{{ label }}</label>
        <p class="subtitle" v-if="description">{{ description }}</p>
        <input
            ref="rangeSlider"
            :data-type="type"
            :data-min="min"
            :data-max="max"
            :data-from="from"
            :data-to="to"
            :data-step="step"
            :data-min-interval="minInterval"
            :data-max-interval="maxInterval"
            :data-from-fixed="fromFixed"
            :data-from-min="fromMin"
            :data-from-max="fromMax"
            :data-to-fixed="toFixed"
            :data-to-min="toMin"
            :data-to-max="toMax"
            :data-prefix="prefix"
            :data-postfix="postfix"
            :data-max-postfix="maxPostfix"
            :data-grid="grid"
            :data-grid-num="gridNum"
            :data-disable="disable"
            :data-block="block"
            :data-extra-classes="extraClasses"
            :id="id"
            :name="name"
        />
    </div>
</template>

<script>
    export default {
        props: {
            id: String,
            name: String,
            label: String,
            description: String,
            type: {
                type: String,
                default: 'single'
            },
            min: Number,
            max: Number,
            from: Number,
            to: Number,
            step:{
                type: Number,
                default: 1,
            },
            minInterval: Number,
            maxInterval: Number,
            fromFixed: {
                type: Boolean,
                default: false
            },
            fromMin: Number,
            fromMax: Number,
            toFixed: {
                type: Boolean,
                default: false
            },
            toMin: {
                type: Boolean,
                default: false
            },
            toMax: {
                type: Boolean,
                default: false
            },
            prefix: String,
            postfix: String,
            maxPostfix: String,
            grid: {
                type: Boolean,
                default: false
            },
            gridNum: {
                type: Number,
                default: 4
            },
            disable: {
                type: Boolean,
                default: false
            },
            block: {
                type: Boolean,
                default: false
            },
            extraClasses: String,
            sClass: String

        },
        mounted() {
            //$(this.$refs.rangeSlider).ionRangeSlider();
        }
    }
</script>

<style lang="scss">
    .c-range-slider{
        label{
            display: block;
            color: #fff;
            padding: 0;
            margin: 0 0 -5px;
            font-weight: bold;
            font-size: 15px;
        }
        .irs-slider{
            width: 20px;
            height: 20px;
            background-color: #fff;
            background-image: none;
            border-radius: 10px;
            top: 18px;
        }
        .irs-line{
            border-radius: 10px;
            overflow: hidden;
            background: rgba(255, 255, 255, .15);
        }
        .irs-bar-edge{
            width: 15px;
            background: rgb(14,194,248);
            border-radius: 15px 0 0 15px;
        }
        .irs-bar{
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#0ec2f8+1,e628ed+100 */
            background: rgb(14,194,248); /* Old browsers */
            background: -moz-linear-gradient(left, rgba(14,194,248,1) 1%, rgba(230,40,237,1) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(left, rgba(14,194,248,1) 1%,rgba(230,40,237,1) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to right, rgba(14,194,248,1) 1%,rgba(230,40,237,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0ec2f8', endColorstr='#e628ed',GradientType=1 ); /* IE6-9 */
        }
        .irs-min,
        .irs-max{
            background: transparent;
            font-size: 15px;
            top: 45px;
            padding: 0;
            min-width: 20px;
            text-align: center;
            display: inline-block;
        }
        .irs-single,
        .irs-from,
        .irs-to{
            background: transparent;
            font-size: 15px;
            top: 45px;
            &:after{
                display: none;
            }
        }
        .irs-grid-text{
            display: none;
        }
        .irs-grid-pol{
            height: 4px;
            width: 2px;
        }
    }
</style>
