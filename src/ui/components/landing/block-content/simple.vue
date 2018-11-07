<template>
    <section class="landing-section" :class="{'full-height' : fullHeight}"
             :style="{
             'background-image' : 'url(' + bgImage + ')' ,
             'min-height' : minHeight,
             'background-position' : bgPosition
             }">
        <div class="container">
            <div class="row">
                <div class="landing__content-block-body">
                    <slot />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'simple-block',
        props:{
            titleGradient: {
                type: Boolean,
                default: false
            },
            titleShadow: {
                type: Boolean,
                default: false
            },
            title: String,
            minHeight: String,
            fullHeight: {
                type: Boolean,
                default: false
            },
            bgImage: String,
            bgPosition:{
                type: String,
                default: 'center'
            },
            vertical:{
                type: String,
                default: 'top'
            },
            horizontal:{
                type: String,
                default: 'left'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .landing-section{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 70px 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        &.full-height{
            min-height: 100vh;
        }
        .row{
            height: 100%;
        }
    }
    .landing__content-block-body{
        color: #fff;
        margin: 15px 0;
    }
</style>
