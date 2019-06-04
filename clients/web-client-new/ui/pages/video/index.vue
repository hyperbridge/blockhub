<template>
    <c-layout>
        <div class="col-12">
            <c-video src="https://www.w3schools.com/tags/mov_bbb.mp4"
                     width="100%"
                     :controls="true" />
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

