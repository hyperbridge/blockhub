<template>
    <div class="info-card">
        <h3 v-if="title">
            {{ title }}
        </h3>
        <slot />
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss" scoped>
    .info-card{
        display: inline-block;
        width: 100%;
        margin: 40px 0 0 0;
        background: rgba(0, 0, 0, .13);
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, .5);
        padding: 15px 15px 15px 15px;
        overflow: hidden;
        color: #fff;
        h3{
            font-size: 21px;
            color: #FFFFFF;
            margin: 0;
            padding: 0 0 10px;
            opacity: 1;
            font-weight: bold;
        }
        ul{
            padding: 0;
            margin: 10px 0;
            width: 100%;
            li{
                list-style: none;
                display: block;
                padding: 2px 0;
                border-bottom: 1px solid rgba(255, 255, 255, .02);
            }
        }
    }
</style>
