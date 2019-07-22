<template>
    <div
        v-if="enabled"
        :class="[
            'loading-process', 'loading-process--' + size
        ]"
        style="position: relative">
        <div class="loading loading--w-spinner">
            <div><div class="loading-spinner" /></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        enabled: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            default: '100'
        }
    }
}
</script>

<style lang="scss" scoped>
    .loading-process {
        position: relative;
        width: 100%;
        height: 100%;

        &.loading-process--lg {
            zoom: 2;
            padding: 40px;
        }
    }

    .loading {
        background: transparent !important;
    }
</style>
