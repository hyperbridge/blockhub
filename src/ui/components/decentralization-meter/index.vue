<template>
    <c-block title="Decentralization Meter" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <template slot="heading-bar">
            <i class="fas fa-laptop title-icon"></i>
        </template>
        <ul class="decentralization-meter" v-if="list.length">
            <li v-for="(item, index) in list.map(item => item.value).sort().reverse()" class="decentralization-meter-item" :class="{ 'disabled': !item }" :key="index">
                <div>{{ item.title }}</div>
            </li>
        </ul>
        <table class="decentralization-meter__table">
            <thead>
                <th width="80%"></th>
                <th></th>
            </thead>
            <tbody>
                <transition-group name="fadeLeft" tag="tr" v-for="(item, index) in list" v-if="item.show == 'default' || showDetails">
                    <td class="decentralization-meter__table-key" :key="`${item.name}-1`">{{ item.name }}</td>
                    <td class="decentralization-meter__table-value" :key="`${item.name}-2`">
                        <i class="fas" :class="{'fa-check-circle': !!item.value, 'fa-times-circle': !item.value }" />
                    </td>
                </transition-group>
                <tr style="background: transparent">
                    <td colspan="2" class="text-center">
                        <transition name="fade" v-if="!showDetails">
                            <div class="decentralization-meter__toggle-btn" @click="toggleDetails">
                                Show all <i class="fas fa-angle-double-down"></i>
                            </div>
                        </transition>
                        <transition name="fade" v-else>
                            <div class="decentralization-meter__toggle-btn" @click="toggleDetails">
                                Hide all <i class="fas fa-angle-double-up"></i>
                            </div>
                        </transition>
                    </td>
                </tr>
            </tbody>
        </table>
    </c-block>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
            options_icons: {
                subtitles: 'closed-captioning',
                interface: 'language',
                full_audio: 'volume-off',
            },
            showDetails: false,
            list: [
                {
                    show: 'default',
                    name: 'Cryptocurrency Payments',
                    value: true
                },
                {
                    name: 'Blockchain Assets',
                    value: false
                },
                {
                    name: 'Blockchain Licensing',
                    value: false
                },
                {
                    name: 'Provably Fair',
                    value: false
                },
                {
                    name: 'Open Source',
                    value: false
                }
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    },
}
</script>

<style lang="scss" scoped>
    .decentralization-meter {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: nowrap;
        overflow: hidden;
        padding: 0;
        background: transparent;
        width: 100%;
        list-style: none;
        li {
            background: rgba(255, 255, 255, .3);
            height: 20px;
            position: relative;
            padding: 0 3px;
            width: 100%;
            &:before {
                display: none;
            }
            &:after {
                width: 2px;
                position: absolute;
                background: rgba(50, 49, 74, 0.8);
                content: "";
                left: -4px;
                top: -10px;
                bottom: -10px;
                display: inline-block;
                transform: rotate(25deg);
                z-index: 10;
            }
            a {
                color: #fff;
                text-transform: uppercase;
                font-size: 13px;
                padding: 0 10px 0 5px;
                text-overflow: ellipsis;
                font-weight: bold;
                max-width: 250px;
                overflow: hidden;
                white-space: nowrap;
                display: inline-block;
            }
            &:first-child {
                border-radius: 15px 0 0 15px;
                &:after {
                    display: none;
                }
            }
            &:last-child {
                border-radius: 0 15px 15px 0;
                padding-left: 0;
                &:before {
                }
            }
            &.disabled {
                background: rgba(45, 44, 67, 0.8);
                &:after {
                    background: rgba(23, 22, 41, 0.8);
                }
                &:before {
                    display: inline-block;
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 0 20px 9px;
                    bottom: 0;
                    left: -9px;
                    border-color: transparent transparent #2d2c43 transparent;
                }
            }
        }
    }

    .decentralization-meter__table {
        width: 100%;
        th:not(:first-child), td:not(:first-child) {
            text-align: center;
            width: 15%;
        }
        th:not(:first-child):not(:last-child) {
            padding: 0 5px;
        }
        tbody tr:nth-child(even) {
            background-color: #353551;
        }
        tr{
            &.hide-tr{
                display: none;
            }
        }
        .fa-check-circle {
            color: #39A340;
        }
        .fa-check-times {
            color: darkred;
        }
    }
    .decentralization-meter__table-key {
        padding: 10px;
    }
    .decentralization-meter__table-value i {
        font-size: 18px;
    }
    .decentralization-meter__toggle-btn{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        padding: 5px 10px;
        position: relative;
        margin-top: 5px;
        transition: all 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        &:before{
            content: "";
            position: absolute;
            top: 50%;
            left: -20px;
            height: 1px;
            width: 20px;
            background: #fff;
        }
        &:after{
            content: "";
            position: absolute;
            top: 50%;
            right: -20px;
            height: 1px;
            width: 20px;
            background: #fff;
        }
        i{
            margin-left: 10px;
        }
        &:hover{
            cursor: pointer;
            transition: all 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
            padding: 5px 20px;
        }
    }
</style>
