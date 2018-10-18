<template>
    <c-layout navigationKey="help">
        <div class="container-fluid" v-if="topic">
            <div class="row">
                <div class="col-12">
                    <h3 class="topic-ttl margin-bottom-30">
                        <i :class="['fas fa-' + topic.icon ]"></i>
                        {{ topic.label }}
                    </h3>

                    <c-block class="margin-bottom-30 padding-top-5 padding-bottom-5" v-if="topic.sub_topics">
                        <div class="topics-list">
                            <c-topic-item
                                v-for="(topic, index) in topic.sub_topics"
                                :key="index"
                                :link="`/#/help/${topic.id}`"
                                :icon="topic.icon"
                                class="padding-10">
                                {{ topic.label }}
                            </c-topic-item>
                        </div>
                    </c-block>

                    <c-block class="margin-bottom-30 padding-bottom-5">
                        <div class="article-list" v-if="showByTopic(articles, topic.id)">
                            <c-article-item :link="`/#/help/${topic.id}/article/${article.slug}`"
                                            v-for="(article, index) in showByTopic(articles, topic.id)"
                                            :key="index"
                            >
                                {{ article.title }}
                            </c-article-item>
                        </div>
                        <h3 v-else>Nothing to show</h3>
                    </c-block>

                </div>
                <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                    <c-card class="text-center">
                        <h4 class="h2">Community</h4>
                        <p>Engage with a community of passionate experts to get the answers you need</p>
                        <c-button icon_hide class="width-auto margin-top-10" href="https://github.com/hyperbridge/blockhub-desktop-client"
                                    target="_blank">Visit GitHub
                        </c-button>
                    </c-card>
                </div>
                <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                    <c-card class="text-center">
                        <h4 class="h2">BlockHub Support</h4>
                        <p>Create a support ticket and our support experts will get back to you</p>
                        <c-button href="https://hyperbridge.zendesk.com/" status="info" icon_hide class="width-auto margin-top-10">Create a ticket
                        </c-button>
                    </c-card>
                </div>
            </div>
        </div>
        <div class="container-fluid" v-if="!article">
            <div class="row">
                <div class="col-12">
                    <p>Oh no! That topic was not found!</p>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-article-item': (resolve) => require(['@/ui/components/help/article-item'], resolve),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item'], resolve),
            'c-list-item': (resolve) => require(['@/ui/components/help/simple-item'], resolve),
            'c-card': (resolve) => require(['@/ui/components/help/help-card.vue'], resolve),
        },
        data: () => ({
            showArticles: false,
            topic_id: this.id
        }),
        methods: {
            showByTopic(data, id) {
                let results = [],
                    key = 'topic';

                for (let i = 0; i < data.length; i++) {
                    if (data[i][key].includes(id)) {
                        results.push(data[i]);
                    }
                }
                return results;
            }
        },
        computed: {
            topic: function () {
                return this.$store.state.marketplace.help.topics[this.id]
            },
            articles: function () {
                return this.$store.state.marketplace.help.articles
            }

        }
    }
</script>

<style lang="scss" scoped>
    .topic-ttl {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 0;
        font-size: 18px;
        color: #fff;
        i {
            margin-right: 20px;
            font-size: 24px;
        }
    }

    .article-list {
        padding: 0;
        margin: 0;
    }

    .topics-list {
        margin: 0 -10px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        div {
            width: calc(100% / 4);
        }
    }

    .simple-list {
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        li {
            list-style: none;
            padding: 5px 0;
            width: 100%;
            a {
                color: #fff;
            }
        }
    }
</style>
