<template>
    <div class="range-slider__container">
        <div
            class="range-slider__button"
            :style="{
                left: `${percentages}%`,
                transform: `translateX(-${transform}px)`
            }"
        ></div>
        <div
            class="range-slider__progress"
            :style="{
                width: percentages + '%'
            }"
        ></div>
        <input
            type="range"
            class="range-slider"
            :min="min"
            :max="max"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <span
            class="range-slider__percentages"
            :style="{ left: `calc(${percentages}% + 2px)`, transform: `translateX(-${transform}px)` }"
        >{{ showPercentages ? percentagesSign(percentages) : value }}</span>
        <transition name="slide-in-top">
            <span
                class="range-slider__range-min"
                v-show="percentages > 20"
            >
                {{ min }}
            </span>
        </transition>
        <transition name="slide-in-top">
            <span
                class="range-slider__range-max"
                v-show="percentages < (showPercentages ? 70 : 80)"
            >
                {{ max }}
            </span>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'range-slider',
    inheritAttrs: false,
    props: {
        min: {
            type: [Number, String],
            default: 0
        },
        max: {
            type: [Number, String],
            default: 100
        },
        showPercentages: Boolean,
        value: [Number, String]
    },
    computed: {
        percentages() {
            const percentages = Math.round((this.value - this.min) / this.max * 100);
            return percentages > 100 ? 100 : percentages;
        },
        transform() {
            const { percentages } = this;
            return 20 * (percentages / 100);
        }
    },
    methods: {
        percentagesSign(val) {
            return val + '%';
        }
    }
}
</script>

<style lang="scss" scoped>
    .range-slider__container {
        position: relative;
        height: 40px;
        &:before {
            content: "";
            position: absolute;
            border-radius: 4px;
            left: 0;
            top: 3px;
            width: 100%;
            background: #464759;
            height: 5px;
            z-index: 2;
        }
    }
    .range-slider {
        width: 100%;
    }
    .range-slider__progress {
        background: linear-gradient(to right, rgba(14,194,248,1) 1%,rgba(230,40,237,1) 100%);
        height: 7px;
        position: absolute;
        border-radius: 4px;
        top: 1px;
        z-index: 3;
    }
    .range-slider__button {
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border-radius: 10px;
        transform: translateX(-5px);
        top: -2.5px;
        z-index: 4;
    }

    .range-slider__percentages, .range-slider__range-min, .range-slider__range-max {
        position: relative;
        top: 18px;
        font-size: 15px;
    }
    .range-slider__percentages, .range-slider__range-max {
        position: absolute;
    }
    .range-slider__range-max {
        right: 0;
    }


    // $sliderBg: #464759;
    $sliderBg: rgb(111, 113, 138);
    $sliderHeight: 7px;
    $dotSize: 40px;

    input[type=range] {
        -webkit-appearance: none;
        // margin: 10px 0;
        width: 100%;
        position: absolute;
        z-index: 5;
        opacity: 0;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: $sliderHeight;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        background: $sliderBg;
        border-radius: 25px;
        border: 0px solid #000101;
    }
    input[type=range]::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: $dotSize;
        width: $dotSize;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: $dotSize / -2 / 2;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: $sliderBg;
    }
    input[type=range]::-moz-range-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        background: $sliderBg;
        border-radius: 25px;
        border: 0px solid #000101;
    }
    input[type=range]::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: #fff;
        cursor: pointer;
    }
    input[type=range]::-ms-track {
        width: 100%;
        height: 12.8px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        border-width: 39px 0;
        color: transparent;
    }
    input[type=range]::-ms-fill-lower {
        background: $sliderBg;
        border: 0px solid #000101;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    }
    input[type=range]::-ms-fill-upper {
        background: $sliderBg;
        border: 0px solid #000101;
        border-radius: 50px;
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    }
    input[type=range]::-ms-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 0px solid #000000;
        height: 20px;
        width: 39px;
        border-radius: 7px;
        background: #fff;
        cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: $sliderBg;
    }
    input[type=range]:focus::-ms-fill-upper {
        background: $sliderBg;
    }
</style>

