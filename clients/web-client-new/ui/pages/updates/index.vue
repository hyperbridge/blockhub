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
                        <c-loading :enabled="!this.$store.state.application.updates.length" size="lg" />
                        <div class="col-md-6 col-sm-12" v-for="(update, index) in this.$store.state.application.updates" :key="index">
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
import Vue from 'vue'
import HeadingBar from '@/components/heading-bar/simple-colored'
import DottedList from '@/components/list/dots'

export default {
    components: {
        'c-expand-block': (resolve) => require(['@/components/block/expand'], resolve),
        'c-heading-bar-color': (resolve) => require(['@/components/heading-bar/simple-colored'], resolve)
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
            try {
                for (let i in this.entries) {
                    const entry = this.entries[i]

                    let el = Vue.compile('<div>' + entry.gsx$content.$t + '</div>')
                    el = new Vue({
                        components: {
                            'c-heading-bar-color': HeadingBar,
                            'c-dotted-list': DottedList
                        },
                        render: el.render,
                        staticRenderFns: el.staticRenderFns
                    }).$mount()

                    this.$store.state.application.updates.push({
                        version: entry.gsx$version.$t,
                        title: entry.gsx$title.$t,
                        description: entry.gsx$description.$t,
                        content: el.$el.innerHTML //.replace(/\n/g, '<br />')
                    })
                }
            } catch (e) {
                console.log(e)
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
