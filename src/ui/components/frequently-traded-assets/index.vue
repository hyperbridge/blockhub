<template>

    <div class="card invert traded-assets">
        <div class="card-body" v-if="items.length > 0">
            <h2 class="title">Frequently Traded Assets</h2>
            <div class="traded-assets__filter">
                <slot name="filter"></slot>
            </div>
            <ul class="traded-assets__list">
                <li class="traded-assets__item" v-for="(item, index) in items" :key="index">
                    <a :href="`/#/asset/${item.id}`">
                        <img :src="item.image_data" />
                    </a>
                </li>
            </ul>
            <a :href="assets_url" class="btn btn-outline-white">Go To Assets</a>
        </div>
        <div class="card-body" v-else>
            <h2 class="title">Frequently Traded Assets</h2>
            <h4>No frequently traded assets yet.</h4>
        </div>
    </div>

</template>

<script>
export default {
    name: 'frequently-traded-assets',
    props: {
        items: Array,
        assets_url: String
    }
}
</script>

<style lang="scss" scoped>

    .traded-assets {
        a.btn-outline-white {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            float: left;
            line-height: 24px;
            padding: 0 8px;
            width: auto;
            margin: 5px 10px 3px 0;
            &:last-child {
                margin-right: 0;
            }
            &:hover {
                background: #fff;
                color: #000;
                text-decoration: none;
            }
        }
    }

    .traded-assets__filter {
    }

    .traded-assets__list {
        padding: 0;
        display: block;
        width: 100%;
        overflow: hidden;
        margin: 10px -10px;
    }

    .traded-assets__item {
        list-style: none;
        display: inline-block;
        float: left;
        width: 25%;
        padding: 10px;
        img {
            /*height: 60px;*/
            width: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }
</style>
