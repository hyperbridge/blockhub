<template>
    <div class="video">
        <c-loading-bar-circle v-if="showLoader" />
        <youtube
            v-if="youtube"
            :video-id="youtube"
            :player-vars="playerVars"
            :fitParent="true"
            :height="height"
            :width="width"
            :resize="true"
            class="youtube-video"
            @ready="isReady" />
        <c-twitch
            v-else-if="twitch"
            :channel="twitch"
            :height="height"
            :width="width"
            class="twitch-video"
            @ready="isReady" />
        <c-local-video
            v-else-if="src"
            :src="src"
            :height="height"
            :width="width"
            @ready="isReady" />
        <slot v-else />
    </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
    components: {
        'c-twitch': () => import('~/components/twitch').then(m => m.default || m),
        'c-local-video': () => import('./_local.vue').then(m => m.default || m),
        'c-loading-bar-circle': () => import('~/components/loading-bar/circle').then(m => m.default || m)
    },
    props: {
        src: String,
        youtube: String,
        twitch: String,
        height: {
            type: String,
            default: '450'
        },
        width: {
            type: String,
            default: '800'
        },
        poster: String,
        videoType: {
            type: String,
            default: 'video/mp4'
        },
        controls: {
            type: Boolean,
            default: true
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
            console.log('ready')
            this.showLoader = false
        }
    }
}
</script>

<style lang="scss">
    .video{
        position: relative;
        display: inline-flex;
        max-width: 100%;
        .youtube-video,
        .twitch-video,
        video{
            max-width: 100%!important;
        }
        iframe{
            max-width: 100%;
        }
    }
</style>
