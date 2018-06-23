<template>
    <c-layout navigationKey="settingsNavigation">
        <div class="content" id="content">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                      Settings - Profile
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('@/ui/layouts/default')
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>
