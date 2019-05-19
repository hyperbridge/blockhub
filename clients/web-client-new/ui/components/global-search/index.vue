<template>
    <div class="global-search">
        <c-input v-model="searchQuery" placeholder="Type to search" @input="startSearch" />
        <transition name="slide-in">
            <div class="global-search__results-loader my-2" v-if="isLoading">
                <c-loading-bar-circle size="sm" :showBg="false" />
            </div>
        </transition>
        <transition name="slide-in">
            <template v-if="searchQuery.length">
                <div class="global-search__results" v-if="results.length">
                    <div class="global-search__results-type" v-for="type in results" v-if="results.length">
                        <div class="h5 font-weight-bold margin-left-5">
                            {{ type.name }}
                        </div>
                        <div class="global-search__result-list">
                            <a :href="link.link" v-for="link in type.items">
                                <img :src="link.image" v-if="link.image"/>
                                <span class="link-text">
                            {{ link.name }}
                            </span>
                                <span class="enter-icon">
                                ENTER
                                <img src="../../static/img/icons/enter-arrow.png" />
                            </span>
                            </a>
                        </div>
                    </div>
                    <div class="keyboard-nav-info">
                        <img src="../../static/img/icons/keyboard-arrows.png" />
                        Use arrows to select
                    </div>
                </div>
                <div class="h6 font-weight-bold text-white p-1 mt-3" v-else>
                    Nothing to show
                </div>
            </template>
        </transition>
    </div>
</template>

<script>
    export default {
        props:{},
        components:{
            'c-input': () => import('~/components/inputs').then(m => m.default || m),
            'c-loading-bar-circle': () => import('~/components/loading-bar/circle').then(m => m.default || m),
        },
        data(){
            return{
                searchQuery: '',
                isLoading: false,
                results: []
            }
        },
        methods:{
            startSearch(){
                this.isLoading = true;
                this.results = [

                        {
                            name: 'Game',
                            items: [
                                {
                                    name: 'Starcraft 2',
                                    link: '#',
                                    image: 'http://aux.iconspalace.com/uploads/1058884804728122131.png'
                                },
                                {
                                    name: 'Starcraft 1',
                                    link: '#',
                                    image: 'https://pbs.twimg.com/profile_images/1075815486221299712/K8c4i-oC_400x400.jpg'
                                }
                            ]
                        },
                        {
                            name: 'Curator',
                            items: [
                                {
                                    name: 'StarOfGame',
                                    link: '#'
                                },
                            ]
                        },
                        {
                            name: 'News',
                            items: [
                                {
                                    name: 'Starcraft 2 was released',
                                    link: '#'
                                }
                            ]
                        },
                        {
                            name: 'Help',
                            items: [
                                {
                                    name: 'Can I install Starcraft 2 on MAC?',
                                    link: '#'
                                },
                                {
                                    name: 'Starcraft 1 has freeze on Linux',
                                    link: '#'
                                },
                            ]
                        },
                ];
                this.isLoading = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .global-search{
        background: #1a1d2e;
        padding: 5px;
        border-radius: 5px;
        input{
            background: rgba(60, 62, 80, .8);
        }
    }
    .global-search__results{
        padding: 0px 5px 5px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #fff;
        flex-wrap: wrap;
    }
    .global-search__results-loader{
        position: relative;
        width: 100%;
        height: 40px;
    }
    .global-search__results-type{
        width: 48%;
        margin: 10px 0 15px;
    }
    .global-search__result-list{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        a{
            padding: 4px 5px;
            border-radius: 5px;
            width: 100%;
            color: #fff;
            text-decoration: none;
            position: relative;
            display: flex;
            align-items: center;
            min-height: 33px;
            img{
                width: 40px;
                height: 25px;
                margin-right: 5px;
            }
            .link-text{
                text-overflow: ellipsis;
                overflow: hidden;
                width: auto;
                white-space: nowrap;
                margin-right: 10px;
            }
            .enter-icon{
                display: flex;
                visibility: hidden;
                align-items: flex-end;
                justify-content: space-between;
                padding: 0 5px;
                background: #fff;
                border-radius: 3px;
                color: #545562;
                font-size: 9px;
                text-transform: uppercase;
                font-weight: bold;
                line-height: 12px;
                width: auto;
                margin-left: auto;
                /*position: absolute;*/
                /*right: 5px;*/
                /*top: 9px;*/
                img{
                    height: 15px;
                    width: auto;
                    margin-right: unset;
                    margin-left: 8px;
                }
            }
            &:hover{
                background: rgba(255, 255, 255, .1);
                .enter-icon{
                    visibility: visible;
                }
            }
        }
    }
    .keyboard-nav-info{
        width: 100%;
        padding: 15px 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #39b0ff;
        font-size: 14px;
        img{
            height: 20px;
            width: auto;
            margin-right: 10px;
        }
    }
</style>
