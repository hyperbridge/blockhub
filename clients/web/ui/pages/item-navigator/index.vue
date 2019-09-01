<template>
    <Layout navigationKey="meta">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="item-navigator">
                        <NavigatorItem
                            v-for="(item, index) in deeplyNestedNav"
                            :key="index"
                            :index="index"
                            :item="item"
                            :listLength="item.evolvesTo.length" />
                    </div>

                    <Modal
                        v-if="activeId"
                        title="Select next asset to expand the tree"
                        @close="activeId = null">
                        <Assets
                            slot="body"
                            :assets="assetsArray"
                            @click="evolveNavigator($event.id)" />
                    </Modal>

                    <Modal
                        v-if="deletingTree"
                        title="Delete asset from the tree"
                        @close="deletingTree = null">
                        <p class="text-align-center">
                            Are you sure to delete this assets tree?
                        </p>
                        <NavigatorItem
                            v-for="(item, index) in deletingTree"
                            :key="index"
                            class="assets-tree--delete"
                            :index="index"
                            :item="item"
                            :listLength="item.evolvesTo.length"
                            hideButtons />
                        <div class="flex-center-between margin-top-50">
                            <Button
                                status="info"
                                iconHide
                                @click="deletingTree = null">
                                Cancel
                            </Button>
                            <Button
                                status="success"
                                @click="deleteTree(deletingTree[0].id)">
                                Confirm
                            </Button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
// import { EventBus } from '@/event-bus';

export default {
    components: {
        'NavigatorItem': () => import('@ericmuyser/hyper-ui').then(m => m.NavigatorItem),
        'Modal': () => import('@ericmuyser/hyper-ui').then(m => m.Modal),
        'Assets': () => import('@ericmuyser/hyper-ui').then(m => m.Assets)
    },
    data() {
        return {
            activeId: null,
            deleteId: null,
            deletingTree: null,
            deletingParentId: null
        }
    },
    computed: {
        assets() {
            return this.$store.state.assets.assets
        },
        navigator() {
            return this.$store.state.assets.navigator
        },
        assetsArray() {
            return Object.values(this.assets)
        },
        deeplyNestedNav() {
            const { navigator, assets } = this
            const deepCopy = Object.values(navigator).reduce((populated, row) => {
                const shallowCopy = { ...row }
                for (const key in shallowCopy) {
                    if (typeof shallowCopy[key] === 'object') {
                        if (Array.isArray(shallowCopy[key])) shallowCopy[key] = [...shallowCopy[key]]
                        else shallowCopy[key] = { ...shallowCopy[key] }
                    }
                }

                return {
                    ...populated, [row.id]: {
                        ...shallowCopy,
                        asset: assets[shallowCopy.assetId]
                    }
                }
            }, {})

            const deepCopyArray = Object.values(deepCopy)

            for (const row of deepCopyArray) {
                row.evolvesTo = row.evolvesTo.map(id => deepCopy[id])
            }

            return deepCopyArray.filter(data => data.isRoot)
        }
    },
    mounted() {
        /*
            EventBus.$on('evolve', id => this.activeId = id);
            EventBus.$on('devolve', ({ id, tree, parentId }) => {
                this.deletingTree = [{ ...tree, isRoot: true }];
                this.deletingParentId = parentId;
            });
            */
    },
    beforeDestroy() {
        /*
            EventBus.$off('evolve');
            EventBus.$off('devolve');
            */
    },
    methods: {
        evolveNavigator(assetId) {
            this.$store.dispatch('assets/evolveNavigator', { evolveId: this.activeId, assetId })
            this.activeId = null
        },
        deleteTree(id) {
            this.$store.dispatch('assets/devolveNavigator', { id, parentId: this.deletingParentId })
            // this.$store.commit('assets/deleteNavigator', { id, parentId: this.deletingParentId });
            this.deletingParentId = null
            this.deletingTree = null
        }
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
