<template>
    <div class="block-card">
        <div class="block-card__content">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .block-card{
        background: rgba(0, 0, 0, .13);
        border-radius: 5px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        height: 100%;
        .block-card__content{
            margin: auto;
        }
        .width-auto{
            width: auto;
            margin: auto;
        }
    }
</style>
