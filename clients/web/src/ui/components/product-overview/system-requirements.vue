<template>
    <c-block title="System Requirements" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
        <template slot="heading-bar">
            <i class="fas fa-laptop title-icon"></i>
        </template>
        <c-tabs-universal :tabNames="['Mac', 'Win', 'Linux']" :setActiveTab="activeTab">
            <c-tab-universal
                v-for="(os, index) in ['Mac', 'Win', 'Linux']"
                :tab_id="index + 1"
                :key="index">
                <ul class="system-requirements__list" v-if="platform(os)">
                    <li
                        v-for="(value, property) in platform(os)"
                        v-if="value"
                        :key="property"
                        class="system-requirements__list-item"
                    >
                        <strong>{{ property | reqProp }}</strong>
                        <p v-if="property == 'os'" class="system-requirements__value">
                            {{ value | upperFirstChar }}
                            <i
                                class="fab"
                                :class="`fa-${value == 'win' ? 'windows' : value == 'mac' ? 'apple' : 'linux'}`"
                            ></i>
                        </p>
                        <p v-else class="system-requirements__value">{{ value | upperFirstChar }}</p>
                    </li>
                </ul>
                <h4 v-else>Not currently supported.</h4>
            </c-tab-universal>
        </c-tabs-universal>
    </c-block>
</template>

<script>
export default {
    name: 'system-requirements',
    props: {
        requirements: {
            type: Array,
            required: true
        }
    },
    data() {
        let activeTab = this.platform('Win') || this.platform('Mac') || this.platform('Linux')

        activeTab = activeTab ? activeTab.os : 'win'

        return {
            activeTab: activeTab === 'mac' ? 1 : (activeTab === 'win' ? 2 : 3)
        }
    },
    components: {
        'c-tab-universal': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
        'c-tabs-universal': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve)
    },
    methods: {
        platform(val) {
            return this.requirements.find((obj) => {
                if (obj['os'] === val.toLowerCase())
                    return obj
                else
                    return false
            })
        }
    },
    filters: {
        reqProp(val) {
            return val.replace(/[\s_]+/g, ' ').toUpperCase()
        }
    },
}
</script>

<style lang="scss" scoped>
    .system-requirements__value {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, .13);
        border: 1px solid rgba(70, 70, 70, 0.5);
        border-radius: 5px;
        padding: 5px;
        position: relative;
        &:last-child {
            margin-bottom: 0;
        }
        h6 {
            font-weight: bold;
            font-size: 14px;
            padding-bottom: 0;
            i {
                float: right;
            }
        }
        p {
            margin: 0;
        }
    }

    .system-requirements__list {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .system-requirements__list-item {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        .fab {
            margin-left: 4px;
        }
    }
</style>
