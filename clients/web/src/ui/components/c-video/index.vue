<template>
    <div class="c-video">
        <c-loading-bar-circle v-if="showLoader"></c-loading-bar-circle>
        <youtube :video-id="youtube"
                 :player-vars="playerVars"
                 :fitParent="true"
                 :height="height"
                 :width="width"
                 :resize="true"
                 v-if="youtube"
                 class="youtube-video"
                 @ready="isReady"></youtube>
        <c-twitch
            :channel="twitch"
            :height="height"
            :width="width"
            v-else-if="twitch"
            class="twitch-video"
            @ready="isReady"></c-twitch>
        <c-video :src="src"
                 :height="height"
                 :width="width"
                 v-else-if="src"
                 @ready="isReady"></c-video>
        <slot v-else />
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueYoutube from 'vue-youtube'

    Vue.use(VueYoutube)

    export default {
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
            }
        },
        components: {
            'c-video': (resolve) => require(['@/ui/components/video'], resolve),
            'c-twitch': (resolve) => require(['@/ui/components/twitch'], resolve),
            'c-loading-bar-circle': (resolve) => require(['@/ui/components/loading-bar/circle'], resolve)
        },
        data(){
            return {
                playerVars: {
                    autoplay: 0
                },
                showLoader: true
            }
        },
        methods:{
            isReady(){
                console.log('ready')
                this.showLoader = false
            }
        }
    }
</script>

<style lang="scss">
    .c-video{
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
