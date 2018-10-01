<template>
    <div class="navigation" id="navigation-default">
        <c-sidebar-menu
            title="HELP"
            sub_title="General"
            mClass="margin-bottom-20"
            :links="links.general"
        />
        <c-sidebar-menu
            sub_title="Sections"
            mClass="margin-bottom-20"
            sub_icon="fas fa-question-circle"
            :links="links.sections"
        />
        <c-sidebar-menu
            sub_title="Trending articles"
            mClass="margin-bottom-20"
            sub_icon="fas fa-question-circle"
            :links="links.trendingArticles"
        />
    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve)
        },
        data() {
            return {
                links: {
                    general: [
                        { to: { path: '/help' }, title: 'All Sections & Topics' },
                        { to: { path: '/help/changelog' }, title: 'Changelog' },
                        { to: { path: '/help/common-issues' }, title: 'Common Issues' },
                        { to: { path: '/help/trending-articles' }, title: 'Trending Articles' },
                        { to: { path: '/help/support' }, title: 'Support' }
                    ],
                    sections: [
                        { to: { path: '/help/0' }, title: 'General Platform Features' }
                    ],
                    trendingArticles: [
                        { to: { path: '/help/building-communities' }, title: 'Building Communities' },
                        { to: { path: '/help/suggesting-features' }, title: 'Suggesting Features' }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
