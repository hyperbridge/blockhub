(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'home',
  data: function data() {
    return {};
  },

  computed: {
    product: function product() {
      return this.$store.state.marketplace.products ? this.$store.state.marketplace.products['5'] : {};
    },
    article: function article() {
      return this.$store.state.news.articles ? this.$store.state.news.articles['post1'] : {};
    }
  },
  //   computed: mapGetters([
  //     'evenOrOdd'
  //   ]),
  methods: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    updateTitle: function updateTitle() {
      var title = 'newww2';

      this.$store.dispatch('marketplace/updateProductTitle', { id: '5', title: title });
      this.$data.xxx = title;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])),
  components: {
    'c-layout': function cLayout(resolve) {
      return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--7-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=style&index=0&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--7-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=template&id=ac008ff2":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=template&id=ac008ff2 ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"page-heading"},[_c('div',{staticClass:"page-heading__container"},[_c('h1',{staticClass:"title"},[_vm._v("Sitemap")]),_vm._v(" "),_c('p',{staticClass:"caption"},[_vm._v("Mostly for testing")])])]),_vm._v(" "),_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"card invert"},[_c('div',{staticClass:"card-body"},[_c('ul',[_c('li',[_c('a',{attrs:{"href":"#/news"}},[_vm._v("News")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/help"}},[_vm._v("Help")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/support"}},[_vm._v("Support")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/changelog"}},[_vm._v("Changelog")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/store"}},[_vm._v("Store")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/store/cart"}},[_vm._v("Store Cart")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/store/checkout"}},[_vm._v("Store Checkout")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/store/invoices"}},[_vm._v("Store Invoices")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/store/invoice/1"}},[_vm._v("Store Invoice #1")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/settings"}},[_vm._v("Settings")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/settings/profile"}},[_vm._v("Settings > Profile")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/settings/client"}},[_vm._v("Settings > Client")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/account"}},[_vm._v("Account")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/account/signup"}},[_vm._v("Account > Sign Up")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/account/signin"}},[_vm._v("Account > Sign In")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/account/wallets"}},[_vm._v("Account > Wallets")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/account/new-wallet"}},[_vm._v("Account > New Wallet")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/account/identities"}},[_vm._v("Account > Identities")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/account/new-identity"}},[_vm._v("Account > New Identity")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/wallet/1"}},[_vm._v("Wallet #1")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/wallet/1/transactions"}},[_vm._v("Wallet #1 > Transactions")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/wallet/1/tokens"}},[_vm._v("Wallet #1 > Tokens")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/wallet/1/send"}},[_vm._v("Wallet #1 > Send")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/wallet/1/receive"}},[_vm._v("Wallet #1 > Receive")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/identity/1"}},[_vm._v("Identity #1")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/identity/1/assets"}},[_vm._v("Identity #1 > Digital Assets")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/identity/1/contacts"}},[_vm._v("Identity #1 > Contacts")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/identity/1/projects"}},[_vm._v("Identity #1 > Projects")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/identity/1/bounties"}},[_vm._v("Identity #1 > Bounties")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/product/1"}},[_vm._v("Product #1")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/product/1/community"}},[_vm._v("Product #1 > Community")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/product/1/projects"}},[_vm._v("Product #1 > Projects")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/product/1/assets"}},[_vm._v("Product #1 > Assets")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/community"}},[_vm._v("Community")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/community/chat"}},[_vm._v("Community > Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/assets"}},[_vm._v("Digital Assets")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/asset/1"}},[_vm._v("Digital Asset #1")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/projects"}},[_vm._v("Projects")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/project/1"}},[_vm._v("Project #1")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/project/1/bounties"}},[_vm._v("Project #1 > Bounties")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/project/1/discussion"}},[_vm._v("Project #1 > Discussion")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/project/1/contributers"}},[_vm._v("Project #1 > Contributers")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/curators"}},[_vm._v("Curators")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/curator/1"}},[_vm._v("Curator #1")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/developer"}},[_vm._v("Developer Area")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/developer/new-product"}},[_vm._v("Developer > New Product")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#/developer/new-asset"}},[_vm._v("Developer > New Digital Asset")])])])])])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/sitemap/index.vue":
/*!******************************************!*\
  !*** ./src/ui/screens/sitemap/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ac008ff2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ac008ff2 */ "./src/ui/screens/sitemap/index.vue?vue&type=template&id=ac008ff2");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/sitemap/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css */ "./src/ui/screens/sitemap/index.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ac008ff2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ac008ff2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/sitemap/index.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/ui/screens/sitemap/index.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/sitemap/index.vue?vue&type=style&index=0&lang=css":
/*!**************************************************************************!*\
  !*** ./src/ui/screens/sitemap/index.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--7-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--7-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--7-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=style&index=0&lang=css");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_7_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/sitemap/index.vue?vue&type=template&id=ac008ff2":
/*!************************************************************************!*\
  !*** ./src/ui/screens/sitemap/index.vue?vue&type=template&id=ac008ff2 ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ac008ff2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ac008ff2 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/sitemap/index.vue?vue&type=template&id=ac008ff2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ac008ff2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ac008ff2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=20.d222e7a1483969149b68.js.map