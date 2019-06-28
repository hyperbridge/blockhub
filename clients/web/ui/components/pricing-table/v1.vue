<template>
    <div class="pricing-table-v1">
        <div class="pricing-table-v1__container">
            <div class="pricing-table-v1__item"
                 v-for="(item, idx) in items"
                 :style="`width: calc( 100% / ${items.length} - 20px );`"
                 :class="{'c-pricing-table__item--highline': item.highline }"
                 :key="`price-${idx}`">
                <div class="pricing-table-v1__item-title">
                    {{ item.title }}
                </div>
                <div class="pricing-table-v1__item-description">
                    {{ item.description }}
                </div>
                <div class="pricing-table-v1__item-price">
                    {{ item.price }}
                </div>
                <div class="pricing-table-v1__item-spec">
                    <ul>
                        <li v-for="(spec, idx) in item.specs" :key="`spec-${idx}`">
                            {{ spec }}
                        </li>
                    </ul>
                </div>
                <div class="pricing-table-v1__item-action margin-bottom-20 margin-top-10">
                    <c-button status="second-success">
                        Sign Up
                    </c-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                default: () => []
            },
        }
    }
</script>

<style lang="scss">
    .pricing-table-v1{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        &__container{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            padding: 70px 0;
        }
        &__item{
            margin: 0 10px;
            background: #1d1d2e;
            border-radius: 5px;
            text-align: center;
            color: #fff;
            max-width: 250px;
            position: relative;
            z-index: 3;
        }
        &__item-title{
            font-size: 24px;
            padding: 20px 0 5px;
            font-weight: bold;
        }
        &__item-price{
            font-size: 30px;
            padding: 15px 0;
            font-weight: bold;
            background: rgba(255, 255, 255, .07);
            margin: 20px 0;
        }
        &__item--highline{
            transform: scale(1.2);
            box-shadow: 0 0 10px #000;
            z-index: 4;
        }
        &__item-spec{
            ul{
                li{
                    list-style: none;
                    padding: 5px 0;
                }
            }
        }
    }
</style>
