<template>
    <div class="assets-list">
        <template v-for="(item, index) in items">
            <div class="assets-list__item-container"
                :style="{ width: 'calc( 100% / ' + itemInRow + ')'}"
                :key="index"
                v-if="item">
                <c-assets-item :item="item" />
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'assets-list-items',
        props: ['items', 'itemInRow'],
        components:{
            'c-assets-item': (resolve) => require(['@/ui/components/assets-list-item/item'], resolve)
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
</style>
