<template>
    <c-layout navigationKey="settings">
            <c-block class="margin-bottom-30" title="Darklaunch Settings" :noGutter="true" :onlyContentBg="true" :bgGradient="true">
                <div class="row">
                    <div class="col-12" style="padding: 0;">
                        <div class="">
                            <div class="page-heading">
                                <div class="page-heading__container">
                                    <!-- <h1 class="title">darklaunches</h1> -->
                                    <p class="caption">Select darklaunches to enable</p>
                                </div>
                                <div class="page-heading__container float-right d-none d-md-block">
                                    <button class="btn btn-outline-secondary" v-if="selected.length" @click="enableSelected">Enable selected</button>
                                    <button class="btn btn-outline-secondary" v-if="selected.length" @click="disableSelected">Disable selected</button>
                                </div>
                            </div>
                            <div class="">
                                <div class="table-responsive">
                                    <table class="table table-dark margin-bottom-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" width="40">
                                                    <label class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" v-model="selectAll" />
                                                        <span class="custom-control-label"></span>
                                                    </label>
                                                </th>
                                                <th scope="col">Code</th>
                                                <th scope="col" width="160">Description</th>
                                                <th scope="col">Type</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-for="darklaunch in darklaunches">
                                                <tr v-bind:key="darklaunch.code">
                                                    <td>
                                                        <label class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" v-model="selected" :value="`${darklaunch.code}`" number />
                                                            <span class="custom-control-label"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        {{ darklaunch.code }}
                                                        <span class="badge badge-success" v-if="darklaunch.enabled">Enabled</span>
                                                        <span class="badge badge-warning" v-if="!darklaunch.enabled">Disabled</span>
                                                    </td>
                                                    <td>
                                                        {{ darklaunch.description }}
                                                    </td>
                                                    <td>
                                                        {{ darklaunch.type }}
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-light btn-sm" @click.prevent="toggleDarklaunch(darklaunch.code)">Toggle</button>
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </c-block>
    </c-layout>
</template>

<script>

export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve)
    },
    data() {
        return {
            selected: []
        }
    },
    computed: {
        selectAll: {
            get: function () {
                return this.selected.length == this.darklaunches.length
            },
            set: function (value) {
                if (!value) {
                    this.selected = []
                    return
                }

                this.selected = this.darklaunches.map((darklaunch) => darklaunch.code)
            }
        },
        darklaunches() {
            return this.$store.state.application.darklaunchFlags.map(darklaunch => ({...darklaunch, enabled: this.$store.state.application.account.darklaunchFlags.map(flag => flag.enabled ? flag.code : undefined).includes(darklaunch.code)}))
        }
    },
    methods: {
        toggleDarklaunch(darklaunchCode) {
            const darklaunch = this.$store.state.application.account.darklaunchFlags.find(darklaunch => darklaunch.code === darklaunchCode)

            if (darklaunch.enabled) {
                this.$store.dispatch('application/disableDarklaunch', darklaunch.code)
            } else {
                this.$store.dispatch('application/enableDarklaunch', darklaunch.code)
            }
        },
        async enableSelected() {
            for (let i in this.selected) {
                const darklaunch = this.darklaunches[i]

                this.$store.dispatch('application/enableDarklaunch', darklaunch.code)
            }
        },
        async disableSelected() {
            for (let i in this.selected) {
                const darklaunch = this.darklaunches[i]

                this.$store.dispatch('application/disableDarklaunch', darklaunch.code)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
