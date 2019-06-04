<template functional>
    <p
        class="message-bar"
        :class="'message-bar--' + props.status">
        {{ props.text }}
    </p>
</template>

<style lang="scss" scoped>
    .message-bar {
        border: 1px solid transparent;
        border-left-width: 5px;
        padding: 4px;

        $statuses: (
            error: #E91E63,
            info: #3F51B5
        );

        @each $status, $color in $statuses {
            &.#{'message-bar--' + $status} {
                border-color: $color;
                background-color: darken($color, 20%);
            }
        }
    }
</style>

