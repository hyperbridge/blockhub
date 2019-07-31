<template>
    <div class="navigation">
        <SidebarMenu
            title="HELP"
            subTitle="General"
            mClass="margin-bottom-20"
            :links="links.general" />
        <SidebarMenu
            subTitle="Sections"
            mClass="margin-bottom-20"
            subIcon="fas fa-question-circle"
            :links="links.sections" />
        <SidebarMenu
            subTitle="Trending articles"
            mClass="margin-bottom-20"
            subIcon="fas fa-question-circle"
            :links="links.trendingArticles" />
    </div>
</template>

<script>
export default {
    components: {
        'SidebarMenu': () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu)
    },
    data() {
        return {
            links: {
                general: [
                    { to: { path: '/help' }, title: 'All Sections & Topics' },
                    { to: { path: '/help/topic/0/changelog' }, title: 'Changelog' },
                    { to: { path: '/help/topic/0/common-issues' }, title: 'Common Issues' },
                    { to: { path: '/help/topic/0/trending-articles' }, title: 'Trending Articles' },
                    { to: { path: '/help/topic/0/support' }, title: 'Support' }
                ],
                sections: [
                    { to: { path: '/help/topic/0' }, title: 'General Platform Features' }
                ],
                trendingArticles: [
                    { to: { path: '/help/topic/0/building-communities' }, title: 'Building Communities' },
                    { to: { path: '/help/topic/0/suggesting-features' }, title: 'Suggesting Features' }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
