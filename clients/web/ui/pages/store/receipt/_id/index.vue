<template>
    <Layout>
        <div class="row align-items-center margin-bottom-30 margin-top-20">
            <div class="col-12 col-md-6 text-left">
                <div class="h2">
                    Purchase receipt
                </div>
                <div class="h5">
                    09092rj20902jd02j9j2d0j2
                </div>
            </div>
            <div class="col-12 col-md-6 text-right">
                <strong>DATE</strong><br>
                December 23, 2018
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-12">
                <Block
                    title="Purchase List"
                    :bgColor="false"
                    noGutter
                    bgGradient
                    onlyContentBg
                    noPadding>
                    <div class="padding-bottom-30 padding-top-15">
                        <SimpleTable stripped>
                            <thead>
                                <tr class="text-uppercase">
                                    <th>
                                        Content
                                    </th>
                                    <th>
                                        Expiration
                                    </th>
                                    <th>
                                        Authorization
                                    </th>
                                    <th />
                                    <th>
                                        Purchased from
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img
                                                src="../../../../static/img/logo-only.png"
                                                class="table-img">
                                            <div>
                                                <strong>
                                                    Diablo III
                                                </strong>
                                                <br>
                                                Blizzard Entertainment INC
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>
                                            Expires on a Date
                                        </strong>
                                        <br>
                                        July 8th 2019
                                    </td>
                                    <td>
                                        <strong>
                                            Sell
                                        </strong>
                                        <br>
                                        Yes, publisher earns 5%
                                    </td>
                                    <td>
                                        <strong>
                                            Trade
                                        </strong>
                                        <br>
                                        No
                                    </td>
                                    <td>
                                        ETH 29.05
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            Diablo III
                                        </strong>
                                        <br>
                                        Blizzard Entertainment INC
                                    </td>
                                    <td>
                                        <strong>
                                            Expires on a Date
                                        </strong>
                                        <br>
                                        July 8th 2019
                                    </td>
                                    <td>
                                        <strong>
                                            Sell
                                        </strong>
                                        <br>
                                        Yes, publisher earns 5%
                                    </td>
                                    <td>
                                        <strong>
                                            Trade
                                        </strong>
                                        <br>
                                        No
                                    </td>
                                    <td>
                                        ETH 29.05
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            Diablo III
                                        </strong>
                                        <br>
                                        Blizzard Entertainment INC
                                    </td>
                                    <td>
                                        <strong>
                                            Expires on a Date
                                        </strong>
                                        <br>
                                        July 8th 2019
                                    </td>
                                    <td>
                                        <strong>
                                            Sell
                                        </strong>
                                        <br>
                                        Yes, publisher earns 5%
                                    </td>
                                    <td>
                                        <strong>
                                            Trade
                                        </strong>
                                        <br>
                                        No
                                    </td>
                                    <td>
                                        ETH 29.05
                                    </td>
                                </tr>
                            </tbody>
                        </SimpleTable>
                    </div>
                </Block>
            </div>
            <div class="col-12">
                <Block
                    title="Totals"
                    :bgColor="false"
                    noGutter
                    bgGradient
                    onlyContentBg
                    noPadding>
                    <div class="padding-bottom-30 padding-top-15">
                        <SimpleTable stripped>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>
                                            Subtotal
                                        </strong>
                                    </td>
                                    <td class="text-right">
                                        ETH 29.05
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            After discount
                                        </strong>
                                    </td>
                                    <td class="text-right">
                                        ETH 29.05
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>
                                            Total
                                        </strong>
                                    </td>
                                    <td class="text-right">
                                        ETH 29.05
                                    </td>
                                </tr>
                            </tbody>
                        </SimpleTable>
                    </div>
                </Block>
            </div>
            <div class="col-12">
                <Block
                    title="Recipients"
                    :bgColor="false"
                    noGutter
                    bgGradient
                    onlyContentBg
                    noPadding>
                    <div class="padding-bottom-30 padding-top-15">
                        <SimpleTable stripped>
                            <thead>
                                <tr class="text-uppercase">
                                    <th>
                                        Amount
                                    </th>
                                    <th>
                                        Paid To
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        ETH 23.66
                                    </td>
                                    <td>
                                        Hyperbridge Technology Inc
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ETH 193.63
                                    </td>
                                    <td>
                                        Blizzard Technology Inc
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ETH 3.04
                                    </td>
                                    <td>
                                        TAX(GST)
                                    </td>
                                </tr>
                            </tbody>
                        </SimpleTable>
                    </div>
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'SimpleTable': () => import('@ericmuyser/hyper-ui').then(m => m.SimpleTable)
    },
    props: []
}
</script>

<style lang="scss" scoped>
    .table-img{
        max-width: 30px;
        max-height: 30px;
        margin-right: 10px;
    }
    .table{
        tr{
            td,
            th{
                padding: 5px;
                &:first-child{
                    padding-left: 20px;
                }
                &:last-child{
                    padding-right: 20px;
                }
            }
        }
    }
</style>
