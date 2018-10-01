<template>
    <c-block :title="title" class="card invert purchase-block">

        <div class="purchase-block__tags" v-if="tags">
            <div v-for="(tag, index) in tags" :key="index">
                {{ tag }}
            </div>
        </div>

        <div class="purchase-block__price"><span v-if="price">${{ price }}</span><span v-else>$0.00</span></div>

        <div class="purchase-block__info">
            <div v-if="eligibleTokens">Eligible for up to <i class="fas fa-coins mx-1" style="color: #FADC72"></i> HBX +{{ eligibleTokens }}</div>
            <div v-if="offers_purchases">Offers In-Game Purchases</div>
            <div class="release-date" v-if="releaseDate">Release date: {{ dateFormat(releaseDate) }}</div>

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
            <c-button status="custom" class="btn-outline-red" :href="purchaseLink" icon="shopping-cart" size="lg" v-if="isReleased && price" @click="onClickPurchase">
                Proceed to Purchase
            </c-button>

            <c-button status="success" size="lg" icon="download" :href="purchaseLink" v-if="!price" @click="onClickPurchase">
                Free Download
            </c-button>

            <c-button icon_hide icon="download" :href="fullReviewsLink" v-if="hasDemo">
                Download Demo
            </c-button>

            <button @click="$emit('addToWishlist')" class="wishlist-btn" v-if="!inWishlist">
                <i class="fas fa-heart mr-2"></i>
                Add to Wishlist
            </button>
            <button @click="$emit('removeFromWishlist')" class="wishlist-btn is-in" v-if="inWishlist">
                <i class="fas fa-heart mr-2"></i>
                Remove from Wishlist
            </button>
        </div>
    </c-block>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'purchase-block',
        props: {
            tags:{
                type: Array
            },
            title:{
                type: String,
                default: null
            },
            price: {
                type: Number,
                default: null
            },
            eligibleTokens: {
                type: Number,
                default: 0
            },
            releaseDate: {
                type: String,
            },
            offers_purchases: {
                type: Boolean,
                default: false
            },
            isUnavailable: {
                type: Boolean,
                default: false
            },
            isPurchased: {
                type: Boolean,
                default: false
            },
            isReleased: {
                type: Boolean,
                default: false
            },
            hasDemo: {
                type: Boolean,
                default: false
            },
            inWishlist: {
                type: Boolean,
                default: false
            },
            purchaseLink: String,
            fullReviewsLink: String,
            onClickPurchase: Function
        },
        components:{
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        },
        methods: {
            dateFormat(date) {
                return moment(date).format('MM/DD/YYYY')
            }
        },
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
    .purchase-block__tags{
        display: flex;
        flex-wrap: wrap;
        margin: -5px -3px 20px;
        div{
            padding: 0px 7px;
            margin: 3px;
            font-size: 13px;
            border-radius: 5px;
            color: #1C2032;
            background: #FADC72;
            font-weight: bold;
            text-transform: capitalize;
        }
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
            background: transparent;
            padding: 0;
            border: none;
            margin: 15px auto 0 0;
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
    }
    .btn-outline-red{
        background: transparent;
        border: 1px solid #F75D5D;
        padding: 8px 15px!important;
        border-radius: 3px;
        color: #F75D5D;
        &:hover{
            background: #F75D5D;
            color: #30304b;
        }
    }
</style>
