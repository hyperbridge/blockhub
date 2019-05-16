<template>
    <transition-group class="assets-list" name="assets-list" tag="div">
        <div
            v-for="item in items"
            :key="item.id"
            class="assets-list__item-container"
            :style="{ width: 'calc( 100% / ' + itemInRow + ')'}"
        >
            <c-assets-item :item="item" />
        </div>
    </transition-group>
</template>

<script>
    export default {
        name: 'assets-list-items',
        props: ['items', 'itemInRow'],
        components:{
            'c-assets-item': (resolve) => require(['@/components/assets-list-item/item'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .assets-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 -10px;
        width: calc( 100% + 20px );
    }
    .assets-list-leave-active {
        position: absolute !important;
        opacity: 0;
    }
    .assets-list-move {
        transition: transform 1s ease, opacity 1s ease !important;
    }
    .assets-list__item-container {
        padding: 10px;
    }
    .assets-list__item {
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .thumb {
            display: inline-block;
            float: left;
            img {
                height: auto;
                width: 60px;
            }
        }
        .info {
            display: inline-block;
            width: calc( 100% - 80px );
            float: right;
            h5{
                color: #fff;
            }
            span {
                i {
                    margin-right: 5px;
                }
            }
        }
    }
    @media (max-width: 767px) {
        .assets-list__item-container{
            width: 100%!important;
            padding: 0;
            margin-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, .1);
            &:last-child{
                margin: 0;
                border: unset;
            }
        }
    }
</style>
