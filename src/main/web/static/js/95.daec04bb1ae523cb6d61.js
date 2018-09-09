(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'c-collection-item',
    props: ['item'],
    data: function data() {
        return {
            label: ''
        };
    },

    filters: {
        count_label: function count_label(label) {
            switch (label) {
                case label = 1:
                    return 'Item';
                default:
                    return 'Items';
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=template&id=80221f6c&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=template&id=80221f6c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"collection-item",style:({ 'background-image': 'url(' + _vm.item.background + ')' })},[_c('div',{staticClass:"collection-item__items-container"},_vm._l((_vm.item.images),function(img,index){return _c('div',{key:index},[_c('img',{attrs:{"src":img}})])})),_vm._v(" "),_c('div',{staticClass:"collection-item__info"},[_c('h4',[_vm._v(_vm._s(_vm.item.title))]),_vm._v(" "),_c('h6',[_vm._v("by "+_vm._s(_vm.item.user))]),_vm._v(" "),_c('div',{staticClass:"count"},[_c('i',{staticClass:"fas fa-box"}),_vm._v("\n            "+_vm._s(_vm.item.count_number)+" "+_vm._s(_vm._f("count_label")(_vm.item.count_number))+"\n        ")])])])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/collection/item.vue":
/*!***********************************************!*\
  !*** ./src/ui/components/collection/item.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue_vue_type_template_id_80221f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue?vue&type=template&id=80221f6c&scoped=true */ "./src/ui/components/collection/item.vue?vue&type=template&id=80221f6c&scoped=true");
/* harmony import */ var _item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.vue?vue&type=script&lang=js */ "./src/ui/components/collection/item.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _item_vue_vue_type_style_index_0_id_80221f6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true */ "./src/ui/components/collection/item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _item_vue_vue_type_template_id_80221f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _item_vue_vue_type_template_id_80221f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "80221f6c",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/collection/item.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/ui/components/collection/item.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/collection/item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./src/ui/components/collection/item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_80221f6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=style&index=0&id=80221f6c&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_80221f6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_80221f6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_80221f6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_80221f6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_style_index_0_id_80221f6c_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/collection/item.vue?vue&type=template&id=80221f6c&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/ui/components/collection/item.vue?vue&type=template&id=80221f6c&scoped=true ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_80221f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./item.vue?vue&type=template&id=80221f6c&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/collection/item.vue?vue&type=template&id=80221f6c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_80221f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_item_vue_vue_type_template_id_80221f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=95.daec04bb1ae523cb6d61.js.map