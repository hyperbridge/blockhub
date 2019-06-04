<template>
    <div class="game-series">
        <c-heading-bar name="Featured Game Series" />
        <div
            class="game-series__container"
            :class="{ 'bg-gradient' : bgGradient }">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameStories',
    components: {
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-game-includes-list': () => import('~/components/game-series/game-includes-item').then(m => m.default || m),
        'c-game-description': () => import('~/components/game-series/game-description').then(m => m.default || m)
    },
    props: {
        bgGradient: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .game-series__container{
        padding: 15px;
        margin-top: -20px;
        background: rgba(0, 0, 0, .13);
        &.bg-gradient{
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+88,000000+100&0.65+91,0+100 */
            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        }
    }

</style>


<!--Change carousel dots position-->
<style lang="scss">
    .VueCarousel{
        &.custom-dots-top{
            .VueCarousel-dot-container{
                position: absolute;
                top: 10px;
                right: 10px;
                li{
                    margin: 0 3px!important;
                    padding: 2px!important;
                    button{
                        width: 12px!important;
                        height: 12px!important;
                        opacity: .5!important;
                        &:hover,
                        &:active,
                        &:focus{
                            opacity: .7!important;
                            outline: none;
                            box-shadow: none;
                        }
                    }
                    &.VueCarousel-dot--active{
                        button{
                            opacity: 1!important;
                            background: #fff!important;
                        }
                    }
                }
            }
        }
        &.carousel-full-height{
            .VueCarousel-wrapper{
                height: 100%;
                .VueCarousel-inner{
                    height: 100%;
                }
            }
        }
    }
</style>
