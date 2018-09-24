<template>
    <div class="card invert system-requirements">
        <div class="card-body">
            <h2 class="title">
                System Requirements <i class="fas fa-laptop title-icon"></i>
            </h2>
            <c-tabs-universal :tab_names="tab_names">
                <c-tab-universal
                    v-for="(platform, index) in newRequirements"
                    :key="index"
                    :tab_id="index"
                >
                    <ul class="system-requirements__list" v-if="platform">
                        <li
                            v-for="(value, property) in platform"
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
                    <h4 v-else>Currently not supported</h4>
                </c-tab-universal>
            </c-tabs-universal>
        </div>
    </div>
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
    data(){
        return {
            newRequirements:[
                {
                    "os": "win"
                },
                {
                    "os": "mac"
                },
                {
                    "os": "linux"
                }
            ]
        }
    },
    components: {
        'c-tab-universal': (resolve) => require(['@/ui/components/tab/tab-universal'], resolve),
        'c-tabs-universal': (resolve) => require(['@/ui/components/tab/tabs-universal'], resolve)
    },
    created(){
        let requirements = this.requirements.sort(),
            newRequirements = this.newRequirements.sort(),
            finallyarray = [];
            newRequirements.forEach( (o, i) => {
                console.log(o,i)
            })
            this.newRequirements = finallyarray;
    },
    computed:{
        tab_names() {
            return this.newRequirements.map(req => req.os.toUpperCase());
        }
    },
    filters: {
        reqProp(val) {
            return val.replace(/[\s_]+/g, ' ').toUpperCase();
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
