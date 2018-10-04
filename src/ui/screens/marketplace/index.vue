<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        Marketplace

                        <h2>Recently sold</h2>
                        <!-- <table class="assets-table">
                            <thead>
                                <th>Item</th>
                                <th>Seller</th>
                                <th>Price</th>
                            </thead>
                            <tbody>
                                <tr v-for="asset in assets" :key="asset.id" class="asset">
                                    <td class="asset__info">
                                        <c-img
                                            :src="asset.image"
                                            class="asset__image"
                                        />
                                        <div class="asset__meta">
                                            <p>{{ asset.name }}</p>
                                            <span>{{ asset.product_name }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        {{ asset.user_name }}
                                    </td>
                                    <td>
                                        {{ asset.price.current }}$
                                    </td>
                                </tr>
                            </tbody>
                        </table> -->
                        <ul class="assets-list">
                            <li
                                v-for="asset in assets"
                                :key="asset.id"
                                class="asset"
                            >
                                <div class="asset__info">
                                    <c-img
                                        :src="asset.image"
                                        class="asset__image"
                                    />
                                    <div class="asset__meta">
                                        <p>{{ asset.name }}</p>
                                        <span>{{ asset.product_name }}</span>
                                    </div>
                                </div>
                                <span>{{ asset.user_name }}</span>
                                <span>{{ asset.price.current }} $</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                assets: 'marketplace/assetsArray'
            })
        }
    }
</script>

<style lang="scss" scoped>
    .assets-list {
        width: 100%;
        margin: 0 0 50px 0;
        padding: 0;
    }
    .asset {
        background: rgb(58, 60, 88);
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 0 20px -2px rgb(38, 39, 59);
        align-items: center;
    }
    .asset__info {
        display: flex;
    }
    .asset__image {
        background: rgba(255,255,255,.1);
        padding: 4px;
        border-radius: 4px;
        width: 60px;
        height: 60px;
    }
    .asset__meta {
        display: flex;
        flex-direction: column;
        margin-left: 14px;
    }
    // .assets-table {
    //     width: 100%;
    //     td, th {
    //         padding: 10px;
    //     }
    //     // border-collapse: separate;
    //     // border-spacing: 5em;
    //     box-shadow: 0 0 20px -2px rgb(38, 39, 59);
    //     $radius: 10px;
    //     td { border-bottom: solid 10px #30314C; }
    //     tr:first-child td:first-child { border-top-left-radius: 10px; }
    //     tr:first-child td:last-child { border-top-right-radius: 10px; }
    //     tr:last-child td:first-child { border-bottom-left-radius: 10px; }
    //     tr:last-child td:last-child { border-bottom-right-radius: 10px; }
    // }
    // .asset {
    //     border-radius: 8px;
    //     background: rgb(72, 74, 107);
    //     background: rgb(58, 60, 88);
    //     margin-bottom: 10px;
    // }
    // .asset__info {
    //     display: flex;
    // }
    // .asset__meta {
    //     display: flex;
    //     flex-direction: column;
    //     margin-left: 14px;
    // }
    // .asset__image {
    //     width: 50px;
    //     height: 50px;
    // }
</style>


