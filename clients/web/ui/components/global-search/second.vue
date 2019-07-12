<template>
    <div class="searcher-bar">
        <div class="searcher-bar__input">
            <c-input
                v-model="searchQuery"
                :class="{ 'search-active': searchQuery }"
                placeholder="Type to search"
                @input="startSearch" />
            <div
                class="searcher-bar__input-button"
                :class="{ 'searcher-bar__input-button-has-category' : currentCat }"
                @click="cleanQuery">
                <i
                    v-if="currentCat"
                    :class="`fas fa-${currentCat.icon}`"
                    style="font-size: 20px;margin-right: 14px;color: #fff" />
                <i
                    v-if="searchQuery"
                    class="fas fa-times"
                    @click="cleanQuery" />
                <i
                    v-else
                    class="fas fa-search"
                    @click="startSearch" />
            </div>
        </div>
        <transition name="slide-in">
            <div
                v-if="isLoading || results.length"
                class="searcher-bar__results">
                <transition name="slide-in">
                    <div
                        v-if="isLoading"
                        class="searcher-bar__results-loader my-2">
                        <c-loading-bar-circle
                            size="sm"
                            :showBg="false" />
                    </div>
                </transition>
                <transition name="slide-in">
                    <div
                        v-if="results.length"
                        class="searcher-bar__results-list">
                        <div class="searcher-bar__results-list-ttl">
                            Top results
                        </div>
                        <div class="searcher-bar__results-list-wrapper">
                            <c-search-category
                                v-for="(item, idx) in results"
                                :key="`result-item${idx}`"
                                :category="item"
                                @categorySelect="categoryIcon"
                                @categoryClose=" currentCat = null ">
                                <template
                                    v-if="item.name.toLowerCase() == 'videos' "
                                    slot="filters">
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
        id: '3',
        items: [
            {
                name: 'akexbo',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7fnSLorYShTnE1Iyg8H8XjZXt-VAvs69oMp-tL1Tydu1ZhV6',
                description: 'Spanish'
            },
            {
                name: 'asparkan97',
                image: 'https://icdn.lenta.ru/images/2013/12/09/18/20131209180219575/pic_ec60b2f614fd22ada21d338d42135627.jpg',
                description: 'DC Universe Online Gameplay'
            }
        ]
    }
]

export default {
    components: {
        'c-input': () => import('~/components/inputs').then(m => m.default || m),
        'c-loading-bar-circle': () => import('~/components/loading-bar/circle').then(m => m.default || m),
        'c-search-category': () => import('~/components/global-search/_includes/category').then(m => m.default || m)
    },
    data() {
        return {
            searchQuery: '',
            isLoading: false,
            results: [],
            currentCat: null
        }
    },
    methods: {
        startSearch() {
            if (this.searchQuery) { this.results = dummyData } else { this.results = [] }
        },
        categoryIcon(cat) {
            this.currentCat = cat
        },
        cleanQuery() {
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
            padding-right: 35px;
            &.search-active{
                border: 1px solid #0194ef;
            }
        }
    }
    .searcher-bar__input-button{
        position: absolute;
        padding: 0 5px 0 5px;
        right: 3px;
        top: 3px;
        bottom: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        border-radius: 3px;
        color: rgba(255, 255, 255, .6);
        &:hover{
            cursor: pointer;
        }
        &.searcher-bar__input-button-has-category{
            background: #0194ef;
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
