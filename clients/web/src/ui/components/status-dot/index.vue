<template>
    <div class="status-dot" :class="{'status-dot--disconnected': status === 'disconnected', 'status-dot--connected': status === 'connected', 'status-dot--semiconnected': status === 'semiconnected' }" @click="$emit('click')">
        <div class="status-dot__icon" />
    </div>
</template>

<script>
    export default {
        props: ['status']
    }
</script>

<style lang="scss">
    .status-dot {
        padding: 5px;
        cursor: pointer;

        .status-dot__icon {
            width: 10px;
            height: 10px;
            border-radius: 10px;
        }

        &.status-dot--connected .status-dot__icon {
            background-color: green;
        }

        &.status-dot--semiconnected .status-dot__icon {
            background-color: yellow;
        }

        &.status-dot--disconnected .status-dot__icon {
            background-color: red;
        }
    }
</style>