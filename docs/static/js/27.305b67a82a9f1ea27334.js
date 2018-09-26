(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            return __webpack_require__.e(/*! AMD require */ 96).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tags */ "./src/ui/components/tags/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tab': function cTab(resolve) {
            return __webpack_require__.e(/*! AMD require */ 135).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tab */ "./src/ui/components/tab/tab.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tabs': function cTabs(resolve) {
            return __webpack_require__.e(/*! AMD require */ 136).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tabs */ "./src/ui/components/tab/tabs.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar': function cHeadingBar(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar-fields': function cHeadingBarFields(resolve) {
            return __webpack_require__.e(/*! AMD require */ 85).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar/additional-action */ "./src/ui/components/heading-bar/additional-action.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-product-card': function cProductCard(resolve) {
            return __webpack_require__.e(/*! AMD require */ 137).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/product-card */ "./src/ui/components/store/product-card.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-product-card-dynamic': function cProductCardDynamic(resolve) {
            return __webpack_require__.e(/*! AMD require */ 138).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/product-card-dynamic */ "./src/ui/components/store/product-card-dynamic.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-products-cards': function cProductsCards(resolve) {
            return __webpack_require__.e(/*! AMD require */ 139).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/products-cards */ "./src/ui/components/store/products-cards.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-curators-reviews': function cCuratorsReviews(resolve) {
            return __webpack_require__.e(/*! AMD require */ 140).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/curators-reviews */ "./src/ui/components/store/curators-reviews.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-game-grid': function cGameGrid(resolve) {
            return __webpack_require__.e(/*! AMD require */ 94).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/games-grid/with-description */ "./src/ui/components/games-grid/with-description.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-dropdown': function cDropdown(resolve) {
            return __webpack_require__.e(/*! AMD require */ 141).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/dropdown-menu/type-2 */ "./src/ui/components/dropdown-menu/type-2.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-searcher': function cSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/searcher */ "./src/ui/components/searcher/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-content-navigation': function cContentNavigation(resolve) {
            return __webpack_require__.e(/*! AMD require */ 84).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/content-navigation */ "./src/ui/components/content-navigation/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-assets-list-item': function cAssetsListItem(resolve) {
            return __webpack_require__.e(/*! AMD require */ 119).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/assets-list-item/item */ "./src/ui/components/assets-list-item/item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-news-list-navigation': function cNewsListNavigation(resolve) {
            return __webpack_require__.e(/*! AMD require */ 142).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/news-list/navigation */ "./src/ui/components/news-list/navigation.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-news-list-articles': function cNewsListArticles(resolve) {
            return __webpack_require__.e(/*! AMD require */ 143).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/news-list/articles */ "./src/ui/components/news-list/articles.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 86).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-banner': function cBanner(resolve) {
            return __webpack_require__.e(/*! AMD require */ 120).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/banner/simple */ "./src/ui/components/banner/simple.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-games-explorer': function cGamesExplorer(resolve) {
            return __webpack_require__.e(/*! AMD require */ 144).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/store/games-explorer */ "./src/ui/components/store/games-explorer.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-swiper': vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
        'c-slide': vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"]
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
            }
        };
    },

    computed: {
        projects: function projects() {
            return this.$store.state.funding.projects;
        },
        products: function products() {
            if (this.$store.state.cache.screens['/store'] && this.$store.state.cache.screens['/store'].products) return this.$store.state.cache.screens['/store'].products;

            return this.$store.state.marketplace.products;
        },
        marketplace: function marketplace() {
            return this.$store.state.marketplace;
        },
        new_products: function new_products() {
            return this.marketplace.new_products;
        },
        sale_products: function sale_products() {
            return this.marketplace.sale_products;
        },
        frontpage_product: function frontpage_product() {
            updateLandingImage.bind(this)();

            return this.marketplace.frontpage_product;
        },
        summer_sale_sl: function summer_sale_sl() {
            return this.$refs.summer_sale_sl.swiper;
        },
        demo_products_sl: function demo_products_sl() {
            return this.$refs.demo_products_sl.swiper;
        },
        curators_reviews: function curators_reviews() {
            return this.$store.state.network.curator_reviews;
        },
        product_news: function product_news() {
            return this.$store.state.network.product_news;
        },
        assets: function assets() {
            return this.marketplace.assets;
        }
    },
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
        }
    },
    mounted: updateLandingImage,
    created: updateLandingImage,
    beforeDestroy: function beforeDestroy() {
        window.document.getElementById('header-bg').style['background-image'] = 'url(/static/img/products/default.png)';
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=template&id=7ba0d710&scoped=true":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=template&id=7ba0d710&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"store-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[(_vm.frontpage_product)?_c('div',{staticClass:"row justify-content-center frontpage-product"},[(_vm.frontpage_product.images)?_c('div',{staticClass:"col-12 col-lg-6 frontpage-product__slider"},[_c('img',{attrs:{"src":_vm.frontpage_product.images.medium_tile}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6 frontpage-product__info"},[_c('h2',[_c('a',{attrs:{"href":("/#/product/" + (_vm.frontpage_product.id))}},[_vm._v(_vm._s(_vm.frontpage_product.name))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.frontpage_product.short_description))]),_vm._v(" "),_c('c-tags',{attrs:{"tags":_vm.frontpage_product.author_tags}}),_vm._v(" "),_c('div',{staticClass:"frontpage-product__footer"},[_c('div',{staticClass:"price-list"},[(_vm.frontpage_product.old_price)?_c('div',{staticClass:"price old_price"},[_vm._v("\n                                "+_vm._s(_vm.frontpage_product.old_price)+"\n                                "),_c('span',[_vm._v("usd")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"price"},[_vm._v("\n                                "+_vm._s(_vm.frontpage_product.price)+"\n                                "),_c('span',[_vm._v("usd")])])]),_vm._v(" "),_c('c-button',{attrs:{"status":"success","icon":"cart-plus"}},[_vm._v("Proceed to Purchase")])],1)],1)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('c-block',{staticClass:"margin-bottom-30",attrs:{"onlyContentBg":true,"noGutter":true}},[_c('c-heading-bar',{staticClass:"mb-0",attrs:{"slot":"title","name":"New Releases","showArrows":_vm.showArrowsState(_vm.new_products, 3),"showBackground":true},on:{"prevClick":function($event){_vm.demo_products_sl.slidePrev()},"nextClick":function($event){_vm.demo_products_sl.slideNext()}},slot:"title"}),_vm._v(" "),_c('c-swiper',{ref:"demo_products_sl",staticStyle:{"margin":"0 -10px"},attrs:{"options":_vm.demoSlider}},_vm._l((_vm.new_products),function(product){return _c('c-slide',{key:product.id},[_c('c-product-card-dynamic',{attrs:{"product":product}})],1)}))],1),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"onlyContentBg":true,"noGutter":true}},[_c('c-heading-bar',{staticClass:"mb-0",attrs:{"slot":"title","name":"Summer Sale","showArrows":_vm.showArrowsState(_vm.sale_products, 3),"showBackground":true},on:{"prevClick":function($event){_vm.summer_sale_sl.slidePrev()},"nextClick":function($event){_vm.summer_sale_sl.slideNext()}},slot:"title"}),_vm._v(" "),(_vm.sale_products.length>0)?_c('c-swiper',{ref:"summer_sale_sl",staticStyle:{"margin":"0 -10px"},attrs:{"options":_vm.saleSlider}},_vm._l((_vm.sale_products),function(product,index){return _c('c-slide',{key:index},[_c('c-product-card-dynamic',{attrs:{"product":product}})],1)})):_vm._e()],1)],1)]),_vm._v(" "),_c('div',{staticClass:"row align-items-stretch"},[_c('div',{staticClass:"col-12 col-md-4 margin-bottom-30"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-1.png',"link":"/#/home"}},[_c('h4',{staticClass:"text-yellow"},[_vm._v("summer block")]),_vm._v(" "),_c('h3',[_vm._v("Championship")]),_vm._v(" "),_c('p',[_vm._v("You won't believe the prize!")])])],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-8 margin-bottom-30"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-2.png',"link":"/#/home"}},[_c('div',{staticClass:"align-items-start"},[_c('h3',{staticClass:"text-yellow margin-bottom-5"},[_vm._v("top"),_c('br'),_vm._v("curators")]),_vm._v(" "),_c('h4',{staticClass:"text-capitalize"},[_vm._v("What are they"),_c('br'),_vm._v("playing?")])])])],1)]),_vm._v(" "),_c('c-games-explorer'),_vm._v(" "),_c('div',{staticClass:"row margin-bottom-50 margin-top-20 align-items-stretch"},[_c('div',{staticClass:"col-12 col-md-8"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-3.png',"link":"/#/home"}},[_c('div',{staticClass:"d-flex justify-content-between align-items-center"},[_c('div',[_c('h3',{staticClass:"text-yellow"},[_vm._v("Item Marketplace")]),_vm._v(" "),_c('p',[_vm._v("You all in one spot for games assets")])]),_vm._v(" "),_c('div',{staticClass:"banner-action"},[_c('c-button',{attrs:{"status":"info","icon_hide":"","size":"lg"}},[_vm._v("VISIT NOW")])],1)])])],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-4"},[_c('c-banner',{attrs:{"imgSrc":'/static/img/banners/banner-4.png',"link":"/#/home"}},[_c('h3',{staticClass:"text-yellow margin-bottom-5"},[_vm._v("Top Collections")]),_vm._v(" "),_c('p',[_vm._v("We curated the best ones for you")])])],1)]),_vm._v(" "),_c('div',{staticClass:"row margin-bottom-30"},[_c('div',{staticClass:"col-12"},[_c('c-block',{staticClass:"margin-bottom-30",attrs:{"noGutter":true,"onlyContentBg":true}},[_c('c-heading-bar',{staticClass:"mb-0",attrs:{"slot":"title","headingTabs":['Top 10 Items', 'Most Wanted', 'Top 10 Prices']},slot:"title"},[_c('template',{slot:"additional-action"},[_c('c-heading-bar-fields',{attrs:{"name":"Trending"},on:{"clickUp":function($event){},"clickDown":function($event){}}}),_vm._v(" "),_c('c-heading-bar-fields',{attrs:{"name":"Price","icon":"dollar-sign"},on:{"clickUp":function($event){},"clickDown":function($event){}}})],1)],2),_vm._v(" "),_c('div',{staticClass:"filter-blk"},[_c('div',{staticClass:"d-flex align-items-center"},[_c('c-dropdown',{attrs:{"id":"test2","name":"Filter by Genre","showBg":true}},[_c('a',{attrs:{"href":"#3"}},[_vm._v("RPG")]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_vm._v("ACTION")]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_vm._v("Cars")])]),_vm._v(" "),_c('c-searcher',{attrs:{"customClass":"mb-0"}})],1),_vm._v(" "),_c('c-button',{attrs:{"status":"info","icon_hide":true}},[_vm._v("All New Releases")])],1),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between flex-wrap"},_vm._l((_vm.assets),function(item,index){return _c('div',{key:index,staticClass:"w-50"},[_c('c-assets-list-item',{attrs:{"item":item,"isTransparent":true}},[_c('span',{staticClass:"mr-3"},[_c('c-icon',{attrs:{"name":"box"}}),_vm._v(_vm._s(item.count)+"\n                                    ")],1),_vm._v(" "),_c('span',{staticClass:"mr-3"},[_c('c-icon',{attrs:{"name":"dollar-sign"}}),_vm._v(_vm._s(item.price)+"\n                                    ")],1),_vm._v(" "),_c('span',{staticClass:"mr-3"},[_c('c-icon',{attrs:{"name":"dollar-sign"}}),_vm._v("3.45\n                                    ")],1)])],1)}))],1),_vm._v(" "),_c('c-block',{attrs:{"noGutter":true,"bgColor":false,"title":"What's up with your content"}},[_c('div',{staticClass:"home-tabs"},[_c('c-news-list-navigation',{attrs:{"content_news":_vm.product_news}}),_vm._v(" "),_c('div',{staticClass:"tab-content"},_vm._l((_vm.product_news),function(news,index){return _c('c-news-list-articles',{key:index,attrs:{"news":news,"index":index}})}))],1)])],1)]),_vm._v(" "),_c('c-curators-reviews',{attrs:{"reviews":_vm.curators_reviews}})],1)])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/store/index.vue":
/*!****************************************!*\
  !*** ./src/ui/screens/store/index.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7ba0d710_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7ba0d710&scoped=true */ "./src/ui/screens/store/index.vue?vue&type=template&id=7ba0d710&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/store/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_7ba0d710_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true */ "./src/ui/screens/store/index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7ba0d710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7ba0d710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ba0d710",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/store/index.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/ui/screens/store/index.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/store/index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/ui/screens/store/index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ba0d710_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=style&index=0&id=7ba0d710&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ba0d710_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ba0d710_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ba0d710_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ba0d710_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7ba0d710_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/store/index.vue?vue&type=template&id=7ba0d710&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/ui/screens/store/index.vue?vue&type=template&id=7ba0d710&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ba0d710_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7ba0d710&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/store/index.vue?vue&type=template&id=7ba0d710&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ba0d710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7ba0d710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=27.305b67a82a9f1ea27334.js.map