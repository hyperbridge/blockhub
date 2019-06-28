<template>
    <div class="asset-preview">
        <p class="asset-preview__product">
            {{ productName }}
        </p>
        <c-img
            class="asset-preview__image"
            :src="image" />
        <h4 class="asset-preview__name">
            {{ name }}
        </h4>
        <p class="asset-preview__history-title">
            Market price history:
        </p>
        <table class="asset-preview__price-table">
            <tbody>
                <tr
                    v-for="(price, priceKey) in price"
                    :key="priceKey">
                    <td>{{ priceKey | upperFirstChar }}</td>
                    <td class="price-table__price">
                        {{ price[priceKey] | convertCurrency }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'AssetPreview',
    props: {
        name: String,
        productName: String,
        image: String,
        price: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            priceHistory: [
                { price: 14.3, date: '2018-09-30T04:09:00.000Z' },
                { price: 16.9, date: '2018-10-01T04:09:00.000Z' },
                { price: 21, date: '2018-10-02T04:09:00.000Z' },
                { price: 12.7, date: '2018-10-03T04:09:00.000Z' },
                { price: 24.1, date: '2018-10-04T04:09:00.000Z' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .asset-preview {
        background: #404264;
        box-shadow: 0 0 15px 0 rgba(1,1,1,.2);
        border-radius: 4px;
        padding: 10px;
        min-width: 160px;
    }
    .asset-preview__name {
        text-align: center;
        font-size: 14px;
        margin: 7px 0;
    }
    .asset-preview__product {
        text-align: center;
        margin: 5px 0;
    }
    .asset-preview__history-title {
        text-align: center;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .asset-preview__image {
        background: #4b4e74;
        border-radius: 4px;
        padding: 4px;
        width: 70px;
        height: 70px;
        display: block;
        margin: 0 auto;
    }
    .asset-preview__price-table {
        width: 100%;
        .price-table__price {
            color: #fff;
        }
        td:last-child {
            text-align: right;
        }
    }
</style>
