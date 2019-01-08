<template>
    <div class="navigation" id="navigation-default">

        <c-sidebar-menu title="STORE" sub_title="General" mClass="margin-bottom-20">
            <c-sidebar-menu-link :to="{ name: 'Home' }">Home</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Community' }" v-darklaunch="'COMMUNITY'">Community</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Ideas' }">Browse Ideas</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Crowdfunds' }">Browse Crowdfunds</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Games' }">Browse Games</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Realms' }" v-darklaunch="'REALMS'">Browse Realms</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Curators' }" v-darklaunch="'CURATORS'">Browse Curators</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Collections' }" v-darklaunch="'COLLECTIONS'">Browse Collections</c-sidebar-menu-link>
            <c-sidebar-menu-link :to="{ name: 'Marketplace' }" v-darklaunch="'MARKETPLACE'">Browse Items</c-sidebar-menu-link>
        </c-sidebar-menu>

        <c-sidebar-menu sub_title="Browse By Genre" sub_icon="fas fa-gamepad" mClass="margin-bottom-20">
            <c-sidebar-menu-link
                v-for="param in ['Action', 'Adventure', 'RPG', 'Co-op', 'Multiplayer', 'Sports']"
                :key="param"
                :to="{ name: 'Search', query: { tags: param } }"
            >
                {{ param }}
            </c-sidebar-menu-link>
        </c-sidebar-menu>


        <h3 class="text-uppercase">Search</h3>
        <div class="filter-blk">
            <c-searcher
                @input="search"
                @keyup.enter.native="goToSearchPage()"
                @click="goToSearchPage()"
                v-model="phrase"
                class="margin-bottom-20"
                :results="filteredResults"
                :resultsCount="filteredResults.length"
            >
                <router-link
                    slot-scope="props"
                    :to="`/product/${props.result.id}`"
                    v-html="$options.filters.highlightPhrase(
                        props.result.name, phrase, 'u'
                    )"
                    :title="`${props.result.name} - product page`"
                />
            </c-searcher>

            <h4 class="margin-vertical-20">Community Size</h4>
            <c-range-slider
                v-model.number="communitySize"
                :max="1000"
            />

            <h4 class="margin-vertical-20">Active Users</h4>
            <c-range-slider
                v-model.number="activeUsers"
                :max="5000"
            />

            <div class="form-group platform-chose margin-vertical-20">
                <label>Platform Availability</label>
                <a
                    v-for="os in platforms"
                    :key="os.prop"
                    href="#"
                    @click.prevent="handleArray(os.prop, 'choosenPlatforms')"
                >
                    <c-icon
                        cat="fab"
                        class="platform-icon"
                        :name="os.icon"
                        :class="[ choosenPlatforms.includes(os.prop)
                            ? 'platform-icon--active'
                            : 'platform-icon--inactive'
                        ]"
                    />
                </a>
            </div>
            <div class="action">
                <router-link
                    :to="{ name: 'Search', query }"
                    class="search"
                >
                    Search
                </router-link>
                <router-link
                    :to="{
                        name: 'Search',
                        query: { showFilters: true }
                    }"
                    class="more-filters"
                >
                    More filters ...
                </router-link>
            </div>
        </div>


        <ul class="help-block" hidden>
            <li class="title">
                <i class="fas fa-question-circle"></i>
                Help
            </li>
            <li>
                <c-button status="none" to="/help/1/article/purchasing-with-cryptocurrency">Purchasing with Cryptocurrency</c-button>
                <c-button status="none" to="/help/1/article/content-availability-by-country">Content Availability by Country</c-button>
                <c-button status="none" to="/help/1/article/becoming-a-community-curator">Becoming a Community Curator</c-button>
                <c-button status="none" to="/help/1/article/18-plus-games-and-verification">18+ Games and Verification</c-button>
                <c-button status="none" to="/help/1/article/recporting-misleading-content">Reporting Misleading Content</c-button>
            </li>
            <li>
                <c-button status="none" to="/help/1" class="btn btn-link">
                    More...
                </c-button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { arrayHandler } from '@/mixins'

    export default {
        components: {
            'c-sidebar-menu-link': (resolve) => require(['@/ui/components/sidebar-menu/menu_item'], resolve),
            'c-sidebar-menu': (resolve) => require(['@/ui/components/sidebar-menu/index'], resolve),
            'c-searcher': (resolve) => require(['@/ui/components/searcher'], resolve),
            'c-range-slider': (resolve) => require(['@/ui/components/range-slider/pure'], resolve),
            'c-input-searcher': (resolve) => require(['@/ui/components/inputs/searcher'], resolve),
        },
        mixins: [arrayHandler],
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
                    name: 'Search',
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
                            choosenPlatforms.includes(req.os)
                          )
                        : true
                    )
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
    .filter-blk {
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
