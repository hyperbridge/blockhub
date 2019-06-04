<template>
    <div class="navigation">
        <c-sidebar-menu
            title="IDEA"
            :links="links.idea" />

        <c-sidebar-menu
            v-darklaunch="'COMMUNITY'"
            title="COMMUNITY"
            :links="links.discussions" />

        <c-sidebar-menu
            title="HELP"
            :links="links.help" />

        <c-join-community />

        <c-curator-panel>
            <c-curator-info
                v-darklaunch="'CURATORS'"
                title="Curator panel">
                <div v-if="!editing">
                    <p>
                        {{ curators.total }} people have
                        curated this idea.
                    </p>
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
    components: {
        'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m),
        'c-claim': () => import('~/components/curator-panel/claim.vue').then(m => m.default || m),
        'c-curator-panel': () => import('~/components/curator-panel').then(m => m.default || m),
        'c-curator-info': () => import('~/components/curator-panel/info-card.vue').then(m => m.default || m),
        'c-join-community': () => import('~/components/join-community').then(m => m.default || m)
    },
    props: ['id'],
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
                    { to: { path: '/help/topic/1/article/building-communities' }, title: 'Building Communities' },
                    { to: { path: '/help/topic/1/article/suggesting-features' }, title: 'Suggesting Features' },
                    { to: { path: '/help/topic/1/article/voting-and-curating-updates' }, title: 'Voting & Curating Updates' },
                    { to: { path: '/help/topic/1' }, title: 'MORE ...' }
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
