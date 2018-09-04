<template>
    <a class="load-more" @click.prevent="$emit('click')">
        <span class="load-more__text">
            <slot>Read More</slot>
        </span>
    </a>
</template>

<script>
    export default {
        name: 'read-more'
    }
</script>

<style lang="scss" scoped>
    .load-more {
        display: block;
        text-align: center;
        width: 100%;
        overflow: hidden;
        margin: 10px 0;
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
                &:before {
                    transform: translateX(-25px);
                }
                &:after {
                    transform: translateX(25px);
                }
            }
        }
</style>
