<template>
    <c-popup
        :activated="activated"
        :width="showComments ? '1000' : '800'"
        @close="closeModal">
        <div
            slot="customContent"
            class="video-popup">
            <div class="video-popup__video-container">
                <c-loading-bar-circle v-if="showLoader" />
                <youtube
                    v-if="youtube"
                    :video-id="youtube"
                    :player-vars="playerVars"
                    :fitParent="true"
                    height="450"
                    width="800"
                    :resize="true"
                    @ready="isReady" />
                <c-twitch
                    v-else-if="twitch"
                    :channel="twitch"
                    height="450"
                    width="800"
                    @ready="isReady" />
                <c-video
                    v-else-if="video"
                    :video="video"
                    @ready="isReady" />
                <slot
                    v-else
                    name="video" />
            </div>
            <div
                v-if="showComments"
                class="video-popup__video-comments">
                <c-heading-bar
                    name="Comments"
                    :bgColor="false" />
                <div class="comments__wrapper">
                    <slot />
                </div>
                <div class="comments__form">
                    <div class="input-group p-0 m-0">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Your comment">
                        <div class="input-group-append">
                            <button
                                id="button-addon2"
                                class="btn btn-outline-secondary"
                                type="button">
                                <i class="fas fa-paper-plane" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-popup>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
export default {
    name: 'VideoPopup',
    components: {
        'c-popup': () => import('~/components/popups').then(m => m.default || m),
        'c-heading-bar': () => import('~/components/heading-bar').then(m => m.default || m),
        'c-youtube': () => import('~/components/youtube').then(m => m.default || m),
        'c-video': () => import('~/components/video').then(m => m.default || m),
        'c-twitch': () => import('~/components/twitch').then(m => m.default || m),
        'c-loading-bar-circle': () => import('~/components/loading-bar/circle').then(m => m.default || m)
    },
    props: {
        activated: {
            type: Boolean,
            default: false
        },
        video: Object,
        youtube: {
            type: String,
            default: null
        },
        twitch: {
            type: String,
            default: null
        },
        showComments: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            playerVars: {
                autoplay: 0
            },
            showLoader: true
        }
    },
    methods: {
        isReady() {
            this.showLoader = false
        },
        closeModal() {
            this.$emit('close')
            this.showLoader = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .video-popup{
        display: flex;
        align-items: stretch;
        width: 100%;
        justify-content: space-between;
    }
    .video-popup__video-container{
        width: 800px;
        display: flex;
        position: relative;
        background: #111;
        &.full-width{
            width: 100%;
            height: auto;
        }
        video{
            width: 100%;
        }
    }
    .video-popup__video-comments{
        width: 300px;
        height: 450px;
    }
    .video-popup__video-comments{
        display: flex;
        flex-direction: column;
        background: #3D3E5D;
        padding: 10px 20px 10px;
    }
    .comments__wrapper{
        height: 70%;
        overflow-y: auto;
        color: #fff;
        display: flex;
        flex-direction: column;
        padding-right: 14px;
    }
    .comments__form{
        margin-top: 15px;
        input{
            background: transparent;
            border: none;
            color: #fff;
            border-bottom: 1px solid #5e5e90;
            padding-right: 0;
            padding-left: 0;
            border-radius: 0;
        }
        .btn{
            border: none;
            border-bottom: 1px solid #5e5e90;
            color: #fff;
            border-radius: 0;
        }
    }
</style>
