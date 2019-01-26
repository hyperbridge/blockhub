<template>
    <div class="searcher-bar">
        <div class="searcher-bar__input">
            <c-input v-model="searchQuery"  :class="{ 'search-active': searchQuery }" placeholder="Type to search" @input="startSearch" />
            <div class="searcher-bar__input-button" :class="{ 'searcher-bar__input-button-has-category' : currentCat }" v-if="searchQuery" @click="cleanQuery">
                <i :class="`fas fa-${currentCat.icon}`" style="font-size: 18px;margin-right: 10px" v-if="currentCat"></i>
                <i class="fas fa-times"></i>
            </div>
        </div>
        <transition name="slide-in">
            <div class="searcher-bar__results" v-if="isLoading || results.length">
                <transition name="slide-in">
                    <div class="searcher-bar__results-loader my-2" v-if="isLoading">
                        <c-loading-bar-circle size="sm" :showBg="false" />
                    </div>
                </transition>
                <transition name="slide-in">
                    <div class="searcher-bar__results-list" v-if="results.length">
                        <div class="searcher-bar__results-list-ttl">
                            Top results
                        </div>
                        <div class="searcher-bar__results-list-wrapper">
                            <c-search-category v-for="item in results" :category="item" @categorySelect="categoryIcon" @categoryClose=" currentCat = null ">
                                <template slot="filters" v-if="item.name.toLowerCase() == 'videos' ">
                                    <div class="invert">
                                        <select class="form-control form-control-sm">
                                            <option>
                                                All videos
                                            </option>
                                            <option>
                                                Game Play
                                            </option>
                                            <option>
                                               Game trailer
                                            </option>
                                        </select>
                                    </div>
                                </template>
                            </c-search-category>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
    const dummyData = [
        {
            name: 'GAMES',
            icon: 'gamepad',
            id: '1',
            items: [
                {
                    name: 'DOTA II',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Pev9VjKRsWtm5v92mNwqTn6zmA3JPu5ZqDMpx91EvpA3xk0-',
                    tags: ['RPG', 'TOP']
                },
                {
                    name: 'Warcraft',
                    image: 'https://images-na.ssl-images-amazon.com/images/I/91Pj60dwlaL._SX342_.jpg',
                    tags: ['Top10']
                },
                {
                    name: 'CS GO',
                    image: 'https://images.g2a.com/newlayout/323x433/1x1x0/cf9d56ddd32e/590db26eae653a7c1e3e9090',
                    tags: ['Action']
                }
            ]
        },
        {
            name: 'VIDEOS',
            icon: 'video',
            items: [
                {
                    name: 'Fanny Gameplay',
                    image: 'https://icdn.lenta.ru/images/2013/12/09/18/20131209180219575/pic_ec60b2f614fd22ada21d338d42135627.jpg',
                    description: 'Beep Beep'
                },
                {
                    name: 'Best Moments',
                    image: 'https://cnet2.cbsistatic.com/img/QKEVwmCOz-Y56dQQgK9JkODDrFM=/970x0/2018/11/02/5c1b53cb-0281-4f31-bbfc-70f11052a026/warcractiii.jpg',
                    tags: ['Top10']
                }
            ]
        },
        {
            name: 'LIVE',
            icon: 'video',
            id:'3',
            items:[
                {
                    name: 'akexbo',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7fnSLorYShTnE1Iyg8H8XjZXt-VAvs69oMp-tL1Tydu1ZhV6',
                    description: 'Spanish'
                },
                {
                    name: 'asparkan97',
                    image: 'data:image/jpeg;base64,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',
                    description: 'DC Universe Online Gameplay'
                }
            ]
        }
        ];

    export default {
        components:{
            'c-input': (resolve) => require(['@/ui/components/inputs'], resolve),
            'c-loading-bar-circle': (resolve) => require(['@/ui/components/loading-bar/circle'], resolve),
            'c-search-category': (resolve) => require(['@/ui/components/global-search/_includes/category'], resolve),
        },
        data(){
            return{
                searchQuery: '',
                isLoading: false,
                results: [],
                currentCat: null
            }
        },
        methods:{
            startSearch(){
                if (this.searchQuery)
                    this.results = dummyData
                else
                    this.results = []
            },
            categoryIcon(cat){
                this.currentCat = cat
            },
            cleanQuery(){
                this.searchQuery = ''
                this.results = []
            }
        }
    }
</script>

<style lang="scss" scoped>
    .searcher-bar{
        padding: 5px;
        border-radius: 5px;
    }
    .searcher-bar__input{
        position: relative;
        input{
            padding-right: 40px;
            &.search-active{
                border: 1px solid #0194ef;
            }
        }
    }
    .searcher-bar__input-button{
        position: absolute;
        padding: 0 5px;
        right: 5px;
        top: 5px;
        bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        border-radius: 3px;
        color: rgba( 255, 255, 255, .7);
        &.searcher-bar__input-button-has-category{
            background: #0194ef;
            span{
                margin-right: 10px;
            }
        }
    }
    .searcher-bar__results{
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #fff;
        background: #1a1d2e;
        border-radius: 5px;
        font-size: 18px;
        border: 1px solid rgba(0, 0, 0, .2);
        position: relative;
    }
    .searcher-bar__results-loader{
        position: relative;
        width: 100%;
        height: 40px;
    }
    .searcher-bar__results-list-wrapper{
        /*display: flex;*/
        /*flex-direction: column;*/
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .searcher-bar__results-list{
        display: flex;
        flex-direction: column;
    }
    .searcher-bar__results-list-ttl{
        background: rgba(255, 255, 255, .05);
        padding: 10px;
        width: 100%;
    }
</style>
