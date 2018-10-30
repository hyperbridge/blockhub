<template>
    <div class="game-installer">
        <div class="game-installer__product-preview">
            <c-img
                class="game-installer__image"
                :src="product.images.medium_tile"
            />
            <div class="game-installer__description">
                <h3>{{ product.name }} - {{ product.publisher }}</h3>
                <p v-html="description"></p>
                <c-icon
                    v-for="(reqs, index) in product.system_requirements"
                    :key="index"
                    cat="fab"
                    :name="getSysName(reqs.os)"
                />
            </div>
        </div>

        <div class="game-installer__opt-wrapper">
            <span class="game-installer__opt-title">
                Location:
            </span>
            <div class="game-installer__input-wrapper">
                <input
                    class="game-installer__file-dest"
                    type="text"
                    list="saved-paths"
                    v-model="location"
                />
                <c-dropdown>
                    <c-list :items="savedLocations" @click="location = $event">
                        <span slot-scope="props">
                            {{ props.item }}
                        </span>
                    </c-list>
                </c-dropdown>
            </div>
        </div>

        <div class="game-installer__buttons-wrapper">
            <button type="button" class="game-installer__button">
                Cancel
            </button>
            <button type="button" class="game-installer__button--install">
                <c-icon name="hdd"/>
                <span>Install</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'game-installer',
        props: ['product'],
        components: {
            'c-dropdown': (resolve) => require(['@/ui/components/dropdown-menu/type-3'], resolve),
            'c-list': (resolve) => require(['@/ui/components/list'], resolve),
        },
        data() {
            return {
                location: '/home/leafo/.config/itch/apps',
                savedLocations: ['ww', 'aa']
            }
        },
        methods: {
            getSysName(os) {
                switch(os) {
                    case 'win':
                        return 'windows';
                    default: return '';
                }
            }
        },
        computed: {
            description() {
                return this.product.content.substring(0, 150) + '...';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .game-installer__product-preview {
        background: rgba(255,255,255,.025);
        display: flex;
        border: 1px solid rgba(255,255,255,.08);
        margin-bottom: 20px;
    }
    .game-installer__image {
        width: 160px;
        max-height: 170px;
        object-fit: cover;
        background-position: 0 0;
    }
    .game-installer {

    }
    .game-installer__description {
        padding: 20px;
    }
    .game-installer__file-dest {
        width: 80%;
        padding: 7px 7px 7px 37px;
        background: url("../../../assets/SVG/folder-open-regular.svg") 7px center no-repeat;
        background-size: 20px;
        border-style: none;
    }

    .game-installer__input-wrapper {
        display: flex;
        align-items: center;
        background-color: #28283B;
        padding: 4px;
        justify-content: space-between;
        border: 1px solid rgba(255,255,255,.2);
        width: 100%;
    }
    .game-installer__opt-title {
        margin-right: 30px;
    }
    .game-installer__opt-wrapper {
        display: flex;
        align-items: center;
    }

    .game-installer__buttons-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
    .game-installer__button {
        padding: 7px 20px;
        border-radius: 4px;
        border: 1px solid #8c92ff;
        border-top-width: 2px;
        background: linear-gradient(-115deg,#30336b, #130f40);
        color: #fff;
        cursor: pointer;
        text-shadow: 2px 2px 0px rgba(1,1,1,.4);
    }
    .game-installer__button--install {
        @extend .game-installer__button;
        box-shadow: 0 0 30px 0 rgba(140, 146, 255, .45);
        .fas {
            margin-right: 5px;
        }
    }
</style>

