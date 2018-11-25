<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            :title="title"
            sub_title="Help"
            sub_icon="fas fa-question-circle"
            mClass="margin-bottom-20"
            :links="links.gameOverview"
        />

        <c-button @click="$store.commit('application/activateModal', 'import-product')" v-if="$store.state.application.editor_mode === 'editing'">Import from third-party</c-button>

        <c-join-community v-if="!$store.state.application.desktop_mode" />

        <c-curator-panel>
            <c-curator-info title="">
                <c-claim title="Content curated" type="success" v-darklaunch="'CURATORS'" class="margin-bottom-10 margin-top-10">
                    <p>This product has been curated by 2041 people.</p>
                    <c-button href="#/curator/application" class="outline-white">
                        Become a curator
                    </c-button>
                </c-claim>
                <ul v-darklaunch="'CURATORS'">
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
                <c-button class="underline" @click="showClaimPopup">Created this game?</c-button>
            </c-curator-info>
        </c-curator-panel>

    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'GAME OVERVIEW',
                required: false
            }
        },
        components: {
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-claim': (resolve) => require(['@/ui/components/curator-panel/claim.vue'], resolve),
            'c-curator-panel': (resolve) => require(['@/ui/components/curator-panel'], resolve),
            'c-curator-info': (resolve) => require(['@/ui/components/curator-panel/info-card.vue'], resolve),
            'c-join-community': (resolve) => require(['@/ui/components/join-community'], resolve),
        },
        methods: {
            showClaimPopup() {
                this.$store.commit('application/activateModal', 'claim')
            }
        },
        data() {
            return {
                links: {
                    gameOverview: [
                        { to: { path: '/help/1/article/suggesting-features' }, title: 'Suggesting Features' },
                        { to: { path: '/help/1/article/voting-and-curating-updates' }, title: 'Voting and Curating Updates' },
                        { to: { path: '/help/1' }, title: 'MORE ...' }
                    ]
                }
            }
        },
        computed:{
            signed_in() {
                return this.$store.state.application.signed_in
            },
        }
    }
</script>
