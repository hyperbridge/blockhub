<template>
    <div class="promotion-item" :class="{ 'bottom-border': border}">
        <div class="promotion-item__icon">
            <i class="fas fa-star" v-if="basic" style="color: #FADC72"></i>
            <i class="fas fa-shopping-cart" v-else></i>
        </div>
        <h5 class="promotion-item__title" :class="{'font-weight-bold' : basic}" v-if="title">
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
                Buy for {{ price | convertCurrency }}
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
        border:{
            type: Boolean,
            default: false
        },
        icon:{
            type: String,
            default: 'shopping-cart'
        },
        iconColor:{
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
    .promotion-item {
        /*border: 2px solid #fbe17d;*/
        padding: 5px 0px 15px 0px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.bottom-border{
            border-bottom: 1px solid rgba(255, 255, 255, .1);
        }
    }
    .promotion-item__icon{
        font-size: 18px;
        color: #C6C6D6;
        width: 30px;
        text-align: left;
    }
    .promotion-item__title {
        font-size: 21px;
        padding: 0;
        margin: 0;
        color: #fff;
        width: calc(80% - 40px);
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
