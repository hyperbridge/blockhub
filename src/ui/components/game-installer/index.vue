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
        <input
            class="game-installer__file-dest"
            v-model="location"
            type="text"
            readonly
        />
    </div>
</template>

<script>
    export default {
        name: 'game-installer',
        props: ['product'],
        data() {
            return {
                location: '/home/leafo/.config/itch/apps'
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
        width: 150px;
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
    }
</style>

