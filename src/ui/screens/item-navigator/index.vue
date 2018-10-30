<template>
<c-layout navigationKey="meta">
<div class="container-fluid">
    <div class="row">
        <div class="col-12">

                <div class="item-navigator" @mouseover="onMouseOver" @mouseout="onMouseOut">
                    <c-icon
                        class="arrow-btn"
                        name="arrow-right"
                        v-if="showButton == 'tr'"
                        :style="{
                            left: target.clientTop + 70 + 'px',
                            left: target.clientLeft + 70 + 'px'
                        }"
                    />

                    <div v-for="(row, index) in rows" :key="index" class="item-navigator__row">
                        <div
                            class="item-navigator__item"
                            v-for="(item, index) in row"
                            :key="index"
                        >
                            <div class="item__btn-wrapper">
                                <c-icon
                                    name="arrow-right"
                                    v-for="btn in 2"
                                    @click=""
                                    :key="btn"
                                />
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    </div>
</div>
</c-layout>
</template>

<script>
export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
    },
    data() {
        return {
            showButton: false,
            target: null,
            rows: [
                [1],
                [2, 3, 4],
                [5, 6]
            ]
        }
    },
    methods: {
        onMouseOver(e) {
            if (e.target.className === 'item-navigator__item') {
                this.showButton = true;
                this.target = e.target;
                console.log('OVER', e);
            }
        },
        onMouseOut(e) {
            if (e.target.className === 'item-navigator__item') {
                this.showButton = false;
            }
            // console.log('OUT', e)
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
        position: relative;
        display: flex;
        // display: flex;
        // align-items: center;
    }
    .item-navigator__row {
    }
    .item-navigator__item-wrapper {
        padding: 20px;
    }
    .item-navigator__item {
        width: 70px;
        height: 70px;
        background: red;
        margin: 30px;
        position: relative;
        .item__btn-wrapper {
            height: 100%;
            right: -20px;
            width: 20px;
            position: absolute;
            justify-content: space-around;
            align-items: center;
            display: flex;
            flex-direction: column;
        }
        .fas {
            font-size: 20px;
            cursor: pointer;
        }
    }
    .arrow-btn {
        font-size: 20px;
        position: absolute;
    }
</style>
