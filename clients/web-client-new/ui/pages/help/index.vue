<template>
    <c-layout navigationKey="help">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h2 class="m-0 p-o">Welcome to BlockHub Support</h2>
            </div>
            <div class="col-12 col-lg-9 text-center">
                <div class="input-group input-group-lg my-5">
                    <input type="text" class="form-control" placeholder="Search query" aria-label="Search query" aria-describedby="button-addon">
                    <div class="input-group-append">
                        <c-button status="info" class="px-4" iconHide style="border-radius: 0 5px 5px 0">Search</c-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <c-block title="Trending articles" class="margin-bottom-30" v-if="articles">
                    <div class="article-list">
                        <c-article-item :to="`/help/${0}/article/${article.slug}`"
                                        v-for="(article, index) in showByTopic(0)"
                                        :key="index"
                                        :class="{'mb-0': articles.length === index+1 }"
                        >
                            {{ article.title }}
                        </c-article-item>
                    </div>
                </c-block>

                <c-block title="Topics" class="margin-bottom-30">
                    <div class="topics-list">
                        <c-topic-item
                            v-for="(topic, index) in topics"
                            :key="index"
                            :to="`/help/topic/${topic.id}`"
                            :icon="topic.icon"
                            class="padding-10">
                            {{ topic.label }}
                        </c-topic-item>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-lg-6 margin-bottom-30">
                <c-block title="Changelog">
                    <div class="simple-list">
                        <c-list-item :to="`/help/${5}/article/${article.slug}`"
                                        v-for="(article, index) in showByTopic(5)"
                                        :key="index"
                                        :class="{'mb-0': articles.length === index+1 }"
                        >
                            {{ article.title }}
                            </c-list-item>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-lg-6 margin-bottom-30">
                <c-block title="Common issues">
                    <div class="simple-list">
                        <c-list-item :to="`/help/${6}/article/${article.slug}`"
                                        v-for="(article, index) in showByTopic(6)"
                                        :key="index"
                                        :class="{'mb-0': articles.length === index+1 }"
                        >
                            {{ article.title }}
                        </c-list-item>
                    </div>
                </c-block>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <c-card class="text-center">
                    <h4 class="h2">Community</h4>
                    <p><strong>Want to get help and maybe meet a new dungeon buddy?</strong></p>
                    <p>Engage with a community of passionate gamers to get the answers you need.</p>
                    <c-button iconHide class="width-auto margin-top-10" href="https://github.com/hyperbridge/blockhub-desktop-client"
                                target="_blank">Ask Our Community
                    </c-button>
                </c-card>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <c-card class="text-center">
                    <h4 class="h2">BlockHub Support</h4>
                    <p><strong>Didn't find the answer you were looking for?</strong></p>
                    <p>Create a support ticket and our support experts will get back to you.</p>
                    <c-button href="https://hyperbridge.zendesk.com/" status="info" iconHide class="width-auto margin-top-10" target="_blank">Contact Us
                    </c-button>
                </c-card>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-article-item': () => import('~/components/help/article-item').then(m => m.default || m),
            'c-topic-item': () => import('~/components/help/topic-item').then(m => m.default || m),
            'c-list-item': () => import('~/components/help/simple-item').then(m => m.default || m),
            'c-card': () => import('~/components/help/help-card.vue').then(m => m.default || m),
        },
        methods:{
            showByTopic(id) {
                let results = [];
                let data = Object.values(this.$store.state.marketplace.help.topics[id].articles || [])

                for (let i = 0; i < data.length; i++) {
                    results.push(this.$store.state.marketplace.help.articles[data[i]]);
                }

                return results;
            }
        },
        computed: {
            topics: function () {
                return this.$store.state.marketplace.help.topics
            },
            articles: function () {
                return this.$store.state.marketplace.help.articles
            }
        },
    }
</script>

<style lang="scss" scoped>
    .article-list{
        padding: 0;
        margin: 0;
    }
    .topics-list{
        margin: 0 -10px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        div{
            width: calc( 100%/4 );
            @media (max-width: 1024px){
                width: calc( 100%/3 );
            }
            @media (max-width: 767px){
                width: calc( 100%/2 );
            }
        }
    }
    .simple-list{
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        li{
            list-style: none;
            padding: 5px 0;
            width: 100%;
            a{
                color: #fff;
            }
        }
    }
</style>
