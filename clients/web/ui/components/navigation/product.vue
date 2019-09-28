<template>
    <div class="navigation">
        <SidebarMenu
            :title="title"
            subTitle="Help"
            subIcon="fas fa-question-circle"
            mClass="margin-bottom-20"
            :links="links.gameOverview" />

        <Button
            v-if="$store.state.application.editorMode === 'editing'"
            status="second-info"
            size="lg"
            class="mb-4"
            @click="$store.commit('application/activeModal', 'syncBlockchain')">
            Sync Blockchain
        </Button>
        <Button
            v-if="$store.state.application.editorMode === 'editing'"
            status="second-info"
            size="lg"
            class="mb-4"
            @click="$store.commit('application/activeModal', 'import-product')">
            Import
        </Button>

        <JoinCommunity v-if="!$store.state.application.desktopMode" />

        <CuratorPanel>
            <CuratorInfo title="">
                <Claim
                    v-access="'curator.read'"
                    title="Content curated"
                    type="success"
                    class="margin-bottom-10 margin-top-10">
                    <p>This product has been curated by 2041 people.</p>
                    <Button
                        to="/curator/application"
                        class="outline-white">
                        Become a curator
                    </Button>
                </Claim>
                <ul v-access="'curator.read'">
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
                <Button
                    status="underline"
                    @click="showClaimPopup">
                    Created this game?
                </Button>
            </CuratorInfo>
        </CuratorPanel>
    </div>
</template>

<script>
export default {
    components: {
        'SidebarMenu': () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu),
        'Claim': () => import('@ericmuyser/hyper-ui').then(m => m.Claim),
        'Button': () => import('@ericmuyser/hyper-ui').then(m => m.Button),
        'CuratorPanel': () => import('@ericmuyser/hyper-ui').then(m => m.CuratorPanel),
        'CuratorInfo': () => import('@ericmuyser/hyper-ui').then(m => m.CuratorInfo),
        'JoinCommunity': () => import('@ericmuyser/hyper-ui').then(m => m.JoinCommunity)
    },
    props: {
        title: {
            type: String,
            default: 'GAME OVERVIEW',
            required: false
        }
    },
    data() {
        return {
            links: {
                gameOverview: [
                    { to: { path: '/help/topic/1/article/suggesting-features' }, title: 'Suggesting Features' },
                    { to: { path: '/help/topic/1/article/voting-and-curating-updates' }, title: 'Voting and Curating Updates' },
                    { to: { path: '/help/topic/1' }, title: 'MORE ...' }
                ]
            }
        }
    },
    computed: {
        signedIn() {
            return this.$store.state.application.signedIn
        }
    },
    methods: {
        showClaimPopup() {
            this.$store.commit('application/activeModal', 'claim')
        }
    }
}
</script>
