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
        }
    }
</script>

<style lang="scss" scoped>
</style>
