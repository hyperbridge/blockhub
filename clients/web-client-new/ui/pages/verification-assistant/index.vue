<template>
    <c-layout :showLeftPanel="false" :showRightPanel="false">
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
                    <input type="text" class="form-control" ref="input" placeholder="Enter Google Sheet URL..." v-model="sheetUrl" />
                    <c-button @click="fetchData">Update</c-button>
                </div>
                <div>
                    <div v-for="(entry, index) in entries" class="col-md-4 entry" :key="index" v-if="entry.gsx$approved.$t !== 'YES'">
                        <div class="content">
                            <p>{{entry.gsx$address.$t}} : {{ entry.gsx$amount.$t }}</p>
                            <c-button @click="whitelist(entry.gsx$address.$t)">Whitelist</c-button>
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
    computed: {
    },
    methods: {
        fetchData() {
            const xhr = new XMLHttpRequest()

            xhr.open('GET', this.sheetUrl)
            xhr.onload = () => {
                this.entries = JSON.parse(xhr.responseText)
                this.entries = this.entries.feed.entry

                for (let i in this.entries) {
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
    },
    data() {
        return {
            sheetUrl: 'https://spreadsheets.google.com/feeds/list/1wKotu_xf0Ye2dh6PsJUJSbpXTSG7BcBlwJlScfI5Sbg/1/public/values?alt=json',
            entries: [],
            allAddresses: [],
            newAddresses: []
        }
    },
    created() {
        const monitorAddresses = () => {

            setTimeout(monitorAddresses, 10 * 1000)
        }

        monitorAddresses()
    }
}
</script>

<style lang="scss" scoped>
</style>
