<template>
    <div class="navigation">
        <SidebarMenu
            title="STORE"
            subTitle="General"
            mClass="margin-bottom-20">
            <SidebarMenuItem to="/">
                Home
            </SidebarMenuItem>
            <SidebarMenuItem
                v-access="'community'"
                to="/community">
                Community
            </SidebarMenuItem>
            <SidebarMenuItem to="/ideas">
                Browse Ideas
            </SidebarMenuItem>
            <SidebarMenuItem to="/projects">
                Browse Crowdfunds
            </SidebarMenuItem>
            <SidebarMenuItem to="/games">
                Browse Games
            </SidebarMenuItem>
            <SidebarMenuItem
                v-access="'realm.read'"
                to="/realms">
                Browse Realms
            </SidebarMenuItem>
            <SidebarMenuItem
                v-access="'curator.read'"
                to="/curators">
                Browse Curators
            </SidebarMenuItem>
            <SidebarMenuItem
                v-access="'collection.read'"
                to="/collections">
                Browse Collections
            </SidebarMenuItem>
            <SidebarMenuItem
                v-access="'marketplace'"
                to="/marketplace">
                Browse Items
            </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu
            subTitle="Browse By Genre"
            subIcon="fas fa-gamepad"
            mClass="margin-bottom-20">
            <SidebarMenuItem
                v-for="param in ['Action', 'Adventure', 'RPG', 'Co-op', 'Multiplayer', 'Sports']"
                :key="param"
                :to="{ path: '/search', query: { tags: param } }">
                {{ param }}
            </SidebarMenuItem>
        </SidebarMenu>


        <no-ssr>
            <h3 class="text-uppercase">
                Search
            </h3>
            <div class="filter-block">
                <Searcher
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
                </Searcher>
                <h4 class="margin-vertical-20">
                    Community Size
                </h4>
                <RangeSlider
                    v-model.number="communitySize"
                    :max="1000" />
                <h4 class="margin-vertical-20">
                    Active Users
                </h4>
                <RangeSlider
                    v-model.number="activeUsers"
                    :max="5000" />
                <div class="form-group platform-chose margin-vertical-20">
                    <label>Platform Availability</label>
                    <a
                        v-for="os in platforms"
                        :key="os.prop"
                        href="#"
                        @click.prevent="handleArray(os.prop, 'choosenPlatforms')">
                        <Icon
                            cat="fab"
                            class="platform-icon"
                            :name="os.icon"
                            :class="[ choosenPlatforms.includes(os.prop)
                                ? 'platform-icon--active'
                                : 'platform-icon--inactive'
                            ]" />
                    </a>
                </div>
                <div class="action">
                    <nuxt-link
                        :to="{ path: '/search', query }"
                        class="search">
                        Search
                    </nuxt-link>
                    <nuxt-link
                        :to="{
                            path: '/search',
                            query: { showFilters: true }
                        }"
                        class="more-filters">
                        More filters ...
                    </nuxt-link>
                </div>
            </div>
        </no-ssr>


        <ul
            class="help-block"
            hidden>
            <li class="title">
                <i class="fas fa-question-circle" />
                Help
            </li>
            <li>
                <Button status="none" to="purchasing-with-cryptocurrency">
                    Purchasing with Cryptocurrency
                </Button>
                <Button status="none" to="content-availability-by-country">
                    Content Availability by Country
                </Button>
                <Button status="none" to="becoming-a-community-curator">
                    Becoming a Community Curator
                </Button>
                <Button status="none" to="18-plus-games-and-verification">
                    18+ Games and Verification
                </Button>
                <Button status="none" to="recporting-misleading-content">
                    Reporting Misleading Content
                </Button>
            </li>
            <li>
                <Button
                    status="none"
                    to="/help/topic/1"
                    class="btn btn-link">
                    More...
                </Button>
            </li>
        </ul>
    </div>
</template>

<script>
import { handleArray } from '@/mixins'

export default {
    components: {
        'SidebarMenuItem': () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenuItem),
        'SidebarMenu': () => import('@ericmuyser/hyper-ui').then(m => m.SidebarMenu),
        'Searcher': () => import('@ericmuyser/hyper-ui').then(m => m.Searcher),
        'RangeSlider': () => import('@ericmuyser/hyper-ui').then(m => m.RangeSlider),
        'Icon': () => import('@ericmuyser/hyper-ui').then(m => m.Icon),
        'Button': () => import('@ericmuyser/hyper-ui').then(m => m.Button),
    },
    mixins: [handleArray],
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
    computed: {
        getProductsByName() {
            return []
        },
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
    goToSearchPage() {
        this.$router.push({
            path: '/search',
            query: this.query
        })
    }
}
</script>

<style lang="scss" scoped>
    .filter-block {
        .form-group{
            margin-bottom: 10px;
        }
        label {
            font-size: 14px;
            font-weight: bold;
            color: #fff;
        }
        .result {
            font-size: 14px;
        }
        .form-control-range{
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 3px;
            background: #d3d3d3;
            outline: none;
            opacity: 0.7;
            margin: 10px 0;
            border-radius: 3px;
            -webkit-transition: .2s;
            transition: opacity .2s;
            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                border-radius: 100%;
                width: 8px;
                height: 8px;
                background: #FFFFFF;
                cursor: pointer;
                box-shadow: 0 0 2px rgba(0, 0, 0, .6);
            }

            &::-moz-range-thumb {
                width: 8px;
                height: 8px;
                background: #FFFFFF;
                cursor: pointer;
                box-shadow: 0 0 2px rgba(0, 0, 0, .6);
            }
        }
        .platform-chose{
            margin-bottom: 15px;
            display: block;
            text-align: left;
            label{
                display: block;
                margin-bottom: 13px;
            }
            a{
                display: inline-block;
                font-size: 22px;
                color: #fff;
                margin-right: 10px;
            }
        }
        .action{
            margin: 20px 0;
            a{
                text-transform: uppercase;
                font-weight: bold;
                color: #fff;
                &.search{
                    background: #5D75F7;
                    color: #fff;
                    border-radius: 3px;
                    padding: 8px 14px;
                }
                &.more-filters{
                    display:block;
                    margin-top: 12px;
                }
                &:first-child{
                    margin-right: 15px;
                }
            }
        }
    }
    .help-block{
        li{
            .btn-link{
                color: #fff;
                text-transform: uppercase;
                padding: 3px 0;
                width: auto;
                font-weight: bold;
                font-size: 13px;
                &:hover{
                    background: transparent;
                    color: #fff;
                }
            }
        }
    }

    .platform-icon--active {
        text-shadow: 0 0 5px rgba(255,255,255, .7);
    }
    .platform-icon--inactive:not(:hover) {
        opacity: .7;
    }
</style>
