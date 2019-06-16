<template>
    <div class="progress-container">
        <div
            v-if="percentage"
            class="progress"
            max="100"
            :value="percentage" />
        <div class="progress-materializecss">
            <div class="indeterminate" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['percentage']
}
</script>

<style lang="scss" scoped>
    $colors: (
        primary:    rgba(51, 37, 155, 0.7),
        secondary:  rgba(249, 82, 178, 0.7),
        danger:     #f53d3d,
        light:      #f4f4f4,
        dark:       #222
    );

    .progress, progress[value] {
        width:              100%;
        border:             none;
        margin:             0;
        height:             100%;
        display:            block;
        appearance:         none;
        -webkit-appearance: none;
        &::-webkit-progress-bar {
            background-color: lighten( map-get($colors, primary), 35% );
        }
        &::-webkit-progress-value {
            background-color: map-get($colors, primary);
        }
    }

    .progress-materializecss {
        margin: 0;
        position: relative;
        height: 100%;
        display: block;
        width: 100%;
        border-radius: 2px;
        overflow: hidden;
        height: 5px;

        .indeterminate {
            &:before{
                content:          '';
                position:         absolute;
                background-color: map-get($colors, primary);
                top:              0;
                left:             0;
                bottom:           0;
                will-change:      left, right;
                animation:        indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
            }
            &:after {
                content:          '';
                position:         absolute;
                background-color: map-get($colors, secondary);
                top:              0;
                left:             0;
                bottom:           0;
                will-change:      left, right;
                animation:        indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
                animation-delay: 1.15s;
            }
        }
    }

    @keyframes indeterminate {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    @keyframes indeterminate-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }

</style>
