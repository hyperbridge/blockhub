<template>
    <div class="landing-divider"></div>
</template>

<style lang="scss" scoped>
    .landing-divider{
        width: 100%;
        display: block;
        position: relative;
        z-index: 10;
        &:after{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            border-radius: 50%;
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2989d8+50,46461d+50&0+0,0.8+35,0.8+65,0+100 */
            background: linear-gradient(to right, rgba(70,70,29,0) 0%,rgba(70,70,29,0.8) 35%,rgba(70,70,29,0.8) 50%,rgba(70,70,29,0.8) 65%,rgba(70,70,29,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        }
    }
</style>
