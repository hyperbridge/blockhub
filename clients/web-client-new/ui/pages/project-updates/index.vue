<template>
    <div class="col-12">
        <c-timeline :items="project.updates" :project_id="project.id" />
    </div>
</template>

<script>
    export default {
        props: ['project', 'editing'],
        components: {
            'c-timeline': (resolve) => require(['@/components/timeline/list'], resolve)
        },
    }
</script>

<style lang="scss" scoped>
</style>
