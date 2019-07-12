<template>
    <div class="landing-feature-item">
        <a
            v-if="link"
            :href="link">
            <c-img
                :src="img"
                :alt="title" />
        </a>
        <c-img
            v-else
            :src="img"
            :alt="title" />
        <c-landing-block-title fontSize="18">
            <a
                v-if="link"
                :href="link">
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
    name: 'LandingFeatureItem',
    components: {
        'c-landing-block-title': () => import('~/components/landing/block-title/simple').then(m => m.default || m)
    },
    props: {
        img: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        }
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
