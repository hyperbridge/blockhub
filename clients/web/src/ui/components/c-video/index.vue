<template>
    <div class="c-video">
        <c-loading-bar-circle v-if="showLoader"></c-loading-bar-circle>
        <youtube :video-id="youtube"
                 :player-vars="playerVars"
                 :fitParent="true"
                 height="450"
                 width="800"
                 :resize="true"
                 v-if="youtube"
                 @ready="isReady"></youtube>
        <c-twitch
            :channel="twitch"
            height="450"
            width="800"
            v-else-if="twitch"
            @ready="isReady"></c-twitch>
        <c-video :video="video"
                 v-else-if="video"
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
            video: [ Object, Array ],
            youtube: String,
            twitch: String,
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

<style lang="scss" scoped>
    .c-video{
        position: relative;
    }
</style>
