<template>
    <video
        ref="video"
        :controls="controls"
        :width="width"
        :height="height"
        :autoplay="autoplay"
        :poster="poster"
        :preload="preload"
        @play="onPlay"
        @timeupdate="onTimeUpdate"
        @ended="onStop">
        <template>
            <source
                :src="src"
                type="video/mp4">
        </template>
        Your browser does not support the video tag.
    </video>
</template>

<script>
export default {
    name: 'Video',
    props: {
        src: String,
        width: [String, Number],
        height: [String, Number],
        autoplay: {
            type: Boolean,
            default: false
        },
        preload: {
            type: Boolean,
            default: false
        },
        poster: String,
        controls: {
            type: Boolean,
            default: false
        }

    },
    data() {
        return {
            isPlayed: false
        }
    },
    computed: {
        isVideo() {
            return this.$store.state.application.video
        },
        getCurrentTime() {
            return this.$refs.video.currentTime
        }
    },
    created() {
        this.$emit('ready')
    },
    beforeDestroy() {
        if (this.isPlayed) {
            this.isVideo.showPopup = true
        } else {
            this.isVideo.showPopup = false
        }
    },
    methods: {
        onPlay() {
            console.log('play')
            this.isVideo.src = this.src
            this.isPlayed = true
        },
        onTimeUpdate() {
            this.isVideo.currentTime = this.$refs.video.currentTime
        },
        onPause() {
            console.log('pause')
        },
        onStop() {
            console.log('stop')
            this.isVideo.src = ''
            this.isVideo.currentTime = 0
        }
    }
}
</script>
