<template>
    <c-popup :activated="activated" :width="width" @close="$emit('close')">
        <div class="video-popup" slot="custom_content">
            <div class="video-popup__video-container">
                <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
            </div>
            <div class="video-popup__video-comments">
            </div>
        </div>
    </c-popup>
</template>

<script>
    import Vue from 'vue'
    import VueYoutube from 'vue-youtube'

    Vue.use(VueYoutube)

    export default {
        name: 'video-popup',
        components:{
            'c-popup': (resolve) => require(['@/ui/components/popups'], resolve)
        },
        props:{
            activated:{
                type: Boolean,
                default: true
            },
            width:{
                type: String,
                default: '600'
            },
            videoSrc: String,
            youtube: String
        },
        data(){
            return {
                videoId: 'lG0Ys-2d4MA',
                playerVars: {
                    autoplay: 1
                }
            }
        },
        methods: {
            playing() {
                console.log('\o/ we are watching!!!')
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
        width: 65%;
        iframe {
            width: 100%;
            max-width: 650px; /* Also helpful. Optional. */
        }
    }
    .video-popup__video-comments{
        width: 35%;
    }
</style>
