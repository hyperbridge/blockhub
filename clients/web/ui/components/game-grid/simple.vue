<template>
    <div class="product-grid__container">
        <div
            v-for="(item, index) in items"
            v-if="items.length"
            :key="index"
            class="product-grid__item-container"
            :style="{ width: 'calc(100% / ' + itemInRow + ')'}">
            <div class="product-grid__item">
                <div v-if="$slots.block">
                    <slot name="block" />
                </div>
                <div
                    v-else
                    class="card-body padding-0">
                    <c-button
                        class="w-100"
                        status="none"
                        :to="`/product/${item.id}`">
                        <c-img
                            class="card-img-top"
                            :src="item.meta.images.mediumTile" />
                        <h4>
                            {{ item.name }}
                        </h4>
                        <p
                            class="card-text"
                            hidden>
                            {{ item.description }}
                        </p>
                    </c-button>
                    <c-tags v-if="item.tags" :tags="item.tags.map(t => t.value)" />
                </div>
            </div>
        </div>
        <p v-if="!items.length">
            Nothing could be found. Want to <c-button
                status="plain"
                @click="$store.commit('application/activeModal', 'comingSoon')">
                Check for updates
            </c-button>?
        </p>
    </div>
</template>

<script>
export default {
    name: 'GameGrid',
    components: {
        'c-tags': () => import('~/components/tags').then(m => m.default || m)
    },
    props: {
        items: {
            type: Array,
            require: true
        },
        itemInRow: {
            default: '4'
        }
    }
}
</script>

<style lang="scss" scoped>

    .product-grid__container{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }
    .product-grid__item-container{
        padding: 0 4px;
        margin-bottom: 10px;
    }
    .product-grid__item{
        padding: 8px 6px;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        background: #27283E;
        box-shadow: 0 0 6px rgba(0, 0, 0, .2);
        -webkit-transition: all 200ms ease-in;
        -webkit-transform: scale(1);
        -ms-transition: all 200ms ease-in;
        -ms-transform: scale(1);
        -moz-transition: all 200ms ease-in;
        -moz-transform: scale(1);
        transition: all 200ms ease-in;
        transform: scale(1);
        position: relative;
        z-index: 10;
        &:hover {
            -webkit-transition: all 200ms ease-in;
            -webkit-transform: scale(1.05);
            -ms-transition: all 200ms ease-in;
            -ms-transform: scale(1.05);
            -moz-transition: all 200ms ease-in;
            -moz-transform: scale(1.05);
            transition: all 200ms ease-in;
            transform: scale(1.05);
            z-index: 20;
        }
        h4{
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            padding: 13px 0;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
        .product-tags {
            margin-top: 10px;
            margin-bottom: 0;
        }
    }
</style>
