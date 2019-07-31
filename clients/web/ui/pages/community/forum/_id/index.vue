<template>
    <Layout navigationKey="store" :breadcrumbLinks="breadcrumbLinks">
        <div class="container-fluid">
            <div class="row margin-bottom-50">
                <div class="col-12 col-lg-8 col-xl-9">
                    <Block
                        title="General"
                        :noGutter="true"
                        :onlyContentBg="true">
                        <div class="community-list">
                            <CommunityItem
                                v-if="forum.discussions"
                                v-for="(discussion, index) in forum.discussions"
                                :id="discussion.id"
                                :key="index"
                                :title="discussion.name"
                                :actionStatus="discussion.meta.actionStatus"
                                :rate="discussion.meta.rate"
                                :commentsCount="discussion.meta.commentsCount"
                                :author="discussion.owner"
                                :comments="discussion.comments" />
                            <div class="h4" v-else>
                                Oops! Something went wrong :(
                            </div>
                        </div>
                    </Block>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
                    <Block
                        title="Links &amp; Resources"
                        :noGutter="true"
                        :onlyContentBg="true">
                        <div class="d-flex flex-column">
                            <Search class="mb-2" />
                            <Button
                                status="plain"
                                class="my-1">
                                <i class="fas fa-info-circle" /> View Discussion Guidelines
                            </Button>
                            <Button
                                status="plain"
                                class="my-1">
                                <i class="fas fa-info-circle" /> Discussion Rules
                            </Button>
                            <Button
                                status="plain"
                                class="my-1">
                                <i class="fas fa-question-circle" /> FAQ
                            </Button>
                            <Button
                                status="success"
                                icon="plus"
                                class="margin-top-20"
                                style="margin-right: auto"
                                @click="activeModal()">
                                New discussion
                            </Button>
                        </div>
                    </Block>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'CommunityItem': () => import('@ericmuyser/hyper-ui').then(m => m.CommunityItem),
        'Search': () => import('@ericmuyser/hyper-ui').then(m => m.Search)
    },
    async asyncData({ params, store, error }) {
        await store.dispatch('communities/find', {
            query: {
                id: params.id,
                $eager: '[discussions]'
            }
        })

        const forum = store.getters['communities/get'](params.id)

        if (!forum) return error({ statusCode: 404, message: 'Forum not found' })

        return {
            forum,
            breadcrumbLinks: [
                { to: { path: '/' }, title: 'Home' },
                { to: { path: '/community' }, title: 'Community' },
                { to: { path: '/community/forums' }, title: 'Forums' },
                { to: { path: `/communities/${forum.id}` }, title: forum.name }
            ]
        }
    },
    methods: {
        activeModal() {
            this.$store.commit('application/activeModalData', {
                community: {
                    id: this.forum.id
                }
            })
            this.$store.commit('application/activeModal', 'newDiscussion')
        }
    }
}
</script>

<style lang="scss" scoped>
    .community-list {
        border-radius: 5px;
        .Input{
            padding: 8px;
        }
        .community-item{
            border-radius: 0;
            border-bottom: 0;
            transition: transform 200ms ease-in-out;
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
