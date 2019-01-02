<template>
    <section class="section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title" v-html="content">
                        <h3 class="title tw-5 mb-20"><a href="#wallets">Hardware Wallets</a></h3>
                        {{ content }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 second-carousel">
                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                        <div class="item" v-for="(item, index) in items" :key="index">
                            <div class="clients-blog mtb-15">
                                <div class="media pall-20" :style="{ height:'220px' }">
                                    <a :href="item.link"><img class="client-img" :src="item.thumbnail" alt="" /></a>
                                    <div class="media-body" v-html="item.content">
                                        <h4 class="mt-0 tw-5"><a :href="item.link">{{ item.title }}</a></h4>
                                        {{ item.content }}
                                    </div>
                                </div>
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="#"></a></li>
                                    <li class="list-inline-item"><a :href="item.link">{{ item.domain }}</a></li>
                                    <li class="list-inline-item list-item-go"><a class="button mt-25" :href="item.link">Go to {{ item.company }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        props: ['content', 'items']
    }
</script>