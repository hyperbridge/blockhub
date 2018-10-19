<template>
    <div class="store-card" :class="'store-card--' + system_tags[asset.id][0]">
        <div class="store-card__badges" v-if="system_tags[asset.id]">
            <c-badge-card
                v-for="(tag, index) in system_tags[asset.id]"
                class="store-card__single-badge"
                :key="index"
                :title="tag | space"
                :tag="tag"
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
            system_tags: {
                1: ['top_seller', 'special'],
                2: ['discount'],
                3: ['special']
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .store-card {
        margin: 10px;
        background-color: rgb(30, 31, 49);
        padding: 10px;
        border-radius: 6px;
        position: relative;
        z-index: 4;
        .store-card__badges {
            position: absolute;
            left: 13px;
            top: -13px;
            display: flex;
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
            filter: drop-shadow(0 0 10px rgb(24, 26, 39));
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
    }
</style>

<style lang="scss">
    .store-card {
        &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
        }

        // Colors
        // #1abc9c  #e056fd #2ecc71 #9b59b6 #D6A2E8 #7d5fff #c56cf0 #18dcff #808e9b #706fd3
        $tags: (
            top_seller: #9980FA,
            special: #1abc9c,
            discount: #74b9ff,
            epic: #ECB448
        );

        @each $tag, $hex in $tags {
            $rgba: rgba($hex, .5);

            &.#{'store-card--' + $tag} {
                box-shadow: 0 5px 25px -5px $rgba;
                border: 1px solid $hex;
                &:after {
                    background: linear-gradient(rgba(0,0,0,0), $rgba);
                }
            }
            .#{'badge-card--' + $tag} {
                .badge-card__text, .badge-card__triangle {
                    background-color: darken($hex, 14%);
                    border-color: lighten($hex, 10%);
                }
                .badge-card__text {
                    &:after {
                        border-bottom-color: darken($hex, 20%);
                    }
                }
            }
        }
    }
</style>


