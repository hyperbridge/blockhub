<template>
    <div class="promotion-item">
        <div class="promotion-item__icon">
            <i :class="['fas fa-' + icon]"></i>
        </div>
        <h5 class="promotion-item__title" v-if="title">
            {{ title }}
        </h5>
        <c-button
            :href="link"
            status="outline-success"
            data-toggle="modal"
            data-target="#purchase-modal"
            icon_hide
        >
            <div v-if="price">
                <div class="font-weight-normal text-uppercase" v-if="basic">
                    Basic Package
                </div>
                Buy for ${{ price }}
            </div>
            <div v-else>
                Free Download
            </div>
        </c-button>
    </div>
</template>

<script>
export default {
    name: 'promotion-item',
    props: {
        title: {
            type: String
        },
        price: {
            type: String
        },
        link:{
            type: String
        },
        basic:{
            type: Boolean,
            default: false
        },
        icon:{
            type: String,
            default: 'shopping-cart'
        }
    }
}
</script>

<style lang="scss" scoped>
    .promotion-item {
        /*border: 2px solid #fbe17d;*/
        border-radius: 5px;
        padding: 8px 10px;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .promotion-item__title {
        font-size: 21px;
        font-weight: bold;
        padding: 0;
        margin: 0;
        color: #fff;
        width: calc(80% - 40px);
    }
    .promotion-item__icon{
        font-size: 18px;
        color: #fff;
        opacity: .4;
        width: 40px;
        text-align: left;
    }
    .c-btn {
        font-size: 16px;
        padding: 8px 13px !important;
        text-transform: uppercase;
        color: #fff!important;
        line-height: 20px;
        white-space: nowrap;
    }
</style>
