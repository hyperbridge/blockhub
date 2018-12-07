<template>
    <div class="row">
        <div class="col-12">
            test
        </div>
    </div>
</template>

<script>
    export default {
        props: ['project', 'editing'],
        components: {
            'c-item': (resolve) => require(['@/ui/components/community/post-item'], resolve)
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
