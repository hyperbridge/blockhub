<template>
    <section
        class="landing-section"
        :class="{'full-height' : fullHeight}"
        :style="{
            'background-image' : 'url(' + bgImage + ')' ,
            'min-height' : minHeight,
            'background-position' : bgPosition
        }">
        <div class="container">
            <div
                class="row landing__content-block-body"
                :class="[horizontalPozition, verticalPosition]">
                <slot />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SimpleBlock',
    props: {
        titleGradient: {
            type: Boolean,
            default: false
        },
        titleShadow: {
            type: Boolean,
            default: false
        },
        title: String,
        minHeight: String,
        fullHeight: {
            type: Boolean,
            default: false
        },
        bgImage: String,
        bgPosition: {
            type: String,
            default: 'center'
        },
        vertical: {
            type: String,
            default: 'top'
        },
        horizontal: {
            type: String,
            default: 'left'
        },
        contentWidth: String
    },
    computed: {
        verticalPosition() {
            switch (this.vertical) {
            case 'top':
                return 'align-items-start'
            case 'center':
                return 'align-items-center'
            case 'bottom':
                return 'align-items-end'
            default:
                break
            }
        },
        horizontalPozition() {
            switch (this.horizontal) {
            case 'left':
                return 'justify-content-start'
            case 'center':
                return 'justify-content-center'
            case 'right':
                return 'justify-content-end'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .landing-section{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 70px 0;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        z-index: 8;
        &.full-height{
            min-height: 100vh;
        }
        .row{
            height: 100%;
        }
    }
    .landing__content-block-body{
        color: #fff;
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
