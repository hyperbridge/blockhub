<template>
    <div class="navigation">
        <SidebarMenu
            title="CROWDFUND"
            :links="links.crowdfund" />

        <SidebarMenu
            v-access="'bounty.read'"
            title="BOUNTIES"
            :links="links.bounties" />

        <SidebarMenu
            v-access="'community'"
            title="DISCUSSIONS"
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
