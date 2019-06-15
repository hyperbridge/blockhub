<template>
    <c-layout navigationKey="store" :breadcrumbLinks="breadcrumbLinks">
        <div class="container-fluid">
            <div class="row margin-bottom-50">
                <div class="col-12 col-lg-8 col-xl-9">
                    <c-block
                        title="General"
                        :noGutter="true"
                        :onlyContentBg="true">
                        <div class="community-list">
                            <c-community-item
                                v-for="(discussion, index) in forum.discussions"
                                :id="discussion.id"
                                :key="index"
                                :title="discussion.name"
                                :actionStatus="discussion.meta.actionStatus"
                                :rate="discussion.meta.rate"
                                :commentsCount="discussion.meta.commentsCount"
                                :author="discussion.owner"
                                :comments="discussion.comments" />
                        </div>
                    </c-block>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
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
                                @click="activateModal()">
                                New discussion
                            </c-button>
                        </div>
                    </c-block>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-community-item': () => import('~/components/community/post-item').then(m => m.default || m),
        'c-search': () => import('~/components/searcher').then(m => m.default || m)
    },
    async asyncData({ params, store }) {
        await store.dispatch('communities/find', {
            query: {
                id: params.id,
                $eager: '[discussions]'
            }
        })

        const forum = store.getters['communities/get'](params.id)

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
        activateModal() {
            this.$store.commit('application/activeModalData', {
                community: {
                    id: this.forum.id
                }
            })
            this.$store.commit('application/activateModal', 'new-discussion')
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
