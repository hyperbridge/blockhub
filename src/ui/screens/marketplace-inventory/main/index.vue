<template>
    <div>
        <h2>Explore</h2>
        <c-assets-grid-inventory
            :assets="assets"
            @click="previewAsset = $event"
        />
        <div v-if="previewAsset" class="preview-asset">
            <c-img
                class="preview-asset__image"
                :src="previewAsset.image"
            />
            <div>
                <h4>Details</h4>
                <ul class="reset-list">
                    <li>Name: {{ previewAsset.name }}</li>
                    <li>Game: {{ previewAsset.product_name }}</li>
                    <li v-for="(val, prop) in previewAsset.price" :key="prop">
                        {{ prop | upperFirstChar }}: {{ val }}$
                    </li>
                </ul>
            </div>
            <div>
                <h4>Attributes</h4>
                <table>
                    <!-- <tbody>
                        <tr v-for="(prop, val) in previewAsset.metadata" :key="prop">
                            <td>{{ prop |  | upperFirstChar }}</td>
                            <td>{{ val }}</td>
                        </tr>
                    </tbody> -->
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['assets'],
        components: {
            'c-assets-grid-inventory': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
        },
        data() {
            return {
                previewAsset: null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .preview-asset {
        background: #1D1E2E;
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        padding: 20px;
        border-radius: 4px 4px 0 0;
        // width: 100%;
        &__image {
            width: 150px;
            height: 150px;
        }
        animation: slidein .3s ease;
        @keyframes slidein {
            0% {
                transform: translateY(100%);
            }
            100% {
                transform: translateY(0%);
            }
        }
    }
</style>
