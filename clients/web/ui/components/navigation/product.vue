<template>
    <div class="navigation">
        <c-sidebar-menu
            :title="title"
            subTitle="Help"
            subIcon="fas fa-question-circle"
            mClass="margin-bottom-20"
            :links="links.gameOverview" />

        <c-button
            v-if="$store.state.application.editorMode === 'editing'"
            status="second-info"
            size="lg"
            class="mb-4"
            @click="$store.commit('application/activeModal', 'syncBlockchain')">
            Sync Blockchain
        </c-button>
        <c-button
            v-if="$store.state.application.editorMode === 'editing'"
            status="second-info"
            size="lg"
            class="mb-4"
            @click="$store.commit('application/activeModal', 'import-product')">
            Import
        </c-button>

        <c-join-community v-if="!$store.state.application.desktopMode" />

        <c-curator-panel>
            <c-curator-info title="">
                <c-claim
                    v-access="'curator.read'"
                    title="Content curated"
                    type="success"
                    class="margin-bottom-10 margin-top-10">
                    <p>This product has been curated by 2041 people.</p>
                    <c-button
                        to="/curator/application"
                        class="outline-white">
                        Become a curator
                    </c-button>
                </c-claim>
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
                <c-button
                    status="underline"
                    @click="showClaimPopup">
                    Created this game?
                </c-button>
            </c-curator-info>
        </c-curator-panel>
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m),
        'c-claim': () => import('~/components/curator-panel/claim').then(m => m.default || m),
        'c-curator-panel': () => import('~/components/curator-panel').then(m => m.default || m),
        'c-curator-info': () => import('~/components/curator-panel/info-card').then(m => m.default || m),
        'c-join-community': () => import('~/components/join-community').then(m => m.default || m)
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
