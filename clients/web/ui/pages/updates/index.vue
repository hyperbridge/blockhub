<template>
    <Layout navigationKey="help">
        <div class="row">
            <div class="col-12 mb-4">
                <Block
                    title="Updates"
                    :noGutter="true"
                    :bgGradient="true"
                    :onlyContentBg="true">
                    <p
                        v-if="errors.length"
                        class="errors">
                        <strong>Please correct the following error(s):</strong>
                        <ul>
                            <li
                                v-for="error in errors"
                                :key="error">
                                {{ error }}
                            </li>
                        </ul>
                    </p>
                    <div class="row">
                        <Loading
                            :enabled="!this.$store.state.application.updates.length"
                            size="lg" />
                        <div
                            v-for="(update, index) in this.$store.state.application.updates"
                            :key="index"
                            class="col-md-6 col-sm-12">
                            <ExpandBlock
                                :title="update.title"
                                :description="update.description"
                                :content="update.content" />
                        </div>
                    </div>
                </Block>
            </div>
        </div>
    </Layout>
</template>

<script>
import Vue from 'vue'
import { HeadingBarWithSimpleColor, DottedList } from '@ericmuyser/hyper-ui'

export default {
    components: {
        'ExpandBlock': () => import('@ericmuyser/hyper-ui').then(m => m.ExpandBlock),
        'Block': () => import('@ericmuyser/hyper-ui').then(m => m.Block),
        'Loading': () => import('@ericmuyser/hyper-ui').then(m => m.Loading)
    },
    data() {
        return {
            errors: [],
            updateExpanded: null,
            updates: [],
            entries: []
        }
    },
    computed: {
    },
    created() {
        const sheetUrl = 'https://spreadsheets.google.com/feeds/list/1Ndg4etkvLQZKeTcPfP1L1nJiMWn6UkwFd9RVSMcltp4/1/public/values?alt=json'

        this.$axios({
            method: 'get',
            url: sheetUrl
        })
            .then(res => {
                this.entries = res.data.feed.entry
                try {
                    for (const i in this.entries) {
                        const entry = this.entries[i]

                        let el = Vue.compile(`<div>${entry.gsx$content.$t}</div>`)
                        el = new Vue({
                            components: {
                                HeadingBarWithSimpleColor,
                                DottedList
                            },
                            render: el.render,
                            staticRenderFns: el.staticRenderFns
                        }).$mount()

                        this.$store.state.application.updates.push({
                            version: entry.gsx$version.$t,
                            title: entry.gsx$title.$t,
                            description: entry.gsx$description.$t,
                            content: el.$el.innerHTML // .replace(/\n/g, '<br />')
                        })
                    }
                } catch (e) {
                    console.log(e)
                }
            })
            .catch(err => {
                this.errors.push(`Could not contact update service. Please contact support with this error: ${JSON.stringify(err)}`)
            })
    }
}
</script>

<style lang="scss" scoped>
</style>
