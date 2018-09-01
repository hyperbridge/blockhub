<template>
    <div class="heading-bar">
        <h3 class="heading-bar__name" :class="{ 'heading-bar__name--with-bg': showBackground }">{{ name }}</h3>
        <div class="heading-bar__additional-action">
            <slot name="additional-action"></slot>
            <a :href="more" v-if="more" class="more">
                MORE <i class="fas fa-angle-right"></i>
            </a>
            <div class="heading-bar__nav" v-if="showArrows">
                <a href="#3" class="nav-prev">
                    <i class="fas fa-arrow-left"></i>
                </a>
                <a href="#3" class="nav-next">
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'heading-bar',
    props: {
        name: String,
        showBackground: Boolean,
        showArrows: Boolean,
        more: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .heading-bar{
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 2px solid #fff;
        margin-bottom: 20px;
    }

    .heading-bar__name {
        color: #fff;
        border-bottom: 5px solid #fff;
        padding: 0 5px 0 0;
        margin: 0;
        display: inline-block;
        font-size: 21px;
        font-weight: bold;
        line-height: 36px;
        float: left;
        max-width: calc( 100% - 95px );
        position: relative;
        &:after{
            content: "";
            position: absolute;
            bottom: -6px;
            right: -5px;
            height: 5px;
            border: 3px solid transparent;
            border-bottom: 3px solid #fff;
            border-left: 3px solid #fff;
        }

        &.heading-bar__name--with-bg{
            background: #fff;
            color: #30304B;
            border-radius: 5px 10px 0 0;
            border: none;
            padding: 0 15px;
            line-height: 40px;
            font-weight: normal;
            &:after{
                height: 36px;
                bottom: 0;
                right: -34px;
                border: 18px solid transparent;
                border-bottom: 18px solid #fff;
                border-left: 18px solid #fff;
            }
        }
    }
    .heading-bar__additional-action{
        width: auto;
        line-height: 40px;
        display: flex;
        align-items: center;
    }

    .heading-bar__nav{
        display: inline-block;
        width: 60px;
        float: right;
        text-align: right;
        a{
            display: inline-block;
            width: 30px;
            color: #fff;
            float: left;
            line-height: 40px;
            font-size: 20px;
            &.more{
                font-size: 14px;
                width: auto;
                font-weight: bold;
                float: right;
                i{
                    margin-left: 5px;
                }
            }
        }
    }


</style>
