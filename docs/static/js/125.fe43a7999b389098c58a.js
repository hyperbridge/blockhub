(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'system-requirements',
    props: {
        requirements: {
            type: Array,
            required: true
        }
    },
    components: {
        'c-tab-universal': function cTabUniversal(resolve) {
            return __webpack_require__.e(/*! AMD require */ 129).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tab-universal */ "./src/ui/components/tab/tab-universal.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-tabs-universal': function cTabsUniversal(resolve) {
            return __webpack_require__.e(/*! AMD require */ 130).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tab/tabs-universal */ "./src/ui/components/tab/tabs-universal.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    methods: {
        platform: function platform(val) {
            return this.requirements.find(function (obj) {
                if (obj['os'] === val.toLowerCase()) return obj;else return false;
            });
        }
    },
    filters: {
        reqProp: function reqProp(val) {
            return val.replace(/[\s_]+/g, ' ').toUpperCase();
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=template&id=0a52797d&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=template&id=0a52797d&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card invert system-requirements"},[_c('div',{staticClass:"card-body"},[_vm._m(0),_vm._v(" "),_c('c-tabs-universal',{attrs:{"tab_names":['Mac', 'Win', 'Linux']}},_vm._l((['Mac', 'Win', 'Linux']),function(os,index){return _c('c-tab-universal',{attrs:{"tab_id":index}},[(_vm.platform(os))?_c('ul',{staticClass:"system-requirements__list"},_vm._l((_vm.platform(os)),function(value,property){return (value)?_c('li',{key:property,staticClass:"system-requirements__list-item"},[_c('strong',[_vm._v(_vm._s(_vm._f("reqProp")(property)))]),_vm._v(" "),(property == 'os')?_c('p',{staticClass:"system-requirements__value"},[_vm._v("\n                            "+_vm._s(_vm._f("upperFirstChar")(value))+"\n                            "),_c('i',{staticClass:"fab",class:("fa-" + (value == 'win' ? 'windows' : value == 'mac' ? 'apple' : 'linux'))})]):_c('p',{staticClass:"system-requirements__value"},[_vm._v(_vm._s(_vm._f("upperFirstChar")(value)))])]):_vm._e()})):_c('h4',[_vm._v("Currently not supported")])])}))],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"title"},[_vm._v("\n            System Requirements "),_c('i',{staticClass:"fas fa-laptop title-icon"})])}]



/***/ }),

/***/ "./src/ui/components/product-overview/system-requirements.vue":
/*!********************************************************************!*\
  !*** ./src/ui/components/product-overview/system-requirements.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_requirements_vue_vue_type_template_id_0a52797d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system-requirements.vue?vue&type=template&id=0a52797d&scoped=true */ "./src/ui/components/product-overview/system-requirements.vue?vue&type=template&id=0a52797d&scoped=true");
/* harmony import */ var _system_requirements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-requirements.vue?vue&type=script&lang=js */ "./src/ui/components/product-overview/system-requirements.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _system_requirements_vue_vue_type_style_index_0_id_0a52797d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true */ "./src/ui/components/product-overview/system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _system_requirements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_requirements_vue_vue_type_template_id_0a52797d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _system_requirements_vue_vue_type_template_id_0a52797d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a52797d",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/product-overview/system-requirements.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./src/ui/components/product-overview/system-requirements.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./system-requirements.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/product-overview/system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./src/ui/components/product-overview/system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_style_index_0_id_0a52797d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=style&index=0&id=0a52797d&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_style_index_0_id_0a52797d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_style_index_0_id_0a52797d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_style_index_0_id_0a52797d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_style_index_0_id_0a52797d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_style_index_0_id_0a52797d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/product-overview/system-requirements.vue?vue&type=template&id=0a52797d&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./src/ui/components/product-overview/system-requirements.vue?vue&type=template&id=0a52797d&scoped=true ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_template_id_0a52797d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./system-requirements.vue?vue&type=template&id=0a52797d&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/product-overview/system-requirements.vue?vue&type=template&id=0a52797d&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_template_id_0a52797d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_requirements_vue_vue_type_template_id_0a52797d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=125.fe43a7999b389098c58a.js.map