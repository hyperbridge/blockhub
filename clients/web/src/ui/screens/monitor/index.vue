<template>
    <c-layout>
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        TAB 1: Network Monitor
                    </div>
                </div>
            </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
    }
}
</script>

<style lang="scss" scoped>

</style>
