<template>
    <div class="collection-list">
        <div class="collection-list__header">
            <h3>{{ title }}</h3>
            <div>{{ description }}</div>
            <div class="slider-dots">
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
        </div>
        <div class="collection-list__container">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'collection-list',
        props:['title', 'description']
    }
</script>

<style lang="scss" scoped>
    .collection-list{
        padding: 10px;
        border-radius: 5px;
        background: rgba(255, 255, 255, .2);
        position: relative;
    }
    .collection-list__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        width: 100%;
        h3{
            color: #fff;
            padding: 0;
            margin-bottom: 0;
            white-space: nowrap;
            font-size: 30px;
            margin-right: 20px;
        }
    }
    .collection-list__container{
        margin: 0px -10px -10px;
    }
</style>

<style lang="scss">

    .slider-dots{
        position: relative;
        display: flex;
        width: auto;
        margin-left: 20px;
        .swiper-pagination{
            display: flex;
            position: relative;
            span{
                margin: 1px 4px;
                height: 9px;
                width: 9px;
                background: #fff;
                opacity: .5;
                &:active,
                &:focus{
                    outline: none;
                    box-shadow: none;
                }
                &.swiper-pagination-bullet-active{
                    opacity: 1;
                }
            }
        }
    }
</style>
