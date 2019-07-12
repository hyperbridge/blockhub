<template>
    <section id="compare" class="section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title mb-0" v-html="content">
                        <h3 class="title tw-5 mb-20">
                            <a href="#compare">Compare</a>
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
                        data-items="3"
                        data-sm-items="3"
                        data-lg-items="3"
                        data-md-items="3"
                        data-autoplay="false">
                        <div v-for="(item, index) in items" :key="index" class="item">
                            <div class="pricing">
                                <span class="icon"><img :src="'/projects/cryptoreviews/img/tokens/' + item.symbol + '.png'" :style="{ width: '50px', marginTop: '-4px' }"></span>
                                <div class="pricing-header">
                                    <h3 class="title">
                                        {{ item.symbol.toUpperCase() }}
                                    </h3>
                                    <span class="price-value">{{ item.name }}</span>
                                </div>
                                <ul class="pricing-content" :style="{ height: '200px' }">
                                    <li v-for="(note, index) in item.notes" :key="index">
                                        <i aria-hidden="true" :class="'mr-10 ' + (note.checked ? 'ion-checkmark-round' : 'ion-close-round')" />{{ note.text }}
                                    </li>
                                </ul>
                                <a class="button" :href="item.link">Learn More</a>
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
