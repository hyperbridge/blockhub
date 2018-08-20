<template>
    <button class="c-btn" :class="[ 'c-' + variant, c_class ]" @click="$emit('click')">
        <i class="left-icon" :class="icon" v-if="icon_position == 'left'"></i>
        {{ text }}
        <i class="right-icon" :class="icon" v-if="icon_position == 'right'"></i>
    </button>
</template>

<script>
    export default {
        props: {
            variant : { default: 'default' },
            text : { required: true },
            icon : { default: false },
            icon_position : { default: false},
            c_class: { default: false }
        }
    }
</script>

<style lang="scss">
    .c-btn{
        display: inline-block;
        padding: 0px 8px;
        line-height: 24px;
        font-size: 13px;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        text-transform: uppercase;
        cursor: pointer;
        .left-icon{
            margin-right: 3px;
        }
        .right-icon{
            margin-left: 3px;
        }
        &:active,
        &:focus{
            outline: none;
            box-shadow: none;
        }
        &.c-default{
            background: #fff;
            color: #3D3E5D;
            &:hover{
                background: #3D3E5D;
                color: #A2A3BE;
            }
        }
        &.c-info{
            background: #5D75F7;
            color: #fff;
            &:hover{
                background: #5D75F7;
                color: #30304B;
            }
        }
        &.c-success{
            background: #5EA72B;
            color: #fff;
            &:hover{
                background: #5EA72B;
                color: #30304B;
            }
        }
        &.c-danger{
            background: #F75D5D;
            color: #fff;
            &:hover{
                background: #F75D5D;
                color: #30304B;
            }
        }
    }
</style>
