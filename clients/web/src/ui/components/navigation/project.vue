<template>
    <div class="navigation">

        <c-sidebar-menu
            title="CROWDFUND"
            :links="links.crowdfund"
        />

        <c-sidebar-menu
            title="BOUNTIES"
            :links="links.bounties"
            v-darklaunch="'BOUNTIES'"
        />

        <c-sidebar-menu
            title="DISCUSSIONS"
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
                    <p>1023 people have
                        curated this crowdfund.</p>
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
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-claim': (resolve) => require(['@/ui/components/curator-panel/claim.vue'], resolve),
            'c-curator-panel': (resolve) => require(['@/ui/components/curator-panel'], resolve),
            'c-curator-info': (resolve) => require(['@/ui/components/curator-panel/info-card.vue'], resolve),
            'c-join-community': (resolve) => require(['@/ui/components/join-community'], resolve),
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
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
