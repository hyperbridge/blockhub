<template>
    <section id="exchanges" class="section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title" v-html="content">
                        <h3 class="title tw-5 mb-20">
                            <a href="#exchanges">Exchanges</a>
                        </h3>
                        {{ content }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(item, index) in spotlight" :key="index" class="col-sm-6">
                    <div class="clients-blog mtb-15">
                        <div class="media pall-20" :style="{ height:'220px' }">
                            <a :href="item.link"><img class="client-img" :src="item.thumbnail" alt=""></a>
                            <div class="media-body" v-html="item.content">
                                <h4 class="mt-0 tw-5">
                                    {{ item.title }}
                                </h4>
                                {{ item.content }}
                            </div>
                        </div>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a :href="item.link">{{ item.domain }}</a>
                            </li>
                            <li class="list-inline-item list-item-go">
                                <a class="button mt-25 float-right" :href="item.link">Go to {{ item.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="table-responsive">
                        <table class="table table-bordered shopping-cart-table text-center">
                            <thead class="grey-bg">
                                <tr>
                                    <th>Rank</th>
                                    <th>Exchange</th>
                                    <th>Age</th>
                                    <th>Hacks</th>
                                    <th>Safety</th>
                                    <th>Notes</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in items" :key="index">
                                    <td class="text-center">
                                        {{ item.rank }}
                                    </td>
                                    <td>
                                        <a :href="item.link">
                                            <img :src="item.thumbnail" alt="img" :style="{ width:'50px' }">
                                            {{ item.title }}
                                        </a>
                                    </td>
                                    <td class="align-middle">
                                        {{ item.age }}
                                    </td>
                                    <td class="align-middle">
                                        {{ item.hacks }}
                                    </td>
                                    <td class="align-middle">
                                        {{ item.safety }}
                                    </td>
                                    <td class="text-left" v-html="item.notes">
                                        {{ item.notes }}
                                    </td>
                                    <td>
                                        <a v-if="item.link" class="button mt-25 background-gradient-3" :href="item.link">Go</a>
                                        <p v-if="!item.link">
                                            Warning
                                        </p>
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
    props: ['content', 'items', 'spotlight']
}
</script>
