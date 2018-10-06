<template>
    <c-layout navigationKey="store">
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
                    </div>
                    <div class="col-12 col-lg-4">
                        <c-block title="Links & Resources" :noGutter="true" :onlyContentBg="true">
                            <div class="d-flex flex-column">
                                <c-search class="mb-2"/>
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

                    <div class="forums-list">
                        <div class="forums-list__head">
                            <div>
                                Title
                            </div>
                            <div>
                                Last Post
                            </div>
                            <div>
                                Discussions
                            </div>
                        </div>
                        <c-community-forum v-for="(forum, index) in forums" :key="index" :forum="forum"/>
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
            'c-search': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-community-forum': (resolve) => require(['@/ui/components/community/forum-item.vue'], resolve)
        },
        data() {
            return {
                forums: [
                    {
                        id: 1,
                        title: "New to BlockHub",
                        last_post_time: "2018-08-01T04:09:00.000Z",
                        discussions_count: "8234"
                    },
                    {
                        id: 2,
                        title: "Help and Tips",
                        last_post_time: "2018-02-13T04:09:00.000Z",
                        discussions_count: "34"
                    },
                    {
                        id: 3,
                        title: "Suggestions ans Ideas",
                        last_post_time: "2017-11-04T04:09:00.000Z",
                        discussions_count: "127",
                        icon: "fas fa-life-ring"
                    },
                    {
                        id: 4,
                        title: "BlockHub for Mac",
                        last_post_time: "2018-07-24T04:09:00.000Z",
                        discussions_count: "37",
                        icon: "fab fa-apple"
                    },
                    {
                        id: 5,
                        title: "BlockHub for Windows",
                        last_post_time: "2018-03-21T04:09:00.000Z",
                        discussions_count: "328",
                        icon: "fab fa-windows"
                    },
                    {
                        id: 4,
                        title: "BlockHub for Linux",
                        last_post_time: "2016-07-24T04:09:00.000Z",
                        discussions_count: "41",
                        icon: "fab fa-linux"
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .forums-list {
        border-radius: 5px;
        .forum-item {
            border-radius: 0;
            border-bottom: 0;
            transition: transform 200ms ease-in-out;
            &:first-child {
                border-radius: 5px 5px 0 0;
            }
            &:last-child {
                border-bottom: 1px solid rgba(112, 112, 112, .2);
                border-radius: 0 0 5px 5px;
            }
            &:nth-child(even) {
                background: rgba(0, 0, 0, .26);
            }
            &:hover {
                background: rgba(0, 0, 0, .25);
                transform: scale(1.02);
            }
        }
    }

    .forums-list__head {
        display: flex;
        margin-bottom: 5px;
        div {
            &:nth-child(1) {
                width: calc(60% - 70px);
                margin-left: 70px;
            }
            &:nth-child(2) {
                width: 20%;
                text-align: right;
                padding-right: 10px;
            }
            &:nth-child(3) {
                width: 20%;
                text-align: right;
                padding-right: 10px;
            }
        }
    }
</style>
