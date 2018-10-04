<template>
    <c-layout navigationKey="store-navigation">
        <div class="content" id="content">
            <div class="container-fluid">
                <div class="row margin-bottom-50">
                    <div class="col-12 col-lg-8">
                        <div class="h2 margin-top-5">Welcome to the BlockHub discussion</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce vulputate, arcu at dictum imperdiet, metus tellus cursus tortor,
                            pharetra feugiat mauris risus sed risus. Integer viverra mauris eget urna
                            pretium, et lacinia elit molestie. In sodales condimentum felis,
                            in volutpat augue sagittis a.
                        </p>
                        <p>
                            Vivamus nec scelerisque tellus. Fusce ornare blandit ante,
                            sit amet sollicitudin risus pulvinar quis.
                            Vivamus ac dignissim turpis. Sed sit amet justo quis sem
                            sodales aliquet eu eu massa.
                        </p>
                        <c-search size="lg" />
                    </div>
                    <div class="col-12 col-lg-4">
                        <c-block title="Links & Resources" :noGutter="true" :onlyContentBg="true">
                            <div class="d-flex flex-column">
                                <c-button status="plain" class="my-1">
                                    <i class="fas fa-info-circle"></i> View Discussion Guidelines
                                </c-button>
                                <c-button status="plain" class="my-1">
                                    <i class="fas fa-info-circle"></i> Discussion Rules
                                </c-button>
                                <c-button status="plain" class="my-1">
                                    <i class="fas fa-question-circle"></i> FAQ
                                </c-button>
                                <c-button status="success" icon="plus" class="margin-top-20" style="margin-right: auto">
                                    New discussion
                                </c-button>
                            </div>
                        </c-block>
                    </div>
                </div>
                <c-block :noGutter="true" :onlyContentBg="true">
                    <c-heading-bar
                        slot="title"
                        class="mb-0"
                        :headingTabs="[
                    { title: 'General', category: 'general_forum' },
                    { title: 'Game Forums', category: 'game_forums_forum' },
                    { title: 'Support', category: 'support_forum' }
                ]"
                        @changeTab="category = $event;"
                    >
                    </c-heading-bar>

                    <div class="community-list">
                        <c-community-item v-for="(post, index) in posts" :key="index" :post="post" />
                    </div>
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
    import moment from 'moment';

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-block': (resolve) => require(['@/ui/components/block'], resolve),
            'c-heading-bar': (resolve) => require(['@/ui/components/heading-bar'], resolve),
            'c-community-item': (resolve) => require(['@/ui/components/community/post-item'], resolve),
            'c-search': (resolve) => require(['@/ui/components/searcher'], resolve)
        },
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        status: "pinned",
                        author: {
                            name: "Alan Walker"
                        }
                    },
                    {
                        id: 2,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        status: "locked",
                        author: {
                            name: "Alan Walker"
                        }
                    },
                    {
                        id: 3,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        status: "starred",
                        author: {
                            name: "Alan Walker"
                        }
                    },
                    {
                        id: 4,
                        title: "New to BlockHub",
                        rate: "43",
                        comments_count: "8234",
                        author: {
                            name: "Alan Walker"
                        }
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .community-list {
        border-radius: 5px;
        .c-input{
            padding: 8px;
        }
        .community-item{
            border-radius: 0;
            border-bottom: 0;
            transition: transform 400ms ease-in-out;
            background: rgba(0, 0, 0, .1);
            &:first-child{
                border-radius: 5px 5px 0 0;
            }
            &:last-child{
                border-bottom: 1px solid rgba(112, 112, 112, .2);
                border-radius: 0 0 5px 5px;
            }
            &:nth-child(even){
                background: rgba(0, 0, 0, .2);
            }
            &:hover{
                background: rgba(0, 0, 0, .25);
                transform: scale(1.02);
            }
        }
    }
</style>
