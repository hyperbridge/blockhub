<template>
    <div class="switch-container">
        <p v-if="label && label_position == 'left'" style="padding-right: 10px" :style="{ fontSize: label_size }">{{ label }}</p>
        <label class="switch" :class="[ 'switch-' + size ]">
            <input :type="type" :id="id" name="switch_1" :checked="value" @change="$emit('input', $event.target.checked)">
            <span></span>
        </label>
        <p v-if="label && label_position == 'right'" style="padding-left: 10px" :style="{ fontSize: label_size }">{{ label }}</p>
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
            size: { type: String },
            label: { type: String },
            label_position: {
                type: String,
                default: 'right'
            },
            label_size: {
                type: String,
                default: '14px'
            }
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
