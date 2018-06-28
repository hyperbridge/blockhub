(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-layout': function cLayout() {
            return __webpack_require__.e(/*! import() */ 44).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        }
    },
    data: function data() {
        return {};
    },

    computed: {},
    methods: {
        cleanDatabase: function cleanDatabase() {
            this.$store.dispatch('database/clean');
        },
        reloadDatabase: function reloadDatabase() {
            this.$store.dispatch('database/reload');
        }
    },
    beforeDestroy: function beforeDestroy() {}
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=template&id=c1d2946a&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=template&id=c1d2946a&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"settingsNavigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('h3',[_vm._v("Client Settings")]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"page-heading"},[_c('div',{staticClass:"page-heading__container"},[_c('h1',{staticClass:"title"},[_vm._v("Protocol Settings")]),_vm._v(" "),_c('p',{staticClass:"caption"},[_vm._v("Select protocol contracts to deploy")])]),_vm._v(" "),_c('div',{staticClass:"page-heading__container float-right d-none d-md-block"},[_c('button',{staticClass:"btn btn-outline-secondary"},[_vm._v("Deploy selected")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-secondary"},[_vm._v("Deploy all")])])]),_vm._v(" "),_c('div',{},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-dark margin-bottom-0"},[_c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col","width":"40"}},[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Name")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Address")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v("Status")]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}})])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',{staticClass:"margin-top-0 margin-bottom-0",staticStyle:{"background":"rgba(255, 255, 255, 0.01)"},attrs:{"colspan":"5"}},[_c('a',{attrs:{"href":"https://github.com/hyperbridge/token"}},[_c('strong',[_vm._v("Core")])])])]),_vm._v(" "),_c('tr',[_c('td',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/MarketplaceService.sol"}},[_vm._v("Token")]),_vm._v(" "),_c('span',{staticClass:"badge badge-success"},[_vm._v("Deployed")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","value":"0x7312c5f03dac383b0e371263851b14dc8e1e0089"}}),_vm._v(" "),_c('span',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button"}},[_vm._v("Copy")])])])]),_vm._v(" "),_c('td',[_c('strong',[_vm._v("21 June 2018")]),_c('br'),_vm._v(" "),_c('span',{staticClass:"text-muted"},[_vm._v("12:23:15 GMT")])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-light btn-sm"},[_vm._v("Deploy")])])]),_vm._v(" "),_c('tr',[_c('td',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/MarketplaceService.sol"}},[_vm._v("TokenDelegate")]),_vm._v(" "),_c('span',{staticClass:"badge badge-success"},[_vm._v("Deployed")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","value":"0x9453eD18535138Bd6037C31fd0EBCcba2b331961"}}),_vm._v(" "),_c('span',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button"}},[_vm._v("Copy")])])])]),_vm._v(" "),_c('td',[_c('strong',[_vm._v("21 June 2018")]),_c('br'),_vm._v(" "),_c('span',{staticClass:"text-muted"},[_vm._v("12:23:15 GMT")])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-light btn-sm"},[_vm._v("Deploy")])])]),_vm._v(" "),_c('tr',[_c('td',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/MarketplaceService.sol"}},[_vm._v("EternalStorage")]),_vm._v(" "),_c('span',{staticClass:"badge badge-success"},[_vm._v("Deployed")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","value":"0x23376381c5ea53fa7440e60fd94883e83f9bea83"}}),_vm._v(" "),_c('span',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button"}},[_vm._v("Copy")])])])]),_vm._v(" "),_c('td',[_c('strong',[_vm._v("21 June 2018")]),_c('br'),_vm._v(" "),_c('span',{staticClass:"text-muted"},[_vm._v("12:23:15 GMT")])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-light btn-sm"},[_vm._v("Deploy")])])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"margin-top-0 margin-bottom-0",staticStyle:{"background":"rgba(255, 255, 255, 0.01)"},attrs:{"colspan":"5"}},[_c('a',{attrs:{"href":"https://github.com/hyperbridge/marketplace-protocol"}},[_c('strong',[_vm._v("Marketplace Protocol")])])])]),_vm._v(" "),_c('tr',[_c('td',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/MarketplaceService.sol"}},[_vm._v("MarketplaceService")]),_vm._v(" "),_c('span',{staticClass:"badge badge-success"},[_vm._v("Deployed")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","value":""}}),_vm._v(" "),_c('span',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button"}},[_vm._v("Copy")])])])]),_vm._v(" "),_c('td',[_c('strong',[_vm._v("Undeployed")]),_c('br'),_vm._v(" "),_c('span',{staticClass:"text-muted"})]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-light btn-sm"},[_vm._v("Deploy")])])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"margin-top-0 margin-bottom-0",staticStyle:{"background":"rgba(255, 255, 255, 0.01)"},attrs:{"colspan":"5"}},[_c('a',{attrs:{"href":"https://github.com/hyperbridge/funding-protocol"}},[_c('strong',[_vm._v("Funding Protocol")])])])]),_vm._v(" "),_c('tr',[_c('td',[_c('label',{staticClass:"custom-control custom-checkbox"},[_c('input',{staticClass:"custom-control-input",attrs:{"type":"checkbox"}}),_vm._v(" "),_c('span',{staticClass:"custom-control-label"})])]),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingService.sol"}},[_vm._v("FundingService")]),_vm._v(" "),_c('span',{staticClass:"badge badge-success"},[_vm._v("Deployed")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","value":""}}),_vm._v(" "),_c('span',{staticClass:"input-group-append"},[_c('button',{staticClass:"btn btn-light",attrs:{"type":"button"}},[_vm._v("Copy")])])])]),_vm._v(" "),_c('td',[_c('strong',[_vm._v("Undeployed")]),_c('br'),_vm._v(" "),_c('span',{staticClass:"text-muted"})]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-light btn-sm"},[_vm._v("Deploy")])])])])])])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"page-heading"},[_c('div',{staticClass:"page-heading__container"},[_c('h1',{staticClass:"title"},[_vm._v("Database Settings")]),_vm._v(" "),_c('p',{staticClass:"caption"})]),_vm._v(" "),_c('div',{staticClass:"page-heading__container float-right d-none d-md-block"},[_c('button',{staticClass:"btn btn-outline-secondary",on:{"click":function($event){_vm.cleanDatabase()}}},[_vm._v("Clean")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-secondary",on:{"click":function($event){_vm.reloadDatabase()}}},[_vm._v("Reload initial data")])])]),_vm._v(" "),_c('div',{})])])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue":
/*!**************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c1d2946a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c1d2946a&scoped=true */ "./src/ui/screens/settings-client/index.vue?vue&type=template&id=c1d2946a&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_c1d2946a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true */ "./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c1d2946a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c1d2946a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c1d2946a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c1d2946a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=style&index=0&id=c1d2946a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c1d2946a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c1d2946a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c1d2946a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c1d2946a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_c1d2946a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/settings-client/index.vue?vue&type=template&id=c1d2946a&scoped=true":
/*!********************************************************************************************!*\
  !*** ./src/ui/screens/settings-client/index.vue?vue&type=template&id=c1d2946a&scoped=true ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c1d2946a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c1d2946a&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings-client/index.vue?vue&type=template&id=c1d2946a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c1d2946a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c1d2946a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=26.39fea4ca07eeb01ed4cd.js.map