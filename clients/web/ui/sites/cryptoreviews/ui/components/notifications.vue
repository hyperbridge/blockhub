<template>
    <section id="alerts" class="section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title" v-html="content">
                        <h3 class="title tw-5 mb-20">
                            <a href="#alerts">Notification Centre</a>
                        </h3>
                        {{ content }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="cart_total heading-left">
                        <h4 class="mb-30 title tw-5">
                            Alerts
                        </h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="20%">
                                        Date
                                    </th>
                                    <th width="20%">
                                        Type
                                    </th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in alerts.items" :key="index" class="cart-st">
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.type }}</td>
                                    <td v-html="item.content">
                                        {{ item.content }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="cart_total heading-left">
                        <br>
                        <h4 class="mb-30 title tw-5">
                            Warnings &amp; Scams
                        </h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="20%">
                                        Date
                                    </th>
                                    <th width="20%">
                                        Type
                                    </th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in warnings.items" :key="index" class="cart-st">
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.type }}</td>
                                    <td v-html="item.content">
                                        {{ item.content }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    props: ['content', 'alerts', 'warnings']
}
</script>
