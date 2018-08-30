<template>
    <div
        class="product-grid__item"
        @mouseover="show_preview(true)"
        @mouseout="show_preview(false)"
    >
        <a :href="`/#/product/${product.id}`" class="card-img-top">
            <transition name="fade">
                <img v-if="!display_preview" class="card-img-top" :src="product.images.medium_tile" />
                <template v-else>
                    <video v-if="product.videos.length" class="card-img-top" width="100%" autoplay>
                        <source :src="product.videos[0]" type="video/mp4">
                    </video>
                    <transition-group tag="div" name="slide-left" v-else>
                        <img
                            v-for="(image, index) in product.images.preview"
                            v-if="index === current_image"
                            :key="image"
                            :src="product.images.preview[index]"
                            class="card-img-top"
                        />
                    </transition-group>
                </template>
            </transition>
        </a>
        <h4><a :href="`/#/product/${product.id}`">{{ product.name }}</a></h4>
        <p class="card-text" hidden>{{ product.short_description }} </p>
        <c-tags :tags="product.author_tags.slice(0,3)"/>
    </div>
</template>

<script>
export default {
    name: 'product-card-dynamic',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    components: {
        'c-tags': () => import('@/ui/components/tags')
    },
    data() {
        return {
            display_preview: false,
            timeout: null,
            interval: null,
            current_image: 0
        }
    },
    methods: {
        show_preview(status) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                if (!status) clearInterval(this.interval);
                if (status && !this.display_preview && !this.product.videos.length) this.slider();
                this.display_preview = status;
            }, status ? 250 : 0);
        },
        slider() {
            this.interval = setInterval(() => {
                const { current_image, product: { images }} = this;
                this.current_image = current_image === images.preview.length - 1 ? 0 : current_image + 1;
            }, 1600);
        }
    }
}
</script>

<style lang="scss" scoped>
.product-grid__item {
    transition: transform .3s ease;
    flex: 0 0 calc(33% - 20px);
    margin: 10px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.13);
    border: 1px solid rgba(70, 70, 70, 0.5);
    padding: 7px;
    border-radius: 5px;
    a {
        color: #fff;
        &.card-img-top {
            position: relative;
            display: block;
        }
    }
    h4 {
        font-weight: bold;
        font-size: 20px;
        padding: 13px 0;
    }
    .product-tags {
        margin-bottom: 0;
    }
}

.slide-left-enter-active, .slide-left-leave-active {
    transition: opacity .8s ease, transform .8s ease;
}

.slide-left-leave-active {
    position: absolute;
}

.slide-left-enter, .slide-left-leave-to {
    opacity: 0;
    transform: rotate(10deg) scale(.9);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-leave-active {
    position: absolute;
    width: 100%;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
