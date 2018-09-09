(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-layout': function cLayout() {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue"));
        },
        'c-heading-bar': function cHeadingBar() {
            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/ui/components/heading-bar */ "./src/ui/components/heading-bar/index.vue"));
        },
        'c-user-card': function cUserCard() {
            return __webpack_require__.e(/*! import() */ 107).then(__webpack_require__.bind(null, /*! @/ui/components/user-card */ "./src/ui/components/user-card/index.vue"));
        }
    },
    computed: {
        identities: function identities() {
            console.log('aaa', this.$store.state.network);
            return this.$store.state.network.identities;
        }
    },
    data: function data() {
        return {
            wallets: [],
            user: {}
        };
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=template&id=e751e674&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=template&id=e751e674&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"account-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('c-heading-bar',{attrs:{"name":"My identity","showArrows":false,"showBackground":false}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 margin-bottom-40 my_identity"},[_c('c-user-card',{attrs:{"user":_vm.user,"status":"finish","icon_color":"green","icon_class":"fas fa-check"}}),_vm._v(" "),_c('div',{staticClass:"user-info"},[_c('h3',[_vm._v("Mr. Satoshi Nakamoto")]),_vm._v(" "),_c('h4',[_vm._v("Osaka, Japan")])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"verification-blk"},[_c('h3',[_vm._v("Verify Your Identity")]),_vm._v(" "),_c('div',{staticClass:"status"},[_c('i',{staticClass:"fas fa-check"}),_vm._v("\n                                Approved\n                            ")]),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                                Valid Until\n                                Jul 2021\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"verification-blk"},[_c('h3',[_vm._v("Verify Your Location")]),_vm._v(" "),_c('div',{staticClass:"status"},[_c('i',{staticClass:"fas fa-check"}),_vm._v("\n                                Approved\n                            ")]),_vm._v(" "),_c('div',{staticClass:"date"},[_vm._v("\n                                Valid Until\n                                Jul 2021\n                            ")])])])],1),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('c-heading-bar',{attrs:{"name":"Profile Picker","showArrows":false,"showBackground":false}},[_c('div',{staticClass:"additional-action margin-left-20",attrs:{"slot":"additional-action"},slot:"additional-action"},[_c('div',{staticClass:"text"},[_vm._v("\n                                Value\n                                "),_c('i',{staticClass:"fas fa-dollar-sign"})]),_vm._v(" "),_c('div',{staticClass:"arrow_container"},[_c('i',{staticClass:"fas fa-sort-up"}),_vm._v(" "),_c('i',{staticClass:"fas fa-sort-down"})])]),_vm._v(" "),_c('div',{staticClass:"additional-action margin-left-20",attrs:{"slot":"additional-action"},slot:"additional-action"},[_c('div',{staticClass:"text"},[_vm._v("\n                                Rating\n                                "),_c('i',{staticClass:"fas fa-trophy"})]),_vm._v(" "),_c('div',{staticClass:"arrow_container"},[_c('i',{staticClass:"fas fa-sort-up"}),_vm._v(" "),_c('i',{staticClass:"fas fa-sort-down"})])]),_vm._v(" "),_c('div',{staticClass:"additional-action margin-left-20",attrs:{"slot":"additional-action"},slot:"additional-action"},[_c('div',{staticClass:"form-group mb-0"},[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Search","aria-label":"Search"}}),_vm._v(" "),_c('div',{staticClass:"input-group-append"},[_c('span',{staticClass:"input-group-text"},[_c('i',{staticClass:"fas fa-search"})])])])])]),_vm._v(" "),_c('div',{staticClass:"additional-action",attrs:{"slot":"additional-action"},slot:"additional-action"},[_c('a',{staticClass:"btn btn-sm btn-info",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-user-plus"}),_vm._v("\n                                Add new\n                            ")])])])],1),_vm._v(" "),_c('div',{staticClass:"col-12 profile-picker"},[_c('div',{staticClass:"default"},[_c('div',{staticClass:"div_label"},[_c('i',{staticClass:"fas fa-check-square"}),_vm._v(" "),_c('span',[_vm._v("\n                                Default\n                            ")])]),_vm._v(" "),_c('c-user-card',{attrs:{"user":_vm.user,"status":"finish","icon_color":"green","icon_class":"fas fa-check"}})],1),_vm._v(" "),_c('div',{staticClass:"wt_action"},[_c('c-user-card',{attrs:{"user":_vm.user,"status":"finish","icon_color":"green","icon_class":"fas fa-check"}}),_vm._v(" "),_c('div',{staticClass:"action"},[_c('a',{attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-check",staticStyle:{"color":"#43C981"}}),_vm._v("\n                                Set Default\n                            ")]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-pen",staticStyle:{"color":"#FADC72"}}),_vm._v("\n                                Edit\n                            ")]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-times",staticStyle:{"color":"#F75D5D"}}),_vm._v("\n                                Delete\n                            ")])])],1)])])])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue":
/*!*****************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e751e674_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e751e674&scoped=true */ "./src/ui/screens/account-identities/index.vue?vue&type=template&id=e751e674&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_e751e674_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true */ "./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e751e674_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e751e674_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e751e674",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e751e674_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=style&index=0&id=e751e674&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e751e674_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e751e674_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e751e674_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e751e674_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e751e674_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/account-identities/index.vue?vue&type=template&id=e751e674&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/ui/screens/account-identities/index.vue?vue&type=template&id=e751e674&scoped=true ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e751e674_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=e751e674&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/account-identities/index.vue?vue&type=template&id=e751e674&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e751e674_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e751e674_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=37.2c75f225b3152701d009.js.map