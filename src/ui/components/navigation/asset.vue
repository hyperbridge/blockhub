<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            title="ASSET MANAGER"
            mClass="margin-bottom-20"
            :links="links.assetManager"
        />
        <c-sidebar-menu
            sub_title="Help"
            mClass="margin-bottom-20"
            sub_icon="fas fa-question-circle"
            :links="links.help"
        />
    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
        },
        data() {
            return {
                links: {
                    assetManager: [
                        { to: { path: '/' }, title: 'Top Picks' },
                        { to: { path: '/' }, title: 'Offers' },
                        { to: { path: '/' }, title: 'Metadata' },
                        { to: { path: '/' }, title: 'Owned (13)' }
                    ],
                    help: [
                        { to: { path: '/' }, title: 'Buying and Selling Assets' },
                        { to: { path: '/' }, title: 'How Top Picks are selected' },
                        { to: { path: '/' }, title: 'Accepting offers' },
                        { to: { path: '/' }, title: 'General' },
                        { to: { path: '/assets' }, title: 'Asset Browser' },
                        { to: { path: '/' }, title: 'MORE ...' },
                    ]
                }
            }
        }
    }
</script>
