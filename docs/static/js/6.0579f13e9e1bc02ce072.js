(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-sidebar-menu-link': function cSidebarMenuLink(resolve) {
            return __webpack_require__.e(/*! AMD require */ 15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/sidebar-menu/menu_item */ "./src/ui/components/sidebar-menu/menu_item.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-sidebar-menu': function cSidebarMenu(resolve) {
            return __webpack_require__.e(/*! AMD require */ 16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/sidebar-menu/index */ "./src/ui/components/sidebar-menu/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-searcher': function cSearcher(resolve) {
            return __webpack_require__.e(/*! AMD require */ 17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/searcher */ "./src/ui/components/searcher/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-range-slider': function cRangeSlider(resolve) {
            return __webpack_require__.e(/*! AMD require */ 18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/range-slider */ "./src/ui/components/range-slider/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {};
    },

    methods: {
        filter: function filter() {
            alert('Click');
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=template&id=4c822653&scoped=true":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=template&id=4c822653&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation",attrs:{"id":"navigation-default"}},[_c('c-sidebar-menu',{attrs:{"title":"STORE","sub_title":"Store Home","mClass":"margin-bottom-20"}},[_c('c-sidebar-menu-link',{attrs:{"url":"/#/store","link_text":"My Store"}}),_vm._v(" "),_c('c-sidebar-menu-link',{attrs:{"url":"/#/dashboard","link_text":"Friends Store"}})],1),_vm._v(" "),_c('c-sidebar-menu',{attrs:{"sub_title":"Browse By Genre","sub_icon":"fas fa-gamepad","mClass":"margin-bottom-20"}},[_c('c-sidebar-menu-link',{attrs:{"url":"#3","click":"filter({genre: 'action'})","link_text":"Action"}}),_vm._v(" "),_c('c-sidebar-menu-link',{attrs:{"url":"#3","click":"filter({genre: 'adventure'})","link_text":"Adventure"}}),_vm._v(" "),_c('c-sidebar-menu-link',{attrs:{"url":"#3","click":"filter({genre: 'rpg'})","link_text":"RPG"}}),_vm._v(" "),_c('c-sidebar-menu-link',{attrs:{"url":"#3","click":"filter({genre: 'racing'})","link_text":"Racing"}}),_vm._v(" "),_c('c-sidebar-menu-link',{attrs:{"url":"#3","click":"filter({genre: 'fighting'})","link_text":"Fighting"}}),_vm._v(" "),_c('c-sidebar-menu-link',{attrs:{"url":"#3","click":"filter({genre: 'vr'})","link_text":"VR"}}),_vm._v(" "),_c('c-sidebar-menu-link',{attrs:{"url":"#3","aClass":"font-weight-bold","link_text":"MORE ..."}})],1),_vm._v(" "),_c('h3',{staticClass:"text-uppercase"},[_vm._v("Search")]),_vm._v(" "),_c('div',{staticClass:"filter-blk"},[_c('c-searcher',{staticClass:"margin-bottom-20"}),_vm._v(" "),_c('c-range-slider',{attrs:{"label":"Community size","min":1,"max":10000,"sClass":"margin-bottom-20"}}),_vm._v(" "),_c('c-range-slider',{attrs:{"label":"Activity User","min":1,"max":5000,"sClass":"margin-bottom-20"}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1)],1),_vm._v(" "),_vm._m(2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group platform-chose"},[_c('label',[_vm._v("Platform Availability")]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_c('i',{staticClass:"fab fa-windows"})]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_c('i',{staticClass:"fab fa-apple"})]),_vm._v(" "),_c('a',{attrs:{"href":"#3"}},[_c('i',{staticClass:"fab fa-linux"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"action"},[_c('a',{staticClass:"btn btn-filter",attrs:{"href":"#3"}},[_c('i',{staticClass:"fas fa-filter"}),_vm._v("\n                Filter\n            ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-link",attrs:{"href":"#3"}},[_vm._v("\n                More filters ...\n            ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"help-block",attrs:{"hidden":""}},[_c('li',{staticClass:"title"},[_c('i',{staticClass:"fas fa-question-circle"}),_vm._v("\n            Help\n        ")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"/#/help/1/article/purchasing-with-cryptocurrency"}},[_vm._v("Purchasing with Cryptocurrency")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/content-availability-by-country"}},[_vm._v("Content Availability by Country")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/becoming-a-community-curator"}},[_vm._v("Becoming a Community Curator")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/18-plus-games-and-verification"}},[_vm._v("18+ Games and Verification")]),_vm._v(" "),_c('a',{attrs:{"href":"/#/help/1/article/recporting-misleading-content"}},[_vm._v("Reporting Misleading Content")])]),_vm._v(" "),_c('li',[_c('a',{staticClass:"btn btn-link",attrs:{"href":"/#/help/1"}},[_vm._v("\n                More...\n            ")])])])}]



/***/ }),

/***/ "./src/ui/components/navigation/store.vue":
/*!************************************************!*\
  !*** ./src/ui/components/navigation/store.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_vue_vue_type_template_id_4c822653_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.vue?vue&type=template&id=4c822653&scoped=true */ "./src/ui/components/navigation/store.vue?vue&type=template&id=4c822653&scoped=true");
/* harmony import */ var _store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.vue?vue&type=script&lang=js */ "./src/ui/components/navigation/store.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _store_vue_vue_type_style_index_0_id_4c822653_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true */ "./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _store_vue_vue_type_template_id_4c822653_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _store_vue_vue_type_template_id_4c822653_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c822653",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/navigation/store.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/ui/components/navigation/store.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./store.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_4c822653_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=style&index=0&id=4c822653&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_4c822653_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_4c822653_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_4c822653_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_4c822653_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_style_index_0_id_4c822653_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/navigation/store.vue?vue&type=template&id=4c822653&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/ui/components/navigation/store.vue?vue&type=template&id=4c822653&scoped=true ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_template_id_4c822653_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./store.vue?vue&type=template&id=4c822653&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/navigation/store.vue?vue&type=template&id=4c822653&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_template_id_4c822653_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_store_vue_vue_type_template_id_4c822653_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=6.0579f13e9e1bc02ce072.js.map