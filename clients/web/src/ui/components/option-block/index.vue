<template>
    <div class="option-block">
        <div class="option-block__head">
            <div class="option-block__head-logo">

            </div>
            <div class="option-block__head-info">
                <div class="h3">
                    World of Warcraft®: Battle for Azeroth
                </div>
                <div>
                    Massively Multiplayer RPG
                </div>
            </div>
        </div>
        <div class="option-block__notification">
            Pre-Purchase Now!
        </div>
        <div class="option-block__body">
            <div class="option-block__action-list">
                <c-button status="second-info" class="my-2">
                    Buy now
                </c-button>
                <c-button status="opacity-info" class="my-2" size="xl" style="border-radius: 3px">
                    Gift
                </c-button>
                <c-btn-fav
                    @click="$emit('addToWishlist')"
                    target="Wishlist"
                    :active="inWishlist"
                    class="text-center wishlist-btn"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'option-block',
        props:{
            inWishlist: {
                type: Boolean,
                default: false
            }
        },
        components: {
            'c-btn-fav': (resolve) => require(['@/ui/components/buttons/favorite'], resolve)
        }
    }
</script>

<style lang="scss" scoped>
    .option-block{
        display: flex;
        flex-direction: column;
    }
    .option-block__head{
        padding: 15px;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#272e3a+0,252c39+100 */
        background: rgb(39,46,58); /* Old browsers */
        background: -moz-linear-gradient(top, rgba(39,46,58,1) 0%, rgba(37,44,57,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(39,46,58,1) 0%,rgba(37,44,57,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(39,46,58,1) 0%,rgba(37,44,57,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#272e3a', endColorstr='#252c39',GradientType=0 ); /* IE6-9 */
        border-top: 1px solid #3e454f;
        border-bottom: 1px solid rgba(0, 0, 0, .7);
    }
    .option-block__head-logo{
        width: 80px;
    }
    .option-block__head-info{
        width: calc( 100% - 80px );
        padding-left: 15px;
    }
    .option-block__notification{
        background-color: #fecc00;
        padding: 8px 30px;
        border: 1px solid rgba(0,0,0,.3);
        color: #000;
        font-size: 16px;
    }
    .option-block__body{
        background: #202837;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }
    .option-block__action-list{
        display: flex;
        flex-direction: column;
        padding: 15px 15px 10px;
    }
    .wishlist-btn{
        color: #fff;
        opacity: .8;
        background: transparent;
        padding: 0;
        border: none;
        margin: 15px auto 0;
        width: auto;
        &:hover,
        &.is-in{
            text-decoration: none;
            opacity: 1;
            cursor: pointer;
            i{
                color: #F75D5D;
            }
        }
        &:active,
        &:focus{
            outline: none;
            box-shadow: none;
        }
    }
</style>
