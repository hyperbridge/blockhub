<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
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

                        <c-block class="margin-bottom-30" v-if="topic.articles">
                            <div class="article-list">
                                <c-article-item :link="`/#/help/${topic.id}/article/${article.slug}`"
                                                v-for="(article, index) in topic.articles"
                                                :key="index"
                                                :class="{'mb-0': topic.articles.length === index+1 }"
                                >
                                    {{ article.title }}
                                </c-article-item>
                            </div>
                        </c-block>

                    </div>
                    <div class="col-12 col-lg-6">
                        <c-card class="text-center">
                            <h4 class="h2">Community</h4>
                            <p>Engage with a community of passionate experts to get the answers you need</p>
                            <c-button icon_hide class="width-auto margin-top-10" href="https://github.com/hyperbridge" target="_blank">Visit GitHub</c-button>
                        </c-card>
                    </div>
                    <div class="col-12 col-lg-6">
                        <c-card class="text-center">
                            <h4 class="h2">BlockHub Support</h4>
                            <p>Create a support ticket and our support experts will get back to you</p>
                            <c-button status="info" icon_hide class="width-auto margin-top-10">Create a ticket</c-button>
                        </c-card>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
    export default {
        props:['id'],
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default']),
            'c-block': (resolve) => require(['@/ui/components/block']),
            'c-article-item': (resolve) => require(['@/ui/components/help/article-item']),
            'c-topic-item': (resolve) => require(['@/ui/components/help/topic-item']),
            'c-list-item': (resolve) => require(['@/ui/components/help/simple-item']),
            'c-card': (resolve) => require(['@/ui/components/help/help-card.vue']),
        },
        data: () => ({}),
        computed: {
            topic: function () {
                return this.$store.state.marketplace.topics[this.id]
            }
        }

    }
</script>

<style lang="scss" scoped>
    .topic-ttl{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 0;
        font-size: 18px;
        color: #fff;
        i{
            margin-right: 20px;
            font-size: 24px;
        }
    }
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
