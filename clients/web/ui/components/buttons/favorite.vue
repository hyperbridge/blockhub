<template>
    <button
        class="favorite-btn"
        :class="{ 'favorite-btn--active': active }"
        :title="dynamicTitle"
        @click="$emit('click')">
        <c-icon :name="`${active ? unactiveIcon : activeIcon} mr-2`" />
        {{ dynamicTitle }}
    </button>
</template>

<script>
export default {
    props: {
        active: {
            type: String,
            default: false
        },
        target: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        activeIcon: {
            type: String,
            default: 'heart'
        },
        unactiveIcon: {
            type: String,
            default: 'heart'
        }
    },
    computed: {
        dynamicTitle() {
            const { target, active } = this
            return (active ? 'Remove from ' : 'Add to ') + target
        }
    }
}
</script>

<style lang="scss" scoped>
    .favorite-btn {
        color: #fff;
        border-style: none;
        background: transparent;
        cursor: pointer;
        &:focus .fas {
            animation: clicked .6s ease;
        }
        outline: none;
        padding: 4px;
        text-align: left;
    }
    .favorite-btn .fas {
        color: #D4D4D8;
    }
    .favorite-btn--active .fas {
        color: #F75D5D;
        filter: drop-shadow(0 0 4px #F75D5D);
    }
    @keyframes clicked {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        30% {
            transform: scale(.9);
        }
        90% {
            opacity: 0;
            transform: scale(1.5);
        }
    }
</style>
