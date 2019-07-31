<template>
    <Layout>
        <div class="col-12">
            <Video
                src="https://www.w3schools.com/tags/mov_bbb.mp4"
                width="100%"
                :controls="true" />
        </div>
    </Layout>
</template>

<script>
export default {
    components: {
        'Video': () => import('@ericmuyser/hyper-ui').then(m => m.Video)
    }
}
</script>

