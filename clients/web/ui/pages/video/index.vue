<template>
    <c-layout>
        <div class="col-12">
            <c-video
                v-if="!$demo"
                src="https://www.w3schools.com/tags/mov_bbb.mp4"
                width="100%"
                :controls="true" />
            <c-block v-else title="Video Preview">
                <c-img src="/img/realm_bg.jpg" class="img-fluid" />
                <p class="mt-3">The video player layout is available to explore. Streaming is unavailable in this offline demo.</p>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-video': () => import('~/components/video').then(m => m.default || m)
    }
}
</script>
