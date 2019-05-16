<template>
    <div class="metro-item__wrapper" :style="{ 'padding' : gutter + 'px', 'width' : width }">
        <div class="metro-item" :class="{ 'metro-item--full-img' : fullImage, 'metro-item--shadow' : shadow }">
            <div class="metro-item__image">
                <img :src="image"/>
            </div>
            <div class="metro-item__description">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            image: String,
            width:{
                type: String,
                default: '400px'
            },
            gutter:{
                type: [ String, Number ],
                default: 10
            },
            fullImage:{
                type: Boolean,
                default: false
            },
            shadow:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .metro-item__wrapper{
        display: flex;
    }
    .metro-item{
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255, 255, 255, .2);
        box-sizing: border-box;
        position: relative;
        height: 100%;
        width: 100%;
        &.metro-item--shadow{
            box-shadow: 0 0 20px rgba(0, 0, 0, .7);
        }
        &:before{
            content: "";
            position: absolute;
            top: -2px;
            right: -2px;
            bottom: -2px;
            left: -2px;
            border: 1px solid rgba(0, 0, 0, .9);
        }
    }
    .metro-item__image{
        img{
            width: 100%;
            object-fit: cover;
            max-height: 50%;
        }
    }
    .metro-item__description{
        padding: 20px;
        color: #fff;
        background: #1C2032;
        height: 100%;
    }
    .metro-item--full-img{
        .metro-item__image{
            height: 100%;
            img{
                max-height: unset;
                height: 100%;
            }
        }
        .metro-item__description{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, .4);
            height: auto;
        }
    }
</style>
