<template>
    <div
        class="progress"
        :class="['progress-bar-' + direction ]">
        <div
            class="progress-bar"
            role="progressbar"
            :style="{ [direction_prop] : progress + '%' }"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100">
            {{ showText && progress > 8 ? progress : '' }}
            <span class="sr-only">{{ progress }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        percentages: [String, Number],
        values: Object,
        direction: {
            type: String,
            default: 'horizontal',
            validator(direction) {
                return ['horizontal', 'vertical'].includes(direction)
            }
        },
        showText: Boolean
    },
    computed: {
        progress() {
            const { values } = this
            return values ? parseFloat(values.reached) / parseFloat(values.goal) * 100 : this.percentages
        },
        direction_prop() {
            return this.direction == 'horizontal' ? 'width' : 'height'
        }
    }
}
</script>

<style lang="scss" scoped>
    .progress{
        margin: 0;
        border-radius: 4px;
        overflow: hidden;
        background: rgba(255, 255, 255, .2);
        &.progress-bar-horizontal {
            min-height: 7px;
            height: 100%;
            width: 100%;
        }
        &.progress-bar-vertical {
            width: 7px;
            height: auto;
            display: flex;
            align-items: flex-end;
            .progress-bar{
                width: 100%;
            }
        }
    }
    .progress-bar {
        border-radius: 10px;
        background: #2abaf3;
        background: linear-gradient(to right, #2abaf3 0%, #63ec48 100%);
        font-size: 13px;
        text-shadow: 0px 0px 4px #000;
        box-shadow: 0 0 3px 3px rgba(1,1,1,.05);
        -webkit-transition: height 0.6s ease;
        -o-transition: height 0.6s ease;
        transition: height 0.6s ease;
    }
</style>
