<template>
<c-layout navigationKey="meta">
<div class="container-fluid">
    <div class="row">
        <div class="col-12">

            <!-- <div class="item-navigator">
                <div
                    v-for="(row, index) in rows"
                    :key="index"
                    class="item-navigator__row"
                >
                    <c-navigator-item
                        v-for="(item, index) in row"
                        :key="index"
                        :item="item"
                    >
                        {{ item.id }}
                    </c-navigator-item>
                </div>
            </div> -->

            <div class="item-navigator">
                <!-- COMP REQUIRES GLOBAL EVENT BUS -->
                <c-navigator-item
                    v-for="(item, index) in deeplyNestedNav"
                    :key="index"
                    :index="index"
                    :item="item"
                    :listLength="item.evolvesTo.length"
                />
            </div>


            <c-modal
                v-if="activeId"
                title="Select next asset to evolve"
                @close="activeId = null"
            >
                <c-assets
                    @click="evolveNavigator($event.id)"
                    :assets="assetsArray"
                    slot="body"
                />
            </c-modal>

        </div>
    </div>
</div>
</c-layout>
</template>

<script>
    import { EventBus } from '@/event-bus';

    export default {
        components: {
            'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
            'c-navigator-item': (resolve) => require(['@/ui/components/item-navigator/item'], resolve),
            'c-modal': (resolve) => require(['@/ui/components/modal'], resolve),
            'c-assets': (resolve) => require(['@/ui/components/assets-grid-inventory'], resolve),
        },
        data() {
            return {
                activeId: null
            }
        },
        methods: {
            evolveNavigator(assetId) {
                this.$store.dispatch('assets/evolveNavigator', { evolveId: this.activeId, assetId });
                this.activeId = null;
            }
        },
        computed: {
            assets() {
                return this.$store.state.assets.assets;
            },
            navigator() {
                return this.$store.state.assets.navigator;
            },
            assetsArray() {
                return Object.values(this.assets);
            },
            deeplyNestedNav() {
                const { navigator, assets } = this;
                const deepCopy = Object.values(navigator).reduce((populated, row) => {
                    const shallowCopy = { ...row };
                    for (let key in shallowCopy) {
                        if (typeof shallowCopy[key] === 'object') {
                            if (Array.isArray(shallowCopy[key])) shallowCopy[key] = [...shallowCopy[key]];
                            else shallowCopy[key] = { ...shallowCopy[key] }
                        }
                    }

                    return { ...populated, [row.id]: {
                        ...shallowCopy,
                        asset: assets[shallowCopy.assetId]
                    }};
                }, {});

                const deepCopyArray = Object.values(deepCopy);

                for (let row of deepCopyArray) {
                    row.evolvesTo = row.evolvesTo.map(id => deepCopy[id]);
                }

                return deepCopyArray.filter(data => data.isRoot);
            }
        },
        mounted() {
            EventBus.$on('evolve', id => this.activeId = id);
        },
        beforeDestroy() {
            EventBus.$off('evolve');
        }
    }
</script>

<style lang="scss" scoped>
    .item-navigator {
        background: rgba(1,1,1,.1);
        border-radius: 4px;
        width: 100%;
        // height: 600px;
        display: flex;
        overflow: hidden;
        overflow: auto;
        // cursor: move;
        margin-bottom: 100px;
        padding: 0 100px 100px 0;
    }
    .item-navigator__row {
    }
</style>
