<template>
    <div
        class="option-block"
        :class="{'box-shadow' : shadow }">
        <div class="option-block__head">
            <div class="option-block__head-logo">
                <img :src="image">
            </div>
            <div class="option-block__head-info">
                <div class="h3">
                    {{ title }}
                </div>
                <div>
                    {{ subtitle }}
                </div>
            </div>
        </div>
        <div
            class="option-block__notification"
            :style="{'background-color' : ntfColor }">
            {{ notification }}
        </div>
        <div class="option-block__body">
            <div class="option-block__list">
                <c-option-list-item
                    v-for="item in list"
                    :key="item.id"
                    :selected="selectedId == item.id ? true : false"
                    :image="item.image"
                    :price="item.price"
                    @select="selectThis(item.id)">
                    {{ item.name }}
                </c-option-list-item>
            </div>
            <div class="option-block__action-list">
                <c-button
                    status="second-info"
                    size="xl"
                    class="my-2"
                    @click="$emit('buy')">
                    Buy now
                </c-button>
                <c-button
                    status="opacity-info"
                    class="my-2"
                    size="xl"
                    style="border-radius: 2px"
                    @click="$emit('gift')">
                    Gift
                </c-button>
                <c-button-fav
                    target="Wishlist"
                    :active="inWishlist"
                    class="text-center wishlist-btn"
                    @click="$emit('addToWishlist')" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OptionBlock',
    components: {
        'c-button-fav': () => import('~/components/buttons/favorite').then(m => m.default || m),
        'c-option-list-item': () => import('~/components/option-block/list-item').then(m => m.default || m)
    },
    props: {
        image: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        subtitle: {
            type: String,
            default: null
        },
        notification: {
            type: String,
            default: null
        },
        list: {
            type: Array,
            default: () => []
        },
        ntfColor: {
            type: String,
            default: null
        },
        inWishlist: {
            type: Boolean,
            default: false
        },
        shadow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selectedId: ''
        }
    },
    methods: {
        selectThis(id) {
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
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%,rgba(0, 0, 0, 0.4) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        border-top: 2px solid rgba(0, 0, 0, 0.1);
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
        background-color: rgba(254, 204, 0, 1);
        padding: 8px 15px;
        border: 1px solid rgba(0,0,0,.5);
        color: #000;
        font-size: 16px;
    }
    .option-block__body{
        background: rgba(0, 0, 0, 0.3);
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
