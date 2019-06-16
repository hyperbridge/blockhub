<template>
    <c-layout
        :showLeftPanel="false"
        :showRightPanel="false">
        <div class="row">
            <div class="col-12 mb-4">
                <h2>Verification Assistant</h2>
                <p>
                    Let's do this.
                </p>
                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            URL
                        </span>
                    </div>
                    <input
                        ref="input"
                        v-model="sheetUrl"
                        type="text"
                        class="form-control"
                        placeholder="Enter Google Sheet URL...">
                    <c-button @click="fetchData">
                        Update
                    </c-button>
                </div>
                <div>
                    <div
                        v-for="(entry, index) in entries"
                        v-if="entry.gsx$approved.$t !== 'YES'"
                        :key="index"
                        class="col-md-4 entry">
                        <div class="content">
                            <p>{{ entry.gsx$address.$t }} : {{ entry.gsx$amount.$t }}</p>
                            <c-button @click="whitelist(entry.gsx$address.$t)">
                                Whitelist
                            </c-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<style>
* {
    user-select: text;
}
</style>

<script>
export default {
    components: {
    },
    data() {
        return {
            sheetUrl: 'https://spreadsheets.google.com/feeds/list/1wKotu_xf0Ye2dh6PsJUJSbpXTSG7BcBlwJlScfI5Sbg/1/public/values?alt=json',
            entries: [],
            allAddresses: [],
            newAddresses: []
        }
    },
    computed: {
    },
    created() {
        const monitorAddresses = () => {
            setTimeout(monitorAddresses, 10 * 1000)
        }

        monitorAddresses()
    },
    methods: {
        fetchData() {
            const xhr = new XMLHttpRequest()

            xhr.open('GET', this.sheetUrl)
            xhr.onload = () => {
                this.entries = JSON.parse(xhr.responseText)
                this.entries = this.entries.feed.entry

                for (const i in this.entries) {
                    const entry = this.entries[i]
                    const address = entry.gsx$address.$t
                    const amount = entry.gsx$amount.$t
                    const approved = entry.gsx$approved.$t === 'YES'

                    if (approved) continue

                    // Send ETH call here
                }
            }

            xhr.send()
        },
        whitelist(address) {
            // Send ETH call here

        }
    }
}
</script>

<style lang="scss" scoped>
</style>
