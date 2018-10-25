<template>
    <c-layout navigationKey="help">
        <div class="row">
            <div class="col-12 mb-4">
                <c-block title="Updates" :noGutter="true" :bgGradient="true" :onlyContentBg="true">
                    <p class="errors" v-if="errors.length">
                        <strong>Please correct the following error(s):</strong>
                        <ul>
                            <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <div class="row">
                        <div class="col-md-6 col-sm-12" v-for="(update, index) in updates" :key="index">
                            <c-expand-block 
                                :title="update.title" 
                                :description="update.description" 
                                :content="update.content" 
                            />
                        </div>
                    </div>
                </c-block>
            </div>
        </div>
    </c-layout>
</template>

<script>
import axios from 'axios'

export default {
    components: {
        'c-expand-block': (resolve) => require(['@/ui/components/block/expand'], resolve),
    },
    computed: {
    },
    data() {
        return {
            errors: [],
            updateExpanded: null,
            updates: [],
            entries: []
        }
    },
    created() {
        const sheetUrl = 'https://spreadsheets.google.com/feeds/list/1Ndg4etkvLQZKeTcPfP1L1nJiMWn6UkwFd9RVSMcltp4/1/public/values?alt=json'

        axios({
            method: 'get',
            url: sheetUrl
        })
        .then((res) => {
            this.entries = res.data.feed.entry

            for (let i in this.entries) {
                const entry = this.entries[i]

                this.updates.push({
                    version: entry.gsx$version.$t,
                    title: entry.gsx$title.$t,
                    description: entry.gsx$description.$t,
                    content: entry.gsx$content.$t //.replace(/\n/g, '<br />')
                })
            }
        })
        .catch((err) => {
            this.errors.push('Could not contact update service. Please contact support with this error: ' + JSON.stringify(err))
        })
    }
}
</script>

<style lang="scss" scoped>
</style>
