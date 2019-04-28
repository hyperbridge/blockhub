<template>
    <div class="c-pricing-table">
        <div class="c-pricing-table__container">
            <div class="c-pricing-table__item"
                 v-for="(item, idx) in items"
                 :style="`width: calc( 100% / ${items.length} - 20px );`"
                 :class="{'c-pricing-table__item--highline': item.highline }"
                 :key="`price-${idx}`">
                <div class="c-pricing-table__item-title">
                    {{ item.title }}
                </div>
                <div class="c-pricing-table__item-description">
                    {{ item.description }}
                </div>
                <div class="c-pricing-table__item-price">
                    {{ item.price }}
                </div>
                <div class="c-pricing-table__item-spec">
                    <ul>
                        <li v-for="(spec, idx) in item.specs" :key="`spec-${idx}`">
                            {{ spec }}
                        </li>
                    </ul>
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
    .c-pricing-table{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .c-pricing-table__container{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 70px 0;
    }
    .c-pricing-table__item{
        margin: 0 10px;
        background: #1d1d2e;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        max-width: 250px;
        position: relative;
        z-index: 3;
    }
    .c-pricing-table__item-title{
        font-size: 24px;
        padding: 20px 0 5px;
        font-weight: bold;
    }
    .c-pricing-table__item-price{
        font-size: 30px;
        padding: 15px 0;
        font-weight: bold;
        background: rgba(255, 255, 255, .07);
        margin: 20px 0;
    }
    .c-pricing-table__item--highline{
        transform: scale(1.2);
        box-shadow: 0 0 10px #000;
        z-index: 4;
    }
</style>
