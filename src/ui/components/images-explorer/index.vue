<template>
    <div class="images-explorer">
        <button @click="change_image(-1)" class="images-explorer__btn">
            <i class="fas fa-angle-left"></i>
        </button>
        <transition-group tag="div" name="fade-transform">
            <img
                v-for="(image, index) in images"
                v-if="index === active_item"
                :key="image"
                class="images-explorer__img"
                :src="images[active_item]"
            />
        </transition-group>
        <button @click="change_image(1)" class="images-explorer__btn">
            <i class="fas fa-angle-right"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'images-explorer',
    props: {
        images: {
            type: Array
        },
        start_from: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            active_item: -1
        }
    },
    methods: {
        change_image(direction) {
            const { active_item, images } = this;
            if (active_item === 0 && direction === -1) {
                this.active_item = images.length - 1;
            } else if (active_item === images.length - 1 && direction === 1) {
                this.active_item = 0;
            } else {
                this.active_item += direction;
            }
        }
    },
    mounted() {
        this.active_item = this.start_from;
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


