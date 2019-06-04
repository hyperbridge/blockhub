<template>
    <div class="col-12">
        <c-timeline
            :items="project.updates"
            :project_id="project.id" />
    </div>
</template>

<script>
export default {
    components: {
        'c-timeline': () => import('~/components/timeline/list').then(m => m.default || m)
    },
    props: ['project', 'editing']
}
</script>

<style lang="scss" scoped>
</style>
