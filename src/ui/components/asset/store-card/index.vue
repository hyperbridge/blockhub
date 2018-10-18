<template>
    <div class="store-card">
        <div class="store-card__badges" v-if="system_tags.length">
            <c-badge-card
                v-for="(tag, index) in system_tags"
                class="store-card__single-badge"
                :key="index"
                :title="tag"
            />
        </div>
        <c-img :src="asset.image" class="store-card__image"/>
        <div class="store-card__info">
            <span class="store-card__name">{{ asset.name }}</span>
            <span class="store-card__price">
                {{ asset.price.current }}
                <span class="price__dollar-sign">$</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['asset'],
    components: {
        'c-badge-card': (resolve) => require(['@/ui/components/badge-card'], resolve),
    },
    data() {
        return {
            system_tags: ['featured']
        }
    }
}
</script>

<style lang="scss" scoped>
    .store-card {
        margin: 10px;
        background-color: rgb(30, 31, 49);
        // background-color: #2A2B42;
        padding: 10px;
        border-radius: 6px;
        position: relative;
        z-index: 4;

        $status: (

        );

        $border-size: 1px;
        $border-color: #dd9c1b;
        $border-color-lighter: #ffcd6a;
        $border-col: #ECB448;

        box-shadow: 0 5px 25px -5px rgba(255, 204, 103, .5);
        // box-shadow: 0 5px 25px -5px darker()
        border: 1px solid $border-col;

        .store-card__badges {
            position: absolute;
            left: 13px;
            top: -13px;
            display: flex;
            align-items: center;
            .store-card__single-badge {

            }
        }

        &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(0,0,0,0), rgba(255, 205, 106, 0.5));
            left: 0;
            top: 0;
        }
        .store-card__image {
            display: block;
            margin: 0 auto;
            width: 180px;
            height: 180px;
        }
        .store-card__name {
            text-align: center;
            font-size: 18px;
            text-shadow: 0 0 7px #000;
            margin-right: 3px;
        }
        .store-card__price {
            background: rgba(1,1,1,.13);
            text-shadow: 0 0 8px #000;
            padding: 6px;
            font-size: 23px;
            display: flex;
            .price__dollar-sign {
                font-size: 12px;
                margin-left: 3px;
            }
        }
        .store-card__info {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 4;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            padding: 10px;
        }
        .store-card__image {
            filter: drop-shadow(0 0 10px rgb(24, 26, 39));
        }
    }
</style>

