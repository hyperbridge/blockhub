<template>
    <div
        class="screen-gallery"
        @mouseover="enableSlideshow(false)"
        @mouseout="mouseOut()"
    >
        <div class="screen-gallery__main-img">
            <c-icon name="expand" v-show="!run_slideshow && !play_video"/>
            <c-img
                v-if="!play_video"
                :src="items[active_item]"
                @click="show_modal = true"
            />
            <video v-else-if="play_video" controls autoplay>
                <source :src="video_url" type="video/mp4">
            </video>
            <div v-show="run_slideshow" class="screen-gallery__progress-bar"></div>
        </div>
        <ul class="screen-gallery__thumb-nav" ref="thumb-nav">
            <li
                v-if="video_url"
                class="thumb-nav__video-thumb"
                :class="{ 'inactive-item': !play_video }"
                :style="{
                    backgroundSize: 'cover',
                    background: `black url(${items[random_item]}) no-repeat center`
                }"
                @click="enableVideoPlay()"
            >
                <c-icon name="play"/>
            </li>
            <li
                v-for="(url, index) in items"
                :key="index"
                :ref="`thumb-${index}`"
            >
                <c-img
                    :src="url"
                    :class="{ 'inactive-item': index !== active_item || play_video }"
                    @click="changeActiveItem(index)"
                />
            </li>
        </ul>
        <c-modal v-if="show_modal" @close="show_modal=false">
            <c-images-explorer
                :images="items"
                :start_from="active_item"
            />
        </c-modal>
    </div>
</template>


<script>
export default {
    name: 'screen-gallery',
    props: {
        main: {
            type: String
        },
        items: {
            type: Array,
            required: true
        },
        name_url: String,
        video_url: String
    },
    components: {
        'c-modal': (resolve) => require(['@/ui/components/modal'], resolve),
        'c-images-explorer': (resolve) => require(['@/ui/components/images-explorer'], resolve)
    },
    data() {
        return {
            active_item: 0,
            random_item: 0,
            show_modal: false,
            interval: null,
            run_slideshow: true,
            play_video: false
        }
    },
    methods: {
        slideshow() {
            this.interval = setInterval(() => {
                if (!this.items || !this.items.length) return

                this.active_item < this.items.length - 1 ? this.active_item++ : this.active_item = 0;
                const [child] = this.$refs[`thumb-${this.active_item}`];
                const parent = this.$refs['thumb-nav'];
                this.scrollParentToChild(parent, child);
            }, 4000);
        },
        enableSlideshow(status) {
            clearInterval(this.interval);
            this.run_slideshow = status;
            if (status && !this.play_video) this.slideshow();
        },
        enableVideoPlay() {
            this.enableSlideshow(false);
            this.play_video = true;
        },
        changeActiveItem(index) {
            if (this.play_video) {
                this.play_video = false;
            }
            this.active_item = index;
        },
        mouseOut() {
            if (!this.play_video) this.enableSlideshow(true);
        },
        scrollParentToChild(parent, child) {
            const parentRect = parent.getBoundingClientRect();

            const parentViewableArea = {
                height: parent.clientHeight,
                width: parent.clientWidth
            };

            const childRect = child.getBoundingClientRect();
            const isViewable = (childRect.top >= parentRect.top) && (childRect.top <= parentRect.top + parentViewableArea.height);

            if (!isViewable) {
                parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top;
            }
            if (status) this.slideshow();
        },
        restartGallery() {
            this.active_item = 0;
            this.play_video = false;

            setTimeout(() => {
                if (this.video_url) {
                    this.random_item = Math.floor(Math.random() * this.items.length);
                    this.enableVideoPlay();
                } else {
                    this.enableSlideshow(true);
                }
            }, 50);
        }
    },
    mounted() {
        this.restartGallery();
    },
    beforeDestroy() {
        this.enableSlideshow(false);
    },
    watch: {
        $route: 'restartGallery'
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
            height: 75px;
            img {
                border-radius: 6px;
                height: 75px;
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
