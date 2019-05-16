<template>
    <div class="navigation">

        <c-sidebar-menu
            title="IDEA"
            :links="links.idea"
        />

        <c-sidebar-menu
            title="COMMUNITY"
            :links="links.discussions"
            v-darklaunch="'COMMUNITY'"
        />

        <c-sidebar-menu
            title="HELP"
            :links="links.help"
        />

        <c-join-community />

        <c-curator-panel>
            <c-curator-info title="Curator panel" v-darklaunch="'CURATORS'">
                <div v-if="!editing">
                    <p>{{ curators.total }} people have
                        curated this idea.</p>
                    <ul>
                        <li>
                            <strong>{{ curators.approved }}</strong>
                            Approved with 0 changes
                        </li>
                        <li>
                            <strong>{{ curators.approvedWithRequest }}</strong>
                            Approved with at least 1 change requested
                        </li>
                        <li>
                            <strong>{{ curators.disapprovedWithRequest }}</strong>
                            Disapproved with requests
                        </li>
                        <li>
                            <strong>{{ curators.disapproved }}</strong>
                            Disapproved with 0 changes
                        </li>
                    </ul>
                </div>
                <div v-if="editing">
                    <c-switch />
                    Enable Curator Mode
                </div>
            </c-curator-info>
        </c-curator-panel>

    </div>
</template>

<script>
    export default {
        props: ['id'],
        components: {
            'c-sidebar-menu': (resolve) => require(['@/components/sidebar-menu'], resolve),
            'c-searcher': (resolve) => require(['@/components/searcher'], resolve),
            'c-claim': (resolve) => require(['@/components/curator-panel/claim.vue'], resolve),
            'c-curator-panel': (resolve) => require(['@/components/curator-panel'], resolve),
            'c-curator-info': (resolve) => require(['@/components/curator-panel/info-card.vue'], resolve),
            'c-join-community': (resolve) => require(['@/components/join-community'], resolve),
        },
        data() {
            return {
                links: {
                    idea: [
                        { to: { path: `/idea/${this.id}` }, title: 'Idea Page', icon: 'fas fa-gamepad' }
                    ],
                    bounties: [
                        { to: { path: `/idea/${this.id}/bounties` }, title: 'My Submissions', icon: 'fa fa-trophy' }
                    ],
                    discussions: [
                        { to: { path: `/idea/${this.id}/community/new` }, title: 'New Post', icon: 'fa fa-comment' },
                        { to: { path: `/idea/${this.id}/community/top` }, title: 'Top Posts', icon: 'fa fa-star' }
                    ],
                    help: [
                        { to: { path: '/help/1/article/building-communities' }, title: 'Building Communities' },
                        { to: { path: '/help/1/article/suggesting-features' }, title: 'Suggesting Features' },
                        { to: { path: '/help/1/article/voting-and-curating-updates' }, title: 'Voting & Curating Updates' },
                        { to: { path: '/help/1' }, title: 'MORE ...' }
                    ]
                }
            }
        },
        computed: {
            editing() {
                return this.$store.state.application.editorMode === 'editing'
            },
            curators() {
                return {
                    total: 0,
                    approved: 0,
                    approvedWithRequest: 0,
                    disapproved: 0,
                    disapprovedWithRequest: 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
