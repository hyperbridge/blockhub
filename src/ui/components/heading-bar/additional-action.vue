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
        />
    </div>
</template>

<script>
    export default {
        name: 'additional-action',
        props: {
            name: String,
            icon: String,
            customClass: String
        },
        components: {
            'c-button-arrows': () => import('@/ui/components/buttons/arrows')
        }
    }
</script>

<style lang="scss" scoped>
    .additional-action {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #fff;
        .additional-action__icon {
            margin-left: 9px;
        }
        .additional-action__button {
            margin-right: 8px;
        }
    }
</style>
