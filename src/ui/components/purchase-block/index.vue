<template>
    <c-block :title="title" class="purchase-block">

        <div class="purchase-block__price">${{ price }}</div>

        <div class="purchase-block__info">
            <div>Eligible for up to <i class="fas fa-coins mx-1" style="color: #FADC72"></i> HBX +{{ eligibleTokens }}</div>
            <div v-if="offers_purchases">Offers In-Game Purchases</div>
            <div class="release-date">Release date: {{ releaseDate }}</div>

            <div v-if="isPurchased" class="purchased-status">
                <i class="fas fa-check"></i>
                Purchased
            </div>

            <div v-if="isUnavailable" class="unavailable-status">
                <i class="fas fa-ban"></i>
                Unavailable
            </div>
        </div>

        <div class="purchase-block__buttons-group">
            <c-button status="success" :href="purchaseLink" icon="shopping-cart" size="lg" v-if="isReleased">
                Proceed to Purchase
            </c-button>

            <c-button status="success" size="lg" icon="download" :href="purchaseLink" v-if="isPurchased">
                Free Download
            </c-button>

            <c-button icon_hide icon="download" :href="fullReviewsLink" v-if="hasDemo">
                Download Demo
            </c-button>

            <a :href="addToWishlist" class="wishlist-btn" v-if="!inWishlist">
                <i class="far fa-heart mr-2"></i>
                Add to Wishlist
            </a>
            <a :href="removeFromWishlist" class="wishlist-btn is-in" v-if="inWishlist">
                <i class="fas fa-heart mr-2"></i>
                Remove from Wishlist
            </a>
        </div>
    </c-block>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'purchase-block',
        props: {
            title:{
                type: String,
                default: 'Pre-purchase'
            },
            price: {
                type: Number,
                default: 0.00
            },
            eligibleTokens: {
                type: Number,
                default: 100
            },
            releaseDate:{
                type: String
            },
            offers_purchases: {
                type: Boolean,
                default: true
            },
            isUnavailable: {
                type: Boolean,
                default: true
            },
            isPurchased: {
                type: Boolean,
                default: true
            },
            isReleased: {
                type: Boolean,
                default: true
            },
            hasDemo: {
                type: Boolean,
                default: true
            },
            inWishlist: {
                type: Boolean,
                default: true
            },
            purchaseLink: String,
            fullReviewsLink: String,
            addToWishlist: String,
            removeFromWishlist: String
        },
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
            margin-top: 15px;
        }
        .purchased-status{
            font-size: 20px;
            color: #43C981;
            margin-top: 15px;
            i{
                margin-right: 8px;
            }
        }
        .unavailable-status{
            font-size: 20px;
            color: #F75D5D;
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
            margin-top: 15px;
            &:hover,
            &.is-in{
                text-decoration: none;
                opacity: 1;
                i{
                    color: #F75D5D;
                }
            }
        }
    }
</style>
