<template>
    <div>
        {{ show_tooltip }}
        <div
            class="tooltip-universal__content"
            @mouseover="show_tooltip = true"
            @mouseout="show_tooltip = false"
        >
            <slot/>
        </div>
        <div class="tooltip-universal" v-show="show_tooltip" >
            <slot name="tooltip"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tooltip-universal',
    props: {
        position: {
            type: String,
            default: 'left'
        }
    },
    data() {
        return {
            show_tooltip: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .tooltip-universal {
        position: relative;
    }

    .tooltip-universal {
        position: absolute;
        width: 360px;
        border-radius: 5px;
        color: #fff;
        background: #1C2032;
        text-align: left;
        z-index: 999;
        top: 100%;
        &.top {
        }
        &:before {
            width: 30px;
            height: 30px;
            position: absolute;
            left: -15px;
            top: calc(50% - 15px);
            content: "";
            background: #3D3E5D;
            transform: rotate(45deg);
            box-shadow: -7px 7px 14px rgba(0, 0, 0, .2);
        }
    }
</style>

