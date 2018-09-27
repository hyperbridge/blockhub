<template>
    <div class="range-slider__container">
        <div
            class="range-slider__button"
            :style="{
                left: `${percentages}%`,
                transform: `translateX(${transform2})`
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
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        value: Number
    },
    computed: {
        percentages() {
            return Math.round(this.value / this.max * 100);
        },
        transform() {
            const { percentages } = this;
            return percentages < 25 ? '5px' : percentages > 75 ? '-10px' : '0'
        },
        transform2() {
            // width: percentages + '%',
            const { percentages } = this;
            return percentages > 85 ? '-20px' : '0';
        }
    }
}
</script>

<style lang="scss" scoped>
    .range-slider__container {
        position: relative;
        height: 20px;
        &:before {
            content: "";
            position: absolute;
            border-radius: 4px;
            left: 0;
            top: 1px;
            width: 100%;
            background: #464759;
            height: 7px;
            z-index: 2;
        }
    }
    .range-slider {
        width: 100%;
    }
    .range-slider__progress {
        background: linear-gradient(to right, rgba(14,194,248,1) 1%,rgba(230,40,237,1) 100%);
        // background: red;
        height: 7px;
        position: absolute;
        border-radius: 4px;
        // top: calc(50% - 3.5px);
        // top: 3.5px;
        top: 1px;
        z-index: 3;
    }
    .range-slider__button {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #fff;
        // background-color: blue;
        border-radius: 10px;
        // top: calc(50% - 10px);
        transform: translateX(-5px);
        top: -4.5px;
        z-index: 4;
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

