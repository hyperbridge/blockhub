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
                <c-navigator-item
                    v-for="(item, index) in navigator"
                    :key="index"
                    :item="item"
                />
            </div>

        </div>
    </div>
</div>
</c-layout>
</template>

<script>
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .item-navigator {
        background: rgba(1,1,1,.1);
        border-radius: 4px;
        width: 100%;
        height: 600px;
        display: flex;
    }
    .item-navigator__row {

    }
</style>
