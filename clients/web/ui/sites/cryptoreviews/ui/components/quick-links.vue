<template>
    <section id="quick" class="section">
        <div class="container">
            <div class="row">
                <div class="col-12 heading-title mb-0">
                    <h3 class="title tw-5 mb-20"><a href="#quick">Quick Links</a></h3>
                </div>
                <div class="col-12 cart_total heading-left" v-html="social.content">
                    <h4 class="mb-30 title tw-5">Social Networks</h4>
                    <br />
                    {{ social.content }}
                    <br />
                    <div class="table-responsive">
                        <table class="table table-bordered shopping-cart-table">
                            <thead>
                                <tr>
                                    <th width="20%">Name</th>
                                    <th>Rating</th>
                                    <th>Categories</th>
                                    <th width="50%">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in social.items" :key="index">
                                    <td>
                                        <a :href="item.link">
                                            {{ item.name }}
                                        </a>
                                    </td>
                                    <td>
                                        {{ item.rating }}
                                    </td>
                                    <td class="align-middle">
                                        <ul class="tags list-inline" :style="{ width: '240px' }">
                                            <li v-for="(tag, index) in item.tags" :key="index"><span>{{ tag }}</span></li>
                                        </ul>
                                    </td>
                                    <td v-html="item.notes">
                                        {{ item.notes }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-12 cart_total">
                    <h4 class="mb-30 title tw-5">Discussion Forums</h4>
                    <div class="table-responsive">
                        <table class="table table-bordered shopping-cart-table">
                            <thead>
                                <tr>
                                    <th width="20%">Name</th>
                                    <th>Rating</th>
                                    <th>Categories</th>
                                    <th width="50%">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in forums.items" :key="index">
                                    <td>
                                        <a :href="item.link">
                                            {{ item.name }}
                                        </a>
                                    </td>
                                    <td>
                                        {{ item.rating }}
                                    </td>
                                    <td class="align-middle">
                                        <ul class="tags list-inline" :style="{ width: '240px' }">
                                            <li v-for="(tag, index) in item.tags" :key="index"><span>{{ tag }}</span></li>
                                        </ul>
                                    </td>
                                    <td v-html="item.notes">
                                        {{ item.notes }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="col-12 cart_total">
                    <h4 class="mb-30 title tw-5">Other</h4>
                    <div class="table-responsive">
                        <table class="table table-bordered shopping-cart-table">
                            <thead>
                                <tr>
                                    <th width="20%">Name</th>
                                    <th>Rating</th>
                                    <th>Categories</th>
                                    <th width="50%">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in other.items" :key="index">
                                    <td>
                                        <a :href="item.link">
                                            {{ item.name }}
                                        </a>
                                    </td>
                                    <td>
                                        {{ item.rating }}
                                    </td>
                                    <td class="align-middle">
                                        <ul class="tags list-inline" :style="{ width: '240px' }">
                                            <li v-for="(tag, index) in item.tags" :key="index"><span>{{ tag }}</span></li>
                                        </ul>
                                    </td>
                                    <td v-html="item.notes">
                                        {{ item.notes }}
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
        props: ['social', 'forums', 'other']
    }
</script>