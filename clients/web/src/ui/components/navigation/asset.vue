<template>
    <div class="navigation">
        <c-sidebar-menu
            title="ASSET MANAGER"
            mClass="margin-bottom-20"
            :links="links.assetManager"
        />
        <c-sidebar-menu
            subTitle="Help"
            mClass="margin-bottom-20"
            subIcon="fas fa-question-circle"
            :links="links.help"
        />
    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu'], resolve),
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
                        { to: { path: '/help/0/article/buying-and-selling-items' }, title: 'Buying and Selling Items' },
                        { to: { path: '/help/0/article/how-top-picks-are-selected' }, title: 'How Top Picks are selected' },
                        { to: { path: '/help/0/article/accepting-offers' }, title: 'Accepting offers' },
                        { to: { path: '/help/0/article/asset-general' }, title: 'General' },
                        { to: { path: '/help/0/article/asset-browser' }, title: 'Asset Browser' },
                        { to: { path: '/help/0' }, title: 'MORE ...' },
                    ]
                }
            }
        }
    }
</script>
