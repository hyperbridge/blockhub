<template>
    <div class="navigation">
        <SidebarMenu
            title="IDEA"
            :links="links.idea" />

        <SidebarMenu
            v-access="'community'"
            title="COMMUNITY"
            :links="links.discussions" />

        <SidebarMenu
            title="HELP"
            :links="links.help" />

        <JoinCommunity />

        <CuratorPanel>
            <CuratorInfo
                v-access="'curator.read'"
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
                    <Toggle />
                    Enable Curator Mode
                </div>
            </CuratorInfo>
        </CuratorPanel>
    </div>
</template>

<script>
export default {
    components: {
        'SidebarMenu': () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu),
        'CuratorPanel': () => import('@ericmuyser/hyper-ui').then(m => m.CuratorPanel),
        'CuratorInfo': () => import('@ericmuyser/hyper-ui').then(m => m.CuratorInfo),
        'JoinCommunity': () => import('@ericmuyser/hyper-ui').then(m => m.JoinCommunity)
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
