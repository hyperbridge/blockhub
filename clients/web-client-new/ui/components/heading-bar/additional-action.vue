<template>
    <div class="additional-action" :class="customClass">
        {{ name }}
        <c-icon
            v-if="icon"
            :name="icon"
            class="additional-action__icon"
        />
        <c-button-arrows
            @clickUp="$emit('clickUp')"
            @clickDown="$emit('clickDown')"
            class="additional-action__button"
            :activeUp="activeUp"
        />
    </div>
</template>

<script>
    export default {
        name: 'additional-action',
        props: {
            name: String,
            icon: String,
            customClass: String,
            activeUp: {
                type: Boolean,
                default: undefined
            }
        },
        components: {
            'c-button-arrows': (resolve) => require(['@/components/buttons/arrows'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .additional-action {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #fff;
        height: 30px;
        margin-left: 10px;
        .additional-action__icon {
            margin-left: 8px;
        }
        .additional-action__button {
            margin: 0 0 0 5px;
        }
    }
</style>
