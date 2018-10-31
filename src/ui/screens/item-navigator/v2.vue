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
                    v-for="(item, index) in navigator"
                    :key="index"
                    :item="item"
                    :listLength="item.evolvesTo.length"
                />
            </div>

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
        },
        data() {
            return {
                showButton: false,
                target: null,
                rows: [
                    [{ id: 1, evolvesTo: [2, 3] }],
                    [{ id: 2, evolvesTo: [] }, { id: 6, evolvesTo: [] }, { id: 3, evolvesTo: [4, 5] }],
                    [{ id: 4, evolvesTo: [] }, { id: 5, evolvesTo: [] }],
                ],
                navigator: [
                    { id: 1, evolvesTo: [
                        { id: 2, evolvesTo: [] },
                        { id: 3, evolvesTo: [
                            { id: 7, evolvesTo: [] },
                            { id: 8, evolvesTo: [] },
                            { id: 9, evolvesTo: [] },

                        ]},
                        { id: 4, evolvesTo: [
                            { id: 5, evolvesTo: [] },
                            { id: 6, evolvesTo: [] },
                        ]},
                    ]}
                ],
                nav: {
                    1: { id: 1, assetId: 1, evolvesTo: [1, 2], isRoot: true },
                    2: { id: 2, assetId: 2, evolvesTo: [3, 3]},
                    3: { id: 3, assetId: 3, evolvesTo: [4, 4]},
                    4: { id: 4, assetId: 4, evolvesTo: [5, 5]},
                    5: { id: 5, assetId: 5, evolvesTo: [1, 7]},
                    6: { id: 6, assetId: 6, evolvesTo: [5, 1]},
                    7: { id: 7, assetId: 7, evolvesTo: [4, 2]}
                }
            }
        },
        computed: {
            populated() {
                const { navigator } = this;
                const populated = [];

                const recursiveMap = items => {
                    items.map(item => {
                        if (item.evolvesTo.length) {
                        recurMap(item.evolvesTo)
                        }
                        console.log('CALLED')

                        stack++;
                        return { ...item, what: item.id };
                    });
                };

                return populated;
            },
            navp() {
                const { nav } = this;
                return Object.values(nav).reduce((pop))
            },
            populate() {
                const { nav } = this;
                const deepCopy = Object.values(nav).reduce((populated, row) => {
                    const shallowCopy = { ...row };
                    for (let key in shallowCopy) {
                        if (typeof shallowCopy[key] === 'object') {
                            if (Array.isArray(shallowCopy[key])) shallowCopy[key] = [...shallowCopy[key]];
                            else shallowCopy[key] = { ...shallowCopy[key] }
                        }
                    }

                    return { ...populated, [row.id]: shallowCopy };
                }, {});

                const deepCopyArray = Object.values(deepCopy);

                for (let row of deepCopyArray) {
                    row.evolvesTo = row.evolvesTo.map(id => deepCopy[id]);
                }

                return deepCopyArray.filter(data => data.isRoot);
            }
        },
        mounted() {
            EventBus.$on('evolve', e => {
                console.log(e)
            })
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
        cursor: move;
        margin-bottom: 100px;
    }
    .item-navigator__row {
    }
</style>
