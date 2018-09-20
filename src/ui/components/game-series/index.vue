<template>
    <div class="game-series">
        <c-heading-bar name="Full Game Series" />
        <div class="game-series__container" :class="{ 'bg-gradient' : bgGradient }">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'game-stories',
        props:{
            bgGradient:{
                type: Boolean,
                default: false
            }
        },
        components: {
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar']),
            'c-game-includes-list': (resolve) => require(['@/ui/components/game-series/game-includes-item']),
            'c-game-description': (resolve) => require(['@/ui/components/game-series/game-description'])
        },
    }
</script>

<style lang="scss" scoped>
    .game-series__container{
        padding: 15px;
        margin-top: -20px;
        background: rgba(0, 0, 0, .13);
        &.bg-gradient{
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+88,000000+100&0.65+91,0+100 */
            background: -moz-linear-gradient(top, rgba(0,0,0,0.2) 88%, rgba(0,0,0,0.2) 91%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 88%,rgba(0,0,0,0.2) 91%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
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
