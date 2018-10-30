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

                    <div v-for="(row, index) in rows2" :key="index" class="item-navigator__row">
                        <div
                            class="item-navigator__item"
                            v-for="(item, index) in row"
                            :key="index"
                        >
                            {{ item.id }}

                            {{ item }}
                            <span
                                v-if="item.evolvesTo.length"
                                class="item__evo-line"
                            ></span>
                            <!-- <div class="item__btn-wrapper">
                                <c-icon
                                    name="arrow-right"
                                    v-for="btn in 2"
                                    :key="btn"
                                />
                            </div> -->
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
            ],
            rows2: [
                [{ id: 1, evolvesTo: [2, 3] }],
                [{ id: 2, evolvesTo: [] }, { id: 6, evolvesTo: [] }, { id: 3, evolvesTo: [4, 5] }],
                [{ id: 4, evolvesTo: [] }, { id: 5, evolvesTo: [] }],
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
    $line-color: #cacaca;
    .item-navigator__row {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // flex-direction: column;

        .item-navigator__item:before {
            position: absolute;
            content: "";
            width: 2px;
            height: calc(100% + 60px);
            background: $line-color;
            top: -30px;
            left: -30px;
        }
        .item-navigator__item:first-child:before {
            height: 50%;
            height: calc(50% + 10px);
            top: 50%;
            background: blue;
            background: $line-color;
        }
        .item-navigator__item:last-child:before {
            height: calc(50% + 10px);
            bottom: 50%;
            top: -10px;
            background: yellow;
            background: $line-color;
        }
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

        &:after {
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            font-size: 15px;
            content: "\F061";
            position: absolute;
            top: calc(50% - 10px);
            left: -29px;
        }

        .item__evo-line {
            height: 2px;
            background: green;
            box-shadow: -15px 0 30px 1px rgb(49, 156, 255);
            z-index: -1;
            position: absolute;
            right: -30px;
            top: calc(50% - 1px);
            width: 30px;
        }

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
