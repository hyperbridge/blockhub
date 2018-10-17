<template>
    <c-layout navigationKey="meta">
            <div class="container-fluid">  
                <div class="row">
                    <div class="col-12">
                        BlockHub Meta
                        <br />
                        Verification Queue: TBD
                        [ Crowdfund ]
                        [ Product ]
                        <br />
                        Flagged: 
                        [ Product ]
                        [ Crowdfund ]
                        [ Comment ]
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
