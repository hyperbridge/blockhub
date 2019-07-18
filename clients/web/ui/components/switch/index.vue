<template>
    <div class="switch-container">
        <div
            v-if="!customLabel && labelPosition == 'left'"
            class="label"
            style="padding-right: 10px"
            :style="{ fontSize: labelSize }">
            {{ label }}
        </div>
        <div
            v-else-if="customLabel && labelPosition == 'left'"
            class="label"
            style="padding-right: 10px"
            :style="{ fontSize: labelSize }">
            <slot />
        </div>
        <label
            class="switch my-0"
            :class="`switch-${size}`">
            <input
                :id="id"
                type="checkbox"
                v-bind="$attrs"
                :checked="checked"
                @change="$emit('change', $event.target.checked)">
            <span />
        </label>
        <div
            v-if="!customLabel && labelPosition == 'right'"
            class="label"
            style="padding-left: 10px"
            :style="{ fontSize: labelSize }">
            {{ label }}
        </div>
        <div
            v-else-if="customLabel && labelPosition == 'right'"
            class="label"
            style="padding-left: 10px"
            :style="{ fontSize: labelSize }">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        id: {
            type: [String, Number],
            default() {
                return `checkbox-${parseInt(Math.random() * new Date().getUTCMilliseconds() * 5)}`
            }
        },
        checked: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'sm',
            validator(val) {
                return ['sm', 'lg'].includes(val)
            }
        },
        customLabel: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: null
        },
        labelPosition: {
            type: String,
            default: 'right',
            validator(val) {
                return ['right', 'left'].includes(val)
            }
        },
        labelSize: {
            type: String,
            default: '14px'
        }
    }
}
</script>

<style lang="scss" scoped>
    .switch-container {
        /*display: flex;*/
        display: inline-flex;
        width: auto;
        align-items: center;
        color: #fff;
        p {
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .switch{
            &.switch-sm{
                height: 18px;
                line-height: 18px;
                span{
                    height: 18px;
                    &:after{
                        width: 14px;
                        height: 14px;
                    }
                }
                input:checked + span:after{
                    left: 17px;
                }
            }
        }
    }
</style>
