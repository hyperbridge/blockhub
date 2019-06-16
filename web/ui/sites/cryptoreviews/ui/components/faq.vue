<template>
    <section id="faq" class="section">
        <div class="container ">
            <div class="row">
                <div class="col-sm-12">
                    <div class="heading-title" v-html="content">
                        <h3 class="title tw-5 mb-20"><a href="#faq">FAQ</a></h3>
                        {{ content }}
                    </div>
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-12 col-md-12 ">
                    <div id="accordion" role="tablist">
                        <div class="card" v-for="(item, index) in items" :key="index">
                            <div class="card-header" role="tab" :id="'heading' + item.id">
                                <div>
                                    <a :class="item.collapsed ? 'collapsed' : ''" data-toggle="collapse" :href="'#collapse' + item.id" aria-expanded="true" :aria-controls="'collapse' + item.id">
                                        {{ item.question }}
                                    </a>
                                </div>
                            </div>
                            <div :id="'collapse' + item.id" :class="item.collapsed ? 'collapse' : 'collapse show'" role="tabpanel" :aria-labelledby="'heading' + item.id" data-parent="#accordion">
                                <div class="card-body" v-html="item.answer">
                                    {{ item.answer }}
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