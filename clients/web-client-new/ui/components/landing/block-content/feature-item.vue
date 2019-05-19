<template>
    <div class="landing-feature-item">
        <a :href="link" v-if="link">
            <c-img :src="img" :alt="title"/>
        </a>
        <c-img :src="img" :alt="title" v-else/>
        <c-landing-block-title fontSize="18">
            <a :href="link" v-if="link">
                {{ title }}
            </a>
            <template v-else>
                {{ title }}
            </template>
        </c-landing-block-title>
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'landing-feature-item',
        props:{
            img: String,
            title: String,
            link: String
        },
        components:{
            'c-landing-block-title' : () => import('~/components/landing/block-title/simple').then(m => m.default || m)
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
