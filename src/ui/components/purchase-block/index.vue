<template>
    <c-block title="Pre-purchase" class="purchase-block">

        <div class="purchase-block__price">$49.99</div>

        <div class="purchase-block__info">
            <div>Eligible for up to <i class="fas fa-coins mx-1" style="color: #FADC72"></i> HBX +100</div>
            <div v-if="product.offers_purchases">Offers In-Game Purchases</div>
            <div class="release-date">Release date: 10/02/2018</div>

            <div v-if="product.isPurchased" class="purchased-status">
                <i class="fas fa-check"></i>
                Purchased
            </div>
        </div>

        <div class="purchase-block__buttons-group">
            <c-button status="success" :href="product.purchaseLink" icon="shopping-cart" size="lg" v-if="product.isReleased">
                Proceed to Purchase
            </c-button>
            <c-button status="success" size="lg" icon="download" :href="product.purchaseLink" v-if="product.isPurchased">
                Free Download
            </c-button>

            <c-button icon_hide icon="download" :href="product.fullReviewsLink" v-if="product.hasDemo">
                Download Demo
            </c-button>

            <a href="#3" class="wishlist-btn">
                <i class="fas fa-heart" v-if="product.inWishlist"></i>
                <i class="far fa-heart" v-else></i>
                Add to Wishlist
            </a>
        </div>
    </c-block>
</template>

<script>
    export default {
        name: 'purchase-block',
        props:['product'],
        components:{
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        }
    }
</script>

<style lang="scss" scoped>
    .purchase-block__price{
        font-size: 38px;
        line-height: 38px;
        font-weight: 500;
        padding: 0;
        margin: 0;
        display: inline-block;
    }
    .purchase-block__info{
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        .release-date{
            font-size: 16px;
            margin-top: 5px;
        }
        .purchased-status{
            font-size: 20px;
            color: #43C981;
            margin-top: 15px;
            i{
                margin-right: 8px;
            }
        }
    }
    .purchase-block__buttons-group{
        display: inline-flex;
        flex-direction: column;
        .c-btn{
            width: auto;
            margin: 0 auto 15px 0;
            align-self: flex-start;
            justify-content: flex-start;
        }
        .wishlist-btn{
            color: #fff;
            opacity: .8;
            &:hover{
                text-decoration: none;
                opacity: 1;
                i{
                    color: #F75D5D;
                }
            }
        }
    }
</style>
