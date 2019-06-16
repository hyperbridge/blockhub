<template>
    <div class="c-pricing-table-v2">
        <div class="c-pricing-table-v2__container">
            <div class="c-pricing-table-v2__item"
                 v-for="(item, idx) in items"
                 :style="`width: calc( 100% / ${items.length} - 20px );`"
                 :class="{'c-pricing-table-v2__item--highline': item.highline }"
                 :key="`price-${idx}`">
                <div class="c-pricing-table-v2__item-title">
                    {{ item.title }}
                </div>
                <div class="c-pricing-table-v2__item-price">
                    {{ item.price }}
                </div>
                <div class="c-pricing-table-v2__item-spec">
                    <ul>
                        <li v-for="(spec, idx) in item.specs" :key="`spec-${idx}`">
                            {{ spec }}
                        </li>
                    </ul>
                </div>
                <div class="c-pricing-table-v2__item-action">
                    <c-button :status="item.highline ? 'dark' : 'second-success'" size="lg">
                        Select Plan
                    </c-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: Array,
        }
    }
</script>

<style lang="scss">
    .c-pricing-table-v2{
        display: flex;
        width: 100%;
        justify-content: flex-start;
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
            text-align: left;
            color: #fff;
            max-width: 250px;
            position: relative;
            z-index: 3;
        }
        &__item--highline{
            background: #0e86ca;
        }
        &__item-title{
            font-size: 24px;
            padding: 20px;
            font-weight: bold;
            position: relative;
            margin-bottom: 10px;
            &:after{
                content: "";
                position: absolute;
                height: 4px;
                width: 25px;
                background: #fff;
                left: 20px;
                bottom: -2px;
            }
        }
        &__item-price{
            font-size: 48px;
            padding: 15px 20px;
        }
        &__item-spec{
            margin: 30px 20px;
            ul{
                padding: 0;
                margin: 0;
                li{
                    list-style: none;
                    padding: 0 0 0 20px;
                    position: relative;
                    margin: 8px 0;
                    font-size: 16px;
                    &:before{
                        content: "";
                        width: 10px;
                        height: 1px;
                        background: #fff;
                        top: 8px;
                        left: 0;
                        position: absolute;
                    }
                }
            }
        }
        &__item-action{
            padding: 20px;
            border-top: 1px solid rgba(255, 255, 255, .1);
            text-align: center;
        }
    }
</style>
