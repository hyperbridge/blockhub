<template>
    <div class="option-block" :class="{'box-shadow' : shadow }">
        <div class="option-block__head">
            <div class="option-block__head-logo">
                <img src="https://eu.shop.battle.net/static/4.6.2/images/family-icons/world-of-warcraft.svg"/>
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
            <div class="option-block__list">
                <c-option-list-item v-for="item in list"
                                    :selected="selectedId == item.id ? true : false"
                                    :image="item.image"
                                    :price="item.price"
                                    @select="selectThis(item.id)"
                >
                    {{ item.name }}
                </c-option-list-item>
            </div>
            <div class="option-block__action-list">
                <c-button status="second-info" class="my-2">
                    Buy now
                </c-button>
                <c-button status="opacity-info" class="my-2" size="xl" style="border-radius: 2px">
                    Gift
                </c-button>
                <c-button-fav
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
            },
            shadow: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                list: [
                    {
                        id: '23423',
                        name: 'Digital Deluxe Edition',
                        price: '99.99',
                        image: 'https://bnetproduct-a.akamaihd.net//faa/1f29ed14601b9f480e4e37d75770b23a-upsell-bfa-dd.jpg',
                    },
                    {
                        id: '134',
                        name: 'Standard Edition',
                        price: '32.99',
                        image: 'https://bnetproduct-a.akamaihd.net//ffb/d843fb3f8393a4976d4c4beaceb1ca06-prod-thumb.jpg',
                    },
                    {
                        id: '3564',
                        name: 'Demo Edition',
                        price: '19.99',
                    }
                ],
                selectedId: ''
            }
        },
        components: {
            'c-button-fav': (resolve) => require(['@/ui/components/buttons/favorite'], resolve),
            'c-option-list-item': (resolve) => require(['@/ui/components/option-block/list-item'], resolve)
        },
        methods:{
            selectThis(id){
                this.selectedId = id
            }
        }
    }
</script>

<style lang="scss" scoped>
    .option-block{
        display: flex;
        flex-direction: column;
        &.box-shadow{
            box-shadow: 0 0 6px rgba(0, 0, 0, .3);
        }
    }
    .option-block__head{
        padding: 15px;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#272e3a+0,252c39+100 */
        background: rgb(39,46,58); /* Old browsers */
        background: -moz-linear-gradient(top, rgba(39,46,58,1) 0%, rgba(37,44,57,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(39,46,58,1) 0%,rgba(37,44,57,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(39,46,58,1) 0%,rgba(37,44,57,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#272e3a', endColorstr='#252c39',GradientType=0 ); /* IE6-9 */
        border-top: 2px solid #3e454f;
        border-bottom: 1px solid rgba(0, 0, 0, .7);
        display: flex;
    }
    .option-block__head-logo{
        flex-basis: 95px;
        padding-right: 15px;
        img{
            width: 100%;
            height: auto;
        }
    }
    .option-block__head-info{
        width: 100%;
    }
    .option-block__notification{
        background-color: #fecc00;
        padding: 8px 15px;
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
        padding: 15px 20px 10px;
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
