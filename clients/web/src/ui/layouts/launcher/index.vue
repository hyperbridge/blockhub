<template>
    <div class="launcher" :style=" `background-image: url(${bgImage})`">
        <div class="launcher__overlay" :style="`opacity: ${overlayOpacity}; background-color: ${overlayColor}`" v-if="overlay"></div>
        <div class="launcher__top-bar">
            <slot name="header" />
        </div>
        <div class="game-shortcuts">
            <div class="game-shortcuts__wrapper">
                <div class="game-shortcuts__item" v-for="game in gamesShortcuts">
                    <img :src="game.image"/>
                </div>
            </div>
        </div>
        <div class="launcher__main-content">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            bgImage: String,
            overlay: {
                type: Boolean,
                default: true
            },
            overlayOpacity:{
                type: [ String, Number ],
                default: 0.4
            },
            overlayColor:{
                type: String,
                default: '#000'
            }
        },
        data(){
            return{
                gamesShortcuts: [
                    {
                        "image": "http://www.transparentpng.com/download/doom/tml22U-doom-game-free-cut-out.png",
                    },
                    {
                        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/46b63d3c-ae67-464c-9a37-670829b2a157/datt5yp-68d54e82-58e1-44f4-92e9-9a615ff30c63.png",
                    },
                    {
                        "image": "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Silent-Hunter-5-Battle-of-the-Atlantic-1-icon.png",
                    },
                    {
                        "image": "http://bestgames4all.ru/uploads/images/e/a/_/ea_metro_2033_redux.jpg",
                    },
                    {
                        "image": "https://steamuserimages-a.akamaihd.net/ugc/862861700716666132/4906F3679ACA4FAA7BAFBE194B6EBEE00D8ACA90/",
                    },
                    {
                        "image": "http://pluspng.com/img-png/tom-clancys-ghost-recon-png-tom-clancys-ghost-recon-logo-png-picture-512.png",
                    },
                    {
                        "image": "https://cdn.wccftech.com/wp-content/uploads/2014/05/Watch-Dogs-Logo4.png",
                    },
                    {
                        "image": "https://www.digiseller.ru/preview/403777/p1_2208863_988b90bd.png",
                    },
                    {
                        "image": "https://www.digiseller.ru/preview/403777/p1_2208863_35bf7488.png",
                    },
                    {
                        "image": "https://www.digiseller.ru/preview/403777/p1_2208863_02419b9c.png",
                    },
                    {
                        "image": "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-28/256/Rogue-Trooper-1-icon.png",
                    },
                    {
                        "image": "http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Sniper-Ghost-Worrior-3-icon.png",
                    }
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .launcher{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        min-height: 100vh;
        width: 100%;
        padding-left: 100px;
        padding-top: 80px;
        background-size: cover;
        background: fixed no-repeat top center;
    }
    .launcher__overlay{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba( 0, 0, 0, .3 );
        z-index: 3;
    }
    .launcher__top-bar{
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, .4);
        border-bottom: 1px solid rgba( 255, 255, 255, .5);
        padding: 10px;
    }
    .game-shortcuts{
        position: fixed;
        top: 80px;
        bottom: 0;
        left: 0;
        /*padding: 5px;*/
        width: 100px;
        background: rgba(0, 0, 0, .7);
        border-right: 1px solid rgba(0, 0, 0, .9);
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 10;
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0) !important;
            border: 0 none !important;
            display: none;
            width: 0!important;
        }
    }
    .game-shortcuts__wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px;
        width: 100%;
    }
    .game-shortcuts__item{
        width: 90px;
        min-height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin-bottom: 5px;
        border: 1px solid transparent;
        -webkit-flex: 1 1 auto;
        transition: all 200ms ease-in-out;
        transform: scale(0.95);
        img{
            width: 100%;
        }
        &:hover{
            cursor: pointer;
            transform: scale(1.1);
        }
    }
    .launcher__main-content{
        width: 100%;
        height: auto;
        padding: 20px;
        position: relative;
        z-index: 5;
    }
</style>
