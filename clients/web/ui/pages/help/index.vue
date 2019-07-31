<template>
    <Layout navigationKey="help">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h2 class="m-0 p-o">
                    Welcome to BlockHub Support
                </h2>
            </div>
            <div class="col-12 col-lg-9 text-center">
                <div class="input-group input-group-lg my-5">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search query"
                        aria-label="Search query"
                        aria-describedby="button-addon">
                    <div class="input-group-append">
                        <Button
                            status="info"
                            class="px-4"
                            iconHide
                            style="border-radius: 0 5px 5px 0">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <Block
                    v-if="articles"
                    title="Trending articles"
                    class="margin-bottom-30">
                    <div class="article-list">
                        <ArticleItem
                            v-for="(article, index) in showByTopic(0)"
                            :key="index"
                            :to="`/help/${0}/article/${article.slug}`"
                            :class="{'mb-0': articles.length === index+1 }">
                            {{ article.title }}
                        </ArticleItem>
                    </div>
                </Block>

                <Block
                    title="Topics"
                    class="margin-bottom-30">
                    <div class="topics-list">
                        <TopicItem
                            v-for="(topic, index) in topics"
                            :key="index"
                            :to="`/help/topic/${topic.id}`"
                            :icon="topic.icon"
                            class="padding-10">
                            {{ topic.label }}
                        </TopicItem>
                    </div>
                </Block>
            </div>
            <div class="col-12 col-lg-6 margin-bottom-30">
                <Block title="Changelog">
                    <div class="simple-list">
                        <ListItem
                            v-for="(article, index) in showByTopic(5)"
                            :key="index"
                            :to="`/help/${5}/article/${article.slug}`"
                            :class="{'mb-0': articles.length === index+1 }">
                            {{ article.title }}
                        </ListItem>
                    </div>
                </Block>
            </div>
            <div class="col-12 col-lg-6 margin-bottom-30">
                <Block title="Common issues">
                    <div class="simple-list">
                        <ListItem
                            v-for="(article, index) in showByTopic(6)"
                            :key="index"
                            :to="`/help/${6}/article/${article.slug}`"
                            :class="{'mb-0': articles.length === index+1 }">
                            {{ article.title }}
                        </ListItem>
                    </div>
                </Block>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <Card class="text-center">
                    <h4 class="h2">
                        Community
                    </h4>
                    <p><strong>Want to get help and maybe meet a new dungeon buddy?</strong></p>
                    <p>Engage with a community of passionate gamers to get the answers you need.</p>
                    <Button
                        iconHide
                        class="width-auto margin-top-10"
                        href="https://github.com/hyperbridge/blockhub-desktop-client"
                        target="_blank">
                        Ask Our Community
                    </Button>
                </Card>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <Card class="text-center">
                    <h4 class="h2">
                        BlockHub Support
                    </h4>
                    <p><strong>Didn't find the answer you were looking for?</strong></p>
                    <p>Create a support ticket and our support experts will get back to you.</p>
                    <Button
                        href="https://hyperbridge.zendesk.com/"
                        status="info"
                        iconHide
                        class="width-auto margin-top-10"
                        target="_blank">
                        Contact Us
                    </Button>
                </Card>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Help | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub help centre` },
                { hid: 'keywords', name: 'keywords', content: 'help, blockchain, game, indie, developer' }
            ]
        }
    },
    components: {
        'ArticleItem': () => import('@ericmuyser/hyper-ui').then(m => m.ArticleItem),
        'TopicItem': () => import('@ericmuyser/hyper-ui').then(m => m.TopicItem),
        'ListItem': () => import('@ericmuyser/hyper-ui').then(m => m.ListItem),
        'Card': () => import('@ericmuyser/hyper-ui').then(m => m.Card)
    },
    computed: {
        topics() {
            return this.$store.state.marketplace.help.topics
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
