<template>
    <div class="navigation">
        <SidebarMenu
            title="COLLECTION"
            subTitle="General"
            mClass="margin-bottom-20"
            :links="links.general" />
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
                general: []
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
