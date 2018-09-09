<template>
    <div class="main-banner">
        <div class="main-banner__content"
             :class="{ 'bg-image' : imgSrc }"
             :style="{ 'background-image' : 'url(' + imgSrc + ')' }">
            <div class="main-banner__content--logo" :class="[ 'logo-size-' + logoSize ]">
                <img :src="logoSrc" alt="company-logo"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main-banner',
        props: {
            imgSrc: String,
            logoSrc: String,
            logoSize:{
                type: String,
                default: 'md'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-banner{
        background: rgba(0, 0, 0, .13);
        padding: 10px;
        border-radius: 5px;
        width: 100%;
    }
    .main-banner__content{
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        min-height: 300px;
        display: flex;
        &.bg-image{
            background-size: cover;
            background-position: center;
        }
    }
    .main-banner__content--logo{
        padding: 25px;
        &.logo-size-xs{
            img{
                max-height: 50px;
                max-width: 100%;
            }
        }
        &.logo-size-sm{
            img{
                max-height: 100px;
                max-width: 100%;
            }
        }
        &.logo-size-md{
            img{
                max-height: 150px;
                max-width: 100%;
            }
        }
        &.logo-size-lg{
            img{
                max-height: 200px;
                max-width: 100%;
            }
        }
        &.logo-size-xl{
            img{
                max-height: 250px;
                max-width: 100%;
            }
        }
    }
</style>
