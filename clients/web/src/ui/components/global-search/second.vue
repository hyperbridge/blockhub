<template>
    <div class="searcher-bar">
        <c-input v-model="searchQuery" placeholder="Type to search" @input="startSearch" />
        <transition name="slide-in">
            <div class="searcher-bar__results" v-if="isLoading || results">
                <transition name="slide-in">
                    <div class="searcher-bar__results-loader my-2" v-if="isLoading">
                        <c-loading-bar-circle size="sm" :showBg="false" />
                    </div>
                </transition>
                <transition name="slide-in">
                    <div class="searcher-bar__results-list" v-if="results">
                        <div class="searcher-bar__results-list-ttl">
                            Top results
                        </div>
                        <c-search-category />
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
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
                results: [
                    {
                        name: 'Some name',
                        category: 'RPG'
                    }
                ]
            }
        },
        methods:{
            startSearch(){}
        }
    }
</script>

<style lang="scss" scoped>
    .searcher-bar{
        padding: 5px;
        border-radius: 5px;
        input{
            /*background: rgba(60, 62, 80, .8);*/
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
        overflow: hidden;
    }
    .searcher-bar__results-loader{
        position: relative;
        width: 100%;
        height: 40px;
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
