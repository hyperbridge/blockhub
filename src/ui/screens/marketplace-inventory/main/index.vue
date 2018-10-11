<template>
    <div>
        <h2>Explore</h2>
        <c-assets-grid-inventory
            :assets="assets"
            @click="previewAsset = $event"
        />
        <div v-if="previewAsset" class="preview-asset">
            <c-icon
                name="times"
                class="preview-asset__close-btn"
                @click="previewAsset = null"
            />
            <c-asset-preview-basic
                :asset="previewAsset"
                class="preview-asset__box"
            />
            <div class="preview-asset__box">
                <h4>Price history</h4>
                <ul class="reset-list">
                    <li v-for="(val, prop) in previewAsset.price" :key="prop">
                        {{ prop | upperFirstChar }}: {{ val }}$
                    </li>
                </ul>
            </div>
            <div class="preview-asset__box">
                <table>
                    <tbody>
                        <tr v-for="(val, prop) in metadata" :key="prop">
                            <td>{{ prop | space | upperFirstChar }}</td>
                            <td>{{ val }}</td>
                        </tr>
                    </tbody>
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
            'c-asset-preview-basic': (resolve) => require(['@/ui/components/asset/preview-basic'], resolve),
        },
        data() {
            return {
                previewAsset: null,
                metadata: {
                    type: "Legendary Two Handed Sword",
                    average_dps: 2903.6,
                    damage_range_min: 2193,
                    damage_range_max: 2880,
                    attack_speed: 1.15,
                    bonus_1: {
                        damage: '+9%',
                        strength: '+1381',
                    },
                    bonus_2: "Monster kills grant +151 experience",
                    level_requirement: 70,
                    durability: "40/41"
                }
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
        animation: slidein .3s ease;
        justify-content: space-between;
        .preview-asset__box {
            max-height: 200px;
            overflow-y: auto;
            &:not(:last-child) {
                margin-right: 14px;
            }
        }
        @keyframes slidein {
            0% {
                transform: translateY(100%);
            }
            100% {
                transform: translateY(0%);
            }
        }
    }
    .preview-asset__close-btn {
        position: absolute;
        top: 14px;
        right: 14px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
