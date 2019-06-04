<template>
    <div
        class="additional-action"
        :class="customClass">
        {{ name }}
        <c-icon
            v-if="icon"
            :name="icon"
            class="additional-action__icon" />
        <c-button-arrows
            class="additional-action__button"
            :activeUp="activeUp"
            @clickUp="$emit('clickUp')"
            @clickDown="$emit('clickDown')" />
    </div>
</template>

<script>
export default {
    name: 'AdditionalAction',
    components: {
        'c-button-arrows': () => import('~/components/buttons/arrows').then(m => m.default || m)
    },
    props: {
        name: String,
        icon: String,
        customClass: String,
        activeUp: {
            type: Boolean,
            default: undefined
        }
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
