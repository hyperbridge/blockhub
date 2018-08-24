<template>
    <div class="col-12 col-lg-4"
        @mouseover="show_preview(true)"
        @mouseout="show_preview(false)"
    >
        <div class="product-grid__item" :class="{ 'preview-active': display_preview }">
            <transition name="fade">
                <div v-if="!display_preview" :key="1">
                    <a :href="`/#/product/${game.id}`"><img class="card-img-top" :src="game.images.medium_tile" /></a>
                    <h4><a :href="`/#/product/${game.id}`">{{ game.name }}</a></h4>
                    <p class="card-text" hidden>{{ game.short_description }} </p>
                    <c-tags :tags="game.author_tags.slice(0,3)" />
                </div>
                <div class="item-preview" v-else>
                    <a :href="`/#/product/${game.id}`">
                        <span>
                            <h4>{{ game.name }}</h4>  -  {{ game.author }}
                        </span>
                    </a>
                    <video v-if="game.videos.length" width="100%" autoplay>
                        <source :src="game.videos[0]" type="video/mp4">
                    </video>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'game-card-dynamic',
    props: {
        game: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    components: {
        'c-tags': () => import('@/ui/components/product-tags')
    },
    data() {
        return {
            display_preview: false,
            timeout: null
        }
    },
    methods: {
        show_preview(status) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.display_preview = status;
                this.$emit('hover', status);
            }, status ? 300 : 0);
        }
    },
    computed: {
        move_class() {

        }
    }
}
</script>

<style lang="scss" scoped>
.product-grid__item {
    padding: 8px 6px;
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 420px;
    border-radius: 5px;
    &:hover {
        will-change: transform;
        // transform: scale(1.2) translateX(-15%);
        // transform: scale(1.6);
        transition: transform .3s ease !important;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
    h4 {
        font-weight: bold;
        font-size: 20px;
        padding: 13px 0;
        font-size: 16px;
    }
    .product-tags {
        margin-top: 10px;
        margin-bottom: 0;
    }
}

.item-preview {
    position: relative;
    a {
        color: #fff;
    }
    span {
        position: absolute;
        bottom: 13px;
        left: 13px;
        animation: slide-bottom 1s ease;
        z-index: 1;
        h4 {
            display: inline;
        }
    }
}

.preview-active {
    padding: 0;
    transform: scale(2);
    position: absolute;
    z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-leave-active {
    position: absolute;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
//   transform: scale(0.4);
  transform: translateX(50%);
}

@keyframes slide-bottom {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
