<template>
    <div>
        <div class="comparisonable-properties" v-if="assets.length">
            <div
                v-for="title in ['comparable', 'calculable']"
                v-if="compareProps[title + 'Props'].length"
                class="properties-list"
                :key="title"
            >
                <h4>{{ title | upperFirstChar }} properties</h4>
                <ul>
                    <li v-for="prop in compareProps[title + 'Props']" :key="prop">
                        {{ prop | parseProp | upperFirstChar }}
                    </li>
                </ul>
            </div>
        </div>
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
                <c-icon
                    name="times"
                    class="comparison__del-btn"
                    @click="$emit('delete', asset)"
                />
                <c-asset-preview :asset="asset"/>
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
        name: 'asset-comparison',
        props: {
            assets: {
                type: Array,
                default: () => [{ metadata: {} }]
            }
        },
        components: {
            'c-asset-preview': (resolve) => require(['@/components/asset-preview'], resolve),
        },
        methods: {
            colorClass: num => num >= 100 ? 'positive' : 'negative'
        },
        computed: {
            firstAsset() {
                return this.assets.length ? this.assets[0] : { metadata: {} };
            },
            comparableProps() {
                const { metadata } = this.firstAsset;
                return Object.keys(metadata).filter(metaProp =>
                    this.assets.every(asset => asset.metadata[metaProp] != null)
                );
            },
            calculableProps() {
                const { metadata } = this.firstAsset;
                return this.comparableProps.reduce((props, prop) =>
                    typeof metadata[prop] === 'number'
                        ? [...props, prop]
                        : props
                , []);
            },
            calculateDiffs() {
                const { assets, calculableProps } = this;
                if (assets.length < 2) return [{}];

                return assets.map((asset, index) => {
                    const diffs = {};
                    const restAssets = assets.filter((asset, i) => i !== index);

                    for (let key of calculableProps) {
                        diffs[key] = Math.round(
                            asset.metadata[key] / (
                                restAssets.reduce((avg, asset) => avg += asset.metadata[key], 0) /
                                restAssets.length
                            ) * 100
                        );
                    }
                    return diffs;
                });
            },
            compareProps() {
                const { comparableProps, calculableProps } = this;
                return {
                    comparableProps,
                    calculableProps
                };
            }
        },
        filters: {
            parseProp: val => val.replace(/_/g, ' '),
            percentages: num => num >= 100 ? `+ ${num}%` : `- ${num}%`
        }
    }
</script>

<style lang="scss" scoped>
    .comparison {
        display: flex;
        overflow-x: auto;
    }
    .comparison__del-btn {
        position: absolute;
        top: 18px;
        right: 18px;
        font-size: 18px;
        cursor: pointer;
        &:not(:hover) {
            color: rgba(255,255,255,.6);
        }
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
        position: relative;
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

    .comparisonable-properties {
        display: flex;
        padding: 20px;
        background: rgba(1,1,1,.1);
        border-radius: 4px;
        .properties-list {
            margin-right: 30px;
        }
    }
</style>
