<template>
    <c-layout navigationKey="product">
        <div class="row">
            <div class="col-12">
                <h2 class="page_ttl">
                    My Licenses
                </h2>
            </div>
            <div class="col-12">
                <div class="licenses-list">
                    <c-heading-bar name="Owned Licenses"
                                   :showArrows="false"
                                   :showBackground="false" />
                    <div class="licenses-list__container margin-top-30">
                        <div
                            v-for="index in 6"
                            :key="index"
                            class="licenses-list__item">
                            <div class="icon">
                                <c-img :src="license.game.img" />
                            </div>
                            <div class="name">
                                <strong>{{ license.game.name }}</strong>
                                <span>{{ license.game.developer }}</span>
                            </div>
                            <div class="expires_date">
                                <strong>Expires date on</strong>
                                <span>{{ license.expiration_date }}</span>
                            </div>
                            <div class="sell_status">
                                <strong>Sell</strong>
                                <span>{{ license.sell }}</span>
                            </div>
                            <div class="trade_status">
                                <strong>Trade</strong>
                                <span>{{ license.trade }}</span>
                            </div>
                            <div class="price text-right">
                                <strong>Purchace price</strong>
                                <span>${{ license.price }}</span>
                            </div>
                        </div>
                    </div>
                    <c-content-navigation />
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-content-navigation': () => import('~/components/content-navigation').then(m => m.default || m),
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m)
    },
    data() {
        return {
            license: {
                game: {
                    img: 'https://cdn6.aptoide.com/imgs/a/d/2/ad2ccdb6e2dda907c1970845476d9128_icon.png?w=240',
                    name: 'Diablo III',
                    developer: 'Blizzadr Entertainment Inc'
                },
                trade: true,
                expiration_date: 'July 8th 2021',
                sell: 'Yes, publisher earns 5%',
                price: '$2999.00'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .page_ttl {
        font-size: 30px;
        margin-bottom: 30px;
    }
    .licenses-list{
        border-radius: 5px;
        overflow: hidden;
        padding: 10px 20px 0;
        background: rgba(0, 0, 0, .15);
    }
    .licenses-list__item{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        padding: 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        line-height: 17px;
        &:last-child{
            border-bottom: 0;
            margin-bottom: 10px;
        }
        .icon{
            width: 40px;
            margin-right: 10px;
            img{
                width: 100%;
                height: 40px;
                object-fit: cover;
            }
        }
        .name{
            width: 25%;
        }
        .expires_date,
        .sell_status,
        .trade_status{
            width: 18%;
        }
        .price{
            width: 13%;
        }
        strong{
            display: block;
            width: 100%;
        }
    }
</style>
