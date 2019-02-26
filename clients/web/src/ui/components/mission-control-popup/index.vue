<template>
    <c-basic-popup :activated="activated" @close="activated = false">

        <template slot="body">
            <div>sss</div>
        </template>

    </c-basic-popup>

</template>


<script>
    export default {
        props: ['activated'],
        components: {
            'c-basic-popup': (resolve) => require(['@/ui/components/popups/basic'], resolve),
        },
        data(){
            return {
                activated: false
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss" scoped>
    .mission-control{
        display: inline-flex;
    }
</style>
