<template>
    <div class="status-dot" :class="{'status-dot--disconnected': status === 'disconnected', 'status-dot--connected': status === 'connected', 'status-dot--semiconnected': status === 'semiconnected' }"></div>
</template>

<script>
    export default {
        props: ['status']
    }
</script>

<style lang="scss">
    .status-dot {
        width: 10px;
        height: 10px;
        border-radius: 10px;

        &.status-dot--connected {
            background-color: green;
        }

        &.status-dot--semiconnected {
            background-color: yellow;
        }

        &.status-dot--disconnected {
            background-color: red;
        }
    }
</style>