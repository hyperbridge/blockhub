<template functional>
    <div class="badge-card">
        <span class="badge-card__text">
            {{ props.title }}
            <span class="store-card__triangle--behind"></span>
        </span>
        <div class="badge-card__triangle"></div>
    </div>
</template>

<style lang="scss" scoped>
    $border-size: 1px;
    $border-color: #dd9c1b;
    $border-color-lighter: #ffcd6a;
    $border-col: #ECB448;

    .badge-card {
        position: relative;
        // background: blue;
        z-index: 5;
        box-shadow: 0 0 5px 0 rgba(1,1,1,.1);
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
    .store-card__triangle--behind {
        @extend %triangle;
        background: darken($border-color, 20%);
        position: absolute;
        right: -8px;
        top: 3px;
    }
    .badge-card__text {
        display: block;
        background-color: $border-color;
        color: #f8dfac;
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
    }
</style>
