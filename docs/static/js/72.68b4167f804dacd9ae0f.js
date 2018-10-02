(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['id'],
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 95).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block/index */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar': function cHeadingBar(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-heading-bar-fields': function cHeadingBarFields(resolve) {
            return __webpack_require__.e(/*! AMD require */ 94).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/heading-bar/additional-action */ "./src/ui/components/heading-bar/additional-action.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-pagination': function cPagination(resolve) {
            return __webpack_require__.e(/*! AMD require */ 96).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/pagination/index */ "./src/ui/components/pagination/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-collection-item': function cCollectionItem(resolve) {
            return __webpack_require__.e(/*! AMD require */ 129).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/collection/item */ "./src/ui/components/collection/item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-popup': function cPopup(resolve) {
            return __webpack_require__.e(/*! AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/popups */ "./src/ui/components/popups/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-asset-popup': function cAssetPopup(resolve) {
            return __webpack_require__.e(/*! AMD require */ 130).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/asset-overview-popup */ "./src/ui/components/asset-overview-popup/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            totalOwned: 3,
            show_popup: false,
            tmpItem: {},
            sales: false //ToDo
        };
    },

    methods: {
        numberFormat: function numberFormat(value) {
            return Math.log(value) / Math.log(10);
        },
        closePopup: function closePopup() {
            this.show_popup = false;
            this.tmpItem = {};
        },
        openPopup: function openPopup(obj) {
            this.tmpItem = obj;
            this.show_popup = true;
        }
    },
    computed: {
        asset: function asset() {
            return this.$store.state.marketplace.assets[this.id] || null;
            if (!this.$store.state.marketplace.assets) return;

            return this.$store.state.marketplace.assets[this.id];
        },
        offers: function offers() {
            var ids = this.$store.state.marketplace.assets[this.id].offers_list,
                list = this.$store.state.marketplace.assets,
                arr = [];
            ids.forEach(function (id, i) {
                if (list[id]) arr.push(list[id]);
            });
            return arr;
        },
        inventory: function inventory() {
            var ids = this.$store.state.marketplace.assets[this.id].inventory_list,
                list = this.$store.state.marketplace.assets,
                arr = [];
            ids.forEach(function (id, i) {
                if (list[id]) arr.push(list[id]);
            });
            return arr;
        },
        collections: function collections() {
            var ids = this.$store.state.marketplace.assets[this.id].collections,
                list = this.$store.state.marketplace.collections,
                arr = [];
            console.log(ids);
            console.log('-------');
            console.log(list);
            ids.forEach(function (id, i) {
                if (list[id]) arr.push(list[id]);
            });
            return arr;
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=template&id=15981240&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=template&id=15981240&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"asset-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[(!_vm.asset)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_vm._v("\n                    Asset not found\n                ")])]):_vm._e(),_vm._v(" "),(_vm.asset)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-lg-8 col-xl-9 margin-bottom-15"},[_c('div',{staticClass:"asset-head"},[_c('div',{staticClass:"asset-head__asset-title"},[_c('div',{staticClass:"title-thumb"},[_c('c-img',{attrs:{"src":_vm.asset.image}})],1),_vm._v(" "),_c('div',{staticClass:"title-text"},[_c('h1',[_vm._v(_vm._s(_vm.asset.name))]),_vm._v(" "),_c('span',[_c('strong',[_vm._v(_vm._s(_vm.asset.game_name))])]),_vm._v(" "),_c('span',{staticClass:"company"},[_vm._v(_vm._s(_vm.asset.product_name))])])]),_vm._v(" "),_c('div',{staticClass:"asset-head__icons"},[_c('div',{staticClass:"icon_item"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"fas fa-box"})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"h5 mb-0 font-weight-bold"},[_vm._v(_vm._s(_vm._f("numeralFormat")(_vm.asset.inventory_count,'0 a')))]),_vm._v(" "),_c('p',{staticClass:"p-0"},[_vm._v("Your Inventory")])])]),_vm._v(" "),_c('div',{staticClass:"icon_item"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"fas fa-shopping-basket"})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"h5 mb-0 font-weight-bold"},[_vm._v(_vm._s(_vm._f("numeralFormat")(_vm.asset.existing_count,'0.0 a')))]),_vm._v(" "),_c('p',{staticClass:"p-0"},[_vm._v("For Sale")])])]),_vm._v(" "),_c('div',{staticClass:"icon_item"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"fas fa-globe"})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"h5 mb-0 font-weight-bold"},[_vm._v(_vm._s(_vm._f("numeralFormat")(_vm.asset.for_sale_count,'0.0 a')))]),_vm._v(" "),_c('p',{staticClass:"p-0"},[_vm._v("Existing")])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-4 col-xl-3 margin-bottom-15"},[_c('div',{staticClass:"asset-head__company-logo"},[_c('c-img',{staticClass:"img-fluid",attrs:{"src":"https://i.imgur.com/BngHC98.png"}})],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6 margin-top-15 margin-bottom-15"},[_c('c-block',{staticClass:"h-100",attrs:{"noGutter":true,"onlyContentBg":true,"bgGradient":true}},[_c('c-heading-bar',{attrs:{"name":"Attributes"}},[_c('template',{slot:"additional-action"},[_c('a',{staticClass:"font-weight-bold text-uppercase text-white",attrs:{"href":"#3"}},[_vm._v("\n                                    Game View\n                                ")]),_vm._v(" "),_c('a',{staticClass:"font-weight-bold text-uppercase text-white ml-4",attrs:{"href":"#3"}},[_vm._v("\n                                    Chart\n                                ")])])],2),_vm._v(" "),_c('div',{staticClass:"metadata__table"},_vm._l((_vm.asset.metadata),function(item,index){return _c('div',{key:index,staticClass:"item-row"},[_c('div',{staticClass:"item-label"},[_c('i',{staticClass:"fas fa-file"}),_vm._v("\n                                    "+_vm._s(item.label)+"\n                                ")]),_vm._v(" "),_c('div',{staticClass:"item-description"},[_vm._v("\n                                    "+_vm._s(item.text)+"\n                                ")])])}))],1)],1),_vm._v(" "),_c('div',{staticClass:"col-12 col-lg-6 margin-top-15 margin-bottom-15"},[_c('c-block',{staticClass:"h-100",attrs:{"title":"Sales","noGutter":true,"onlyContentBg":true,"bgGradient":true}},[_c('template',{slot:"additional-action"},[_c('a',{staticClass:"font-weight-bold text-uppercase text-white",attrs:{"href":"#3"}},[_vm._v("\n                                    History\n                                ")]),_vm._v(" "),_c('a',{staticClass:"font-weight-bold text-uppercase text-white ml-4",attrs:{"href":"#3"}},[_vm._v("\n                                    Chart\n                                ")])]),_vm._v(" "),(_vm.sales)?_c('div'):_c('p',[_vm._v("\n                            Nothing to show for now\n                        ")])],2)],1),_vm._v(" "),_c('div',{staticClass:"col-12 margin-top-15 margin-bottom-15"},[_c('c-block',{staticClass:"padding-bottom-0",attrs:{"title":"Offers","noGutter":true,"onlyContentBg":true,"bgGradient":true}},[_c('template',{slot:"additional-action"},[_c('c-heading-bar-fields',{attrs:{"name":"Rarity","icon":"fas fa-trophy"},on:{"click_up":function($event){},"click_down":function($event){}}}),_vm._v(" "),_c('c-heading-bar-fields',{attrs:{"name":"Value","icon":"fas fa-dollar"},on:{"click_up":function($event){},"click_down":function($event){}}})],1),_vm._v(" "),_c('div',{staticClass:"offers__list"},_vm._l((_vm.offers),function(item,index){return _c('div',{key:index,staticClass:"list-item"},[_c('div',{staticClass:"item-name-img"},[_c('c-img',{attrs:{"src":item.image}}),_vm._v(" "),_c('h4',[_vm._v(_vm._s(item.name))])],1),_vm._v(" "),_c('div',{staticClass:"item-company text-center"},[_vm._v("\n                                    "+_vm._s(item.company_name)+"\n                                ")]),_vm._v(" "),_c('div',{staticClass:"item-info"},[_c('span',{staticClass:"user_name"},[_vm._v("\n                                        "+_vm._s(item.user_name)+"\n                                    ")]),_vm._v(" "),_c('span',{staticClass:"price"},[_vm._v("\n                                        $ "+_vm._s(item.price['current'])+"\n                                    ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-success float-right",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-cart-plus"}),_vm._v(" Proceed to Purchase\n                                    ")])])])})),_vm._v(" "),_c('c-pagination',{attrs:{"pages":5,"showBg":false}},[_c('template',{staticClass:"text-left",slot:"left-content"},[_c('strong',[_vm._v("245345")]),_vm._v(" Available on the market\n                            ")]),_vm._v(" "),_c('template',{staticClass:"text-right",slot:"right-content"},[_c('strong',[_vm._v("319")]),_vm._v(" On the list\n                                "),_c('a',{staticClass:"text-white mx-2",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-reply"})]),_vm._v(" "),_c('a',{staticClass:"text-white",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-bookmark"})])])],2)],2)],1),_vm._v(" "),_c('div',{staticClass:"col-12 margin-top-15 margin-bottom-15"},[_c('c-block',{staticClass:"padding-bottom-0",attrs:{"title":"Yours Inventory","noGutter":true,"onlyContentBg":true,"bgGradient":true}},[_c('div',{staticClass:"my-assets__list"},_vm._l((_vm.inventory),function(item,index){return _c('div',{key:index,staticClass:"item"},[_c('c-button',{attrs:{"status":"plain"},on:{"click":function($event){_vm.openPopup(item)}}},[_c('i',{staticClass:"fas fa-external-link-alt"})]),_vm._v(" "),_c('div',{staticClass:"item_thumb"},[_c('c-img',{attrs:{"src":item.image}})],1),_vm._v(" "),_c('div',{staticClass:"item_info"},[_c('h5',[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',{staticClass:"price"},[_vm._v("\n                                        $ "+_vm._s(item.price['current'])+"\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"switcher"},[_c('c-switch',{attrs:{"label":"Accept offers","checked":item.accept_offers,"size":"sm","label_position":"left"}})],1)])],1)})),_vm._v(" "),_c('c-pagination',{attrs:{"pages":5,"showBg":false}})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-12 margin-top-15 margin-bottom-15"},[_c('c-block',{staticClass:"pb-0",attrs:{"title":"Collections Containing this Item","noGutter":true,"onlyContentBg":true,"bgGradient":true}},[_c('div',{staticClass:"collections-container"},_vm._l((_vm.collections),function(item,index){return (_vm.collections)?_c('div',{key:index,staticClass:"item"},[_c('c-collection-item',{attrs:{"item":item}})],1):_c('p',[_vm._v("\n                                Nothing to show for now\n                            ")])})),_vm._v(" "),(_vm.collections)?_c('c-pagination',{attrs:{"pages":5,"showBg":false}}):_vm._e()],1)],1)]):_vm._e()])]),_vm._v(" "),_c('c-popup',{attrs:{"activated":_vm.show_popup,"width":550},on:{"close":_vm.closePopup}},[_c('c-asset-popup',{attrs:{"slot":"custom_content","asset":_vm.tmpItem},slot:"custom_content"})],1)],1)}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/asset-overview/index.vue":
/*!*************************************************!*\
  !*** ./src/ui/screens/asset-overview/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_15981240_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=15981240&scoped=true */ "./src/ui/screens/asset-overview/index.vue?vue&type=template&id=15981240&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/asset-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_15981240_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true */ "./src/ui/screens/asset-overview/index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_15981240_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_15981240_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15981240",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/asset-overview/index.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/ui/screens/asset-overview/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/asset-overview/index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./src/ui/screens/asset-overview/index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15981240_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=style&index=0&id=15981240&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15981240_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15981240_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15981240_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15981240_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_15981240_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/asset-overview/index.vue?vue&type=template&id=15981240&scoped=true":
/*!*******************************************************************************************!*\
  !*** ./src/ui/screens/asset-overview/index.vue?vue&type=template&id=15981240&scoped=true ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15981240_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=15981240&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/asset-overview/index.vue?vue&type=template&id=15981240&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15981240_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_15981240_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=72.68b4167f804dacd9ae0f.js.map