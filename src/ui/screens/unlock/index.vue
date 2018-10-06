<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false">
    </c-layout>
</template>


<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
    },
    data() {
        return {
            errors: [],
        }
    },
    methods: {
    }
}
</script>


<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
