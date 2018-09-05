<template>
    <div
        class="screen-gallery"
        @mouseover="enableSlideshow(false)"
        @mouseout="enableSlideshow(true)"
    >
        <div class="screen-gallery__main-img">
            <i class="fas fa-expand"></i>
            <img
                :src="images[active_item]"
                @click="show_modal = true"
            />
            <div v-if="run_slideshow" class="screen-gallery__progress-bar"></div>
        </div>
        <ul class="screen-gallery__thumb-nav">
            <li
                v-for="(url, index) in images"
                :key="index"
            >
                <img
                    :src="url"
                    :class="{ 'inactive-item': index !== active_item }"
                    @click="active_item = index"
                />
            </li>
        </ul>
        <c-modal-light v-if="show_modal" @close="show_modal=false">
            <c-images-explorer
                :images="images"
                :start_from="active_item"
            />
        </c-modal-light>
    </div>
</template>


<script>
export default {
    name: 'screen-gallery',
    props: {
        main: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    components: {
        'c-modal-light': () => import('@/ui/components/modal-light'),
        'c-images-explorer': () => import('@/ui/components/images-explorer')
    },
    data() {
        return {
            active_item: 0,
            show_modal: false,
            interval: null,
            run_slideshow: true
        }
    },
    methods: {
        slideshow() {
            this.interval = setInterval(() => {
                this.active_item < this.images.length - 1 ? this.active_item++ : this.active_item = 0;
            }, 4000);
        },
        enableSlideshow(status) {
            clearInterval(this.interval);
            this.run_slideshow = status;
            if (status) this.slideshow();
        }
    },
    computed: {
        images() {
            return [this.main, ...this.items];
        }
    },
    mounted() {
        this.slideshow();
    },
    beforeDestroy() {
        this.enableSlideshow(false);
    }
}
</script>


<style lang="scss" scoped>
    .screen-gallery{
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        margin-bottom: 10px;
        padding: 10px;
        img {
            width: 100%;
            object-fit: cover;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .screen-gallery__main-img{
        flex: 6;
        position: relative;
        .fas {
            position: absolute;
            left: calc(50% - 15px);
            top: calc(50% - 15px);
            width: 30px;
            height: 30px;
            font-size: 30px;
            opacity: 0;
            transition: opacity .3s ease .1s, transform .3s ease .1s;
            transform: scale(0);
            color: #fff;
        }
        img {
            height: 245px;
            transition: opacity .3s ease .1s;
        }
        .screen-gallery__progress-bar {
            height: 3px;
            animation: progress 4s linear infinite;
            background-color: rgba(255,255,255,.4);
            position: absolute;
            bottom: 0;
        }
        &:hover {
            .fas {
                opacity: 1;
                transform: scale(1);
            }
            img {
                opacity: .75;
            }
        }
    }
    .screen-gallery__thumb-nav{
        flex: 2;
        max-height: 245px;
        padding: 0 10px;
        margin: 0;
        overflow-y: auto;
        li {
            width: 100%;
            list-style-type: none;
            background: rgba(0, 0, 0, 0.3);
            &:not(:last-child) {
                margin-bottom: 10px;
            }
            img {
                height: 75px;
            }
        }
    }

    .inactive-item:not(:hover) {
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        filter: grayscale(50%);
        opacity: .5;
    }

    @keyframes progress {
        0% {
            width: 0;
        }
        80% {
            opacity: 1;
        }
        100% {
            width: 100%;
            opacity: 0;
        }
    }
</style>
