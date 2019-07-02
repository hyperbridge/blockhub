<template>
    <video :controls="controls" :width="width" :height="height" :autoplay="autoplay" :poster="poster" :preload="preload">
        <template v-for="item in video">
            <source :src="item.src" :type="['video/' + item.format ]">
        </template>
        Your browser does not support the video tag.
    </video>
</template>

<script>
    export default {
        props: {
            video: [Array, Object],
            controls: {
                type: Boolean,
                default: true
            },
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
        },
        created(){
            this.$emit('ready')
        }
    }
</script>
