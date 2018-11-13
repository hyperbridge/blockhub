<template>
    <div class="landing-benefactor">
        <div class="landing-benefactor__preview">
            <c-img :src="currentItem.src" />
        </div>
        <div class="landing-benefactor__list">
            <div class="landing-benefactor__includes-list" v-if="showList">
                <h3 class="font-weight-bold text-uppercase mb-4 text-center text-white">
                    EXTRA RARE ITEM LIST
                </h3>
                <ul>
                    <li v-for="inc in list">
                        {{ inc }}
                    </li>
                </ul>
            </div>
            <div class="landing-benefactor__list-item" v-for="(item, index) in items" :key="index" v-if="items" @mouseover="changeCurrent(item)">
                <div class="img" :style="{'background-image' : 'url(' + item.src + ')'}">
                </div>
                <c-landing-block-title fontSize="18" class="text-uppercase">
                    {{ item.name }}
                </c-landing-block-title>
                <div class="landing-benefactor__more-link" v-if="item.includes_list" @mouseover="toggleList(item.includes_list)" @mouseleave="showList = false">
                    Whats include?
                </div>
            </div>
            <div class="w-100 text-center" v-else>
                Nothing found here. Sorry!
            </div>
        </div>
        <div class="landing-benefactor__text-block">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'benefactor',
        props:{
            items: [String, Array]
        },
        components:{
            'c-landing-block-title' : (resolve) => require(['@/ui/components/landing/block-title/simple'], resolve),
        },
        data(){
            return{
                currentItem: {},
                list: [],
                showList: false
            }
        },
        created(){
            if(this.items)
                this.currentItem = this.items[0]
        },
        methods:{
            changeCurrent(item){
                if (!this.showList)
                    this.currentItem = item
            },
            toggleList(list){
                this.list = list;
                this.showList = !this.showList
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing-benefactor{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 8;
    }
    .landing-benefactor__preview{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        img{
            max-height: 400px;
            max-width: 600px;
            width: auto;
            height: auto;
        }
    }
    .landing-benefactor__list{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        width: 100%;
    }
    .landing-benefactor__list-item{
        width: 40%;
        padding: 15px;
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        text-align: center;
        transition: all 200ms ease-in-out;
        white-space: nowrap;
        position: relative;
        z-index: 7;
        .img{
            display: block;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            &:before{
                content: "";
                padding-top: 100%;
                float: left;
            }
        }
        .landing__block-title{
            margin-top: 15px;
        }
        &:hover{
            cursor: pointer;
            transform: scale(1.05);
        }
    }
    .landing-benefactor__more-link{
        position: relative;
        font-size: 14px;
        text-align: center;
        opacity: .7;
        color: #fff;
    }
    .landing-benefactor__includes-list{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 40px;
        z-index: 10;
        background: rgba(47, 46, 74, .95);
        border: 1px solid rgba(0, 0, 0, .3);
        box-shadow: 0 3px 6px rgba(0, 0, 0, .6);
        padding: 25px;
        color: #fff;
        &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 40px;
            z-index: 9;
        }
        ul{
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            li{
                width: calc(100%/3);
                list-style: none;
                opacity: .8;
            }
        }
    }
</style>
