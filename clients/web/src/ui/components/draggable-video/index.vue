<template>
    <transition name="fade">
        <c-drag :w="width" :h="height" :x="20" :y="20" :resizable="false" v-if="active">
            <div class="video-container">
                <div class="video-container__wrapper">
                    <div class="video-container__video">
                        <video ref="video" @timeupdate="" @loadeddata="setCurrentTime" @playing=" isPlaying = true " autoplay>
                            <source :src="isVideo.src" type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div class="video-control">
                        <c-button status="none" class="video-control__btn video-control__btn--expand">
                            <i class="fas fa-expand"></i>
                        </c-button>
                        <c-button status="none" class="video-control__btn video-control__btn--play" @click="play" v-if="!isPlaying">
                            <i class="fas fa-play"></i>
                        </c-button>
                        <c-button status="none" class="video-control__btn video-control__btn--play" @click="pause" v-if="isPlaying">
                            <i class="fas fa-pause"></i>
                        </c-button>
                        <c-button status="none" class="video-control__btn video-control__btn--times" @click="destroy">
                            <i class="fas fa-times"></i>
                        </c-button>
                    </div>
                </div>
            </div>
        </c-drag>
    </transition>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: true
            },
        },
        components: {
            'c-drag': (resolve) => require(['@/ui/components/draggable'], resolve)
        },
        data() {
            return {
                width: 285,
                height: 160,
                isPlaying: false,
            }
        },
        methods: {
            destroy() {
                this.$emit('close');
                this.isVideo.showPopup = false
            },
            play(){
                this.$refs.video.play();
                this.isPlaying = true;
            },
            pause(){
                this.$refs.video.pause();
                this.isPlaying = false;
            },
            setCurrentTime(){
                this.$refs.video.currentTime = this.isVideo.currentTime
            }
        },
        computed: {
            isVideo(){
                return this.$store.state.application.video
            },
        },
        created(){
            if ( !this.isVideo.src ){
                this.isVideo.showPopup = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .video-container {
        width: 100%;
        height: 100%;
        display: flex;
        cursor: move;
    }
    .video-container__wrapper {
        background: rgba(0, 0, 0, .4);
        border-radius: 5px;
        overflow: hidden;
        z-index: 999999999999999999999999;
        position: relative;
        display: flex;
        width: 100%;
    }
    .video-container__video{
        display: flex;
        width: 100%;
        height: 100%;
        video{
            width: 100%;
            height: auto;
        }
    }

    .video-control {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        font-size: 2rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        &:hover{
            opacity: 1;
        }
    }

    .video-control__btn {
        margin: 0 10px;
        opacity: .7;
        text-shadow: 0 0 5px #000, 0 0 5px #000;
        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }

    .video-control__btn--times {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: .5;
        margin: 0;
    }
</style>
