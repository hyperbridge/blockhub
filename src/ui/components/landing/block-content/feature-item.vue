<template>
    <div class="landing-feature-item">
        <c-img :src="img" alt=""/>
        <c-landing-block-title fontSize="18">
            {{ title }}
        </c-landing-block-title>
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'landing-feature-item',
        props:{
            img: String,
            title: String
        },
        components:{
            'c-landing-block-title' : (resolve) => require(['@/ui/components/landing/block-title/simple'], resolve)
        }

    }
</script>

<style lang="scss" scoped>
    .landing-feature-item{
        color: #fff;
        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 15px;
        }
    }
</style>
