<template>
    <a class="load-more" :class="{ 'fixed': fixed }" @click.prevent="$emit('click')">
        <span class="load-more__text">
            <slot>Load More</slot>
        </span>
    </a>
</template>

<script>
    export default {
        name: 'load-more',
        props: {
            fixed: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .load-more {
        display: block;
        text-align: center;
        overflow: hidden;
        margin: 10px 0px;
        user-select: none;
        width: 100%;

        &.fixed {
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 20px;
            right: 30px;
            width: auto;
        }
        &:hover{
            text-decoration: none;
        }
    }

    .load-more__text {
        padding: 0 15px;
        color: #C6C6D6;
        text-transform: uppercase;
        position: relative;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        &:after, &:before {
            position: absolute;
            height: 1px;
            background-color: #C6C6D6;
            width: 90px;
            content: "";
            top: 50%;
            transition: transform 200ms ease-in-out;
        }
        &:after {
            right: -90px;
        }
        &:before {
            left: -90px;
        }
        &:hover {
            cursor: pointer;
            text-decoration: none;
            &:before {
                transform: translateX(-15px);
            }
            &:after {
                transform: translateX(15px);
            }
        }
    }
</style>
