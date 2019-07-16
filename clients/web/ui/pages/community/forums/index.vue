<template>
    <c-layout navigationKey="store">
        <div class="container-fluid">
            <div class="row margin-bottom-50">
                <div
                    v-if="developerMode"
                    class="col-12 col-lg-8">
                    <div class="h2 margin-top-5">
                        Welcome to the BlockHub community
                    </div>
                    <p><strong>BlockHub Community</strong> allows you to engage your audience through crowdfunding campaigns, discussion forums, and a dedicated help centre for your product. You can now be in direct contact with your end users, answer their questions, address their concerns, and improve your approval rating on our platform. </p>
                    <p>For more questions on BlockHub Community visit our help centre or email help@hyperbridge.org. </p>
                </div>
                <div
                    v-if="!developerMode"
                    class="col-12 col-lg-8">
                    <div class="h2 margin-top-5">
                        Welcome to the BlockHub community
                    </div>
                    <p><strong>BlockHub Community</strong> allows you to engage with other gamers and the game developers for an enhanced community-driven gaming experience. You can ask questions on technical issues, post your feedback on the gameplay, and suggest improvements to the game. </p>
                </div>
                <div class="col-12 col-lg-4">
                    <c-block
                        title="Links &amp; Resources"
                        :noGutter="true"
                        :onlyContentBg="true">
                        <div class="d-flex flex-column">
                            <c-search class="mb-2" />
                            <c-button
                                status="plain"
                                class="my-1">
                                <i class="fas fa-info-circle" /> View Discussion Guidelines
                            </c-button>
                            <c-button
                                status="plain"
                                class="my-1">
                                <i class="fas fa-info-circle" /> Discussion Rules
                            </c-button>
                            <c-button
                                status="plain"
                                class="my-1">
                                <i class="fas fa-question-circle" /> FAQ
                            </c-button>
                            <c-button
                                status="success"
                                icon="plus"
                                class="margin-top-20"
                                style="margin-right: auto"
                                @click="$store.commit('application/activeModal', 'newDiscussion')">
                                New discussion
                            </c-button>
                        </div>
                    </c-block>
                </div>
            </div>
            <c-block
                :noGutter="true"
                :onlyContentBg="true">
                <c-heading-bar
                    slot="title"
                    class="mb-0"
                    :headingTabs="[
                        { title: 'General', category: 'general' },
                        { title: 'Game Forums', category: 'gameForums' },
                        { title: 'Support', category: 'support' }
                    ]"
                    @changeTab="category = $event" />

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
                    <c-community-forum
                        v-for="(forum, index) in forums"
                        :id="forum.id"
                        :key="index"
                        :title="forum.name"
                        :icon="forum.meta.icon"
                        :lastPostTime="forum.meta.lastPostTime"
                        :discussionsCount="Number(forum.meta.discussionsCount)" />
                </div>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-community-forum': () => import('~/components/community/forum-item').then(m => m.default || m),
        'c-search': () => import('~/components/searcher').then(m => m.default || m)
    },
    data() {
        return {
            category: 'general'
        }
    },
    computed: {
        developerMode() {
            return this.$store.state.application.developerMode
        }
    },
    async asyncData({ params, store }) {
        await store.dispatch('communities/find', {
            query: {
                // type: 'forum',
                // category: 'general',
                $sort: {
                    createdAt: -1
                },
                $limit: 25
            }
        })

        const forums = store.getters['communities/list']

        return {
            forums,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: '/community' }, title: 'Community' },
                { to: { path: '/community/forums' }, title: 'Forums' }
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
