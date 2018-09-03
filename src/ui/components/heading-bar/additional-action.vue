<template>
    <div class="additional-action margin-left-20" :class="customClass">
        <div class="text">
            {{ name }}
            <i :class="icon" v-if="icon"></i>
        </div>
        <div class="arrow_container">
            <i class="fas fa-sort-up" @click="$emit('click_up')"></i>
            <i class="fas fa-sort-down" @click="$emit('click_down')"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'icon', 'customClass']
    }
</script>

<style lang="scss" scoped>
    .additional-action {
        float: right;
        display: flex;
        width: auto;
        align-items: center;
        font-size: 14px;
        color: #fff;
        .text {
            margin-right: 5px;
            i {
                font-size: 16px;
                margin-left: 5px;
            }
        }
        .arrow_container {
            width: 20px;
            position: relative;
            display: inline-block;
            text-align: center;
            height: 25px;
            i {
                font-size: 18px;
                position: absolute;
                opacity: .7;
                left: 0;
                right: 0;
                &:first-child {
                    top: 0;
                    height: 50%;
                    z-index: 3;
                }
                &:last-child {
                    bottom: 0px;
                    height: 18px;
                    z-index: 1;
                }
                &:hover {
                    opacity: 1;
                    cursor: pointer;
                }
            }
        }
    }
</style>
