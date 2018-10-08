<template>
    <div class="game-includes">
        <div class="game-includes__title">
            <h3>What's included</h3>
        </div>
        <transition-group name="list" tag="div" class="game-includes__list">
            <div class="game-includes__item-container"
                 v-for="(item, index) of limitedList(limit)"
                 :style="{ width: 'calc(100% / ' + showNumber + ')'}"
                 :key="index" >
                <c-includes-item :id="item.id" :name="item.name" :developer="item.developer" :rating="item.rating.overall" :image="item.images.medium_tile" />
            </div>
        </transition-group>
        <!--Show buttons-->
        <c-load-more @click="showAll" v-if="showMore && list.length > showNumber - 1">
            Load More <span class="ml-3">+{{ hiddenCount() }}</span>
        </c-load-more>

        <!--Hide buttons-->
        <c-load-more v-if="!showMore" @click="hideAll">
            Hide
        </c-load-more>
    </div>
</template>

<script>
    export default {
        name: 'game-includes-list',
        props:['list', 'showNumber'],
        data(){
            return{
                hiddenItems: '',
                limit: this.showNumber,
                showMore: true
            }
        },
        components: {
            'c-includes-item': (resolve) => require(['@/ui/components/game-series/game-includes-item'], resolve),
            'c-load-more': (resolve) => require(['@/ui/components/buttons/load-more'], resolve),
        },
        methods:{
            hiddenCount(){
                return this.list.length - this.showNumber;
            },
            showAll(){
                this.limit = this.list.length;
                this.limitedList(this.limit);
                this.showMore = false;
            },
            hideAll(){
                this.limit = this.showNumber;
                this.limitedList(this.limit);
                this.showMore = true;
            },
            limitedList(limit) {
                let list = this.products,
                    newList = [];
                    list.forEach( function (item, i){
                        if (i <= limit-1) {
                            newList.push(item);
                        }
                    });

                return newList
            }
        },
        computed: {
            products() {
                return this.list.map(item => this.$store.state.marketplace.products[item])
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
        transition: all 200ms ease-in-out;
    }
    .game-includes__list-more{
        width: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        padding: 0 10px 0 15px;
        color: #fff;
        cursor: pointer;
        i{
            font-size: 68px;
        }
        span{
            margin-left: 15px;
        }
    }
    .game-includes__item-container{
        width: calc(100%/5 - 20px);
        padding: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
</style>
