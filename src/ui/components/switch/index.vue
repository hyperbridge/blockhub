<template>
    <div class="switch-container">
        <p v-if="!customLabel && label_position == 'left'" style="padding-right: 10px" :style="{ fontSize: label_size }">{{ label }}</p>
        <p v-else-if="customLabel && label_position == 'left'" style="padding-right: 10px" :style="{ fontSize: label_size }">
            <slot name="label"></slot>
        </p>
        <label class="switch my-0" :class="`switch-${size}`">
            <input
                type="checkbox"
                v-bind="$attrs"
                :checked="checked"
                @change="$emit('change', $event.target.checked)"
            />
            <span></span>
        </label>
        <p v-if="!customLabel && label_position == 'right'" style="padding-left: 10px" :style="{ fontSize: label_size }">{{ label }}</p>
        <p v-else-if="customLabel && label_position == 'right'" style="padding-left: 10px" :style="{ fontSize: label_size }">
            <slot name="label"></slot>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'c-switch',
        inheritAttrs: false,
        props: {
            checked: Boolean,
            size: {
                type: String,
                default: 'sm',
                validator(val) {
                    return ['sm', 'lg'].includes(val);
                }
            },
            customLabel: Boolean,
            label: String,
            label_position: {
                type: String,
                default: 'right',
                validator(val) {
                    return ['right', 'left'].includes(val);
                }
            },
            label_size: {
                type: String,
                default: '14px'
            }
        },
        model: {
            prop: 'checked',
            event: 'change'
        }
    }
</script>

<style lang="scss" scoped>
    .switch-container {
        display: flex;
        width: auto;
        align-items: center;
        color: #fff;
        p {
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }
</style>
