<template>
    <div class="c-fancy-progress">
        <div
            class="c-fancy-progress__bar"
            :class="checkColor"
            :style="{ 'width': + Number(percent) > 100 ? '100' : Number(percent) + '%'}">
            <div class="c-fancy-progress__bar-shadow" />
            <div class="c-fancy-progress__text">
                Progress: <em>{{ Number(percent) > 100 ? '100' : percent }}%</em>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        percent: {
            type: [Number, String],
            default: 0
        }
    },
    computed: {
        checkColor() {
            if (Number(this.percent) > 25 && Number(this.percent) < 50) {
                return 'c-fancy-progress__bar--orange'
            } else if (Number(this.percent) >= 50 && Number(this.percent) < 75) {
                return 'c-fancy-progress__bar--yellow'
            } else if (Number(this.percent) >= 75) {
                return 'c-fancy-progress__bar--green'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $red: #db0414;
    $orange: #d73f15;
    $yellow: #f3ac00;
    $green: #00b217;

    @mixin innerColor( $color: $red ) {
        background: $color;
    }

    .c-fancy-progress {
        font-size: 1.2em;
        height: 20px;
        background: rgba(255,255,255,0.05);
        border-radius: 2px;
        border: 1px solid rgba(255,255,255,0.2);
        &--active .progress__bar {
            opacity: 1;
        }
        &__text {
            width: 20em;
            padding: 0 0.9em;
            position: absolute;
            line-height: 16px;
            em {
                font-style: normal;
            }
        }
        &__bar {
            color: white;
            font-size: 12px;
            font-weight: normal;
            text-shadow: 0 1px 1px rgba(0,0,0,0.6);
            line-height: 19px;
            display: block;
            position: relative;
            top: 0px;
            bottom: 0px;
            left: 0px;
            width: 0%;
            height: 100%;
            border-radius: 2px 0 0 2px;
            transition: all 1s ease;
            @include innerColor($red);
            &--orange {
                @include innerColor($orange);
            }
            &--yellow {
                @include innerColor($yellow);
            }
            &--green {
                @include innerColor($green);
            }
            .c-fancy-progress__bar-shadow{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                overflow: hidden;
                &:before{
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 2;
                    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .2) 49%, rgba(0, 0, 0, 0) 100%);
                }
                &:after{
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 20%;
                    z-index: 3;
                    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .2) 49%, rgba(255, 255, 255, 0) 100%);
                    transition: all 0.3s ease;
                    animation: pulse 1.5s ease-out infinite;
                }
            }
            &:before,
            &:after {
                content: "";
                position: absolute;
                right: -1px;
                top: -10px;
                width: 1px;
                height: 40px;
            }
            &:before {
                width: 7px;
                right: -4px;
                background:
                    radial-gradient(
                            ellipse at center,
                            rgba(255,255,255,0.4) 0%,
                            rgba(255,255,255,0) 75%
                    );
            }
            &:after {
                background:
                    linear-gradient(
                            to bottom,
                            rgba(255,255,255,0) 0%,
                            rgba(255,255,255,0.3) 25%,
                            rgba(255,255,255,0.3) 75%,
                            rgba(255,255,255,0) 100%
                    );
            }
        }
    }


    @keyframes pulse {
        0% {
            left: -50%;
        }
        100% {
            left: 150%;
        }
    }
</style>
