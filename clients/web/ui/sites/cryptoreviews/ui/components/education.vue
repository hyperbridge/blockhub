<template>
    <section id="education" class="section" :style="{ 'background-image': 'url(images/bg/bg.png);', 'background-position': 'center center;' }">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title" v-html="content">
                        <h3 class="title tw-5 mb-20">
                            <a href="#education">Education Centre</a>
                        </h3>
                        {{ content }}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 second-carousel">
                    <div
                        class="owl-carousel popup-gallery"
                        data-nav-dots="true"
                        data-nav-arrow="true"
                        data-items="2"
                        data-sm-items="2"
                        data-lg-items="2"
                        data-md-items="2"
                        data-autoplay="false">
                        <div v-for="(item, index) in books" :key="index" class="item">
                            <div class="product grey-bg">
                                <div class="pdt-image">
                                    <img :src="item.thumbnail" alt="">
                                    <ul class="pdt-icon">
                                        <li><a :href="item.link"><i class="fa fa-cart-plus" aria-hidden="true" /></a></li>
                                    </ul>
                                </div>
                                <div class="pdt-dec" v-html="item.content">
                                    <h5 class="tw-5">
                                        <a :href="item.link">{{ item.title }}</a>
                                    </h5>
                                    <h6><em>{{ item.subtitle }}</em></h6>
                                    <br>
                                    {{ item.content }}
                                    <div class="shop-price float-left mt-10">
                                        <strong class="font-yellow">{{ item.price }}</strong>
                                    </div>
                                    <div class="rating float-right mt-10">
                                        <ul class="list-inline float-right ml-10">
                                            <li v-for="(item) in [...Array(Math.floor(item.rating))]" :key="item" class="list-inline-item">
                                                <i class="fa fa-star" aria-hidden="true" />
                                            </li>
                                            <li v-for="(item) in [...Array(5 - Math.floor(item.rating))]" :key="item" class="list-inline-item">
                                                <i class="fa fa-star-o" aria-hidden="true" />
                                            </li>
                                        </ul>
                                    </div>
                                    <br clear="both">
                                    <ul class="tags list-inline">
                                        <li v-for="(tag, index) in item.tags" :key="index">
                                            <a :href="tag.link">{{ tag.title }}</a>
                                        </li>
                                    </ul>
                                    <br clear="both">
                                    <a class="button mt-25 float-right bt-lg background-gradient-3" :href="item.link">Buy on Amazon</a>
                                </div>
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
    props: ['content', 'books']
}
</script>
