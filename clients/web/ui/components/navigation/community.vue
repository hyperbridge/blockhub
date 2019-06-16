<template>
    <div class="navigation">
        <c-sidebar-menu
            title="COMMUNITY"
            :links="links.community" />
    </div>
</template>

<script>
export default {
    components: {
        'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m)
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
