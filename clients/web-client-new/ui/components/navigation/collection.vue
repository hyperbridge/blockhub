<template>
    <div class="navigation">
        <c-sidebar-menu
            title="COLLECTION"
            subTitle="General"
            mClass="margin-bottom-20"
            :links="links.general"
        />
    </div>
</template>

<script>
    export default {
        components: {
            'c-sidebar-menu': (resolve) => require(['@/components/sidebar-menu'], resolve),
            'c-searcher': (resolve) => require(['@/components/searcher'], resolve)
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
