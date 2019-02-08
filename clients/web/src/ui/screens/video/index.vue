<template>
    <c-layout>
        <div class="col-6">
            <c-video src="https://www.w3schools.com/tags/mov_bbb.mp4" :controls="true" />
        </div>
    </c-layout>
</template>

<script>
    export default {
        components: {
            'c-video': (resolve) => require(['@/ui/components/video'], resolve)
        }
    }
</script>

<style lang="scss" scoped>

</style>
