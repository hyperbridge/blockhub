<template>
    <c-layout>
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <h2 class="m-0 p-o">Welcome to BlockHub Support</h2>
                    </div>
                    <div class="col-12 col-lg-9 text-center">
                        <div class="input-group input-group-lg my-5">
                            <input type="text" class="form-control" placeholder="Search query" aria-label="Search query" aria-describedby="button-addon">
                            <div class="input-group-append">
                                <c-button status="info" class="px-4" icon_hide style="border-radius: 0 5px 5px 0">Search</c-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <c-block title="Trending articles" class="margin-bottom-30">
                            <div class="article-list">
                                <c-article-item link="#3">
                                    I'm still seeing "You password has expired"
                                </c-article-item>
                                <c-article-item link="#3">
                                    Why am i seeing H12 request timeouts?
                                </c-article-item>
                                <c-article-item link="#3">
                                    Performing Load Tests on BlockHub
                                </c-article-item>
                                <c-article-item link="#3">
                                    More running applications articles ...
                                </c-article-item>
                            </div>
                        </c-block>

                        <c-block title="Topics" class="margin-bottom-30">
                            <div class="topics-list">
                                <c-topic-item
                                    v-for="(topic, index) in topics"
                                    :key="index"
                                    :link="`/#/help/${topic.id}`"
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
                                <c-list-item link="#1">
                                    Build result API endpoint removal
                                </c-list-item>
                                <c-list-item link="#1">
                                    Private Space VPN and Internal Routing are now generally available
                                </c-list-item>
                                <c-list-item link="#1">
                                    Default Stack
                                </c-list-item>
                                <c-list-item link="#1">
                                    Images Updated
                                </c-list-item>
                            </div>
                        </c-block>
                    </div>
                    <div class="col-12 col-lg-6 margin-bottom-30">
                        <c-block title="Common issues">
                            <div class="simple-list">
                                <c-list-item link="#1">
                                    Build result API endpoint removal
                                </c-list-item>
                                <c-list-item link="#1">
                                    Private Space VPN and Internal Routing are now generally available
                                </c-list-item>
                                <c-list-item link="#1">
                                    Default Stack
                                </c-list-item>
                                <c-list-item link="#1">
                                    Images Updated
                                </c-list-item>
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
        components: {
            'c-layout': () => import('@/ui/layouts/default'),
            'c-block': () => import('@/ui/components/block'),
            'c-article-item': () => import('@/ui/components/help/article-item'),
            'c-topic-item': () => import('@/ui/components/help/topic-item'),
            'c-list-item': () => import('@/ui/components/help/simple-item'),
            'c-card': () => import('@/ui/components/help/help-card.vue'),
        },
        data: () => ({
        }),
        computed: {
            topics: function () {
                return this.$store.state.marketplace.topics
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
