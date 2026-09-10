<template>
    <c-layout navigationKey="store">
        <c-block title="Checkout Preview">
            <p>This sample order previews the catalog. No order is placed and no payment details are collected.</p>
            <table class="table table-dark">
                <thead><tr><th>Game</th><th>Price</th></tr></thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td><c-button status="plain" :to="`/product/${product.id}`">{{ product.name }}</c-button></td>
                        <td>{{ product.price | convertCurrency }}</td>
                    </tr>
                </tbody>
                <tfoot><tr><th>Sample Total</th><td>{{ total | convertCurrency }}</td></tr></tfoot>
            </table>
            <c-button to="/store/cart" status="info">Back to Cart</c-button>
            <c-button to="/games" status="plain">Browse Games</c-button>
        </c-block>
    </c-layout>
</template>
<script>
export default {
    computed: {
        products() { return this.$demo.world.products.slice(0, 3) },
        total() { return this.products.reduce((sum, product) => sum + product.price, 0) }
    }
}
</script>
