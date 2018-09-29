(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var updateLandingImage = function updateLandingImage() {
    var frontpage_product = this.$store.state.marketplace.frontpage_product;

    if (frontpage_product && frontpage_product.images) {
        var header = window.document.getElementById('header-bg');
        var randomImage = Math.floor(Math.random() * frontpage_product.images.preview.length);
        header.style['background-image'] = 'url(' + frontpage_product.images.preview[randomImage] + ')';
        header.style['background-size'] = 'cover';
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-button': function cButton(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/buttons/index.vue */ "./src/ui/components/buttons/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tags': function cTags(resolve) {
            return __webpack_require__.e(/*! AMD require */ 102).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tags */ "./src/ui/components/tags/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tab': function cTab(resolve) {
            return __webpack_require__.e(/*! AMD require */ 145).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tab */ "./src/ui/components/tab/tab.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tabs': function cTabs(resolve) {
            return __webpack_require__.e(/*! AMD require */ 146).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tabs */ "./src/ui/components/tab/tabs.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar': function cHeadingBar(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar-fields': function cHeadingBarFields(resolve) {
            return __webpack_require__.e(/*! AMD require */ 90).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar/additional-action */ "./src/ui/components/heading-bar/additional-action.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-product-card': function cProductCard(resolve) {
            return __webpack_require__.e(/*! AMD require */ 151).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/product-card */ "./src/ui/components/store/product-card.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-product-card-dynamic': function cProductCardDynamic(resolve) {
            return __webpack_require__.e(/*! AMD require */ 152).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/product-card-dynamic */ "./src/ui/components/store/product-card-dynamic.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-products-cards': function cProductsCards(resolve) {
            return __webpack_require__.e(/*! AMD require */ 153).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/products-cards */ "./src/ui/components/store/products-cards.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-curators-reviews': function cCuratorsReviews(resolve) {
            return __webpack_require__.e(/*! AMD require */ 154).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/curators-reviews */ "./src/ui/components/store/curators-reviews.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-game-grid': function cGameGrid(resolve) {
            return __webpack_require__.e(/*! AMD require */ 97).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/games-grid/with-description */ "./src/ui/components/games-grid/with-description.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-dropdown': function cDropdown(resolve) {
            return __webpack_require__.e(/*! AMD require */ 155).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/dropdown-menu/type-2 */ "./src/ui/components/dropdown-menu/type-2.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-searcher': function cSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/searcher */ "./src/ui/components/searcher/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-content-navigation': function cContentNavigation(resolve) {
            return __webpack_require__.e(/*! AMD require */ 89).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/content-navigation */ "./src/ui/components/content-navigation/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-assets-list-item': function cAssetsListItem(resolve) {
            return __webpack_require__.e(/*! AMD require */ 127).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/assets-list-item/item */ "./src/ui/components/assets-list-item/item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-news-list-navigation': function cNewsListNavigation(resolve) {
            return __webpack_require__.e(/*! AMD require */ 156).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/news-list/navigation */ "./src/ui/components/news-list/navigation.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-news-list-articles': function cNewsListArticles(resolve) {
            return __webpack_require__.e(/*! AMD require */ 157).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/news-list/articles */ "./src/ui/components/news-list/articles.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 91).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-banner': function cBanner(resolve) {
            return __webpack_require__.e(/*! AMD require */ 128).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/banner/simple */ "./src/ui/components/banner/simple.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-games-explorer': function cGamesExplorer(resolve) {
            return __webpack_require__.e(/*! AMD require */ 158).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/games-explorer */ "./src/ui/components/store/games-explorer.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-assets-list': function cAssetsList(resolve) {
            return __webpack_require__.e(/*! AMD require */ 126).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/assets-list-item */ "./src/ui/components/assets-list-item/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-projects-card': function cProjectsCard(resolve) {
            return __webpack_require__.e(/*! AMD require */ 130).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/projects/card */ "./src/ui/components/projects/card.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-download-block': function cDownloadBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 106).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/download-block */ "./src/ui/components/download-block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-main-banner': function cMainBanner(resolve) {
            return __webpack_require__.e(/*! AMD require */ 129).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/banner */ "./src/ui/components/banner/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-swiper': vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["swiper"],
        'c-slide': vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["swiperSlide"]
    },
    data: function data() {
        return {
            // Slider options
            demoSlider: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            saleSlider: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            show: false, // display content after API request
            offset: 3, // items to display after scroll
            display: 3, // initial items
            trigger: 150, // how far from the bottom to trigger infinite scroll
            end: false // no more updates
        };
    },

    computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
        assets: 'marketplace/assetsArray'
    }), {
        list: function list() {
            var result = [];

            updateLandingImage.bind(this)();

            if (this.$store.state.marketplace.frontpage_product) {
                result.push({
                    type: 'frontpage_product',
                    data: this.$store.state.marketplace.frontpage_product
                });
            }

            result.push({
                type: 'product_slider',
                data: {
                    title: 'Featured',
                    ref: 'featured_products_sl',
                    swiper: this.$refs.featured_products_sl && this.$refs.featured_products_sl.swiper,
                    options: this.demoSlider,
                    products: this.$store.state.marketplace.featured_products
                }
            });

            result.push({
                type: 'product_slider',
                data: {
                    title: 'New Releases',
                    ref: 'demo_products_sl',
                    swiper: this.$refs.demo_products_sl && this.$refs.demo_products_sl.swiper,
                    options: this.demoSlider,
                    products: this.$store.state.marketplace.new_products
                }
            });

            result.push({
                type: 'product_slider',
                data: {
                    title: 'Summer Sale',
                    ref: 'summer_sale_sl',
                    swiper: this.$refs.summer_sale_sl && this.$refs.summer_sale_sl.swiper,
                    options: this.saleSlider,
                    products: this.$store.state.marketplace.sale_products
                }
            });

            result.push({
                type: 'banners',
                data: {}
            });

            result.push({
                type: 'games_explorer',
                data: {}
            });

            result.push({
                type: 'asset_grid',
                data: {
                    assets: this.assets
                }
            });

            result.push({
                type: 'curator_reviews',
                data: {
                    reviews: this.$store.state.marketplace.curator_reviews
                }
            });

            result.push({
                type: 'product_news',
                data: {
                    news: this.$store.state.marketplace.product_news
                }
            });

            return result;
        },
        projects: function projects() {
            return this.$store.state.funding.projects;
        },
        products: function products() {
            if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products) return this.$store.state.cache.screens['/store'].products;

            return this.$store.state.marketplace.products;
        },

        // slice the array of data to display
        sliced: function sliced() {
            return this.list.slice(0, this.display);
        },
        trending_projects: function trending_projects() {
            return this.$store.state.marketplace.trending_projects;
        },
        new_products: function new_products() {
            return this.$store.state.marketplace.new_products;
        },
        product_news: function product_news() {
            return this.$store.state.marketplace.product_news;
        },
        main_banner: function main_banner() {
            return this.$store.state.marketplace.main_banner;
        },
        signed_in: function signed_in() {
            return this.$store.state.network.signed_in;
        },
        simulator_mode: function simulator_mode() {
            return this.$store.state.marketplace.simulator_mode;
        },
        desktop_mode: function desktop_mode() {
            return this.$store.state.marketplace.desktop_mode;
        },
        developer_mode: function developer_mode() {
            return this.$store.state.marketplace.developer_mode;
        }
    }),
    methods: {
        filterTag: function filterTag(tagName) {
            alert(tagName);
        },
        prevClick: function prevClick(carousel) {
            carousel.slidePrev();
        },
        nextClick: function nextClick(carousel) {
            carousel.slideNext();
        },
        showArrowsState: function showArrowsState(el, count) {
            if (el.length > count) {
                return true;
            } else {
                return false;
            }
        },
        scroll: function scroll() {
            var _this = this;

            window.onscroll = function (ev) {
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - _this.trigger) {
                    if (_this.display < _this.list.length) {
                        _this.display = _this.display + _this.offset;
                    } else {
                        _this.end = true;
                    }
                }
            };
            console.log('done scroll');
        },
        toggleDesktopMode: function toggleDesktopMode() {
            this.$store.state.marketplace.desktop_mode = !this.$store.state.marketplace.desktop_mode;
        },
        toggleSignedIn: function toggleSignedIn() {
            this.$store.state.network.signed_in = !this.$store.state.network.signed_in;
        },
        toggleDeveloperMode: function toggleDeveloperMode() {
            this.$store.state.marketplace.developer_mode = !this.$store.state.marketplace.developer_mode;
        },
        toggleSimulator: function toggleSimulator() {
            this.$store.commit('marketplace/setSimulatorMode', !this.$store.state.marketplace.simulator_mode);
        },
        clearSimulatorData: function clearSimulatorData() {
            this.$store.state.network.account.notifications = [];
            this.$store.state.marketplace.trending_projects = [];
            this.$store.state.marketplace.curator_reviews = [];
            this.$store.state.marketplace.product_news = [];
        },
        sendDesktopMessage: function sendDesktopMessage() {
            if (!window.isElectron) {
                return alert('Not on desktop');
            }

            window.desktopBridge.send('ping', this.$refs.desktopMessage.value);
            window.desktopBridge.on('pong', function (event, msg) {
                return console.log('Message from desktop: ', msg);
            });
        }
    },
    mounted: function mounted() {
        $(this.$refs.trendingSlider).ionRangeSlider();

        updateLandingImage.call(this);

        console.log('done mounted');

        this.scroll();
    },
    created: function created() {
        updateLandingImage.call(this);
    },
    beforeDestroy: function beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)';
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=style&index=0&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=template&id=84bb903a":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=template&id=84bb903a ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"store-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 mb-4"},[_c('c-download-block')],1),_vm._v(" "),_c('div',{staticClass:"col-12 mb-4"},[_c('div',{staticClass:"card invert"},[_c('div',{staticClass:"card-body"},[_c('h4',[_vm._v("Want to see the future of BlockHub?")]),_vm._v(" "),_c('div',[_c('c-button',{on:{"click":function($event){_vm.toggleSimulator()}}},[_vm._v("Simulator "+_vm._s(_vm.simulator_mode ? 'ON' : 'OFF'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.toggleDesktopMode()}}},[_vm._v("Desktop Mode "+_vm._s(_vm.desktop_mode ? 'ON' : 'OFF'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.toggleSignedIn()}}},[_vm._v("Signed "+_vm._s(_vm.signed_in ? 'IN' : 'OUT'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.toggleDeveloperMode()}}},[_vm._v("Developer Mode "+_vm._s(_vm.developer_mode ? 'ON' : 'OFF'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.clearSimulatorData()}}},[_vm._v("Clear Data")]),_vm._v(" "),_c('br'),_c('br')],1),_vm._v(" "),_c('div',[_c('c-button',{on:{"click":function($event){_vm.$store.state.network.connection.auto = !_vm.$store.state.network.connection.auto}}},[_vm._v("Auto Connect "+_vm._s(_vm.$store.state.network.connection.auto ? 'ON' : 'OFF'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.$store.state.network.connection.internet = !_vm.$store.state.network.connection.internet}}},[_vm._v("Internet "+_vm._s(_vm.$store.state.network.connection.internet ? 'CONNECTED' : 'DISCONNECTED'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.$store.state.network.connection.datasource = !_vm.$store.state.network.connection.datasource}}},[_vm._v("Datasource "+_vm._s(_vm.$store.state.network.connection.datasource ? 'CONNECTED' : 'DISCONNECTED'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.$store.state.network.connection.operator = !_vm.$store.state.network.connection.operator}}},[_vm._v("Operator "+_vm._s(_vm.$store.state.network.connection.operator ? 'CONNECTED' : 'DISCONNECTED'))]),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.$store.state.network.connection.ethereum = !_vm.$store.state.network.connection.ethereum}}},[_vm._v("Ethereum "+_vm._s(_vm.$store.state.network.connection.ethereum ? 'CONNECTED' : 'DISCONNECTED'))]),_vm._v(" "),_c('br'),_c('br')],1),_vm._v(" "),(_vm.desktop_mode)?_c('div',[_c('input',{ref:"desktopMessage",attrs:{"type":"text"}}),_vm._v(" "),_c('c-button',{on:{"click":function($event){_vm.sendDesktopMessage()}}},[_vm._v("Send Message To Desktop")])],1):_vm._e()])])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('c-main-banner',{staticClass:"margin-bottom-30",attrs:{"image":_vm.main_banner.img,"logo":_vm.main_banner.logo}})],1),_vm._v(" "),_c('div',{staticClass:"col-md-12 col-lg-6 margin-bottom-30"},[_c('c-block',[_c('c-heading-bar',{attrs:{"name":"New Releases","showArrows":false,"showBackground":false}},[_c('template',{slot:"additional-action"},[_c('c-heading-bar-fields',{attrs:{"name":"Reviews","icon":"star"},on:{"clickUp":function($event){},"clickDown":function($event){}}}),_vm._v(" "),_c('c-heading-bar-fields',{attrs:{"name":"Date","icon":"calendar"},on:{"clickUp":function($event){},"clickDown":function($event){}}})],1)],2),_vm._v(" "),_c('c-game-grid',{attrs:{"itemInRow":1,"showRating":false,"showTime":true,"items":_vm.new_products.slice(0,5),"itemBg":"transparent"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-md-12 col-lg-6 margin-bottom-30"},[_c('c-block',[_c('c-heading-bar',{attrs:{"name":"Top 20 Items","showArrows":false,"showBackground":false}},[_c('template',{slot:"additional-action"},[_c('c-heading-bar-fields',{attrs:{"name":"Price","icon":"dollar-sign"},on:{"clickUp":function($event){},"clickDown":function($event){}}}),_vm._v(" "),_c('c-heading-bar-fields',{attrs:{"name":"Trading","icon":"star"},on:{"clickUp":function($event){},"clickDown":function($event){}}})],1)],2),_vm._v(" "),(_vm.assets.length)?_c('c-assets-list',{attrs:{"items":_vm.assets,"itemInRow":"2"}}):_vm._e(),_vm._v(" "),(!_vm.assets.length)?_c('p',[_vm._v("Nothing could be found. Want to "),_c('c-button',{attrs:{"status":"plain"}},[_vm._v("Check for updates")]),_vm._v("?")],1):_vm._e(),_vm._v(" "),_c('c-content-navigation')],1)],1),_vm._v(" "),_c('div',{staticClass:"col-12 margin-bottom-30 d-none"},[_c('c-heading-bar',{attrs:{"name":"Trending Projects","showArrows":false,"showBackground":false}}),_vm._v(" "),_c('div',{staticClass:"img_slider w-100"},[(_vm.trending_projects.length)?_c('div',{ref:"rangeSlider",staticClass:"owl-carousel",attrs:{"data-nav-dots":"false","data-nav-arrow":"true","data-items":"4","data-sm-items":"1","data-md-items":"3","data-lg-items":"4","data-loop":"true","data-autoplay":"false"}},_vm._l((_vm.trending_projects),function(project,index){return _c('c-projects-card',{key:index,attrs:{"project":project}})})):_vm._e(),_vm._v(" "),(!_vm.trending_projects.length)?_c('p',[_vm._v("Nothing could be found. Want to "),_c('c-button',{attrs:{"status":"plain"}},[_vm._v("Check for updates")]),_vm._v("?")],1):_vm._e()])],1)]),_vm._v(" "),_vm._l((_vm.sliced),function(item,index){return (_vm.sliced)?[(item.type === 'frontpage_product')?_c('div',{key:("level-1-" + index),staticClass:"row justify-content-center frontpage-product"},[(item.data.images)?_c('div',{staticClass:"col-12 col-lg-6 frontpage-product__slider"},[_c('img',{attrs:{"src":item.data.images.medium_tile}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6 frontpage-product__info"},[_c('h2',[_c('a',{attrs:{"href":("/#/product/" + (item.data.id))}},[_vm._v(_vm._s(item.data.name))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.data.short_description))]),_vm._v(" "),_c('c-tags',{attrs:{"tags":item.data.author_tags}}),_vm._v(" "),_c('div',{staticClass:"frontpage-product__footer"},[_c('div',{staticClass:"price-list"},[(item.data.old_price)?_c('div',{staticClass:"price old_price"},[_vm._v("\n                                    "+_vm._s(item.data.old_price)+"\n                                    "),_c('span',[_vm._v("usd")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"price"},[_vm._v("\n                                    "+_vm._s(item.data.price)+"\n                                    "),_c('span',[_vm._v("usd")])])]),_vm._v(" "),_c('c-button',{attrs:{"status":"success"}},[_vm._v("Proceed to Purchase")])],1)],1)]):_vm._e(),_vm._v(" "),(item.type === 'product_slider')?_c('div',{key:("level-1-" + index),staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('c-block',{staticClass:"margin-bottom-30",attrs:{"onlyContentBg":true,"noGutter":true}},[_c('c-heading-bar',{staticClass:"mb-0",attrs:{"slot":"title","name":item.data.title,"showArrows":_vm.showArrowsState(item.data.products, 3),"showBackground":true},on:{"prevClick":function($event){item.data.swiper.slidePrev()},"nextClick":function($event){item.data.swiper.slideNext()}},slot:"title"}),_vm._v(" "),(item.data.products.length)?_c('c-swiper',{ref:item.data.ref,refInFor:true,staticStyle:{"margin":"0 -10px"},attrs:{"options":item.data.options}},_vm._l((item.data.products),function(product){return _c('c-slide',{key:product.id},[_c('c-product-card-dynamic',{attrs:{"product":product}})],1)})):_vm._e(),_vm._v(" "),(!item.data.products.length)?_c('p',[_vm._v("Nothing could be found. Want to "),_c('c-button',{attrs:{"status":"plain"}},[_vm._v("Check for updates")]),_vm._v("?")],1):_vm._e()],1)],1)]):_vm._e(),_vm._v(" "),(item.type === 'banners')?_c('div',{key:("level-1-" + index),staticClass:"row align-items-stretch"},[_c('div',{staticClass:"col-12 col-md-4 margin-bottom-30"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-1.png',"link":"/#/home"}},[_c('h4',{staticClass:"text-yellow"},[_vm._v("summer block")]),_vm._v(" "),_c('h3',[_vm._v("Championship")]),_vm._v(" "),_c('p',[_vm._v("You won't believe the prize!")])])],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-8 margin-bottom-30"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-2.png',"link":"/#/curators"}},[_c('div',{staticClass:"align-items-start"},[_c('h3',{staticClass:"text-yellow margin-bottom-5"},[_vm._v("top"),_c('br'),_vm._v("curators")]),_vm._v(" "),_c('h4',{staticClass:"text-capitalize"},[_vm._v("What are they"),_c('br'),_vm._v("playing?")])])])],1)]):_vm._e(),_vm._v(" "),(item.type === 'games_explorer')?_c('c-games-explorer',{key:("level-1-" + index)}):_vm._e(),_vm._v(" "),(item.type === 'banners')?_c('div',{key:index,staticClass:"row margin-bottom-50 margin-top-20 align-items-stretch"},[_c('div',{staticClass:"col-12 col-md-8"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-3.png',"link":"/#/marketplace"}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center"},[_c('div',[_c('h3',{staticClass:"text-yellow"},[_vm._v("Item Marketplace")]),_vm._v(" "),_c('p',[_vm._v("All-in-one spot for games assets")])]),_vm._v(" "),_c('div',{staticClass:"banner-action"},[_c('c-button',{attrs:{"status":"info","icon_hide":"","size":"lg"}},[_vm._v("VISIT NOW")])],1)])])],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-4"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-4.png',"link":"/#/collections"}},[_c('h3',{staticClass:"text-yellow margin-bottom-5"},[_vm._v("Top Collections")]),_vm._v(" "),_c('p',[_vm._v("Our community has curated the best ones for you")])])],1)]):_vm._e(),_vm._v(" "),(item.type === 'asset_grid')?_c('div',{key:("level-1-" + index),staticClass:"row margin-bottom-30"},[_c('div',{staticClass:"col-12"},[_c('c-block',{staticClass:"margin-bottom-30",attrs:{"noGutter":true,"onlyContentBg":true}},[_c('c-heading-bar',{staticClass:"mb-0",attrs:{"slot":"title","headingTabs":['Top Items', 'Most Wanted', 'Best Deals']},slot:"title"},[_c('template',{slot:"additional-action"},[_c('c-heading-bar-fields',{attrs:{"name":"Trending"},on:{"clickUp":function($event){},"clickDown":function($event){}}}),_vm._v(" "),_c('c-heading-bar-fields',{attrs:{"name":"Price","icon":"dollar-sign"},on:{"clickUp":function($event){},"clickDown":function($event){}}})],1)],2),_vm._v(" "),_c('div',{staticClass:"filter-blk d-flex justify-content-between align-items-center"},[_c('div',{staticClass:"d-inline-flex align-items-center"},[_c('c-dropdown',{attrs:{"id":"test2","name":"Filter by Genre","showBg":true}},[_c('a',{attrs:{"href":"#3"}},[_vm._v("RPG")]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_vm._v("ACTION")]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_vm._v("Cars")])]),_vm._v(" "),_c('c-searcher',{attrs:{"customClass":"mb-0"}})],1),_vm._v(" "),(item.data.assets.length)?_c('c-button',{attrs:{"status":"info","icon_hide":true}},[_vm._v("View All")]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between flex-wrap"},[_vm._l((item.data.assets),function(asset,index){return (item.data.assets.length)?_c('div',{key:index,staticClass:"w-50"},[(asset)?_c('c-assets-list-item',{attrs:{"item":asset,"isTransparent":true}},[_c('span',{staticClass:"mr-3"},[_c('c-icon',{attrs:{"name":"box"}}),_vm._v(_vm._s(asset.count)+"\n                                        ")],1),_vm._v(" "),_c('span',{staticClass:"mr-3"},[_c('c-icon',{attrs:{"name":"dollar-sign"}}),_vm._v(_vm._s(asset.price)+"\n                                        ")],1),_vm._v(" "),_c('span',{staticClass:"mr-3"},[_c('c-icon',{attrs:{"name":"dollar-sign"}}),_vm._v("3.45\n                                        ")],1)]):_vm._e()],1):_vm._e()}),_vm._v(" "),(!item.data.assets.length)?_c('p',[_vm._v("Nothing could be found. Want to "),_c('c-button',{attrs:{"status":"plain"}},[_vm._v("Check for updates")]),_vm._v("?")],1):_vm._e()],2)],1)],1)]):_vm._e(),_vm._v(" "),(item.type === 'product_news')?_c('div',{key:("level-1-" + index),staticClass:"row margin-bottom-30"},[_c('div',{staticClass:"col-12"},[_c('c-heading-bar',{attrs:{"name":"What's up with your content","showArrows":false,"showBackground":false}},[_c('template',{slot:"additional-action"},[_c('c-heading-bar-fields',{attrs:{"name":"Price","icon":"dollar-sign"},on:{"clickUp":function($event){},"clickDown":function($event){}}}),_vm._v(" "),_c('c-heading-bar-fields',{attrs:{"name":"Reviews","icon":"star"},on:{"clickUp":function($event){},"clickDown":function($event){}}}),_vm._v(" "),_c('c-heading-bar-fields',{attrs:{"name":"Date","icon":"calendar"},on:{"clickUp":function($event){},"clickDown":function($event){}}})],1)],2),_vm._v(" "),_c('div',{staticClass:"home-tabs"},[_c('c-news-list-navigation',{attrs:{"news":item.data.news}}),_vm._v(" "),_c('div',{staticClass:"tab-content"},_vm._l((item.data.news),function(news,index){return _c('c-news-list-articles',{key:index,attrs:{"news":news,"index":index}})})),_vm._v(" "),(!item.data.news.length)?_c('p',[_vm._v("Nothing could be found. Want to "),_c('c-button',{attrs:{"status":"plain"}},[_vm._v("Check for updates")]),_vm._v("?")],1):_vm._e()],1)],1)]):_vm._e(),_vm._v(" "),(item.type === 'curator_reviews')?_c('c-curators-reviews',{key:("level-1-" + index),attrs:{"reviews":item.data.reviews}}):_vm._e()]:_vm._e()}),_vm._v(" "),_c('transition',{attrs:{"name":"fade-slow"}},[(_vm.end)?_c('div',{},[_c('h3')]):_vm._e(),_vm._v(" "),(!_vm.sliced)?_c('div',{staticClass:"no-updates"},[_c('h3',[_vm._v("\n                        There is no content yet.\n                    ")])]):_vm._e()])],2)])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/home/index.vue":
/*!***************************************!*\
  !*** ./src/ui/screens/home/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_84bb903a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=84bb903a */ "./src/ui/screens/home/index.vue?vue&type=template&id=84bb903a");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/home/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss */ "./src/ui/screens/home/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_84bb903a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_84bb903a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/home/index.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/ui/screens/home/index.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/home/index.vue?vue&type=style&index=0&lang=scss":
/*!************************************************************************!*\
  !*** ./src/ui/screens/home/index.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=style&index=0&lang=scss");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/home/index.vue?vue&type=template&id=84bb903a":
/*!*********************************************************************!*\
  !*** ./src/ui/screens/home/index.vue?vue&type=template&id=84bb903a ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_84bb903a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=84bb903a */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/home/index.vue?vue&type=template&id=84bb903a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_84bb903a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_84bb903a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=24.3df068d6df25dfc2abe2.js.map