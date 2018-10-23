<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            :title="title"
            sub_title="Help"
            sub_icon="fas fa-question-circle"
            mClass="margin-bottom-20"
            :links="links.gameOverview"
        />

        <c-curator-panel>
            <c-claim title="Content curated" type="success" v-darklaunch="'CURATORS'">
                <p>This page has been curated by 2041 people</p>
                <a href="/#/curator/application" class="btn btn-sm btn-outline-white">
                    Become a curator
                </a>
            </c-claim>
            <c-claim title="Unclaimed Page" type="warning" v-darklaunch="'CURATORS'">
                <p>This page has been curatedby 2041 people</p>
                <c-switch label="Enable Curation Mode"/>
            </c-claim>
            <c-claim title="Some info" v-darklaunch="'CURATORS'">
                <p>This page has been curatedby 2041 people</p>
            </c-claim>

            <c-curator-info title="Curator panel" v-darklaunch="'CURATORS'">
                <p>1023 people have
                    curated this product.</p>
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
        }
    }
</script>
