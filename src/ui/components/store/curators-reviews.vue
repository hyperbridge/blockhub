<template>
    <div class="row curators-wrapper">
        <div class="col-12 p-0">
            <c-heading-bar name="From our curators" :showArrows="false" />
        </div>

        <div class="curators-wrapper__content">
            <c-curator-review
                v-for="(review, index) in reviews"
                :key="index"
                :review="review"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'curators-reviews',
        components: {
            'c-heading-bar': () => import('@/ui/components/heading-bar'),
            'c-curator-review': () => import('@/ui/components/store/curator-review')
        },
        props: {
            reviews: {
                type: Array,
                require: true
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/css/helpers/mixins.scss';

.curators-wrapper {
    margin: 30px 0;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 4px;
    color: #fff;
    &__content {
        width: 100%;
        background-color: #24253B;
        padding: 15px;
        margin-top: -20px;
        display: flex;
        align-items: flex-start;
        @include width-max-lg {
            flex-direction: column;
        }
        @include width-min-lg {
            .curator-review {
                width: 33%;
            }
        }
    }
}
</style>
