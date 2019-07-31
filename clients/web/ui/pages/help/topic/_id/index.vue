<template>
    <Layout navigationKey="help">
        <div
            v-if="!topic"
            class="row margin-bottom-30">
            <div class="col-12">
                <Card class="text-center">
                    <p>Oh no! That topic was not found!</p>
                </Card>
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

                <Block
                    v-if="topic.subTopics"
                    class="margin-bottom-30 padding-top-5 padding-bottom-5">
                    <div class="topics-list">
                        <TopicItem
                            v-for="(topic, index) in topic.subTopics"
                            :key="index"
                            :to="`/help/topic/${topic.id}`"
                            :icon="topic.icon"
                            class="padding-10">
                            {{ topic.label }}
                        </TopicItem>
                    </div>
                </Block>

                <Block class="margin-bottom-30 padding-bottom-5">
                    <div
                        v-if="showByTopic(topic.id).length"
                        class="article-list">
                        <ArticleItem
                            v-for="(article, index) in showByTopic(topic.id)"
                            :key="index"
                            :to="`/help/${topic.id}/article/${article.slug}`">
                            {{ article.title }}
                        </ArticleItem>
                    </div>
                    <h3 v-else>
                        No articles yet
                    </h3>
                </Block>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <Card class="text-center">
                    <h4 class="h2">
                        Community
                    </h4>
                    <p>Engage with a community of passionate experts to get the answers you need</p>
                    <Button
                        iconHide
                        class="width-auto margin-top-10"
                        href="https://github.com/hyperbridge/blockhub-desktop-client"
                        target="_blank">
                        Visit GitHub
                    </Button>
                </Card>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <Card class="text-center">
                    <h4 class="h2">
                        BlockHub Support
                    </h4>
                    <p>Create a support ticket and our support experts will get back to you</p>
                    <Button
                        href="https://hyperbridge.zendesk.com/"
                        status="info"
                        iconHide
                        class="width-auto margin-top-10">
                        Create a ticket
                    </Button>
                </Card>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'ArticleItem': () => import('@ericmuyser/hyper-ui').then(m => m.ArticleItem),
        'TopicItem': () => import('@ericmuyser/hyper-ui').then(m => m.TopicItem),
        'ListItem': () => import('@ericmuyser/hyper-ui').then(m => m.ListItem),
        'Card': () => import('@ericmuyser/hyper-ui').then(m => m.Card)
    },
    data() {
        return {
            showArticles: false,
            topicId: this.$route.params.id
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
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
