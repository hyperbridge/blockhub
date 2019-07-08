<template>
    <div
        v-if="items[activeItem]"
        class="screen-gallery"
        @mouseover="enableSlideshow(false)"
        @mouseout="mouseOut()">
        <div class="screen-gallery__main-img">
            <c-icon
                v-show="!runSlideshow && !playVideo"
                name="expand" />
            <c-img
                v-if="!playVideo"
                :src="items[activeItem].overlay ? items[activeItem].src : items[activeItem]"
                @click="showModal = true" />
            <video
                v-else-if="playVideo"
                controls
                autoplay
                muted>
                <source
                    :src="videoUrl"
                    type="video/mp4">
            </video>
            <div
                v-show="runSlideshow"
                class="screen-gallery__progress-bar" />

            <c-image-overlay
                v-if="items[activeItem]['overlay']"
                :title="items[activeItem]['overlay'].title"
                :subtitle="items[activeItem]['overlay'].subtitle"
                :text="items[activeItem]['overlay'].text" />
        </div>
        <ul
            ref="thumb-nav"
            class="screen-gallery__thumb-nav">
            <li
                v-if="videoUrl"
                class="thumb-nav__video-thumb"
                :class="{ 'inactive-item': !playVideo }"
                :style="{
                    backgroundSize: 'cover',
                    background: `black url(${items[randomItem].src}) no-repeat center`
                }"
                @click="enableVideoPlay()">
                <c-icon name="play" />
            </li>
            <li
                v-for="(item, index) in items"
                :key="index"
                :ref="`thumb-${index}`">
                <c-img
                    :src="item.overlay ? item.src : item"
                    :class="{ 'inactive-item': index !== activeItem || playVideo }"
                    @click="changeActiveItem(index)" />
            </li>
        </ul>
        <c-modal
            v-if="showModal"
            @close="showModal=false">
            <c-images-explorer
                :images="items"
                :startFrom="activeItem" />
        </c-modal>
    </div>
</template>


<script>
export default {
    components: {
        'c-modal': () => import('~/components/modal').then(m => m.default || m),
        'c-images-explorer': () => import('~/components/images-explorer').then(m => m.default || m),
        'c-image-overlay': () => import('~/components/image-overlay').then(m => m.default || m)
    },
    props: {
        main: {
            type: String,,
            default: 'https://via.placeholder.com/400x300'
        },
        items: {
            type: Array,
            required: true
        },
        nameUrl: String,
        videoUrl: String
    },
    data() {
        return {
            activeItem: 0,
            randomItem: 0,
            showModal: false,
            interval: null,
            runSlideshow: true,
            playVideo: false
        }
    },
    watch: {
        $route: 'restartGallery'
    },
    mounted() {
        this.restartGallery()
    },
    beforeDestroy() {
        this.enableSlideshow(false)
    },
    methods: {
        slideshow() {
            if (this.interval) {
                clearInterval(this.interval)
            }

            this.interval = setInterval(() => {
                if (!this.items || !this.items.length) return

                this.activeItem < this.items.length - 1 ? this.activeItem++ : this.activeItem = 0
                const [child] = this.$refs[`thumb-${this.activeItem}`]
                const parent = this.$refs['thumb-nav']
                this.scrollParentToChild(parent, child)
            }, 4000)
        },
        enableSlideshow(status) {
            clearInterval(this.interval)
            this.runSlideshow = status
            if (status && !this.playVideo) this.slideshow()
        },
        enableVideoPlay() {
            this.enableSlideshow(false)
            this.playVideo = true
        },
        changeActiveItem(index) {
            if (this.playVideo) {
                this.playVideo = false
            }
            this.activeItem = index
        },
        mouseOut() {
            if (!this.playVideo) this.enableSlideshow(true)
        },
        scrollParentToChild(parent, child) {
            if (!parent) {
                return
            }

            const parentRect = parent.getBoundingClientRect()

            const parentViewableArea = {
                height: parent.clientHeight,
                width: parent.clientWidth
            }

            const childRect = child.getBoundingClientRect()
            const isViewable = (childRect.top >= parentRect.top) && (childRect.top <= parentRect.top + parentViewableArea.height)

            if (!isViewable) {
                parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top
            }
            if (status) this.slideshow()
        },
        restartGallery() {
            this.activeItem = 0
            this.playVideo = false

            setTimeout(() => {
                if (this.videoUrl) {
                    this.randomItem = Math.floor(Math.random() * this.items.length)
                    this.enableVideoPlay()
                } else {
                    this.enableSlideshow(true)
                }
            }, 50)
        }
    }
}
</script>


<style lang="scss" scoped>
    .screen-gallery{
        display: flex;
        border-radius: 6px;
        margin-bottom: 10px;
        padding: 0;
        img {
            width: 100%;
            object-fit: cover;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .screen-gallery__main-img {
        flex: 6;
        position: relative;
        display: flex;
        align-items: center;
        background-color: rgb(0, 0, 0);
        border-radius: 6px;
        video {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
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
            z-index: 21;
        }
        img {
            height: 30rem;
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
            &:before{
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: block;
                background: rgba(0, 0, 0, .4);
                z-index: 20;
                cursor: pointer;
            }
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
        max-height: 30rem;
        padding: 0 10px;
        margin: 0;
        overflow-y: auto;
        li {
            width: 100%;
            list-style-type: none;
            background: rgba(0, 0, 0, 0.3);
            &:not(:last-child) {
                margin-bottom: 1rem;
            }
            height: 9.25rem;
            overflow: hidden;
            img {
                border-radius: 6px;
                height: 10rem;
            }
        }
    }

    .thumb-nav__video-thumb {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
        border-radius: 6px;
        .fas {
            text-shadow: 0px 0px 6px #000;
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
