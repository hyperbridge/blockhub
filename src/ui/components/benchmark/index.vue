<template>
    <div>
        Bench goes here
        <p>{{ start }}</p>
        <p>{{ end }}}</p>
        <p>{{ end - start }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            start: 0,
            end: 0
        }
    },
    created() {
        this.start = performance.now();
    },
    mounted() {
        this.end = performance.now();
    }
}
</script>
