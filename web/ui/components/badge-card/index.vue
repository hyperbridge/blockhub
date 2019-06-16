<template functional>
    <div
        class="badge-card"
        :class="'badge-card--' + props.tag">
        <span class="badge-card__text">
            {{ props.title }}
        </span>
        <div class="badge-card__triangle" />
    </div>
</template>

<style lang="scss" scoped>
    $border-size: 1px;
    $border-color: #dd9c1b;
    $border-color-lighter: #ffcd6a;
    $border-col: #ECB448;

    .badge-card {
        position: relative;
        margin-right: 10px;
        z-index: 5;
    }
    %triangle {
        width: 16px;
        height: 16px;
        z-index: -1;
        transform: rotate(45deg);
    }
    .badge-card__triangle {
        @extend %triangle;
        position: relative;
        border: 1px solid $border-color-lighter;
        background: $border-color;
        top: -8px;
        left: 4px;
        z-index: -1;
    }
    .badge-card__text {
        display: block;
        background-color: $border-color;
        color: #fff;
        font-size: 10px;
        padding: 3px 1px;
        text-shadow: 0 0 4px #000;
        width: 24px;
        border: 1px solid $border-color-lighter;
        border-bottom-width: 0;
        border-radius: 3px 3px 0 0;
        text-align: center;
        position: relative;
        writing-mode: vertical-rl;
        text-transform: uppercase;
        position: relative;
        &:after {
            position: absolute;
            content: "";
            right: -11px;
            top: -11px;
            border: 11px solid transparent;
            border-bottom-color: darken($border-color, 22%);
            z-index: -1;
        }
    }
</style>
