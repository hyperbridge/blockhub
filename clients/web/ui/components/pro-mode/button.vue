<template>
    <div class="pro-mode-button">
        <button type="button" @click="$emit('click')">
            <i :class="`fas fa-${icon} margin-right-10`" v-if="icon"></i>
            <slot />
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: null
            }
        }
    }
</script>

<style lang="scss">
    .pro-mode-button{
        button{
            border: unset;
            border-radius: 4px;
            background: #e52d87;
            color: #fff;
            display: inline-flex;
            align-items: center;
            padding: 4px 10px;
            font-size: 16px;
            &:hover{
                cursor: pointer;
                background: #bc256f;
            }
        }
    }
</style>
