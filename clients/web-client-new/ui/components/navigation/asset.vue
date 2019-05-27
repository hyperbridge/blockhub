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
            'c-sidebar-menu-link': () => import('~/components/sidebar-menu/menu-item').then(m => m.default || m),
            'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m),
            'c-searcher': () => import('~/components/searcher').then(m => m.default || m)
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
                        { to: { path: '/help/topic/0/article/buying-and-selling-items' }, title: 'Buying and Selling Items' },
                        { to: { path: '/help/topic/0/article/how-top-picks-are-selected' }, title: 'How Top Picks are selected' },
                        { to: { path: '/help/topic/0/article/accepting-offers' }, title: 'Accepting offers' },
                        { to: { path: '/help/topic/0/article/asset-general' }, title: 'General' },
                        { to: { path: '/help/topic/0/article/asset-browser' }, title: 'Asset Browser' },
                        { to: { path: '/help/topic/0' }, title: 'MORE ...' },
                    ]
                }
            }
        }
    }
</script>
