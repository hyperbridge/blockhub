<template>
    <div class="assets-list">
        <div class="assets-list__item-container"
             v-for="(item, index) in items"
             :style="{ width: 'calc( 100% / ' + itemInRow + ')'}"
             :key="index">
            <div class="assets-list__item">
                <div class="thumb">
                    <img
                        :src="item.img"/>
                </div>
                <div class="info">
                    <h5>{{ item.title }}</h5>
                    <span class="float-left price">
                                    <i class="fas fa-dollar-sign"></i>
                                    {{ item.price }}
                                </span>
                    <span class="float-right box">
                                    <i class="fas fa-box"></i>
                                    {{ item.count }}
                                </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'itemInRow', 'showArrows']
    }
</script>

<style lang="scss" scoped>
    .assets-list{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 -5px;
    }
    .assets-list__item-container{
        padding: 5px;
    }
    .assets-list__item {
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: rgba(0, 0, 0, .33);
        padding: 10px;
        width: 100%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .thumb {
            display: inline-block;
            float: left;
            width: 25%;
            img {
                width: 100%;
                height: auto;
            }
        }
        .info {
            display: inline-block;
            width: 70%;
            float: right;
            span {
                i {
                    margin-right: 5px;
                }
            }
        }
    }
</style>
