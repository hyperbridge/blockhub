<template>
    <c-layout navigationKey="account">
        <div class="row">
            <div class="col-12 mb-5">
                <c-block title="Thanks for your order!">
                    <div class="order-info">
                        <div class="order-info__number">
                            Order #23543422234234234
                        </div>
                        <div class="order-info__date">
                            Order date: Dec 8, 2019 3:50 PM
                        </div>
                    </div>
                    <c-table-simple class="mt-5">
                        <thead>
                            <tr>
                                <th v-for="(field, idx) in tableHead" :key="`thead-${idx}`">
                                    {{ field.label }}
                                </th>
                                <th width="60"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, idx) in tableRows" :key="`trow-${idx}`">
                                <td v-for="(field, idx) in row" :key="`tfield-${idx}`">
                                    {{ field }}
                                </td>
                                <td>
                                    <c-button status="second-info">
                                        Open
                                    </c-button>
                                </td>
                            </tr>
                        </tbody>
                    </c-table-simple>
                </c-block>
            </div>
            <div class="col-12 col-lg-3 d-flex flex-column">
                <div class="h5">
                    Payment Details
                </div>
                <div>
                    <strong>
                        Visa
                    </strong>
                    ending in 0183
                </div>
                <div>
                    1239********0183
                </div>
            </div>
            <div class="col-12 col-lg-3 d-flex flex-column">
                <div class="h5">
                    Billing information
                </div>
                <div>
                    Eric Hansen
                </div>
                <div>
                    1028 Barclay St. Apt 123
                </div>
                <div>
                    Vancouver, British Columbia V6E 0B1 Canada
                </div>
            </div>
            <div class="col-12 col-lg-4 ml-auto">
                <div class="h5 pt-0 mt-0">
                    Order summary
                </div>
                <div class="d-flex justify-content-between">
                    <span>
                        Items
                    </span>
                    <span>
                        $99.99
                    </span>
                </div>
                <div class="d-flex justify-content-between">
                    <span>
                        Discount
                    </span>
                    <span>
                        $19.99
                    </span>
                </div>
                <div class="d-flex justify-content-between">
                    <span>
                        Subtotal
                    </span>
                    <span>
                        $80.00
                    </span>
                </div>
                <div class="d-flex justify-content-between">
                    <span>
                        Tax
                    </span>
                    <span>
                        $0.00
                    </span>
                </div>
                <hr />
                <div class="h3 d-flex justify-content-between">
                    <span>
                        Order Total
                    </span>
                    <span>
                        $80.00
                    </span>
                </div>
                <div class="w-100 mt-5">
                    <c-button status="second-success" class="w-100">
                        Submit
                    </c-button>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-table-simple': () => import('~/components/table-simple').then(m => m.default || m),
        },
        props: {
            id: String
        },
        data(){
            return{
                tableHead:[
                    {
                        label: 'Purchased Assets',
                        key: 'first'
                    },
                    {
                        label: 'Price',
                        key: 'second'
                    },
                    {
                        label: 'QTy',
                        key: 'third'
                    },
                    {
                        label: 'Total',
                        key: 'four'
                    },
                ],
                tableRows: [
                    {
                        first: 'POLYART - Stylized Sky Dungean',
                        third: '$9.99',
                        second: 'x1',
                        last: '$7.99',
                    },
                    {
                        first: 'Archimatix Pro',
                        third: '$19.99',
                        second: 'x1',
                        last: '$27.99',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order-info{
        display: flex;
        align-items: center;
        opacity: .6;
    }
    .order-info__number{
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid rgba(255, 255, 255, .5);
    }
</style>
