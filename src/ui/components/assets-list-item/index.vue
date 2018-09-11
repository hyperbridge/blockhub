<template>
    <div class="assets-list">
        <div class="assets-list__item-container"
             v-for="(item, index) in items"
             :style="{ width: 'calc( 100% / ' + itemInRow + ')'}"
             :key="index">
            <c-assets-item :item="item" />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'itemInRow'],
        components:{
            'c-assets-item': () => import('@/ui/components/assets-list-item/item')
        }
    }
</script>

<style lang="scss" scoped>
    .assets-list{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 -10px;
        width: calc( 100% + 20px );
    }
    .assets-list__item-container{
        padding: 10px;
    }
    .assets-list__item {
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: rgba(0, 0, 0, .33);
        padding: 10px;
        width: 100%;
        height: 100%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
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
</style>
