<template>
    <c-layout navigationKey="meta">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">

                    <div class="item-navigator">
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
                        title="Select next asset to expand the tree"
                        @close="activeId = null"
                    >
                        <c-assets
                            @click="evolveNavigator($event.id)"
                            :assets="assetsArray"
                            slot="body"
                        />
                    </c-modal>

                    <c-modal
                        v-if="deletingTree"
                        title="Delete asset from the tree"
                        @close="deletingTree = null"
                    >
                        <p class="text-align-center">Are you sure to delete this assets tree?</p>
                        <c-navigator-item
                            v-for="(item, index) in deletingTree"
                            class="assets-tree--delete"
                            :key="index"
                            :index="index"
                            :item="item"
                            :listLength="item.evolvesTo.length"
                            hideButtons
                        />
                        <div class="flex-center-between margin-top-50">
                            <c-button status="info" @click="deletingTree = null" icon_hide>
                                Cancel
                            </c-button>
                            <c-button status="success" @click="deleteTree(deletingTree[0].id)">
                                Confirm
                            </c-button>
                        </div>
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
                activeId: null,
                deleteId: null,
                deletingTree: null,
                deletingParentId: null
            }
        },
        methods: {
            evolveNavigator(assetId) {
                this.$store.dispatch('assets/evolveNavigator', { evolveId: this.activeId, assetId });
                this.activeId = null;
            },
            deleteTree(id) {
                // this.$store.dispatch('assets/deleteNavigator', {})
                this.$store.commit('assets/deleteNavigator', { id, parentId: this.deletingParentId });
                this.deletingParentId = null;
                // this.$store.dispatch('assets/deleteNavigatorTree', id);
                this.deletingTree = null;
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
            EventBus.$on('devolve', ({ id, tree, parentId }) => {
                this.deletingTree = [{ ...tree, isRoot: true }];
                this.deletingParentId = parentId;
            });
        },
        beforeDestroy() {
            EventBus.$off('evolve');
            EventBus.$off('devolve');
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
    .assets-tree--delete {
        background: rgba(1,1,1, .1);
        border-radius: 4px;
        border: 1px solid #fff;
    }
    .item-navigator__row {
    }
</style>
