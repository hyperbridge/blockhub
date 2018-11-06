<template>
    <section class="landing-section" :class="{'full-height' : fullHeight}">
        <div class="container">
            <div class="row">
                <div class="landing-section__content-block">
                    <div class="landing__content-block-head">
                        <c-landing-block-title-gradient colorShadow="red" align="center" v-if="titleGradient">
                            {{ title }}
                        </c-landing-block-title-gradient>
                        <c-landing-block-title-shadow colorShadow="red" v-else-if="titleShadow">
                            {{ title }}
                        </c-landing-block-title-shadow>
                        <c-landing-block-title v-else>
                            {{ title }}
                        </c-landing-block-title>
                    </div>
                    <div class="landing__content-block-body">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'simple-block',
        props:{
            titleGradient: {
                type: Boolean,
                default: false
            },
            titleShadow: {
                type: Boolean,
                default: false
            },
            title: String,
            fullHeight: {
                type: Boolean,
                default: false
            },
        },
        components: {
            'c-landing-block-title' : (resolve) => require(['@/ui/components/landing/block-title/simple'], resolve),
            'c-landing-block-title-shadow' : (resolve) => require(['@/ui/components/landing/block-title/shadow'], resolve),
            'c-landing-block-title-gradient' : (resolve) => require(['@/ui/components/landing/block-title/gradient'], resolve),
        }
    }
</script>

<style lang="scss" scoped>
    .landing-section{
        width: 100%;
        display: flex;
        justify-content: center;
        &.full-height{
            min-height: 100vh;
        }
    }
</style>
