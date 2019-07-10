<template>
    <div
        class="store-card"
        :class="'store-card--' + tags[0]">
        <div
            v-if="tags.length"
            class="store-card__badges">
            <c-badge-card
                v-for="(tag, index) in tags"
                :key="index"
                class="store-card__single-badge"
                :title="tag.value | space"
                :tag="tag.value" />
        </div>
        <c-img
            :src="image"
            class="store-card__image" />
        <div class="store-card__info">
            <span class="store-card__name">{{ name }}</span>
            <span class="store-card__price">
                $ {{ priceCurrent }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-badge-card': () => import('~/components/badge-card').then(m => m.default || m)
    },
    props: {
        image: String,
        name: String,
        priceCurrent: String,
        tags: {
            type: Array,
            default: () => []
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
            min-width: 90px;
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
            background: linear-gradient(rgba(0,0,0,0), rgba(255,255,255,.3));
        }
        border: 1px solid rgba(255,255,255,.8);
        box-shadow: 0 5px 25px -5px rgba(255,255,255,.3);

        /* Colors
         #1abc9c #e056fd #2ecc71 #9b59b6 #D6A2E8 #7d5fff #c56cf0 #18dcff #808e9b #706fd3
          #9b59b6 #D6A2E8    #c56cf0  #808e9b #706fd3
        */

        $tags: (
            topSeller: #9980FA,
            special: #1abc9c,
            discount: #74b9ff,
            epic: #ffda79,
            mythic: #1abc9c,
            trending: #c56cf0,
            upcoming: #2ecc71,
            specials: #B33771,
            heroic: #18dcff,
            extremely_rare: #40407a,
            popular: #b8e994,
            legendary: #57606f
        );

        @each $tag, $hex in $tags {
            $rgba: rgba($hex, .5);

            &.#{'store-card--' + $tag} {
                @if $tag == extremely_rare {
                    box-shadow: 0 5px 35px -3px #9796ff;
                    border: 1px solid #b8b7ff;
                } @else {
                    box-shadow: 0 5px 25px -5px $rgba;
                    border: 1px solid $hex;
                }
                &:after {
                    background: linear-gradient(rgba(0,0,0,0), $rgba);
                }
            }
            .#{'badge-card--' + $tag} {
                .badge-card__text, .badge-card__triangle {
                    background-color: darken($hex, 14%);
                    @if $tag == extremely_rare { border-color: #b8b7ff; }
                    @else { border-color: lighten($hex, 10%); }
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


