<template>
    <div class="col-12">
        <TimelineList
            :items="project.updates"
            :projectId="project.id" />
    </div>
</template>

<script>
export default {
    components: {
        'TimelineList': () => import('@ericmuyser/hyper-ui').then(m => m.TimelineList)
    },
    props: ['project', 'editing']
}
</script>

<style lang="scss" scoped>
</style>
