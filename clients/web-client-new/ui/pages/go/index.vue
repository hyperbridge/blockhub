<template>
    <c-layout :showLeftPanel="false"
              :showRightPanel="false">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-4 text-center">
                    <h2>BlockHub Launched</h2>
                    <p>We've located your target and beamed the info to your BlockHub app. You can close this browser tab.</p>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': () => import('~/components/front-layout').then(m => m.default || m),
        'c-download-block': () => import('~/components/download-block').then(m => m.default || m)
    },
    props: ['code'],
    mounted() {
        window.location = `blockhub://go/${this.code}`
    }
}
</script>

<style lang="scss" scoped>

</style>
