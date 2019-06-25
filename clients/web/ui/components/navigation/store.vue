<template>
    <div class="navigation">
        <c-sidebar-menu
            title="STORE"
            subTitle="General"
            mClass="margin-bottom-20">
            <c-sidebar-menu-link to="/">
                Home
            </c-sidebar-menu-link>
            <c-sidebar-menu-link
                v-darklaunch="'COMMUNITY'"
                to="/community">
                Community
            </c-sidebar-menu-link>
            <c-sidebar-menu-link to="/ideas">
                Browse Ideas
            </c-sidebar-menu-link>
            <c-sidebar-menu-link to="/projects">
                Browse Crowdfunds
            </c-sidebar-menu-link>
            <c-sidebar-menu-link to="/games">
                Browse Games
            </c-sidebar-menu-link>
            <c-sidebar-menu-link
                v-darklaunch="'REALMS'"
                to="/realms">
                Browse Realms
            </c-sidebar-menu-link>
            <c-sidebar-menu-link
                v-darklaunch="'CURATORS'"
                to="/curators">
                Browse Curators
            </c-sidebar-menu-link>
            <c-sidebar-menu-link
                v-darklaunch="'COLLECTIONS'"
                to="/collections">
                Browse Collections
            </c-sidebar-menu-link>
            <c-sidebar-menu-link
                v-darklaunch="'MARKETPLACE'"
                to="/marketplace">
                Browse Items
            </c-sidebar-menu-link>
        </c-sidebar-menu>

        <c-sidebar-menu
            subTitle="Browse By Genre"
            subIcon="fas fa-gamepad"
            mClass="margin-bottom-20">
            <c-sidebar-menu-link
                v-for="param in ['Action', 'Adventure', 'RPG', 'Co-op', 'Multiplayer', 'Sports']"
                :key="param"
                :to="{ path: '/search', query: { tags: param } }">
                {{ param }}
            </c-sidebar-menu-link>
        </c-sidebar-menu>


        <h3 class="text-uppercase">
            Search
        </h3>
        <div class="filter-block">
            <div>
                <no-ssr>
                    <c-searcher
                        v-model="phrase"
                        class="margin-bottom-20"
                        :results="filteredResults"
                        :resultsCount="filteredResults.length"
                        @input="search"
                        @keyup.enter.native="goToSearchPage()"
                        @click="goToSearchPage()">
                        <router-link
                            slot-scope="props"
                            :to="`/product/${props.result.id}`"
                            :title="`${props.result.name} - product page`"
                            v-html="$options.filters.highlightPhrase(
                                props.result.name, phrase, 'u'
                            )" />
                    </c-searcher>
                    <h4 class="margin-vertical-20">
                        Community Size
                    </h4>
                    <c-range-slider
                        v-model.number="communitySize"
                        :max="1000" />
                    <h4 class="margin-vertical-20">
                        Active Users
                    </h4>
                    <c-range-slider
                        v-model.number="activeUsers"
                        :max="5000" />
                </no-ssr>
            </div>
            <div class="form-group platform-chose margin-vertical-20">
                <label>Platform Availability</label>
                <a
                    v-for="os in platforms"
                    :key="os.prop"
                    href="#"
                    @click.prevent="handleArray(os.prop, 'choosenPlatforms')">
                    <c-icon
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
                <router-link
                    :to="{ path: '/search', query }"
                    class="search">
                    Search
                </router-link>
                <router-link
                    :to="{
                        path: '/search',
                        query: { showFilters: true }
                    }"
                    class="more-filters">
                    More filters ...
                </router-link>
            </div>
        </div>


        <ul
            class="help-block"
            hidden>
            <li class="title">
                <i class="fas fa-question-circle" />
                Help
            </li>
            <li>
                <c-button status="none" to="purchasing-with-cryptocurrency">
                    Purchasing with Cryptocurrency
                </c-button>
                <c-button status="none" to="content-availability-by-country">
                    Content Availability by Country
                </c-button>
                <c-button status="none" to="becoming-a-community-curator">
                    Becoming a Community Curator
                </c-button>
                <c-button status="none" to="18-plus-games-and-verification">
                    18+ Games and Verification
                </c-button>
                <c-button status="none" to="recporting-misleading-content">
                    Reporting Misleading Content
                </c-button>
            </li>
            <li>
                <c-button
                    status="none"
                    to="/help/topic/1"
                    class="btn btn-link">
                    More...
                </c-button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { handleArray } from '@/mixins'

export default {
    components: {
        'c-sidebar-menu-link': () => import('~/components/sidebar-menu/menu-item').then(m => m.default || m),
        'c-sidebar-menu': () => import('~/components/sidebar-menu').then(m => m.default || m),
        'c-searcher': () => import('~/components/searcher').then(m => m.default || m),
        'c-range-slider': () => import('~/components/range-slider/pure').then(m => m.default || m),
        'c-input-searcher': () => import('~/components/inputs/searcher').then(m => m.default || m)
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
