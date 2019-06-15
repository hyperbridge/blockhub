<template>
    <c-layout navigationKey="help">
        <div
            v-if="!topic"
            class="row margin-bottom-30">
            <div class="col-12">
                <c-card class="text-center">
                    <p>Oh no! That topic was not found!</p>
                </c-card>
            </div>
        </div>
        <div
            v-if="topic"
            class="row">
            <div class="col-12">
                <h3 class="topic-ttl margin-bottom-30">
                    <i :class="['fas fa-' + topic.icon ]" />
                    {{ topic.label }}
                </h3>

                <c-block
                    v-if="topic.subTopics"
                    class="margin-bottom-30 padding-top-5 padding-bottom-5">
                    <div class="topics-list">
                        <c-topic-item
                            v-for="(topic, index) in topic.subTopics"
                            :key="index"
                            :to="`/help/topic/${topic.id}`"
                            :icon="topic.icon"
                            class="padding-10">
                            {{ topic.label }}
                        </c-topic-item>
                    </div>
                </c-block>

                <c-block class="margin-bottom-30 padding-bottom-5">
                    <div
                        v-if="showByTopic(topic.id).length"
                        class="article-list">
                        <c-article-item
                            v-for="(article, index) in showByTopic(topic.id)"
                            :key="index"
                            :to="`/help/${topic.id}/article/${article.slug}`">
                            {{ article.title }}
                        </c-article-item>
                    </div>
                    <h3 v-else>
                        No articles yet
                    </h3>
                </c-block>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <c-card class="text-center">
                    <h4 class="h2">
                        Community
                    </h4>
                    <p>Engage with a community of passionate experts to get the answers you need</p>
                    <c-button
                        iconHide
                        class="width-auto margin-top-10"
                        href="https://github.com/hyperbridge/blockhub-desktop-client"
                        target="_blank">
                        Visit GitHub
                    </c-button>
                </c-card>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <c-card class="text-center">
                    <h4 class="h2">
                        BlockHub Support
                    </h4>
                    <p>Create a support ticket and our support experts will get back to you</p>
                    <c-button
                        href="https://hyperbridge.zendesk.com/"
                        status="info"
                        iconHide
                        class="width-auto margin-top-10">
                        Create a ticket
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
        'c-card': () => import('~/components/help/help-card').then(m => m.default || m)
    },
    props: ['id'],
    data() {
        return {
            showArticles: false,
            topicId: this.$route.params.id
        }
    },
    computed: {
        topic() {
            return this.$store.state.marketplace.help.topics[this.id]
        },
        articles() {
            return this.$store.state.marketplace.help.articles
        }

    },
    methods: {
        showByTopic(id) {
            const results = []
            const data = Object.values(this.$store.state.marketplace.help.topics[id].articles || [])

            for (let i = 0; i < data.length; i++) {
                results.push(this.$store.state.marketplace.help.articles[data[i]])
            }

            return results
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
            @media (max-width: 1600px) {
                width: calc(100%/3);
            }
            @media (max-width: 767px) {
                width: calc(100%/2);
            }
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
