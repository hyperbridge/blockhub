<template>
    <c-layout navigationKey="store">
        <div class="container-fluid">
            <div class="row margin-bottom-50">
                <div class="col-12 col-lg-8" v-if="developerMode">
                    <div class="h2 margin-top-5">Welcome to the BlockHub community</div>
                    <p><strong>BlockHub Community</strong> allows you to engage your audience through crowdfunding campaigns, discussion forums, and a dedicated help centre for your product. You can now be in direct contact with your end users, answer their questions, address their concerns, and improve your approval rating on our platform. </p>
                    <p>For more questions on BlockHub Community visit our help centre or email help@hyperbridge.org. </p>
                </div>
                <div class="col-12 col-lg-8" v-if="!developerMode">
                    <div class="h2 margin-top-5">Welcome to the BlockHub community</div>
                    <p><strong>BlockHub Community</strong> allows you to engage with other gamers and the game developers for an enhanced community-driven gaming experience. You can ask questions on technical issues, post your feedback on the gameplay, and suggest improvements to the game. </p>
                </div>
                <div class="col-12 col-lg-4">
                    <c-block title="Links &amp; Resources" :noGutter="true" :onlyContentBg="true">
                        <div class="d-flex flex-column">
                            <c-search class="mb-2" />
                            <c-button status="plain" class="my-1">
                                <i class="fas fa-info-circle"></i> View Discussion Guidelines
                            </c-button>
                            <c-button status="plain" class="my-1">
                                <i class="fas fa-info-circle"></i> Discussion Rules
                            </c-button>
                            <c-button status="plain" class="my-1">
                                <i class="fas fa-question-circle"></i> FAQ
                            </c-button>
                            <c-button status="success" icon="plus" class="margin-top-20" style="margin-right: auto" @click="$store.commit('application/activateModal', 'new-discussion')">
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
                    @changeTab="category = $event"
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
    </c-layout>
</template>

<script>
    import moment from 'moment'

    export default {
        components: {
            'c-heading-bar': (resolve) => require(['@/components/heading-bar'], resolve),
            'c-community-forum': (resolve) => require(['@/components/community/forum-item.vue'], resolve),
            'c-search': (resolve) => require(['@/components/searcher'], resolve)
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
                        title: "Proposals and Ideas",
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
