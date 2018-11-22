<template>
    <c-business-layout>
        <router-view />
    </c-business-layout>
</template>

<script>
    export default {
        components: {
            'c-business-layout': (resolve) => require(['@/ui/layouts/business'], resolve)
        },
        data(){
            return{
                loadingState: true,
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.loadingState = false
                document.getElementById('startup-loader').style.display = 'none'
            })
        },
    }
</script>

<style lang="scss" scoped>
</style>
