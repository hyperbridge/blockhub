<template>
    <div class="collection-list">
        <div class="collection-list__header">
            <h3>{{ title }}</h3>
            <div>{{ description }}</div>
            <div class="slider-dots">
                <div
                    ref="sliderDots"
                    slot="pagination"
                    class="collection-swiper-pagination swiper-pagination" />
            </div>
        </div>
        <div class="collection-list__container">
            <c-swiper
                v-if="collections.length"
                :options="options"
                class="padding-10">
                <c-swiper-slide
                    v-for="(collection, index) in collections"
                    :key="index">
                    <c-collection-item
                        :id="collection.id"
                        :name="collection.name"
                        :author="collection.meta.author"
                        :background="collection.meta.background"
                        :assets="collection.meta.assets" />
                </c-swiper-slide>
            </c-swiper>
            <div
                v-if="!collections.length"
                style="padding: 20px; text-align: center;">
                No collections yet. <c-button
                    status="plain"
                    @click="$store.commit('application/activeModal', 'addCollection')">
                    Create one
                </c-button>?
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        'c-collection-item': () => import('~/components/collection/item').then(m => m.default || m)
    },
    props: {
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        collections: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            options: {
                slidesPerView: 3,
                spaceBetween: 10,
                pagination: {
                    el: '.collection-swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .collection-list{
        padding: 10px;
        border-radius: 5px;
        background: rgba(255, 255, 255, .1);
        position: relative;
        backdrop-filter: blur(2px);
    }
    .collection-list__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        width: 100%;
        h3{
            color: #fff;
            padding: 0;
            margin-bottom: 0;
            white-space: nowrap;
            font-size: 30px;
            margin-right: 20px;
        }
    }
    .collection-list__container{
        margin: 0px -10px -10px;
    }
    @media (max-width: 768px) {
        .collection-list__header{
            margin: 0;
            padding: 0;
            flex-direction: column;
            text-align: center;
            .slider-dots{
                margin: 10px 0 0;
            }
        }
    }
</style>

<style lang="scss">

    .slider-dots{
        position: relative;
        display: flex;
        width: auto;
        margin-left: 20px;
        .swiper-pagination{
            display: flex;
            position: relative;
            span{
                margin: 1px 4px;
                height: 9px;
                width: 9px;
                background: #fff;
                opacity: .5;
                &:active,
                &:focus{
                    outline: none;
                    box-shadow: none;
                }
                &.swiper-pagination-bullet-active{
                    opacity: 1;
                }
            }
        }
    }
</style>
