<template>
    <div class="video-container"
         :style="[
            { 'width' : width + 'px' },
            { 'height' : height + 'px' },
            { 'left' : left + 'px' },
            { 'bottom' : bottom + 'px' },
         ]">

    </div>
</template>

<script>
    const defVal = 40;

    export default {
        props:{
            isActive: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return{
                width: defVal * 6,
                height: defVal * 4,
                left: 20,
                bottom: 20
            }
        },
    }
</script>

<style lang="scss" scoped>
    .video-container{
        position: fixed;
        background: rgba( 0, 0, 0, .4 );
        border-radius: 10px;
        overflow: hidden;
        z-index: 999999999999999999999999;
    }
</style>
