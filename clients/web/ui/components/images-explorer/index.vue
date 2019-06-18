<template>
    <div class="images-explorer">
        <button
            class="images-explorer__btn"
            @click="change_image(-1)">
            <i class="fas fa-angle-left" />
        </button>
        <transition-group
            tag="div"
            name="fade-transform">
            <c-img
                v-for="(image, index) in images"
                v-if="index === activeItem"
                :key="image"
                class="images-explorer__img"
                :src="images[activeItem]" />
        </transition-group>
        <button
            class="images-explorer__btn"
            @click="change_image(1)">
            <i class="fas fa-angle-right" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'ImagesExplorer',
    props: {
        images: {
            type: Array
        },
        startFrom: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            activeItem: -1
        }
    },
    mounted() {
        this.activeItem = this.startFrom
    },
    methods: {
        change_image(direction) {
            const { activeItem, images } = this
            if (activeItem === 0 && direction === -1) {
                this.activeItem = images.length - 1
            } else if (activeItem === images.length - 1 && direction === 1) {
                this.activeItem = 0
            } else {
                this.activeItem += direction
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .images-explorer {
        display: flex;
    }

    .images-explorer__btn {
        width: 50px;
        border-style: none;
        background-color: transparent;
        color: #fff;
        font-size: 30px;
        outline: none;
        &:hover {
            cursor: pointer;
        }
    }

    .images-explorer__img {
        object-fit: cover;
        height: 400px;
        max-width: 650px;
    }

    .fade-transform-enter-active {
        transition: opacity .3s ease, transform .6s ease;
    }

    .fade-transform-leave-active {
        transition: opacity .4s ease, transform .4s ease;
        position: absolute;
    }

    .fade-transform-enter {
        transform: scale(0.8) translateY(-15%);
    }

    .fade-transform-leave-to {
        transform: scale(0.8) translateY(15%);
    }

    .fade-transform-enter, .fade-transform-leave-to {
        opacity: 0;
    }
</style>


