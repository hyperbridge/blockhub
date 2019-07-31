<template>
    <div class="col-12">
        <Timeline
            :items="project.updates"
            :project_id="project.id" />
    </div>
</template>

<script>
export default {
    components: {
        'Timeline': () => import('@ericmuyser/hyper-ui').then(m => m.Timeline)
    },
    props: ['project', 'editing']
}
</script>

<style lang="scss" scoped>
</style>
