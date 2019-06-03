<template>
    <div ref="carousel"
         class="carousel-3d"
         @keyup.right="next()">
        <c-icon
            name="arrow-circle-left"
            class="carousel-3d__btn"
            @click="previous()" />
        <transition-group
            name="carousel-3d-transition"
            class="carousel-wrapper"
            tag="div">
            <slot :items="visible" />
            <!-- <slot>
                <div v-for="slide in visible" :key="slide" class="">
                    <h1>{{ slide }}</h1>
                </div>
            </slot> -->
        </transition-group>
        <c-icon
            name="arrow-circle-right"
            class="carousel-3d__btn"
            @click="next()" />
    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        autoSlide: Boolean,
        limitTo: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            slides: this.items,
            interval: null
        }
    },
    computed: {
        visible() {
            return this.slides.slice(0, this.limitTo)
        }
    },
    mounted() {
        // this.children = this.
        if (this.autoSlide) {
            this.interval = setInterval(this.next, 2000)
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    methods: {
        next() {
            // this.$refs.carousel.$el.focus();
            // console.log();
            this.$refs.carousel.focus()
            const firstItem = this.slides.shift()
            this.slides = [...this.slides, firstItem]
        },
        previous() {
            const lastItem = this.slides.pop()
            this.slides = [lastItem, ...this.slides]
        }
    }
}
</script>

<style lang="scss" scoped>
    .carousel-3d {
        display: flex;
        align-items: center;
    }

    .carousel-3d__btn {
        cursor: pointer;
        font-size: 35px;
        color: rgba(255,255,255,.6);
    }

    .carousel-wrapper {
        display: flex;
        h1 {
            margin: 10px;
        }
    }
    .carousel-3d-transition {
        &-enter-active, &-leave-active {
            transition: transform .5s ease, opacity .5s ease;
        }
        &-enter, &-leave-to {
            opacity: 0;
            transform: scale(0);
        }
        &-leave-active {
            position: absolute;
        }
        &-move {
            transition: transform .5s ease;
        }
    }

</style>

