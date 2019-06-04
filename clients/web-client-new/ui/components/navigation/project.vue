<template>
    <div class="navigation">
        <c-sidebar-menu
            title="CROWDFUND"
            :links="links.crowdfund" />

        <c-sidebar-menu
            v-darklaunch="'BOUNTIES'"
            title="BOUNTIES"
            :links="links.bounties" />

        <c-sidebar-menu
            v-darklaunch="'COMMUNITY'"
            title="DISCUSSIONS"
            :links="links.discussions" />

        <c-sidebar-menu
            title="HELP"
            :links="links.help" />

        <c-join-community />

        <c-curator-panel>
            <c-curator-info v-darklaunch="'CURATORS'"
                            title="Curator panel">
                <div v-if="!editing">
                    <p>
                        1023 people have
                        curated this crowdfund.
                    </p>
                    <ul>
                        <li>
                            <strong>492</strong>
                            Approved with 0 changes
                        </li>
                        <li>
                            <strong>132</strong>
                            Approved with at least 1 change requested
                        </li>
                        <li>
                            <strong>32</strong>
                            Disapproved with requests
                        </li>
                        <li>
                            <strong>23</strong>
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
    data() {
        return {
            links: {
                crowdfund: [
                    { to: { path: '/project/1' }, title: 'Project Page', icon: 'fas fa-gamepad' }
                ],
                bounties: [
                    { to: { path: '/project/1/bounties' }, title: 'My Submissions', icon: 'fa fa-trophy' }
                ],
                discussions: [
                    { to: { path: '/project/1/community/new' }, title: 'New Post', icon: 'fa fa-comment' },
                    { to: { path: '/project/1/community/top' }, title: 'Top Posts', icon: 'fa fa-star' }
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
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
