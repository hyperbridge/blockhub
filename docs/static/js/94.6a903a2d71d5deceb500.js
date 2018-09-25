(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'games-grid-description',
    props: {
        items: {
            type: Array,
            required: true
        },
        itemInRow: {
            type: Number,
            default: 1
        },
        showRating: {
            type: Boolean,
            default: true
        },
        showTime: {
            type: Boolean,
            default: true
        },
        showPrice: {
            type: Boolean,
            default: true
        },
        hovered: {
            type: Boolean,
            default: true
        },
        itemBg: String
    },
    components: {
        'c-tags': function cTags(resolve) {
            return __webpack_require__.e(/*! AMD require */ 96).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/tags */ "./src/ui/components/tags/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-rating-stars': function cRatingStars(resolve) {
            return __webpack_require__.e(/*! AMD require */ 97).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/rating-stars */ "./src/ui/components/rating-stars/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=template&id=bbd24aac&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=template&id=bbd24aac&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"games-list",attrs:{"tag":"div","name":"games-list"}},_vm._l((_vm.items),function(item){return _c('div',{key:item.id,staticClass:"games-list__item",class:{ 'hovered' : _vm.hovered },style:({ width: 'calc( 100% / ' + _vm.itemInRow + ')', background: _vm.itemBg })},[(item.price && _vm.showPrice)?_c('div',{staticClass:"price"},[_c('strong',[_vm._v(_vm._s(item.price))]),_vm._v(" USD\n        ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"img"},[_c('a',{attrs:{"href":("/#/product/" + (item.id))}},[_c('c-img',{attrs:{"src":item.images.medium_tile}})],1)]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"text"},[_c('a',{attrs:{"href":("/#/product/" + (item.id)),"title":item.name + ' - product page'}},[_c('h4',[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.publisher))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))])]),_vm._v(" "),_c('div',{staticClass:"footer"},[(item.release_date)?_c('div',{staticClass:"time"},[_c('i',{staticClass:"fas fa-calendar-alt"}),_vm._v("\n                    "+_vm._s(item.release_date)+"\n                ")]):_vm._e(),_vm._v(" "),(item.starsCount && _vm.showRating)?_c('c-rating-stars',{staticClass:"rating_stars",attrs:{"number":item.starsCount}}):_vm._e(),_vm._v(" "),(item.moreLink)?_c('c-button',{attrs:{"status":"success","href":("/#/product/" + (item.id)),"icon_hide":""}},[_vm._v("Buy Now")]):_vm._e()],1)])])}))}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/components/games-grid/with-description.vue":
/*!***********************************************************!*\
  !*** ./src/ui/components/games-grid/with-description.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _with_description_vue_vue_type_template_id_bbd24aac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./with-description.vue?vue&type=template&id=bbd24aac&scoped=true */ "./src/ui/components/games-grid/with-description.vue?vue&type=template&id=bbd24aac&scoped=true");
/* harmony import */ var _with_description_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-description.vue?vue&type=script&lang=js */ "./src/ui/components/games-grid/with-description.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _with_description_vue_vue_type_style_index_0_id_bbd24aac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true */ "./src/ui/components/games-grid/with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _with_description_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _with_description_vue_vue_type_template_id_bbd24aac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _with_description_vue_vue_type_template_id_bbd24aac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bbd24aac",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/components/games-grid/with-description.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./src/ui/components/games-grid/with-description.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./with-description.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/components/games-grid/with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./src/ui/components/games-grid/with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_style_index_0_id_bbd24aac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=style&index=0&id=bbd24aac&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_style_index_0_id_bbd24aac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_style_index_0_id_bbd24aac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_style_index_0_id_bbd24aac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_style_index_0_id_bbd24aac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_style_index_0_id_bbd24aac_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/components/games-grid/with-description.vue?vue&type=template&id=bbd24aac&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/ui/components/games-grid/with-description.vue?vue&type=template&id=bbd24aac&scoped=true ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_template_id_bbd24aac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./with-description.vue?vue&type=template&id=bbd24aac&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/components/games-grid/with-description.vue?vue&type=template&id=bbd24aac&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_template_id_bbd24aac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_with_description_vue_vue_type_template_id_bbd24aac_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=94.6a903a2d71d5deceb500.js.map