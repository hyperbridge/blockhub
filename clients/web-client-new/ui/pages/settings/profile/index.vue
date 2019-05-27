<template>
    <c-layout navigationKey="settings">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                      Settings - Profile
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/front-layout').then(m => m.default || m)
    }
}
</script>

<style lang="scss" scoped>

</style>
