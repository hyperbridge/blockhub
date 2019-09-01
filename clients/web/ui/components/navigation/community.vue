<template>
    <div class="navigation">
        <SidebarMenu
            title="COMMUNITY"
            :links="links.community" />
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
                community: [
                    { to: { path: `/community/${this.id}` }, title: 'Community Page', icon: 'fas fa-gamepad' }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
