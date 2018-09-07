<template>
    <div
        class="progress-bar"
        role="progressbar"
        :style="{ [direction_prop]: progress + '%' }"
        :aria-valuenow="progress"
        :class="direction"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        {{ show_text && progress > 8 ? progress : '' }}
        <span v-if="sr" class="sr-only">{{ progress }}</span>
    </div>
</template>

<script>
export default {
    name: 'progress-bar',
    props: {
        percentages: [String, Number],
        values: Object,
        direction: {
            type: String,
            default: 'horizontal',
            validator(direction) {
                return ['horizontal', 'vertical'].includes(direction);
            }
        },
        show_text: Boolean,
        sr: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            direction_prop: this.direction == 'horizontal' ? 'width' : 'height'
        }
    },
    computed: {
        progress() {
            const { values } = this;
            return values ? parseFloat(values.reached) / parseFloat(values.goal) * 100 : this.percentages;
        }
    }
}
</script>

<style lang="scss" scoped>
    .progress-bar {
        border-radius: 4px;
        background: #2abaf3;
        background: -moz-linear-gradient(left, #2abaf3 0%, #63ec48 100%);
        background: -webkit-linear-gradient(left, #2abaf3 0%, #63ec48 100%);
        background: linear-gradient(to right, #2abaf3 0%, #63ec48 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2abaf3', endColorstr='#63ec48', GradientType=1);
        font-size: 13px;
        text-shadow: 0px 0px 4px #000;
        box-shadow: 0 0 3px 3px rgba(1,1,1,.05);
        &.horizontal {
            height: 7px;
        }
        &.vertical {
            width: 7px;
        }
    }
</style>
