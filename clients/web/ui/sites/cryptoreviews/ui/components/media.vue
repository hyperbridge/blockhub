<template>
    <section id="media" class="section" :style="{ 'background-image': 'url(images/bg/bg.png);', 'background-position': 'center center;' }">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title" v-html="content">
                        <h3 class="title tw-5 mb-20">
                            <a href="#media">Media Centre</a>
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
                        <div v-for="(item, index) in items" :key="index" class="item">
                            <div class="popup-gallery play-video">
                                <div class="video-img">
                                    <img :src="item.thumbnail" class="img-fluid">
                                </div>
                                <div class="video play">
                                    <a class="popup-youtube" :href="item.video"><i class="fa fa-youtube-play" aria-hidden="true" /> </a>
                                </div>
                            </div>
                            <div class="news-detai pt-15">
                                <div class="news-title">
                                    <h5 class="tw-5">
                                        {{ item.title }}
                                    </h5>
                                </div>
                                <div class="news-content" v-html="item.content">
                                    <h6 class="tw-6">
                                        {{ item.subtitle }}
                                    </h6>
                                    <br>
                                    {{ item.content }}
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
    props: ['content', 'items']
}
</script>
