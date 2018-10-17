<template>
    <div class="store-card">
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
    props: ['asset']
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

        $border-size: 1px;
        $border-color: #eca71c;
        $border-color: #dd9c1b;
        $border-color-lighter: #ffdb92;
        $border-color-lighter: #ffcd6a;

        box-shadow: 0 5px 25px -5px rgba(255, 204, 103, .5);
        border-bottom: $border-size solid $border-color-lighter;
        border-top: $border-size solid $border-color;
        background-image:
            linear-gradient(to top, $border-color-lighter, $border-color),
            linear-gradient(to top, $border-color-lighter, $border-color);
        background-size: $border-size 100%;
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;

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
            font-size: 19px;
            text-shadow: 0 0 7px #000;
        }
        .store-card__price {
            background: rgba(1,1,1,.13);
            padding: 6px;
            font-size: 30px;
            .price__dollar-sign {
                font-size: 12px;
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

