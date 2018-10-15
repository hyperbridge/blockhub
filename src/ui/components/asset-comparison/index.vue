<template>
    <div>
        <div class="comparison">
            <div class="comparison__add-asset">
                <c-icon
                    name="plus-circle"
                    @click="$emit('addMore')"
                />
            </div>
            <div
                v-for="(asset, assetKey) in assets"
                :key="asset.id"
                class="comparison__item"
            >
                <c-img :src="asset.image" class="comparison__asset-image"/>
                <table class="comparison__table">
                    <thead>
                        <th>Property</th>
                        <th>Value</th>
                        <th>Difference</th>
                    </thead>
                    <tbody>
                        <tr v-for="(prop, index) in comparableProps" :key="index">
                            <td>
                                {{ prop | parseProp | upperFirstChar }}
                            </td>
                            <td v-if="typeof asset.metadata[prop] ===  'object'">
                                <ul class="margin-bottom-0">
                                    <li v-for="(subprop, subval, index) in asset.metadata[prop]" :key="index">
                                        {{ subprop }} {{ subval }}
                                    </li>
                                </ul>
                            </td>
                            <td v-else>{{ asset.metadata[prop] }}</td>
                            <td>
                                <span
                                    v-if="calculateDiffs[assetKey][prop] != null"
                                    :class="colorClass(calculateDiffs[assetKey][prop])"
                                >
                                    <c-icon
                                        class="differences-arrow"
                                        :class="{
                                            'differences-arrow--down': calculateDiffs[assetKey][prop] < 100
                                        }"
                                        name="arrow-up"
                                    />
                                    {{ calculateDiffs[assetKey][prop] | percentages }}
                                </span>
                            </td>
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
        data() {
            const metadata = {
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
            return {
                assetsd: []
            }
        },
        methods: {
            colorClass(num) {
                return num >= 100 ? 'positive' : 'negative';
            }
        },
        computed: {
            assetsc() {
                const metadata = [
                    {
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
                    },
                    {
                        type: "Legendary Two Handed Sword",
                        average_dps: 103.6,
                        damage_range_min: 1193,
                        damage_range_max: 4880,
                        attack_speed: 1.1,
                        bonus_1: {
                            damage: '+9%',
                            strength: '+1381',
                        },
                        bonus_2: "Monster kills grant +151 experience",
                        level_requirement: 10,
                        durability: "40/41"
                    },
                ];
                return this.assets.map((asset, index) => ({ ...asset, metadata: metadata[index] }));
            },
            comparableProps() {
                const { metadata } = this.assets[0];
                return Object.keys(metadata).filter(metaProp =>
                    this.assets.every(asset => asset.metadata[metaProp] != null)
                );
            },
            calculableProps() {
                const { metadata } = this.assets[0];
                return this.comparableProps.reduce((props, prop) =>
                    typeof metadata[prop] === 'number'
                        ? [...props, prop]
                        : props
                , []);
            },
            calculateDiffs() {
                const { assets, calculableProps } = this;

                return assets.map((asset, index) => {
                    const diffs = {};
                    const otherAssets = assets.filter((asset, i) => i !== index);

                    for (let key of calculableProps) {
                        diffs[key] = Math.round(
                            asset.metadata[key] / (
                                otherAssets.reduce((avg, asset) => avg += asset.metadata[key], 0) /
                                otherAssets.length
                            ) * 100
                        );
                    }
                    return diffs;
                });
            }
        },
        filters: {
            parseProp(val) {
                return val.replace(/_/g, ' ');
            },
            percentages(num) {
                return num >= 100 ? `+ ${num}%` : `- ${num}%`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .comparison {
        display: flex;
        flex-wrap: wrap;
    }
    .comparison__asset-image {
        height: 100px;
        width: 100px;
        display: block;
        margin: 0 auto 10px auto;
    }
    .comparison__item {
        padding: 10px;
        border-radius: 4px;
        background: #1D1E2E;
        margin: 10px;
    }
    .comparison__add-asset {
        @extend .comparison__item;
        min-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        .fas {
            cursor: pointer;
            &:not(:hover) {
                color: rgba(255,255,255,.6);
            }
        }
    }
    .comparison__table {
        td, th {
            padding: 5px;
        }
        td:last-child {
            width: 25%;
        }
        tr:nth-child(odd) td {
            background: rgba(255,255,255,.01);
        }
        td:first-child {
            color: rgba(255,255,255,.6);
        }
    }
    .differences-arrow {
        margin-right: 4px;
        &--down {
            transform: rotate(180deg);
        }
    }
</style>
