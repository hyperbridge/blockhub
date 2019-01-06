<template>
    <div class="global-search">
        <c-input v-model="searchQuery" placeholder="Type to search" />
        <transition name="fade">
            <div class="global-search__results" v-if="results.length">
                <div class="global-search__results-type" v-for="type in results">
                    <div class="h5 font-weight-bold margin-left-5">
                        {{ type.name }}
                    </div>
                    <div class="global-search__result-list">
                        <a :href="link.link" v-for="link in type.items">
                            <img :src="link.image" v-if="link.image"/>
                            {{ link.name }}
                            <span class="enter-icon">
                                ENTER
                                <img src="../../../../static/img/icons/enter-arrow.png" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props:{},
        components:{
            'c-input': (resolve) => require(['@/ui/components/inputs'], resolve),
        },
        data(){
            return{
                searchQuery: '',
                results: [
                    {
                        name: 'Game',
                        items:[
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
                        items:[
                            {
                                name: 'StarOfGame',
                                link: '#'
                            },
                        ]
                    },
                    {
                        name: 'News',
                        items:[
                            {
                                name: 'Starcraft 2 was released',
                                link: '#'
                            }
                        ]
                    },
                    {
                        name: 'Help',
                        items:[
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
                ]
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
        border-top: 1px solid rgba(255, 255, 255, .1);
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #fff;
        flex-wrap: wrap;
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
                margin-left: 10px;
                position: absolute;
                right: 5px;
                top: 9px;
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
</style>
