<template>
    <div class="game-includes">
        <div class="game-includes__title">
            <h3>What's included</h3>
        </div>
        <div class="game-includes__list">
            <div class="game-includes__item-container" v-for="(item, index) of list" :key="index" >
                <c-includes-item :item="item" />
            </div>
            <div class="game-includes__list-more" v-if="list.length > showNumber">
                <i class="fas fa-chevron-right"></i>
                <span>+{{ hiddenCount() }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'game-includes-list',
        props:['list', 'showNumber'],
        data(){
            return{
                hiddenItems: ''
            }
        },
        components: {
            'c-includes-item': () => import('@/ui/components/game-series/game-includes-item'),
        },
        methods:{
            hiddenCount(){
                return this.list.length - this.showNumber;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .game-includes__title{
        display: flex;
        width: 100%;
        margin: 15px 0;
        justify-content: center;
        overflow: hidden;
        h3{
            display: inline-block;
            color: #fff;
            font-size: 21px;
            padding: 0;
            position: relative;
            margin: 15px 0 5px;
            &:before,
            &:after{
                content: "";
                position: absolute;
                top: 50%;
                background: #fff;
                height: 1px;
                width: 600px;
            }
            &:before{
                left: -30px;
                transform: translateX(-600px);
            }
            &:after{
                right: -30px;
                transform: translateX(600px);
            }
        }
    }
    .game-includes__list{
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
        margin: 0 -10px;
    }
    .game-includes__list-more{
        width: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        padding: 0 10px 0 15px;
        color: #fff;
        i{
            font-size: 68px;
        }
        span{
            margin-left: 15px;
        }
    }
    .game-includes__item-container{
        width: calc(100%/5 - 20px);
        margin: 10px;
    }
</style>
