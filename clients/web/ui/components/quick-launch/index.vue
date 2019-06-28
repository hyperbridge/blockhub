<template>
    <div class="quick-launch">
        <c-searcher
            v-model="phrase"
            class="margin-bottom-20"
            :results="filteredResults"
            :resultsCount="filteredResults.length"
            @input="search"
            @keyup.enter.native="goToSearchPage()"
            @click="goToSearchPage()">
            <nuxt-link
                slot-scope="props"
                :to="`/product/${props.result.id}`"
                :title="`${props.result.name} - product page`"
                v-html="$options.filters.highlightPhrase(
                    props.result.name, phrase, 'u'
                )" />
        </c-searcher>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components: {
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m)
    },
    data() {
        return {
            phrase: '',
            results: [],
            platforms: [
                { prop: 'win', icon: 'windows', name: 'Windows' },
                { prop: 'mac', icon: 'apple', name: 'macOS' },
                { prop: 'linux', icon: 'linux', name: 'Linux' }
            ],
            choosenPlatforms: [],
            communitySize: 0,
            activeUsers: 0
        }
    },
    methods: {
        search() {
            this.results = this.phrase.length
                ? this.getProductsByName(this.phrase)
                : []
        },
        goToSearchPage() {
            this.$router.push({
                path: '/search',
                query: this.query
            })
        }
    },
    computed: {
        ...mapGetters({
            getProductsByName: 'marketplace/getProductsByName'
        }),
        filteredResults() {
            const { choosenPlatforms } = this

            return this.results
                .filter(result => choosenPlatforms.length
                    ? result.systemRequirements.some(req =>
                        choosenPlatforms.includes(req.os))
                    : true)
        },
        query() {
            const { phrase, choosenPlatforms, communitySize, activeUsers } = this
            const query = {}

            if (phrase.length) query.name = phrase
            if (choosenPlatforms.length) query.platforms = choosenPlatforms
            if (communitySize) query.communitySize = communitySize
            if (activeUsers) query.activeUsers = activeUsers

            return query
        }
    }
}
</script>

<style lang="scss">
    .quick-launch {
        /*background: rgba(0, 0, 0, .2);*/
        .c-input {
            background: transparent  !important;
            border: 0 none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 1) !important;
            border-radius: 0 !important;
            color: #fff !important;
        }
        .input-searcher__icon {
            color: rgba(255, 255, 255, 1) !important;
        }
        .results__content {
            color: #fff !important;
        }
    }
</style>
