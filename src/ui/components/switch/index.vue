<template>
    <div class="switch-container" :class="sClass">
        <p v-if="!customLabel && label_position == 'left'" style="padding-right: 10px" :style="{ fontSize: label_size }">{{ label }}</p>
        <p v-else-if="customLabel && label_position == 'left'" style="padding-right: 10px" :style="{ fontSize: label_size }">
            <slot name="label"></slot>
        </p>
        <label class="switch" :class="[ 'switch-' + size ]">
            <input :type="type" :id="id" name="switch_1" :checked="value" @change="$emit('change', $event.target.checked)">
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
        props: {
            type: { default: 'checkbox'},
            disabled: { default: false },
            name: { type: String },
            id: { type: String},
            value: { default: false },
            size: {
                type: String,
                default: 'sm'
            },
            customLabel:{
                type: Boolean,
                default: false
            },
            label: { type: String },
            label_position: {
                type: String,
                default: 'right'
            },
            label_size: {
                type: String,
                default: '14px'
            },
            sClass: String
        }
    }
</script>

<style lang="scss" scoped>
    .switch-container{
        display: flex;
        width: auto;
        align-items: center;
        color: #fff;
        p{
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }
</style>
